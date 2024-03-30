import moment from "moment";

export default eventHandler(async () => {
  let daily;
  let season;
  await Promise.all([
    getTodayStats().then( stats => { daily = stats; } ),
    getSeasonStats().then( stats => { season = stats; } ),
  ])
  return { daily, season };
});

async function json(url : string) {
  let raw = await fetch(url);
  return await raw.json();
}

async function getSeasonStats() {
  const tmpStats: any = {};
  let mlbResponse = await json(`https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting,pitching&playerPool=all&sportId=1&limit=5000`);
  let hitters = mlbResponse.stats.find((x: { group: { displayName: string; }; }) => x.group.displayName === 'hitting').splits;
  let pitchers = mlbResponse.stats.find((x: { group: { displayName: string; }; }) => x.group.displayName === 'pitching').splits;

  for (let hitter of hitters) {
    let player = tmpStats[hitter.player.id];
    if (!player) {
      player = { HR: 0, SB: 0, SO: 0 };
    }
    player.HR += hitter.stat.homeRuns;
    player.SB += hitter.stat.stolenBases;
    tmpStats[hitter.player.id] = player;
  }
  for (let pitcher of pitchers) {
    let player = tmpStats[pitcher.player.id];
    if (!player) {
      player = { HR: 0, SB: 0, SO: 0 };
    }
    player.SO += pitcher.stat.strikeOuts;
    tmpStats[pitcher.player.id] = player;
  }
  return tmpStats;
}

async function getTodayStats() {
  const tmpStats: any = {};
  const gamePks : any[] = await getGames();
  let promises = [];
  for ( let gamePk of gamePks ) {
    promises.push( json(`https://statsapi.mlb.com/api/v1.1/game/${gamePk}/feed/live`) );
  }
  await Promise.allSettled(promises);
  for ( let promise of promises ) {
    let gumbo = await promise;
    let boxscore = gumbo.liveData.boxscore;
    for ( let team of Object.values(boxscore.teams) ) {;
      for ( let gumboPlayer of Object.values((team as any).players) ) {
        let playerID = (gumboPlayer as any).person.id;
        let gumboStats : any = (gumboPlayer as any).stats;
        let player = tmpStats[playerID];
        if (!player) {
          player = { HR: 0, SB: 0, SO: 0 };
        }
        player.HR += gumboStats.batting.homeRuns;
        player.SB += gumboStats.batting.stolenBases;
        player.SO += gumboStats.pitching.strikeOuts;
        tmpStats[playerID] = player;
      }
    }
  }
  return tmpStats;
}

const getSchedule = (async () => {
  let scheduleResponse = await json('https://statsapi.mlb.com/api/v1/schedule?sportId=1');
  // use the current schedule if any games are in progress or if all the games are finished
  if (scheduleResponse.totalGamesInProgress > 0 || allGamesFinished(scheduleResponse)) {
    return scheduleResponse.dates[0];
  }
  // otherwise use yesterday
  let scheduleDate = moment(scheduleResponse.dates[0].date);
  scheduleDate.subtract('1', 'day');
  let yesterday = scheduleDate.format('YYYY-MM-DD')
  scheduleResponse = await json(`https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${yesterday}`);
  return scheduleResponse.dates[0];
});

const getGames = (async () => {
  let schedule = await getSchedule();
  return schedule.games.map( ( x : any ) => x.gamePk );
});

function allGamesFinished(scheduleResponse: { dates: any; }) {
  let unfinishedStatuses = [
    'I',  // In Progress
    'P',  // Preview
    'M',  // Manager Challenge
    'N',  // Umpire Review
    'O',  // Game Over (different from Final)
    'S',  // Scheduled
    'W',  // Writing (not sure about usage, excluding to be safe)
    'X',  // Other/Unknown (not sure about usage, excluding to be safe)
  ];
  for (let date of scheduleResponse.dates) {
    for (let game of date.games) {
      //console.error(`${game.gamePk} - ${game.status.codedGameState}`);
      if (unfinishedStatuses.indexOf(game.status.codedGameState) > -1) {
        //console.log(game.gamePk);
        return false;
      }
    }
  }
  return true;
}
