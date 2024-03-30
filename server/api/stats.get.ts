import moment from "moment";

export default eventHandler(async () => ({
        daily: await getStatsForLeague({ daily: true }),
        season: await getStatsForLeague({}),
    }));

async function getStatsForLeague(params: any) {
    const tmpStats : any = {};
    let url = '';
    if (params?.daily) {
      let dateStr = await getDayToUseForToday();
      url = `https://statsapi.mlb.com/api/v1/stats?startDate=${dateStr}&endDate=${dateStr}&stats=byDateRange&group=hitting,pitching&playerPool=all&sportId=1&limit=5000`;
      console.log(url);
    }
    else {
      url = `https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting,pitching&playerPool=all&sportId=1&limit=5000`;
    }
    let mlbResponseRaw = await fetch(url);
    let mlbResponse = await mlbResponseRaw.json();
    let hitters = mlbResponse.stats.find( (x: { group: { displayName: string; }; }) => x.group.displayName === 'hitting' ).splits;
    let pitchers = mlbResponse.stats.find( (x: { group: { displayName: string; }; }) => x.group.displayName === 'pitching' ).splits;
  
    for ( let hitter of hitters ) {
      let player = tmpStats[hitter.player.id];
      if (!player) {
        player = { HR: 0, SB: 0, SO: 0 };
      }
      player.HR += hitter.stat.homeRuns;
      player.SB += hitter.stat.stolenBases;
      tmpStats[hitter.player.id] = player;
    }
    for ( let pitcher of pitchers ) {
      let player = tmpStats[pitcher.player.id];
      if (!player) {
        player = { HR: 0, SB: 0, SO: 0 };
      }
      player.SO += pitcher.stat.strikeOuts;
      tmpStats[pitcher.player.id] = player;
    }
    return tmpStats;
  }


const getDayToUseForToday = ( async () => {
    const scheduleURL = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1';
    let scheduleResponseRaw = (await fetch(scheduleURL));
    let scheduleResponse = await scheduleResponseRaw.json();
    console.log(scheduleResponse);
    // use the current schedule date if any games are in progress or if all the games are finished
    if (scheduleResponse.totalGamesInProgress > 0 || allGamesFinished(scheduleResponse)) {
      return scheduleResponse.dates[0].date;
    }
    // otherwise use yesterday
    let scheduleDate = moment(scheduleResponse.dates[0].date);
    scheduleDate.subtract('1','day');
    return scheduleDate.format('YYYY-MM-DD')
  });
  
  function allGamesFinished( scheduleResponse: { dates: any; } ) {
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
  
  