<template>
  <main
    class=" text-gray-800 dark:text-white relative flex flex-col min-h-screen py-10"
  >
    <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:w-full ">
        <Leaderboard class="max-w-[36rem] mb-16 mx-auto lg:mx-0" title="Home Runs" statKey="HR" :sortedList="sortedByHR"/>
        <Leaderboard class="max-w-[36rem] mb-16 mx-auto lg:mx-0" title="Stolen Bases" statKey="SB" :sortedList="sortedBySB"/>
        <Leaderboard class="max-w-[36rem] mx-auto lg:mx-0" title="Strikeouts" statKey="SO" :sortedList="sortedBySO"/>
    </div>
  </main>
</template>

<script setup>

const picks = [
{ "manager": "Kenny", "picks": [
{ "stat": "HR", "players": [
{ "name": "Bryce Harper", "key_mlbam": "547180", "team_id": "PHI", "price": 29 },
{ "name": "Byron Buxton", "key_mlbam": "621439", "team_id": "MIN", "price": 28 },
{ "name": "Max Muncy", "key_mlbam": "571970", "team_id": "LAD", "price": 26 },
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
] }
] }

];

const getDayToUseForToday = ( async () => {
  const scheduleURL = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1';
  let scheduleResponse = (await useFetch(scheduleURL)).data.value;
  if (allGamesFinished(scheduleResponse)) {
    return new Date(scheduleResponse.dates[0].date);
  }
  let d = new Date(scheduleResponse.dates[0].date);
  d.setDate(-1)
  return d;
});

function allGamesFinished( scheduleResponse ) {
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

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

const getStatsForLeague = ( async (params) => {
  const tmpStats = {};
  let url = '';
  if (params?.daily) {
    let date = new Date(); //await getDayToUseForToday();
    let dateStr = formatDate(date);
    url = `https://statsapi.mlb.com/api/v1/stats?startDate=${dateStr}&endDate=${dateStr}&stats=byDateRange&group=hitting,pitching&playerPool=all&sportId=1&limit=5000`;
    console.log(url);
  }
  else {
    url = `https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting,pitching&playerPool=all&sportId=1&limit=5000`;
  }
  let mlbResponse = await useFetch(url);
  let hitters = mlbResponse.data.value.stats.find( x => x.group.displayName === 'hitting' ).splits;
  let pitchers = mlbResponse.data.value.stats.find( x => x.group.displayName === 'pitching' ).splits;

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
});

const statsHash = await getStatsForLeague();
const dailyStatsHash = await getStatsForLeague({ daily: true });

for ( let entry of picks ) {
  for ( let pick of entry.picks ) {
    for ( let player of pick.players ) {
      player.season = player.season || {};
      player.today = player.today || {};
      player.season.HR = statsHash[player.key_mlbam]?.HR;
      player.season.SB = statsHash[player.key_mlbam]?.SB;
      player.season.SO = statsHash[player.key_mlbam]?.SO;
      player.today.HR = dailyStatsHash[player.key_mlbam]?.HR;
      player.today.SB = dailyStatsHash[player.key_mlbam]?.SB;
      player.today.SO = dailyStatsHash[player.key_mlbam]?.SO;
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
