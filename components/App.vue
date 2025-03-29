<template>
    <main
      class=" text-gray-800 dark:text-white relative flex flex-col min-h-screen py-10"
    >
      <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:w-full ">
          <Leaderboard class="max-w-[36rem] mb-16 mx-auto lg:mx-0" title="Home Runs" statKey="HR" :sortedList="sortedByHR" :isYesterday="statsRef?.isYesterday" />
          <Leaderboard class="max-w-[36rem] mb-16 mx-auto lg:mx-0" title="Stolen Bases" statKey="SB" :sortedList="sortedBySB" :isYesterday="statsRef?.isYesterday" />
          <Leaderboard class="max-w-[36rem] mx-auto lg:mx-0" title="Strikeouts" statKey="SO" :sortedList="sortedBySO" :isYesterday="statsRef?.isYesterday" />
      </div>
    </main>
  </template>
  
  <script setup>
  
  const picksDB = {
    '2025': [
    { "manager": "Kenny", "picks": [
  { "stat": "HR", "players": [
  { "name": "Vinnie Pasquantino", "key_mlbam": "686469", "team_id": "KCR", "price": 23 },
{ "name": "Byron Buxton", "key_mlbam": "621439", "team_id": "MIN", "price": 22 },
{ "name": "Rhys Hoskins", "key_mlbam": "656555", "team_id": "MIL", "price": 22 },
{ "name": "Pete Crow-Armstrong", "key_mlbam": "691718", "team_id": "CHC", "price": 13 },
{ "name": "Mitch Garver", "key_mlbam": "641598", "team_id": "SEA", "price": 12 },
{ "name": "Ty France", "key_mlbam": "664034", "team_id": "MIN", "price": 11 },
{ "name": "Seth Brown", "key_mlbam": "664913", "team_id": "ATH", "price": 10 },
{ "name": "Edouard Julien", "key_mlbam": "666397", "team_id": "MIN", "price": 9 },
{ "name": "Jason Heyward", "key_mlbam": "518792", "team_id": "SDP", "price": 8 },
{ "name": "Kristian Campbell", "key_mlbam": "692225", "team_id": "BOS", "price": 8 },
{ "name": "Victor Robles", "key_mlbam": "645302", "team_id": "SEA", "price": 8 },
{ "name": "Ben Rice", "key_mlbam": "700250", "team_id": "NYY", "price": 7 },
{ "name": "Rowdy Tellez", "key_mlbam": "642133", "team_id": "SEA", "price": 7 },
{ "name": "Curtis Mead", "key_mlbam": "678554", "team_id": "TBR", "price": 6 },
{ "name": "Zac Veen", "key_mlbam": "691728", "team_id": "COL", "price": 5 },
{ "name": "Juan Brito", "key_mlbam": "682877", "team_id": "CLE", "price": 5 },
{ "name": "Cam Smith", "key_mlbam": "701358", "team_id": "HOU", "price": 4 },
{ "name": "Max Muncy (ATH)", "key_mlbam": "571970", "team_id": "ATH", "price": 2 },
{ "name": "Keston Hiura", "key_mlbam": "669374", "team_id": "COL", "price": 2 },
{ "name": "Trayce Thompson", "key_mlbam": "572204", "team_id": "BOS", "price": 2 },
{ "name": "Chase DeLauter", "key_mlbam": "800050", "team_id": "CLE", "price": 2 },
{ "name": "Emmanuel Rodriguez", "key_mlbam": "691181", "team_id": "MIN", "price": 2 },
{ "name": "DaShawn Keirsey Jr.", "key_mlbam": "680577", "team_id": "MIN", "price": 2 },
{ "name": "Niko Kavadas", "key_mlbam": "694359", "team_id": "LAA", "price": 1 },
{ "name": "David Villar", "key_mlbam": "681584", "team_id": "SFG", "price": 1 },
{ "name": "Carson Williams", "key_mlbam": "700246", "team_id": "TBR", "price": 1 },
{ "name": "Mickey Gasper", "key_mlbam": "681508", "team_id": "MIN", "price": 1 },
{ "name": "Cavan Biggio", "key_mlbam": "624415", "team_id": "KCR", "price": 1 },
{ "name": "Travis Bazzana", "key_mlbam": "683953", "team_id": "CLE", "price": 1 },
{ "name": "Austin Martin", "key_mlbam": "668885", "team_id": "MIN", "price": 1 },
  ]},
  { "stat": "SB", "players": [
  { "name": "Jacob Young", "key_mlbam": "696285", "team_id": "WSN", "price": 24 },
{ "name": "Pete Crow-Armstrong", "key_mlbam": "691718", "team_id": "CHC", "price": 23 },
{ "name": "Victor Scott II", "key_mlbam": "687363", "team_id": "STL", "price": 21 },
{ "name": "Tyler Fitzgerald", "key_mlbam": "666149", "team_id": "SFG", "price": 16 },
{ "name": "Jorge Mateo", "key_mlbam": "622761", "team_id": "BAL", "price": 11 },
{ "name": "Zac Veen", "key_mlbam": "691728", "team_id": "COL", "price": 8 },
{ "name": "Brandon Lockridge", "key_mlbam": "663604", "team_id": "SDP", "price": 3 },
{ "name": "Ji Hwan Bae", "key_mlbam": "678225", "team_id": "PIT", "price": 3 },
{ "name": "DaShawn Keirsey Jr.", "key_mlbam": "680577", "team_id": "MIN", "price": 3 },
{ "name": "Isaac Collins", "key_mlbam": "686555", "team_id": "MIL", "price": 1 },
{ "name": "Max Muncy (ATH)", "key_mlbam": "571970", "team_id": "ATH", "price": 1 },
{ "name": "Enrique Bradfield Jr.", "key_mlbam": "690961", "team_id": "BAL", "price": 1 },
{ "name": "José Azocar", "key_mlbam": "640492", "team_id": "NYM", "price": 1 },
{ "name": "Forrest Wall", "key_mlbam": "657088", "team_id": "SDP", "price": 1 },
{ "name": "Tyler Tolbert", "key_mlbam": "686475", "team_id": "KCR", "price": 1 },
{ "name": "Cooper Bowman", "key_mlbam": "688682", "team_id": "ATH", "price": 1 },
{ "name": "Taylor Young", "key_mlbam": "805891", "team_id": "LAD", "price": 1 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Brandon Pfaadt", "key_mlbam": "694297", "team_id": "ARI", "price": 133 },
{ "name": "Matthew Liberatore", "key_mlbam": "669461", "team_id": "STL", "price": 77 },
{ "name": "Carmen Mlodzinski", "key_mlbam": "669387", "team_id": "PIT", "price": 65 },
{ "name": "Connor Gillispie", "key_mlbam": "687362", "team_id": "MIA", "price": 62 },
{ "name": "Ben Brown", "key_mlbam": "676962", "team_id": "CHC", "price": 56 },
{ "name": "Carson Spiers", "key_mlbam": "686730", "team_id": "CIN", "price": 48 },
{ "name": "Carlos Carrasco", "key_mlbam": "471911", "team_id": "NYY", "price": 47 },
{ "name": "Tyler Alexander", "key_mlbam": "622066", "team_id": "MIL", "price": 46 },
{ "name": "Valente Bellozo", "key_mlbam": "678368", "team_id": "MIA", "price": 37 },
{ "name": "Ryan Borucki", "key_mlbam": "621366", "team_id": "PIT", "price": 36 },
{ "name": "Kevin Kelly", "key_mlbam": "687330", "team_id": "TBR", "price": 36 },
{ "name": "Bradley Blalock", "key_mlbam": "687134", "team_id": "COL", "price": 31 },
{ "name": "Luis García", "key_mlbam": "472610", "team_id": "LAD", "price": 30 },
{ "name": "Logan Allen", "key_mlbam": "663531", "team_id": "CLE", "price": 30 },
{ "name": "Sean Newcomb", "key_mlbam": "656794", "team_id": "BOS", "price": 21 },
{ "name": "Gerson Garabito", "key_mlbam": "642520", "team_id": "TEX", "price": 17 },
{ "name": "Andrew Morris", "key_mlbam": "702193", "team_id": "MIN", "price": 11 },
{ "name": "Randy Dobnak", "key_mlbam": "677976", "team_id": "MIN", "price": 7 },
{ "name": "Ryan Jensen", "key_mlbam": "686754", "team_id": "MIN", "price": 1 },
{ "name": "Ian Gibaut", "key_mlbam": "664139", "team_id": "CIN", "price": 1 },
{ "name": "Jacob Barnes", "key_mlbam": "606930", "team_id": "TOR", "price": 1 },
{ "name": "Ray Gaither", "key_mlbam": "668877", "team_id": "HOU", "price": 1 },
{ "name": "Bryan Mata", "key_mlbam": "667356", "team_id": "BOS", "price": 1 },
{ "name": "Austin Cox", "key_mlbam": "680735", "team_id": "KCR", "price": 1 },
{ "name": "Caleb Boushley", "key_mlbam": "676961", "team_id": "TEX", "price": 1 },
{ "name": "Hunter Dobbins", "key_mlbam": "690928", "team_id": "BOS", "price": 1 },
{ "name": "Austin Kitchen", "key_mlbam": "685116", "team_id": "SEA", "price": 1 },
{ "name": "Cole Wilcox", "key_mlbam": "677961", "team_id": "TBR", "price": 1 },
  ]}
]},
{ "manager": "Jason", "picks": [
  { "stat": "HR", "players": [
    { "name": "Vladimir Guerrero Jr.", "key_mlbam": "665489", "team_id": "33", "price": 33 },
    { "name": "Jackson Chourio", "key_mlbam": "694192", "team_id": "27", "price": 27 },
    { "name": "Corey Seager", "key_mlbam": "608369", "team_id": "26", "price": 26 },
    { "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "25", "price": 25 },
    { "name": "Max Muncy (LAD)", "key_mlbam": "571970", "team_id": "LAD", "price": 20 },
    { "name": "Joc Pederson", "key_mlbam": "592626", "team_id": "19", "price": 19 },
    { "name": "Tommy Edman", "key_mlbam": "669242", "team_id": "12", "price": 12 },
    { "name": "Andy Pages", "key_mlbam": "681624", "team_id": "8", "price": 8 },
    { "name": "Justin Turner", "key_mlbam": "457759", "team_id": "7", "price": 7 },
    { "name": "Enrique Hernández", "key_mlbam": "571771", "team_id": "7", "price": 7 },
    { "name": "Will Brennan", "key_mlbam": "686823", "team_id": "5", "price": 5 },
    { "name": "James Outman", "key_mlbam": "681546", "team_id": "5", "price": 5 },
    { "name": "Miguel Rojas", "key_mlbam": "500743", "team_id": "2", "price": 2 },
    { "name": "Nick Martini", "key_mlbam": "605361", "team_id": "2", "price": 2 },
    { "name": "Jac Caglianone", "key_mlbam": "695506", "team_id": "2", "price": 2 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Bobby Witt Jr.", "key_mlbam": "677951", "team_id": "33", "price": 33 },
    { "name": "José Ramírez", "key_mlbam": "608070", "team_id": "29", "price": 29 },
    { "name": "Christian Yelich", "key_mlbam": "592885", "team_id": "17", "price": 17 },
    { "name": "Hyeseong Kim", "key_mlbam": "808975", "team_id": "10", "price": 10 },
    { "name": "Joey Ortiz", "key_mlbam": "687401", "team_id": "10", "price": 10 },
    { "name": "Jung Hoo Lee", "key_mlbam": "808982", "team_id": "8", "price": 8 },
    { "name": "Ketel Marte", "key_mlbam": "606466", "team_id": "7", "price": 7 },
    { "name": "Gavin Lux", "key_mlbam": "666158", "team_id": "6", "price": 6 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Tarik Skubal", "key_mlbam": "669373", "team_id": "228", "price": 228 },
    { "name": "Austin Gomber", "key_mlbam": "596295", "team_id": "102", "price": 102 },
    { "name": "Dustin May", "key_mlbam": "669160", "team_id": "88", "price": 88 },
    { "name": "Griffin Jax", "key_mlbam": "643377", "team_id": "82", "price": 82 },
    { "name": "Tanner Scott", "key_mlbam": "656945", "team_id": "82", "price": 82 },
    { "name": "Devin Williams", "key_mlbam": "642207", "team_id": "80", "price": 80 },
    { "name": "Yennier Cano", "key_mlbam": "666974", "team_id": "62", "price": 62 },
    { "name": "Emerson Hancock", "key_mlbam": "676106", "team_id": "48", "price": 48 },
    { "name": "Brusdar Graterol", "key_mlbam": "660813", "team_id": "25", "price": 25 },
    { "name": "Kyle Hurt", "key_mlbam": "669165", "team_id": "1", "price": 1 },
    { "name": "Ricky Tiedemann", "key_mlbam": "694357", "team_id": "1", "price": 1 },
    { "name": "Yency Almonte", "key_mlbam": "622075", "team_id": "1", "price": 1 },
    ]}
    ]},
  { "manager": "Paul", "picks": [
  { "stat": "HR", "players": [
    { "name": "Pete Alonso", "key_mlbam": "624413", "team_id": "NYM", "price": 35 },
    { "name": "Austin Riley", "key_mlbam": "663586", "team_id": "ATL", "price": 30 },
    { "name": "Marcell Ozuna", "key_mlbam": "542303", "team_id": "ATL", "price": 30 },
    { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
    { "name": "Bobby Witt Jr.", "key_mlbam": "677951", "team_id": "KCR", "price": 29 },
    { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 24 },
    { "name": "Isaac Paredes", "key_mlbam": "670623", "team_id": "HOU", "price": 23 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Corbin Carroll", "key_mlbam": "682998", "team_id": "ARI", "price": 40 },
    { "name": "Julio Rodríguez", "key_mlbam": "677594", "team_id": "SEA", "price": 26 },
    { "name": "Fernando Tatis Jr.", "key_mlbam": "665487", "team_id": "SDP", "price": 16 },
    { "name": "Jasson Domínguez", "key_mlbam": "691176", "team_id": "NYY", "price": 16 },
    { "name": "James Wood", "key_mlbam": "695578", "team_id": "WSN", "price": 16 },
    { "name": "Oswaldo Cabrera", "key_mlbam": "665828", "team_id": "NYY", "price": 6 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Aaron Nola", "key_mlbam": "605400", "team_id": "PHI", "price": 185 },
    { "name": "Brady Singer", "key_mlbam": "663903", "team_id": "CIN", "price": 161 },
    { "name": "Luis Severino", "key_mlbam": "622663", "team_id": "ATH", "price": 159 },
    { "name": "Gavin Williams", "key_mlbam": "668909", "team_id": "CLE", "price": 148 },
    { "name": "Grayson Rodriguez", "key_mlbam": "680570", "team_id": "BAL", "price": 147 },
  ]}
]},
{ "manager": "Sean M", "picks": [
  { "stat": "HR", "players": [
    { "name": "Juan Soto", "key_mlbam": "665742", "team_id": "NYM", "price": 32 },
    { "name": "José Ramírez", "key_mlbam": "608070", "team_id": "CLE", "price": 28 },
    { "name": "Max Muncy (LAD)", "key_mlbam": "571970", "team_id": "LAD", "price": 20 },
    { "name": "Jo Adell", "key_mlbam": "666176", "team_id": "LAA", "price": 18 },
    { "name": "Adley Rutschman", "key_mlbam": "668939", "team_id": "BAL", "price": 18 },
    { "name": "Wyatt Langford", "key_mlbam": "694671", "team_id": "TEX", "price": 18 },
    { "name": "Dylan Crews", "key_mlbam": "686611", "team_id": "WSN", "price": 15 },
    { "name": "Christian Yelich", "key_mlbam": "592885", "team_id": "MIL", "price": 14 },
    { "name": "Ryan O'Hearn", "key_mlbam": "656811", "team_id": "BAL", "price": 13 },
    { "name": "Sean Murphy", "key_mlbam": "669221", "team_id": "ATL", "price": 12 },
    { "name": "Roman Anthony", "key_mlbam": "701350", "team_id": "BOS", "price": 7 },
    { "name": "Alex Verdugo", "key_mlbam": "657077", "team_id": "ATL", "price": 4 },
    { "name": "Dominic Smith", "key_mlbam": "642086", "team_id": "NYY", "price": 1 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Shohei Ohtani", "key_mlbam": "660271", "team_id": "LAD", "price": 33 },
    { "name": "Pete Crow-Armstrong", "key_mlbam": "691718", "team_id": "CHC", "price": 23 },
    { "name": "Francisco Lindor", "key_mlbam": "596019", "team_id": "NYM", "price": 23 },
    { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 17 },
    { "name": "Wyatt Langford", "key_mlbam": "694671", "team_id": "TEX", "price": 15 },
    { "name": "Lars Nootbaar", "key_mlbam": "663457", "team_id": "STL", "price": 9 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Spencer Schwellenbach", "key_mlbam": "680885", "team_id": "ATL", "price": 166 },
    { "name": "Bryan Woo", "key_mlbam": "693433", "team_id": "SEA", "price": 135 },
    { "name": "Walker Buehler", "key_mlbam": "621111", "team_id": "BOS", "price": 130 },
    { "name": "Triston McKenzie", "key_mlbam": "663474", "team_id": "CLE", "price": 117 },
    { "name": "Bailey Falter", "key_mlbam": "663559", "team_id": "PIT", "price": 103 },
    { "name": "Andrew Painter", "key_mlbam": "691725", "team_id": "PHI", "price": 66 },
    { "name": "José Buttó", "key_mlbam": "676130", "team_id": "NYM", "price": 63 },
    { "name": "Mason Adams", "key_mlbam": "690279", "team_id": "CHW", "price": 19 },
  ]}
]},
{ "manager": "Ryan L", "picks": [
  { "stat": "HR", "players": [
    { "name": "Kyle Schwarber", "key_mlbam": "656941", "team_id": "PHI", "price": 37 },
    { "name": "Brent Rooker", "key_mlbam": "667670", "team_id": "ATH", "price": 34 },
    { "name": "Fernando Tatis Jr.", "key_mlbam": "665487", "team_id": "SDP", "price": 33 },
    { "name": "Juan Soto", "key_mlbam": "665742", "team_id": "NYM", "price": 32 },
    { "name": "Julio Rodríguez", "key_mlbam": "677594", "team_id": "SEA", "price": 28 },
    { "name": "Luis Robert Jr.", "key_mlbam": "673357", "team_id": "CHW", "price": 25 },
    { "name": "Ceddanne Rafaela", "key_mlbam": "678882", "team_id": "BOS", "price": 11 },
  ]},
  { "stat": "SB", "players": [
{ "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "CIN", "price": 51 },
{ "name": "Bobby Witt Jr.", "key_mlbam": "677951", "team_id": "KCR", "price": 33 },
{ "name": "Pete Crow-Armstrong", "key_mlbam": "691718", "team_id": "CHC", "price": 23 },
{ "name": "Jackson Merrill", "key_mlbam": "701538", "team_id": "SDP", "price": 13 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Paul Skenes", "key_mlbam": "694973", "team_id": "PIT", "price": 241 },
    { "name": "Tarik Skubal", "key_mlbam": "669373", "team_id": "DET", "price": 228 },
    { "name": "Garrett Crochet", "key_mlbam": "676979", "team_id": "BOS", "price": 220 },
    { "name": "Landen Roupp", "key_mlbam": "694738", "team_id": "SFG", "price": 111 },
  ]}
]},
{ "manager": "Cade", "picks": [
  { "stat": "HR", "players": [
    { "name": "Austin Riley", "key_mlbam": "663586", "team_id": "ATL", "price": 30 },
    { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 24 },
    { "name": "Nick Castellanos", "key_mlbam": "592206", "team_id": "PHI", "price": 22 },
    { "name": "Max Muncy (LAD)", "key_mlbam": "571970", "team_id": "LAD", "price": 20 },
    { "name": "Seiya Suzuki", "key_mlbam": "673548", "team_id": "CHC", "price": 19 },
    { "name": "Adley Rutschman", "key_mlbam": "668939", "team_id": "BAL", "price": 18 },
    { "name": "Austin Wells", "key_mlbam": "669224", "team_id": "NYY", "price": 17 },
    { "name": "Michael Busch", "key_mlbam": "683737", "team_id": "CHC", "price": 17 },
    { "name": "Christian Yelich", "key_mlbam": "592885", "team_id": "MIL", "price": 14 },
    { "name": "Jake Cronenworth", "key_mlbam": "630105", "team_id": "SDP", "price": 13 },
    { "name": "Eloy Jiménez", "key_mlbam": "650391", "team_id": "TBR", "price": 6 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Jazz Chisholm Jr.", "key_mlbam": "665862", "team_id": "NYY", "price": 31 },
    { "name": "Luis Robert Jr.", "key_mlbam": "673357", "team_id": "CHW", "price": 23 },
    { "name": "Francisco Lindor", "key_mlbam": "596019", "team_id": "NYM", "price": 23 },
    { "name": "Kyle Tucker", "key_mlbam": "663656", "team_id": "CHC", "price": 18 },
    { "name": "Tommy Edman", "key_mlbam": "669242", "team_id": "LAD", "price": 17 },
    { "name": "Luis Arraez", "key_mlbam": "650333", "team_id": "SDP", "price": 8 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Zack Wheeler", "key_mlbam": "554430", "team_id": "PHI", "price": 212 },
    { "name": "Logan Gilbert", "key_mlbam": "669302", "team_id": "SEA", "price": 208 },
    { "name": "Jack Flaherty", "key_mlbam": "656427", "team_id": "DET", "price": 178 },
    { "name": "Zac Gallen", "key_mlbam": "668678", "team_id": "ARI", "price": 172 },
    { "name": "Bryce Elder", "key_mlbam": "693821", "team_id": "ATL", "price": 30 },
  ]}
]},
{ "manager": "Andrew", "picks": [
  { "stat": "HR", "players": [
    { "name": "Pete Alonso", "key_mlbam": "624413", "team_id": "NYM", "price": 35 },
    { "name": "Cody Bellinger", "key_mlbam": "641355", "team_id": "NYY", "price": 23 },
    { "name": "Eugenio Suárez", "key_mlbam": "553993", "team_id": "ARI", "price": 21 },
    { "name": "James Wood", "key_mlbam": "695578", "team_id": "WSN", "price": 18 },
    { "name": "Alec Bohm", "key_mlbam": "664761", "team_id": "PHI", "price": 15 },
    { "name": "Max Kepler", "key_mlbam": "596146", "team_id": "PHI", "price": 14 },
    { "name": "Austin Hays", "key_mlbam": "669720", "team_id": "CIN", "price": 13 },
    { "name": "Paul DeJong", "key_mlbam": "657557", "team_id": "WSN", "price": 13 },
    { "name": "Joey Bart", "key_mlbam": "663698", "team_id": "PIT", "price": 10 },
    { "name": "Jesse Winker", "key_mlbam": "608385", "team_id": "NYM", "price": 10 },
    { "name": "David Fry", "key_mlbam": "681807", "team_id": "CLE", "price": 6 },
    { "name": "Jacob Stallings", "key_mlbam": "607732", "team_id": "COL", "price": 6 },
    { "name": "Drake Baldwin", "key_mlbam": "686948", "team_id": "ATL", "price": 4 },
    { "name": "Mark Canha", "key_mlbam": "592192", "team_id": "MIL", "price": 4 },
    { "name": "Kody Clemens", "key_mlbam": "665019", "team_id": "PHI", "price": 3 },
    { "name": "Zach Dezenzo", "key_mlbam": "701305", "team_id": "HOU", "price": 2 },
    { "name": "Adael Amador", "key_mlbam": "691182", "team_id": "COL", "price": 2 },
    { "name": "Travis Jankowski", "key_mlbam": "608671", "team_id": "CHW", "price": 1 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Julio Rodríguez", "key_mlbam": "677594", "team_id": "SEA", "price": 26 },
    { "name": "Luis Rengifo", "key_mlbam": "650859", "team_id": "LAA", "price": 18 },
    { "name": "Dairon Blanco", "key_mlbam": "680118", "team_id": "KCR", "price": 17 },
    { "name": "Jose Siri", "key_mlbam": "642350", "team_id": "NYM", "price": 12 },
    { "name": "Jo Adell", "key_mlbam": "666176", "team_id": "LAA", "price": 12 },
    { "name": "Hyeseong Kim", "key_mlbam": "808975", "team_id": "LAD", "price": 10 },
    { "name": "Lars Nootbaar", "key_mlbam": "663457", "team_id": "STL", "price": 9 },
    { "name": "Zach McKinstry", "key_mlbam": "656716", "team_id": "DET", "price": 8 },
    { "name": "Mickey Moniak", "key_mlbam": "666160", "team_id": "LAA", "price": 6 },
    { "name": "Brett Baty", "key_mlbam": "683146", "team_id": "NYM", "price": 1 },
    { "name": "José Azocar", "key_mlbam": "640492", "team_id": "NYM", "price": 1 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Cristopher Sánchez", "key_mlbam": "650911", "team_id": "PHI", "price": 149 },
    { "name": "Jake Irvin", "key_mlbam": "663623", "team_id": "WSN", "price": 141 },
    { "name": "AJ Smith-Shawver", "key_mlbam": "700363", "team_id": "ATL", "price": 126 },
    { "name": "Michael Soroka", "key_mlbam": "647336", "team_id": "WSN", "price": 109 },
    { "name": "Bailey Falter", "key_mlbam": "663559", "team_id": "PIT", "price": 103 },
    { "name": "José Alvarado", "key_mlbam": "621237", "team_id": "PHI", "price": 71 },
    { "name": "Andrew Painter", "key_mlbam": "691725", "team_id": "PHI", "price": 66 },
    { "name": "Tyler Phillips", "key_mlbam": "663969", "team_id": "PHI", "price": 23 },
    { "name": "Jake Eder", "key_mlbam": "671109", "team_id": "CHW", "price": 11 },
  ]}
]},
{ "manager": "Jimmy", "picks": [
  { "stat": "HR", "players": [
    { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
    { "name": "José Ramírez", "key_mlbam": "608070", "team_id": "CLE", "price": 28 },
    { "name": "Kyle Tucker", "key_mlbam": "663656", "team_id": "CHC", "price": 27 },
    { "name": "Cody Bellinger", "key_mlbam": "641355", "team_id": "NYY", "price": 23 },
    { "name": "Max Muncy (LAD)", "key_mlbam": "571970", "team_id": "LAD", "price": 20 },
    { "name": "Jhonkensy Noel", "key_mlbam": "678877", "team_id": "CLE", "price": 14 },
    { "name": "Austin Hays", "key_mlbam": "669720", "team_id": "CIN", "price": 13 },
    { "name": "Andrew Benintendi", "key_mlbam": "643217", "team_id": "CHW", "price": 12 },
    { "name": "Lenyn Sosa", "key_mlbam": "672820", "team_id": "CHW", "price": 11 },
    { "name": "Gio Urshela", "key_mlbam": "570482", "team_id": "ATH", "price": 7 },
    { "name": "Jacob Young", "key_mlbam": "696285", "team_id": "WSN", "price": 5 },
    { "name": "Blaze Alexander", "key_mlbam": "677942", "team_id": "ARI", "price": 3 },
    { "name": "Jake Bauers", "key_mlbam": "641343", "team_id": "MIL", "price": 2 },
    { "name": "Marcelo Mayer", "key_mlbam": "691785", "team_id": "BOS", "price": 1 },
    { "name": "Greg Jones", "key_mlbam": "675659", "team_id": "COL", "price": 1 },
    { "name": "Austin Martin", "key_mlbam": "668885", "team_id": "MIN", "price": 1 },
    { "name": "Tyler Heineman", "key_mlbam": "623168", "team_id": "TOR", "price": 1 },
    { "name": "Luis Guillorme", "key_mlbam": "641645", "team_id": "HOU", "price": 1 },
    { "name": "Yuli Gurriel", "key_mlbam": "493329", "team_id": "SDP", "price": 1 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
    { "name": "José Ramírez", "key_mlbam": "608070", "team_id": "CLE", "price": 28 },
    { "name": "Kyle Tucker", "key_mlbam": "663656", "team_id": "CHC", "price": 27 },
    { "name": "Cody Bellinger", "key_mlbam": "641355", "team_id": "NYY", "price": 23 },
    { "name": "Max Muncy (LAD)", "key_mlbam": "571970", "team_id": "LAD", "price": 20 },
    { "name": "Jhonkensy Noel", "key_mlbam": "678877", "team_id": "CLE", "price": 14 },
    { "name": "Austin Hays", "key_mlbam": "669720", "team_id": "CIN", "price": 13 },
    { "name": "Andrew Benintendi", "key_mlbam": "643217", "team_id": "CHW", "price": 12 },
    { "name": "Lenyn Sosa", "key_mlbam": "672820", "team_id": "CHW", "price": 11 },
    { "name": "Gio Urshela", "key_mlbam": "570482", "team_id": "ATH", "price": 7 },
    { "name": "Jacob Young", "key_mlbam": "696285", "team_id": "WSN", "price": 5 },
    { "name": "Blaze Alexander", "key_mlbam": "677942", "team_id": "ARI", "price": 3 },
    { "name": "Jake Bauers", "key_mlbam": "641343", "team_id": "MIL", "price": 2 },
    { "name": "Marcelo Mayer", "key_mlbam": "691785", "team_id": "BOS", "price": 1 },
    { "name": "Greg Jones", "key_mlbam": "675659", "team_id": "COL", "price": 1 },
    { "name": "Austin Martin", "key_mlbam": "668885", "team_id": "MIN", "price": 1 },
    { "name": "Tyler Heineman", "key_mlbam": "623168", "team_id": "TOR", "price": 1 },
    { "name": "Luis Guillorme", "key_mlbam": "641645", "team_id": "HOU", "price": 1 },
    { "name": "Yuli Gurriel", "key_mlbam": "493329", "team_id": "SDP", "price": 1 },
    { "name": "CJ Abrams", "key_mlbam": "682928", "team_id": "WSN", "price": 35 },
    { "name": "Jackson Chourio", "key_mlbam": "694192", "team_id": "MIL", "price": 25 },
    { "name": "Lawrence Butler", "key_mlbam": "671732", "team_id": "ATH", "price": 18 },
    { "name": "Jonathan India", "key_mlbam": "663697", "team_id": "KCR", "price": 12 },
    { "name": "Chandler Simpson", "key_mlbam": "802415", "team_id": "TBR", "price": 11 },
    { "name": "Tommy Pham", "key_mlbam": "502054", "team_id": "PIT", "price": 9 },
    { "name": "Jonatan Clase", "key_mlbam": "682729", "team_id": "TOR", "price": 4 },
    { "name": "José Fermín", "key_mlbam": "665877", "team_id": "STL", "price": 3 },
    { "name": "Jake Burger", "key_mlbam": "669394", "team_id": "TEX", "price": 2 },
    { "name": "Daz Cameron", "key_mlbam": "663662", "team_id": "BAL", "price": 1 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Logan Gilbert", "key_mlbam": "669302", "team_id": "SEA", "price": 208 },
    { "name": "Aaron Nola", "key_mlbam": "605400", "team_id": "PHI", "price": 185 },
    { "name": "Framber Valdez", "key_mlbam": "664285", "team_id": "HOU", "price": 177 },
    { "name": "Devin Williams", "key_mlbam": "642207", "team_id": "NYY", "price": 80 },
    { "name": "Alex Vesia", "key_mlbam": "681911", "team_id": "LAD", "price": 71 },
    { "name": "Connor Thomas", "key_mlbam": "671162", "team_id": "MIL", "price": 39 },
    { "name": "Eiberson Castellano", "key_mlbam": "682769", "team_id": "MIN", "price": 35 },
    { "name": "Zach Franklin", "key_mlbam": "702103", "team_id": "CHW", "price": 1 },
    { "name": "Phil Bickford", "key_mlbam": "641360", "team_id": "CHC", "price": 1 },
    { "name": "Cade Horton", "key_mlbam": "690990", "team_id": "CHC", "price": 1 },
    { "name": "Anderson Pilar", "key_mlbam": "666768", "team_id": "MIA", "price": 1 },
  ]}
]},
{ "manager": "Christian", "picks": [
  { "stat": "HR", "players": [
    { "name": "Pete Alonso", "key_mlbam": "624413", "team_id": "NYM", "price": 35 },
    { "name": "Austin Riley", "key_mlbam": "663586", "team_id": "ATL", "price": 30 },
    { "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "CIN", "price": 25 },
    { "name": "Ryan McMahon", "key_mlbam": "641857", "team_id": "COL", "price": 21 },
    { "name": "Ozzie Albies", "key_mlbam": "645277", "team_id": "ATL", "price": 20 },
    { "name": "Christopher Morel", "key_mlbam": "666624", "team_id": "TBR", "price": 19 },
    { "name": "Anthony Volpe", "key_mlbam": "683011", "team_id": "NYY", "price": 17 },
    { "name": "Jeremy Peña", "key_mlbam": "665161", "team_id": "HOU", "price": 16 },
    { "name": "Jordan Walker", "key_mlbam": "691023", "team_id": "STL", "price": 15 },
    { "name": "Vidal Bruján", "key_mlbam": "660644", "team_id": "CHC", "price": 2 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Brenton Doyle", "key_mlbam": "686668", "team_id": "COL", "price": 26 },
    { "name": "Jackson Chourio", "key_mlbam": "694192", "team_id": "MIL", "price": 25 },
    { "name": "Pete Crow-Armstrong", "key_mlbam": "691718", "team_id": "CHC", "price": 23 },
    { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 17 },
    { "name": "Michael Harris II", "key_mlbam": "671739", "team_id": "ATL", "price": 17 },
    { "name": "Jonathan India", "key_mlbam": "663697", "team_id": "KCR", "price": 12 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Sandy Alcantara", "key_mlbam": "645261", "team_id": "MIA", "price": 170 },
    { "name": "José Berríos", "key_mlbam": "621244", "team_id": "TOR", "price": 166 },
    { "name": "Luis Severino", "key_mlbam": "622663", "team_id": "ATH", "price": 159 },
    { "name": "Merrill Kelly", "key_mlbam": "518876", "team_id": "ARI", "price": 141 },
    { "name": "Shane Baz", "key_mlbam": "669358", "team_id": "TBR", "price": 140 },
    { "name": "Kyle Bradish", "key_mlbam": "680694", "team_id": "BAL", "price": 24 },
  ]}
]},
{ "manager": "Charlie", "picks": [
  { "stat": "HR", "players": [
    { "name": "Vladimir Guerrero Jr.", "key_mlbam": "665489", "team_id": "TOR", "price": 33 },
    { "name": "Juan Soto", "key_mlbam": "665742", "team_id": "NYM", "price": 32 },
    { "name": "Bobby Witt Jr.", "key_mlbam": "677951", "team_id": "KCR", "price": 29 },
    { "name": "Jackson Chourio", "key_mlbam": "694192", "team_id": "MIL", "price": 27 },
    { "name": "Corey Seager", "key_mlbam": "608369", "team_id": "TEX", "price": 26 },
    { "name": "Jazz Chisholm Jr.", "key_mlbam": "665862", "team_id": "NYY", "price": 26 },
    { "name": "Royce Lewis", "key_mlbam": "668904", "team_id": "MIN", "price": 24 },
    { "name": "Chase Meidroth", "key_mlbam": "805367", "team_id": "CHW", "price": 3 },
  ]},
  { "stat": "SB", "players": [
    { "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "CIN", "price": 51 },
    { "name": "CJ Abrams", "key_mlbam": "682928", "team_id": "WSN", "price": 35 },
    { "name": "Brice Turang", "key_mlbam": "668930", "team_id": "MIL", "price": 34 },
  ]},
  { "stat": "SO", "players": [
    { "name": "Paul Skenes", "key_mlbam": "694973", "team_id": "PIT", "price": 241 },
    { "name": "Tarik Skubal", "key_mlbam": "669373", "team_id": "DET", "price": 228 },
    { "name": "Pablo López", "key_mlbam": "641154", "team_id": "MIN", "price": 202 },
  ]}
]},
    ],
    '2024': [
  { "manager": "Kenny", "picks": [
  { "stat": "HR", "players": [
  { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
  { "name": "Byron Buxton", "key_mlbam": "621439", "team_id": "MIN", "price": 28 },
  { "name": "Max Muncy (LAD)", "key_mlbam": "571970", "team_id": "LAD", "price": 26 },
  { "name": "Giancarlo Stanton", "key_mlbam": "519317", "team_id": "NYY", "price": 26 },
  { "name": "Vinnie Pasquantino", "key_mlbam": "686469", "team_id": "KCR", "price": 25 },
  { "name": "Nolan Jones", "key_mlbam": "666134", "team_id": "COL", "price": 23 },
  { "name": "Matt Wallner", "key_mlbam": "670242", "team_id": "MIN", "price": 15 },
  { "name": "Ryan Jeffers", "key_mlbam": "680777", "team_id": "MIN", "price": 13 },
  { "name": "Yasmani Grandal", "key_mlbam": "518735", "team_id": "PIT", "price": 6 },
  { "name": "Miguel Sanó", "key_mlbam": "593934", "team_id": "LAA", "price": 4 },
  { "name": "Jake Cave", "key_mlbam": "595909", "team_id": "PHI", "price": 1 },
  { "name": "Ben Rortvedt", "key_mlbam": "666163", "team_id": "NYY", "price": 1 },
  { "name": "Blake Perkins", "key_mlbam": "663368", "team_id": "MIL", "price": 1 },
  { "name": "Blaze Alexander", "key_mlbam": "677942", "team_id": "ARI", "price": 1 },
  { "name": "Miguel Vargas", "key_mlbam": "678246", "team_id": "LAD", "price": 1 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Anthony Volpe", "key_mlbam": "683011", "team_id": "NYY", "price": 21 },
  { "name": "Willi Castro", "key_mlbam": "650489", "team_id": "MIN", "price": 18 },
  { "name": "José Caballero", "key_mlbam": "676609", "team_id": "TBR", "price": 16 },
  { "name": "Jackson Chourio", "key_mlbam": "694192", "team_id": "MIL", "price": 15 },
  { "name": "Wyatt Langford", "key_mlbam": "694671", "team_id": "TEX", "price": 12 },
  { "name": "Byron Buxton", "key_mlbam": "621439", "team_id": "MIN", "price": 10 },
  { "name": "Alek Thomas", "key_mlbam": "677950", "team_id": "ARI", "price": 9 },
  { "name": "Victor Scott II", "key_mlbam": "687363", "team_id": "STL", "price": 8 },
  { "name": "Dairon Blanco", "key_mlbam": "680118", "team_id": "KCR", "price": 5 },
  { "name": "Jake McCarthy", "key_mlbam": "664983", "team_id": "ARI", "price": 3 },
  { "name": "Austin Martin", "key_mlbam": "668885", "team_id": "MIN", "price": 1 },
  { "name": "Blake Perkins", "key_mlbam": "663368", "team_id": "MIL", "price": 1 },
  { "name": "Brooks Lee", "key_mlbam": "686797", "team_id": "MIN", "price": 1 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Michael King", "key_mlbam": "650633", "team_id": "SDP", "price": 153 },
  { "name": "Garrett Crochet", "key_mlbam": "676979", "team_id": "CHW", "price": 130 },
  { "name": "Patrick Corbin", "key_mlbam": "571578", "team_id": "WSN", "price": 119 },
  { "name": "Erick Fedde", "key_mlbam": "607200", "team_id": "CHW", "price": 109 },
  { "name": "Max Meyer", "key_mlbam": "676974", "team_id": "MIA", "price": 89 },
  { "name": "Luis Gil", "key_mlbam": "661563", "team_id": "NYY", "price": 64 },
  { "name": "Alec Marsh", "key_mlbam": "679525", "team_id": "KCR", "price": 46 },
  { "name": "Austin Adams", "key_mlbam": "613534", "team_id": "NYM", "price": 46 },
  { "name": "Kody Funderburk", "key_mlbam": "681892", "team_id": "MIN", "price": 37 },
  { "name": "T.J. McFarland", "key_mlbam": "519008", "team_id": "LAD", "price": 7 }
  ] }
  ] },
  { "manager": "Danno", "picks": [
  { "stat": "HR", "players": [
  { "name": "Pete Alonso", "key_mlbam": "624413", "team_id": "NYM", "price": 42 },
  { "name": "Mookie Betts", "key_mlbam": "605141", "team_id": "LAD", "price": 33 },
  { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
  { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 26 },
  { "name": "Wyatt Langford", "key_mlbam": "694671", "team_id": "TEX", "price": 24 },
  { "name": "Nick Castellanos", "key_mlbam": "592206", "team_id": "PHI", "price": 22 },
  { "name": "Will Smith", "key_mlbam": "669257", "team_id": "LAD", "price": 22 },
  { "name": "Mike Moustakas", "key_mlbam": "519058", "team_id": "CHW", "price": 2 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "CJ Abrams", "key_mlbam": "682928", "team_id": "WSN", "price": 35 },
  { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 22 },
  { "name": "Michael Harris II", "key_mlbam": "671739", "team_id": "ATL", "price": 22 },
  { "name": "Marcus Semien", "key_mlbam": "543760", "team_id": "TEX", "price": 16 },
  { "name": "Mookie Betts", "key_mlbam": "605141", "team_id": "LAD", "price": 15 },
  { "name": "Dansby Swanson", "key_mlbam": "621020", "team_id": "CHC", "price": 10 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Pablo López", "key_mlbam": "641154", "team_id": "MIN", "price": 214 },
  { "name": "Zack Wheeler", "key_mlbam": "554430", "team_id": "PHI", "price": 199 },
  { "name": "Michael King", "key_mlbam": "650633", "team_id": "SDP", "price": 153 },
  { "name": "Taj Bradley", "key_mlbam": "671737", "team_id": "TBR", "price": 142 },
  { "name": "Josh Hader", "key_mlbam": "623352", "team_id": "HOU", "price": 89 },
  { "name": "Félix Bautista", "key_mlbam": "642585", "team_id": "BAL", "price": 1 },
  { "name": "Raidel Martinez", "key_mlbam": "673510", "team_id": "", "price": 1 },
  { "name": "Jordan Holloway", "key_mlbam": "656548", "team_id": "SEA", "price": 1 }
  ] }
  ] },
  { "manager": "Larry", "picks": [
  { "stat": "HR", "players": [
  { "name": "Kyle Schwarber", "key_mlbam": "656941", "team_id": "PHI", "price": 42 },
  { "name": "Shohei Ohtani", "key_mlbam": "660271", "team_id": "LAD", "price": 39 },
  { "name": "Austin Riley", "key_mlbam": "663586", "team_id": "ATL", "price": 35 },
  { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
  { "name": "Paul Goldschmidt", "key_mlbam": "502671", "team_id": "STL", "price": 28 },
  { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 26 },
  { "name": "Trey Mancini", "key_mlbam": "641820", "team_id": "MIA", "price": 1 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Corbin Carroll", "key_mlbam": "682998", "team_id": "ARI", "price": 42 },
  { "name": "Trea Turner", "key_mlbam": "607208", "team_id": "PHI", "price": 25 },
  { "name": "Francisco Lindor", "key_mlbam": "596019", "team_id": "NYM", "price": 21 },
  { "name": "Willi Castro", "key_mlbam": "650489", "team_id": "MIN", "price": 18 },
  { "name": "Tim Anderson", "key_mlbam": "641313", "team_id": "MIA", "price": 14 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Pablo López", "key_mlbam": "641154", "team_id": "MIN", "price": 214 },
  { "name": "Logan Webb", "key_mlbam": "657277", "team_id": "SFG", "price": 181 },
  { "name": "Max Fried", "key_mlbam": "608331", "team_id": "ATL", "price": 176 },
  { "name": "Nestor Cortes", "key_mlbam": "641482", "team_id": "NYY", "price": 147 },
  { "name": "Jhoan Duran", "key_mlbam": "661395", "team_id": "MIN", "price": 76 },
  { "name": "Dominic Hamel", "key_mlbam": "687589", "team_id": "NYM", "price": 6 }
  ] }
  ] },
  { "manager": "Charlie", "picks": [
  { "stat": "HR", "players": [
  { "name": "Julio Rodríguez", "key_mlbam": "677594", "team_id": "SEA", "price": 33 },
  { "name": "Royce Lewis", "key_mlbam": "668904", "team_id": "MIN", "price": 28 },
  { "name": "Marcus Semien", "key_mlbam": "543760", "team_id": "TEX", "price": 28 },
  { "name": "Jazz Chisholm Jr.", "key_mlbam": "665862", "team_id": "MIA", "price": 27 },
  { "name": "Brent Rooker", "key_mlbam": "667670", "team_id": "OAK", "price": 26 },
  { "name": "Ryan Mountcastle", "key_mlbam": "663624", "team_id": "BAL", "price": 24 },
  { "name": "Chas McCormick", "key_mlbam": "676801", "team_id": "HOU", "price": 18 },
  { "name": "Edouard Julien", "key_mlbam": "666397", "team_id": "MIN", "price": 16 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "CIN", "price": 34 },
  { "name": "Nico Hoerner", "key_mlbam": "663538", "team_id": "CHC", "price": 29 },
  { "name": "Ha-Seong Kim", "key_mlbam": "673490", "team_id": "SDP", "price": 24 },
  { "name": "Jackson Chourio", "key_mlbam": "694192", "team_id": "MIL", "price": 15 },
  { "name": "Mookie Betts", "key_mlbam": "605141", "team_id": "LAD", "price": 15 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Pablo López", "key_mlbam": "641154", "team_id": "MIN", "price": 214 },
  { "name": "Jesús Luzardo", "key_mlbam": "666200", "team_id": "MIA", "price": 205 },
  { "name": "Tarik Skubal", "key_mlbam": "669373", "team_id": "DET", "price": 198 },
  { "name": "Charlie Morton", "key_mlbam": "450203", "team_id": "ATL", "price": 168 }
  ] }
  ] },
  { "manager": "Jason", "picks": [
  { "stat": "HR", "players": [
  { "name": "Shohei Ohtani", "key_mlbam": "660271", "team_id": "LAD", "price": 39 },
  { "name": "Juan Soto", "key_mlbam": "665742", "team_id": "NYY", "price": 38 },
  { "name": "Mookie Betts", "key_mlbam": "605141", "team_id": "LAD", "price": 33 },
  { "name": "Royce Lewis", "key_mlbam": "668904", "team_id": "MIN", "price": 28 },
  { "name": "Nolan Jones", "key_mlbam": "666134", "team_id": "COL", "price": 23 },
  { "name": "Evan Carter", "key_mlbam": "694497", "team_id": "TEX", "price": 16 },
  { "name": "Andrew McCutchen", "key_mlbam": "457705", "team_id": "PIT", "price": 14 },
  { "name": "Jackson Holliday", "key_mlbam": "702616", "team_id": "BAL", "price": 7 },
  { "name": "Mike Moustakas", "key_mlbam": "519058", "team_id": "CHW", "price": 2 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Esteury Ruiz", "key_mlbam": "665923", "team_id": "OAK", "price": 47 },
  { "name": "Julio Rodríguez", "key_mlbam": "677594", "team_id": "SEA", "price": 32 },
  { "name": "Cody Bellinger", "key_mlbam": "641355", "team_id": "CHC", "price": 18 },
  { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 13 },
  { "name": "Gunnar Henderson", "key_mlbam": "683002", "team_id": "BAL", "price": 10 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Tarik Skubal", "key_mlbam": "669373", "team_id": "DET", "price": 198 },
  { "name": "Tyler Glasnow", "key_mlbam": "607192", "team_id": "LAD", "price": 187 },
  { "name": "Max Fried", "key_mlbam": "608331", "team_id": "ATL", "price": 176 },
  { "name": "Ryan Pepiot", "key_mlbam": "686752", "team_id": "TBR", "price": 134 },
  { "name": "Austin Gomber", "key_mlbam": "596295", "team_id": "COL", "price": 105 }
  ] }
  ] },
  { "manager": "Jimmy", "picks": [
  { "stat": "HR", "players": [
  { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
  { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 26 },
  { "name": "Nolan Jones", "key_mlbam": "666134", "team_id": "COL", "price": 23 },
  { "name": "Adley Rutschman", "key_mlbam": "668939", "team_id": "BAL", "price": 20 },
  { "name": "Jonathan India", "key_mlbam": "663697", "team_id": "CIN", "price": 18 },
  { "name": "Ezequiel Tovar", "key_mlbam": "678662", "team_id": "COL", "price": 16 },
  { "name": "Brendan Donovan", "key_mlbam": "680977", "team_id": "STL", "price": 13 },
  { "name": "Brice Turang", "key_mlbam": "668930", "team_id": "MIL", "price": 8 },
  { "name": "Maikel Garcia", "key_mlbam": "672580", "team_id": "KCR", "price": 7 },
  { "name": "Omar Narváez", "key_mlbam": "553882", "team_id": "NYM", "price": 5 },
  { "name": "Harold Ramírez", "key_mlbam": "623912", "team_id": "TBR", "price": 5 },
  { "name": "Trevor Larnach", "key_mlbam": "663616", "team_id": "MIN", "price": 5 },
  { "name": "Matt Thaiss", "key_mlbam": "642136", "team_id": "LAA", "price": 5 },
  { "name": "Coby Mayo", "key_mlbam": "691723", "team_id": "BAL", "price": 4 },
  { "name": "Jasson Domínguez", "key_mlbam": "691176", "team_id": "NYY", "price": 4 },
  { "name": "James Wood", "key_mlbam": "695578", "team_id": "WSN", "price": 3 },
  { "name": "Nicky Lopez", "key_mlbam": "670032", "team_id": "CHW", "price": 2 },
  { "name": "Corey Julks", "key_mlbam": "667452", "team_id": "HOU", "price": 1 },
  { "name": "Jake McCarthy", "key_mlbam": "664983", "team_id": "ARI", "price": 1 },
  { "name": "Zach DeLoach", "key_mlbam": "676113", "team_id": "CHW", "price": 1 },
  { "name": "Ronny Mauricio", "key_mlbam": "677595", "team_id": "NYM", "price": 1 },
  { "name": "Jordan Diaz", "key_mlbam": "672478", "team_id": "OAK", "price": 1 },
  { "name": "Trey Cabbage", "key_mlbam": "663550", "team_id": "HOU", "price": 1 },
  { "name": "Miles Mastrobuoni", "key_mlbam": "670156", "team_id": "CHC", "price": 1 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Brenton Doyle", "key_mlbam": "686668", "team_id": "COL", "price": 17 },
  { "name": "Evan Carter", "key_mlbam": "694497", "team_id": "TEX", "price": 15 },
  { "name": "TJ Friedl", "key_mlbam": "670770", "team_id": "CIN", "price": 15 },
  { "name": "Will Benson", "key_mlbam": "666181", "team_id": "CIN", "price": 14 },
  { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 13 },
  { "name": "Jorge Mateo", "key_mlbam": "622761", "team_id": "BAL", "price": 12 },
  { "name": "Bo Bichette", "key_mlbam": "666182", "team_id": "TOR", "price": 12 },
  { "name": "Travis Jankowski", "key_mlbam": "608671", "team_id": "TEX", "price": 6 },
  { "name": "Jasson Domínguez", "key_mlbam": "691176", "team_id": "NYY", "price": 4 },
  { "name": "Tyler Gentry", "key_mlbam": "694355", "team_id": "KCR", "price": 1 },
  { "name": "Tim Locastro", "key_mlbam": "641796", "team_id": "SDP", "price": 1 }
  ] },
  { "stat": "SO", "players": [
  { "name": "DL Hall", "key_mlbam": "669084", "team_id": "MIL", "price": 151 },
  { "name": "Michael Soroka", "key_mlbam": "647336", "team_id": "CHW", "price": 122 },
  { "name": "Aaron Bummer", "key_mlbam": "607481", "team_id": "ATL", "price": 72 },
  { "name": "Jordan Leasure", "key_mlbam": "673929", "team_id": "CHW", "price": 64 },
  { "name": "Jackson Rutledge", "key_mlbam": "671131", "team_id": "WSN", "price": 63 },
  { "name": "Xzavion Curry", "key_mlbam": "675540", "team_id": "CLE", "price": 58 },
  { "name": "Tejay Antone", "key_mlbam": "622088", "team_id": "CIN", "price": 48 },
  { "name": "Jacob Waguespack", "key_mlbam": "621097", "team_id": "TBR", "price": 48 },
  { "name": "Drew Rasmussen", "key_mlbam": "656876", "team_id": "TBR", "price": 48 },
  { "name": "Owen White", "key_mlbam": "669391", "team_id": "TEX", "price": 44 },
  { "name": "Amir Garrett", "key_mlbam": "607237", "team_id": "SFG", "price": 43 },
  { "name": "Jacob deGrom", "key_mlbam": "594798", "team_id": "TEX", "price": 39 }
  ] }
  ] },
  { "manager": "Sean M", "picks": [
  { "stat": "HR", "players": [
  { "name": "Austin Riley", "key_mlbam": "663586", "team_id": "ATL", "price": 35 },
  { "name": "Paul Goldschmidt", "key_mlbam": "502671", "team_id": "STL", "price": 28 },
  { "name": "Trea Turner", "key_mlbam": "607208", "team_id": "PHI", "price": 22 },
  { "name": "Brandon Nimmo", "key_mlbam": "607043", "team_id": "NYM", "price": 20 },
  { "name": "Adley Rutschman", "key_mlbam": "668939", "team_id": "BAL", "price": 20 },
  { "name": "Gavin Lux", "key_mlbam": "666158", "team_id": "LAD", "price": 10 },
  { "name": "Pete Alonso", "key_mlbam": "624413", "team_id": "NYM", "price": 42 },
  { "name": "Christian Yelich", "key_mlbam": "592885", "team_id": "MIL", "price": 20 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Corbin Carroll", "key_mlbam": "682998", "team_id": "ARI", "price": 42 },
  { "name": "Trea Turner", "key_mlbam": "607208", "team_id": "PHI", "price": 25 },
  { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 22 },
  { "name": "Francisco Lindor", "key_mlbam": "596019", "team_id": "NYM", "price": 21 },
  { "name": "Kevin Kiermaier", "key_mlbam": "595281", "team_id": "TOR", "price": 10 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Marcus Stroman", "key_mlbam": "573186", "team_id": "NYY", "price": 144 },
  { "name": "James Paxton", "key_mlbam": "572020", "team_id": "LAD", "price": 138 },
  { "name": "A.J. Puk", "key_mlbam": "640462", "team_id": "MIA", "price": 118 },
  { "name": "John Means", "key_mlbam": "607644", "team_id": "BAL", "price": 110 },
  { "name": "Tylor Megill", "key_mlbam": "656731", "team_id": "NYM", "price": 88 },
  { "name": "Alexis Díaz", "key_mlbam": "664747", "team_id": "CIN", "price": 81 },
  { "name": "Trevor Williams", "key_mlbam": "592866", "team_id": "WSN", "price": 67 },
  { "name": "José Buttó", "key_mlbam": "676130", "team_id": "NYM", "price": 23 }
  ] }
  ] },
  { "manager": "Andrew", "picks": [
  { "stat": "HR", "players": [
  { "name": "Juan Soto", "key_mlbam": "665742", "team_id": "NYY", "price": 38 },
  { "name": "Freddie Freeman", "key_mlbam": "518692", "team_id": "LAD", "price": 26 },
  { "name": "Seiya Suzuki", "key_mlbam": "673548", "team_id": "CHC", "price": 23 },
  { "name": "Eugenio Suárez", "key_mlbam": "553993", "team_id": "ARI", "price": 21 },
  { "name": "Joc Pederson", "key_mlbam": "592626", "team_id": "ARI", "price": 19 },
  { "name": "Alec Bohm", "key_mlbam": "664761", "team_id": "PHI", "price": 18 },
  { "name": "Ezequiel Tovar", "key_mlbam": "678662", "team_id": "COL", "price": 16 },
  { "name": "Keibert Ruiz", "key_mlbam": "660688", "team_id": "WSN", "price": 16 },
  { "name": "Mark Canha", "key_mlbam": "592192", "team_id": "DET", "price": 13 },
  { "name": "Jesse Winker", "key_mlbam": "608385", "team_id": "WSN", "price": 9 },
  { "name": "Thomas Saggese", "key_mlbam": "695336", "team_id": "STL", "price": 1 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Ha-Seong Kim", "key_mlbam": "673490", "team_id": "SDP", "price": 24 },
  { "name": "Michael Harris II", "key_mlbam": "671739", "team_id": "ATL", "price": 22 },
  { "name": "Cody Bellinger", "key_mlbam": "641355", "team_id": "CHC", "price": 18 },
  { "name": "Jose Siri", "key_mlbam": "642350", "team_id": "TBR", "price": 17 },
  { "name": "Parker Meadows", "key_mlbam": "678009", "team_id": "DET", "price": 13 },
  { "name": "Bryan Reynolds", "key_mlbam": "668804", "team_id": "PIT", "price": 9 },
  { "name": "Jung Hoo Lee", "key_mlbam": "808982", "team_id": "SFG", "price": 9 },
  { "name": "Michael A. Taylor", "key_mlbam": "572191", "team_id": "PIT", "price": 8 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Shota Imanaga", "key_mlbam": "684007", "team_id": "CHC", "price": 181 },
  { "name": "Ranger Suárez", "key_mlbam": "624133", "team_id": "PHI", "price": 134 },
  { "name": "Cristopher Sánchez", "key_mlbam": "650911", "team_id": "PHI", "price": 111 },
  { "name": "Erick Fedde", "key_mlbam": "607200", "team_id": "CHW", "price": 109 },
  { "name": "Jhony Brito", "key_mlbam": "666745", "team_id": "SDP", "price": 103 },
  { "name": "José Soriano", "key_mlbam": "667755", "team_id": "LAA", "price": 81 },
  { "name": "Josh Winckowski", "key_mlbam": "670174", "team_id": "BOS", "price": 74 },
  { "name": "T.J. McFarland", "key_mlbam": "519008", "team_id": "LAD", "price": 7 }
  ] }
  ] },
  { "manager": "Ryan", "picks": [
  { "stat": "HR", "players": [
  { "name": "Yordan Alvarez", "key_mlbam": "670541", "team_id": "HOU", "price": 39 },
  { "name": "Juan Soto", "key_mlbam": "665742", "team_id": "NYY", "price": 38 },
  { "name": "Luis Robert Jr.", "key_mlbam": "673357", "team_id": "CHW", "price": 33 },
  { "name": "Eloy Jiménez", "key_mlbam": "650391", "team_id": "CHW", "price": 29 },
  { "name": "Christopher Morel", "key_mlbam": "666624", "team_id": "CHC", "price": 25 },
  { "name": "Jonathan India", "key_mlbam": "663697", "team_id": "CIN", "price": 18 },
  { "name": "Gavin Lux", "key_mlbam": "666158", "team_id": "LAD", "price": 10 },
  { "name": "Joey Votto", "key_mlbam": "458015", "team_id": "TOR", "price": 8 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Ronald Acuña Jr.", "key_mlbam": "660670", "team_id": "ATL", "price": 56 },
  { "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "CIN", "price": 34 },
  { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 22 },
  { "name": "Jeff McNeil", "key_mlbam": "643446", "team_id": "NYM", "price": 5 },
  { "name": "Mike Trout", "key_mlbam": "545361", "team_id": "LAA", "price": 3 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Corbin Burnes", "key_mlbam": "669203", "team_id": "BAL", "price": 208 },
  { "name": "Dylan Cease", "key_mlbam": "656302", "team_id": "SDP", "price": 203 },
  { "name": "Cole Ragans", "key_mlbam": "666142", "team_id": "KCR", "price": 185 },
  { "name": "Garrett Crochet", "key_mlbam": "676979", "team_id": "CHW", "price": 130 },
  { "name": "Ryan Pressly", "key_mlbam": "519151", "team_id": "HOU", "price": 74 }
  ] }
  ] },
  { "manager": "Zach", "picks": [
  { "stat": "HR", "players": [
  { "name": "Oneil Cruz", "key_mlbam": "665833", "team_id": "PIT", "price": 26 },
  { "name": "Giancarlo Stanton", "key_mlbam": "519317", "team_id": "NYY", "price": 26 },
  { "name": "Tyler O'Neill", "key_mlbam": "641933", "team_id": "BOS", "price": 22 },
  { "name": "Christian Yelich", "key_mlbam": "592885", "team_id": "MIL", "price": 20 },
  { "name": "Jordan Walker", "key_mlbam": "691023", "team_id": "STL", "price": 18 },
  { "name": "Alec Bohm", "key_mlbam": "664761", "team_id": "PHI", "price": 18 },
  { "name": "Gary Sánchez", "key_mlbam": "596142", "team_id": "MIL", "price": 16 },
  { "name": "Jake Cronenworth", "key_mlbam": "630105", "team_id": "SDP", "price": 15 },
  { "name": "DJ LeMahieu", "key_mlbam": "518934", "team_id": "NYY", "price": 15 },
  { "name": "Alejandro Kirk", "key_mlbam": "672386", "team_id": "TOR", "price": 11 },
  { "name": "Joey Votto", "key_mlbam": "458015", "team_id": "TOR", "price": 8 },
  { "name": "Alec Burleson", "key_mlbam": "676475", "team_id": "STL", "price": 4 },
  { "name": "Juan Yepez", "key_mlbam": "660766", "team_id": "WSN", "price": 1 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Corbin Carroll", "key_mlbam": "682998", "team_id": "ARI", "price": 42 },
  { "name": "Elly De La Cruz", "key_mlbam": "682829", "team_id": "CIN", "price": 34 },
  { "name": "Jon Berti", "key_mlbam": "542932", "team_id": "MIA", "price": 20 },
  { "name": "Ozzie Albies", "key_mlbam": "645277", "team_id": "ATL", "price": 13 },
  { "name": "Victor Scott II", "key_mlbam": "687363", "team_id": "STL", "price": 8 },
  { "name": "Edmundo Sosa", "key_mlbam": "624641", "team_id": "PHI", "price": 3 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Tyler Glasnow", "key_mlbam": "607192", "team_id": "LAD", "price": 187 },
  { "name": "Shane Bieber", "key_mlbam": "669456", "team_id": "CLE", "price": 182 },
  { "name": "Nestor Cortes", "key_mlbam": "641482", "team_id": "NYY", "price": 147 },
  { "name": "Zack Thompson", "key_mlbam": "668868", "team_id": "STL", "price": 74 },
  { "name": "Giovanny Gallegos", "key_mlbam": "606149", "team_id": "STL", "price": 71 },
  { "name": "Drew Smyly", "key_mlbam": "592767", "team_id": "CHC", "price": 70 },
  { "name": "Génesis Cabrera", "key_mlbam": "650893", "team_id": "TOR", "price": 63 },
  { "name": "Sem Robberse", "key_mlbam": "691828", "team_id": "STL", "price": 6 }
  ] },
  ] },
  { "manager": "Paul", "picks": [
  { "stat": "HR", "players": [
  { "name": "Mike Trout", "key_mlbam": "545361", "team_id": "LAA", "price": 36 },
  { "name": "Vladimir Guerrero Jr.", "key_mlbam": "665489", "team_id": "TOR", "price": 35 },
  { "name": "Luis Robert Jr.", "key_mlbam": "673357", "team_id": "CHW", "price": 33 },
  { "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
  { "name": "Jose Altuve", "key_mlbam": "514888", "team_id": "HOU", "price": 26 },
  { "name": "William Contreras", "key_mlbam": "661388", "team_id": "MIL", "price": 24 },
  { "name": "Hunter Renfroe", "key_mlbam": "592669", "team_id": "KCR", "price": 17 }
  ] },
  {
  "stat": "SB", "players": [
  { "name": "Julio Rodríguez", "key_mlbam": "677594", "team_id": "SEA", "price": 32 },
  { "name": "Nico Hoerner", "key_mlbam": "663538", "team_id": "CHC", "price": 29 },
  { "name": "Trevor Story", "key_mlbam": "596115", "team_id": "BOS", "price": 23 },
  { "name": "Luis Robert Jr.", "key_mlbam": "673357", "team_id": "CHW", "price": 19 },
  { "name": "Brice Turang", "key_mlbam": "668930", "team_id": "MIL", "price": 17 }
  ] },
  { "stat": "SO", "players": [
  { "name": "Luis Castillo", "key_mlbam": "622491", "team_id": "SEA", "price": 205 },
  { "name": "Tarik Skubal", "key_mlbam": "669373", "team_id": "DET", "price": 198 },
  { "name": "Hunter Greene", "key_mlbam": "668881", "team_id": "CIN", "price": 196 },
  { "name": "Taijuan Walker", "key_mlbam": "592836", "team_id": "PHI", "price": 135 },
  { "name": "Steven Wilson", "key_mlbam": "621051", "team_id": "CHW", "price": 66 }
  ] }
  ] }
  
  ],
  };

  const route = useRoute();
  const year = route.params.year || (new Date()).getFullYear();
  const picks = picksDB[year] || [];
  
  const statsRef = (await useFetch(`/api/stats?year=${year}`)).data;
  const stats = statsRef.value;
  
  for ( let entry of picks ) {
    for ( let pick of entry.picks ) {
      for ( let player of pick.players ) {
        player.season = player.season || {};
        player.today = player.today || {};
        player.season.HR = stats.season[player.key_mlbam]?.HR;
        player.season.SB = stats.season[player.key_mlbam]?.SB;
        player.season.SO = stats.season[player.key_mlbam]?.SO;
        player.today.HR = stats.daily[player.key_mlbam]?.HR;
        player.today.SB = stats.daily[player.key_mlbam]?.SB;
        player.today.SO = stats.daily[player.key_mlbam]?.SO;
      }
      pick.players = pick.players.sort( (a,b) => {
        if ( a.season[pick.stat] === undefined && b.season[pick.stat] === undefined) {
          return 0;
        }
        if ( a.season[pick.stat] === undefined ) {
          return 999;
        }
        if ( b.season[pick.stat] === undefined ) {
          return -999;
        }
        return b.season[pick.stat] - a.season[pick.stat];
      });
      pick.total = pick.players.reduce( (a,c) => a + ( c.season[pick.stat] || 0), 0);
      pick.todayTotal = pick.players.reduce( (a,c) => a + ( c.today[pick.stat] || 0), 0);
    }
  }
  const sortedByHR = [...picks].sort( (a,b) => b.picks.find( x => x.stat === 'HR').total - a.picks.find( x => x.stat === 'HR').total );
  const sortedBySB = [...picks].sort( (a,b) => b.picks.find( x => x.stat === 'SB').total - a.picks.find( x => x.stat === 'SB').total );
  const sortedBySO = [...picks].sort( (a,b) => b.picks.find( x => x.stat === 'SO').total - a.picks.find( x => x.stat === 'SO').total );
  </script>
  