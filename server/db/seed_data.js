use quiz_questions;
db.dropDatabase();
db.countries.insertMany([
  {
    "Question": "Which country on the map is France?",
    "Options": [[{v: "India", f: "?"}, {v:0, f:""}], [{v: "Ukraine", f: "?"}, {v:1, f:""}], [{v: "France", f: "?"}, {v:2, f:""}], [{v: "Algeria", f: "?"}, {v:3, f:""}]],
    "Answer": "France"
  },
  {
    "Question": "Which country on the map is Brazil?",
    "Options": [[{v: "Mexico", f: "?"}, {v:0, f:""}], [{v: "Canada", f: "?"}, {v:1, f:""}], [{v: "Argentina", f: "?"}, {v:2, f:""}], [{v: "Brazil", f: "?"}, {v:3, f:""}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country on the map is China?",
    "Options": [[{v: "India", f: "?"}, {v:0, f:""}], [{v: "Australia", f: "?"}, {v:1, f:""}], [{v: "Mongolia", f: "?"}, {v:2, f:""}], [{v: "China", f: "?"}, {v:3, f:""}]],
    "Answer": "China"
  },
  {
    "Question": "Which country on the map is Canada?",
    "Options": [[{v: "Canada", f: "?"}, {v:0, f:""}], [{v: "United States", f: "?"}, {v:1, f:""}], [{v: "Mexico", f: "?"}, {v:2, f:""}], [{v: "Greenland", f: "?"}, {v:3, f:""}]],
    "Answer": "Canada"
  },
  {
    "Question": "Which country on the map is Italy?",
    "Options": [[{v: "Saudi Arabia", f: "?"}, {v:0, f:""}], [{v: "Ukraine", f: "?"}, {v:1, f:""}], [{v: "Italy", f: "?"}, {v:2, f:""}], [{v: "Sweden", f: "?"}, {v:3, f:""}]],
    "Answer": "Italy"
  },
  {
    "Question": "Which country on the map is Finland?",
    "Options": [[{v: "Spain", f: "?"}, {v:0, f:""}], [{v: "Kazakhstan", f: "?"}, {v:1, f:""}], [{v: "Finland", f: "?"}, {v:2, f:""}], [{v: "Iceland", f: "?"}, {v:3, f:""}]],
    "Answer": "Finland"
  },
  {
    "Question": "Which country on the map is Egypt?",
    "Options": [[{v: "South Africa", f: "?"}, {v:0, f:""}], [{v: "Algeria", f: "?"}, {v:1, f:""}], [{v: "Egypt", f: "?"}, {v:2, f:""}], [{v: "Iran", f: "?"}, {v:3, f:""}]],
    "Answer": "Egypt"
  },
  {
    "Question": "Which country on the map is Poland?",
    "Options": [[{v: "Portugal", f: "?"}, {v:0, f:""}], [{v: "Poland", f: "?"}, {v:1, f:""}], [{v: "Romania", f: "?"}, {v:2, f:""}], [{v: "Turkey", f: "?"}, {v:3, f:""}]],
    "Answer": "Poland"
  },
  {
    "Question": "Which country on the map is Japan?",
    "Options": [[{v: "Japan", f: "?"}, {v:0, f:""}], [{v: "Mongolia", f: "?"}, {v:1, f:""}], [{v: "India", f: "?"}, {v:2, f:""}], [{v: "Thailand", f: "?"}, {v:3, f:""}]],
    "Answer": "Japan"
  },
  {
    "Question": "Which country on the map is Saudi Arabia?",
    "Options": [[{v: "Algeria", f: "?"}, {v:0, f:""}], [{v: "Saudi Arabia", f: "?"}, {v:1, f:""}], [{v: "Sudan", f: "?"}, {v:2, f:""}], [{v: "Kazakhstan", f: "?"}, {v:3, f:""}]],
    "Answer": "Saudi Arabia"
  },
  {
    "Question": "Which country on the map is Australia?",
    "Options": [[{v: "Australia", f: "?"}, {v:0, f:""}], [{v: "Japan", f: "?"}, {v:1, f:""}], [{v: "India", f: "?"}, {v:2, f:""}], [{v: "China", f: "?"}, {v:3, f:""}]],
    "Answer": "Australia"
  },
  {
    "Question": "Which country on the map is Greenland?",
    "Options": [[{v: "Greenland", f: "?"}, {v:0, f:""}], [{v: "Sweden", f: "?"}, {v:1, f:""}], [{v: "New Zealand", f: "?"}, {v:2, f:""}], [{v: "Iceland", f: "?"}, {v:3, f:""}]],
    "Answer": "Greenland"
  },
  {
    "Question": "Which country on the map is Iceland?",
    "Options": [[{v: "France", f: "?"}, {v:0, f:""}], [{v: "Madagascar", f: "?"}, {v:1, f:""}], [{v: "Canada", f: "?"}, {v:2, f:""}], [{v: "Iceland", f: "?"}, {v:3, f:""}]],
    "Answer": "Iceland"
  },
  {
    "Question": "Which country on the map is Great Britain?",
    "Options": [[{v: "RU", f: "?"}, {v:0, f:""}], [{v: "France", f: "?"}, {v:1, f:""}], [{v: "GB", f: "?"}, {v:2, f:""}], [{v: "United States", f: "?"}, {v:3, f:""}]],
    "Answer": "GB"
  },
  {
    "Question": "Which country on the map is Spain?",
    "Options": [[{v: "Germany", f: "?"}, {v:0, f:""}], [{v: "Algeria", f: "?"}, {v:1, f:""}], [{v: "Brazil", f: "?"}, {v:2, f:""}], [{v: "Spain", f: "?"}, {v:3, f:""}]],
    "Answer": "Spain"
  },
  {
    "Question": "Which country on the map is Argentina?",
    "Options": [[{v: "Argentina", f: "?"}, {v:0, f:""}], [{v: "Peru", f: "?"}, {v:1, f:""}], [{v: "Mexico", f: "?"}, {v:2, f:""}], [{v: "Angola", f: "?"}, {v:3, f:""}]],
    "Answer": "Argentina"
  },
  {
    "Question": "Which country on the map is Afghanistan?",
    "Options": [[{v: "Sweden", f: "?"}, {v:0, f:""}], [{v: "Afghanistan", f: "?"}, {v:1, f:""}], [{v: "Botswana", f: "?"}, {v:2, f:""}], [{v: "Mauritania", f: "?"}, {v:3, f:""}]],
    "Answer": "Afghanistan"
  },
  {
    "Question": "Which country on the map is United States?",
    "Options": [[{v: "Canada", f: "?"}, {v:0, f:""}], [{v: "Australia", f: "?"}, {v:1, f:""}], [{v: "United States", f: "?"}, {v:2, f:""}], [{v: "RU", f: "?"}, {v:3, f:""}]],
    "Answer": "United States"
  },
  {
    "Question": "Which country on the map is Madagascar?",
    "Options": [[{v: "Madagascar", f: "?"}, {v:0, f:""}], [{v: "Kenya", f: "?"}, {v:1, f:""}], [{v: "Namibia", f: "?"}, {v:2, f:""}], [{v: "Somalia", f: "?"}, {v:3, f:""}]],
    "Answer": "Madagascar"
  },
  {
    "Question": "Which country on the map is New Zealand?",
    "Options": [[{v: "Japan", f: "?"}, {v:0, f:""}], [{v: "New Zealand", f: "?"}, {v:1, f:""}], [{v: "Philippines", f: "?"}, {v:2, f:""}], [{v: "Indonesia", f: "?"}, {v:3, f:""}]],
    "Answer": "New Zealand"
  },
  

]);
db.capitals.insertMany([
  {
    "Question": "Which country's capital city is Madrid?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "France", f: "France"}, {v:2, f:""}], [{v: "Algeria", f: "Algeria"}, {v:3, f:""}]],
    "Answer": "Spain"
  },
  {
    "Question": "Which country's capital city is Brasilia?",
    "Options": [[{v: "Mexico", f: "Mexico"}, {v:0, f:""}], [{v: "Canada", f: "Canada"}, {v:1, f:""}], [{v: "Argentina", f: "Argentina"}, {v:2, f:""}], [{v: "Brazil", f: "Brazil"}, {v:3, f:""}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country's capital city is Canberra?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Australia", f: "Australia"}, {v:1, f:""}], [{v: "Mongolia", f: "Mongolia"}, {v:2, f:""}], [{v: "China", f: "China"}, {v:3, f:""}]],
    "Answer": "Australia"
  },
  {
    "Question": "Which country's capital city is Berlin?",
    "Options": [[{v: "Romania", f: "Romania"}, {v:0, f:""}], [{v: "United States", f: "United States"}, {v:1, f:""}], [{v: "Egypt", f: "Egypt"}, {v:2, f:""}], [{v: "Germany", f: "Germany"}, {v:3, f:""}]],
    "Answer": "Germany"
  },
  {
    "Question": "Which country's capital city is Stockholm?",
    "Options": [[{v: "Saudi Arabia", f: "Saudi Arabia"}, {v:0, f:""}], [{v: "Ukraine", f: "Ukraine"}, {v:1, f:""}], [{v: "Italy", f: "Italy"}, {v:2, f:""}], [{v: "Sweden", f: "Sweden"}, {v:3, f:""}]],
    "Answer": "Sweden"
  },
  {
    "Question": "Which country's capital city is New Delhi?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "France", f: "France"}, {v:1, f:""}], [{v: "Germany", f: "Germany"}, {v:2, f:""}], [{v: "Turkey", f: "Turkey"}, {v:3, f:""}]],
    "Answer": "India"
  },
  {
    "Question": "Which country's capital city is Cairo?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Egypt", f: "Egypt"}, {v:1, f:""}], [{v: "Ukraine", f: "Ukraine"}, {v:2, f:""}], [{v: "Algeria", f: "Algeria"}, {v:3, f:""}]],
    "Answer": "Egypt"
  },
  {
    "Question": "Which country's capital city is Beijing?",
    "Options": [[{v: "Thailand", f: "Thailand"}, {v:0, f:""}], [{v: "Australia", f: "Australia"}, {v:1, f:""}], [{v: "China", f: "China"}, {v:2, f:""}], [{v: "Kazakhstan", f: "Kazakhstan"}, {v:3, f:""}]],
    "Answer": "China"
  },
  {
    "Question": "Which country's capital city is Warsaw?",
    "Options": [[{v: "Poland", f: "Poland"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "France", f: "France"}, {v:2, f:""}], [{v: "Egypt", f: "Egypt"}, {v:3, f:""}]],
    "Answer": "Poland"
  },
  {
    "Question": "Which country's capital city is Lisbon?",
    "Options": [[{v: "Portugal", f: "Portugal"}, {v:0, f:""}], [{v: "Turkey", f: "Turkey"}, {v:1, f:""}], [{v: "France", f: "France"}, {v:2, f:""}], [{v: "Germany", f: "Germany"}, {v:3, f:""}]],
    "Answer": "Portugal"
  },
  {
    "Question": "Which country's capital city is Reykjavík?",
    "Options": [[{v: "Paraguay", f: "Paraguay"}, {v:0, f:""}], [{v: "Mali", f: "Mali"}, {v:1, f:""}], [{v: "Mongolia", f: "Mongolia"}, {v:2, f:""}], [{v: "Iceland", f: "Iceland"}, {v:3, f:""}]],
    "Answer": "Iceland"
  },
  {
    "Question": "Which country's capital city is Ottawa?",
    "Options": [[{v: "Canada", f: "Canada"}, {v:0, f:""}], [{v: "Japan", f: "Japan"}, {v:1, f:""}], [{v: "Madagascar", f: "Madagascar"}, {v:2, f:""}], [{v: "Afghanistan", f: "Afghanistan"}, {v:3, f:""}]],
    "Answer": "Canada"
  },
  {
    "Question": "Which country's capital city is Buenos Aires?",
    "Options": [[{v: "Mexico", f: "Mexico"}, {v:0, f:""}], [{v: "Argentina", f: "Argentina"}, {v:1, f:""}], [{v: "New Zealand", f: "New Zealand"}, {v:2, f:""}], [{v: "Sudan", f: "Sudan"}, {v:3, f:""}]],
    "Answer": "Argentina"
  },
  {
    "Question": "Which country's capital city is Kiev?",
    "Options": [[{v: "Brazil", f: "Brazil"}, {v:0, f:""}], [{v: "Australia", f: "Australia"}, {v:1, f:""}], [{v: "Germany", f: "Germany"}, {v:2, f:""}], [{v: "Ukraine", f: "Ukraine"}, {v:3, f:""}]],
    "Answer": "Ukraine"
  },
  {
    "Question": "Which country's capital city is Paris?",
    "Options": [[{v: "Libya", f: "Libya"}, {v:0, f:""}], [{v: "France", f: "France"}, {v:1, f:""}], [{v: "Norway", f: "Norway"}, {v:2, f:""}], [{v: "Ukraine", f: "Ukraine"}, {v:3, f:""}]],
    "Answer": "France"
  },
  {
    "Question": "Which country's capital city is Baghdad?",
    "Options": [[{v: "Indonesia", f: "Indonesia"}, {v:0, f:""}], [{v: "South Africa", f: "South Africa"}, {v:1, f:""}], [{v: "Iraq", f: "Iraq"}, {v:2, f:""}], [{v: "France", f: "France"}, {v:3, f:""}]],
    "Answer": "Iraq"
  },
  {
    "Question": "Which country's capital city is Oslo?",
    "Options": [[{v: "Norway", f: "Norway"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "Canada", f: "Canada"}, {v:2, f:""}], [{v: "Morocco", f: "Morocco"}, {v:3, f:""}]],
    "Answer": "Norway"
  },
  {
    "Question": "Which country's capital city is Tokyo?",
    "Options": [[{v: "Philippines", f: "Philippines"}, {v:0, f:""}], [{v: "Belarus", f: "Belarus"}, {v:1, f:""}], [{v: "Japan", f: "Japan"}, {v:2, f:""}], [{v: "Sweden", f: "Sweden"}, {v:3, f:""}]],
    "Answer": "Japan"
  },
  {
    "Question": "Which country's capital city is Helsinki?",
    "Options": [[{v: "Finland", f: "Finland"}, {v:0, f:""}], [{v: "Peru", f: "Peru"}, {v:1, f:""}], [{v: "Kazakhstan", f: "Kazakhstan"}, {v:2, f:""}], [{v: "France", f: "France"}, {v:3, f:""}]],
    "Answer": "Finland"
  },
  {
    "Question": "Which country's capital city is Moscow?",
    "Options": [[{v: "Algeria", f: "Algeria"}, {v:0, f:""}], [{v: "India", f: "India"}, {v:1, f:""}], [{v: "Greenland", f: "Greenland"}, {v:2, f:""}], [{v: "Russia", f: "Russia"}, {v:3, f:""}]],
    "Answer": "Russia"
  },
  

]);
db.flags.insertMany([
  {
    "Question": "https://restcountries.eu/data/aus.svg",
    "Options": [[{v: "France", f: "France"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "Canada", f: "Canada"}, {v:2, f:""}], [{v: "Australia", f: "Australia"}, {v:3, f:""}]],
    "Answer": "Australia"
  },
  {
    "Question": "https://restcountries.eu/data/prt.svg",
    "Options": [[{v: "Ethiopia", f: "Ethiopia"}, {v:0, f:""}], [{v: "Portugal", f: "Portugal"}, {v:1, f:""}], [{v: "Peru", f: "Peru"}, {v:2, f:""}], [{v: "Mongolia", f: "Mongolia"}, {v:3, f:""}]],
    "Answer": "Portugal"
  },
  {
    "Question": "https://restcountries.eu/data/jpn.svg",
    "Options": [[{v: "Japan", f: "Japan"}, {v:0, f:""}], [{v: "Morocco", f: "Morocco"}, {v:1, f:""}], [{v: "Saudi Arabia", f: "Saudi Arabia"}, {v:2, f:""}], [{v: "Argentina", f: "Argentina"}, {v:3, f:""}]],
    "Answer": "Japan"
  },
  {
    "Question": "https://restcountries.eu/data/zaf.svg",
    "Options": [[{v: "Ethiopia", f: "Ethiopia"}, {v:0, f:""}], [{v: "South Africa", f: "South Africa"}, {v:1, f:""}], [{v: "Russia", f: "Russia"}, {v:2, f:""}], [{v: "Greenland", f: "Greenland"}, {v:3, f:""}]],
    "Answer": "South Africa"
  },
  {
    "Question": "https://restcountries.eu/data/ind.svg",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Thailand", f: "Thailand"}, {v:1, f:""}], [{v: "Kazakhstan", f: "Kazakhstan"}, {v:2, f:""}], [{v: "Yemen", f: "Yemen"}, {v:3, f:""}]],
    "Answer": "India"
  },
  {
    "Question": "https://restcountries.eu/data/esp.svg",
    "Options": [[{v: "Germany", f: "Germany"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "Poland", f: "Poland"}, {v:2, f:""}], [{v: "Madagascar", f: "Madagascar"}, {v:3, f:""}]],
    "Answer": "Spain"
  },
  {
    "Question": "https://restcountries.eu/data/grc.svg",
    "Options": [[{v: "Greece", f: "Greece"}, {v:0, f:""}], [{v: "Finland", f: "Finland"}, {v:1, f:""}], [{v: "Italy", f: "Italy"}, {v:2, f:""}], [{v: "Australia", f: "Australia"}, {v:3, f:""}]],
    "Answer": "Greece"
  },
  {
    "Question": "https://restcountries.eu/data/chn.svg",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Mali", f: "Mali"}, {v:1, f:""}], [{v: "Paraguay", f: "Paraguay"}, {v:2, f:""}], [{v: "China", f: "China"}, {v:3, f:""}]],
    "Answer": "China"
  },
  {
    "Question": "https://restcountries.eu/data/swe.svg",
    "Options": [[{v: "Chad", f: "Chad"}, {v:0, f:""}], [{v: "Sudan", f: "Sudan"}, {v:1, f:""}], [{v: "Sweden", f: "Sweden"}, {v:2, f:""}], [{v: "Pakistan", f: "Pakistan"}, {v:3, f:""}]],
    "Answer": "Sweden"
  },
  {
    "Question": "https://restcountries.eu/data/bra.svg",
    "Options": [[{v: "Mexico", f: "Mexico"}, {v:0, f:""}], [{v: "Canada", f: "Canada"}, {v:1, f:""}], [{v: "Colombia", f: "Colombia"}, {v:2, f:""}], [{v: "Brazil", f: "Brazil"}, {v:3, f:""}]],
    "Answer": "Brazil"
  },
  {
    "Question": "https://restcountries.eu/data/usa.svg",
    "Options": [[{v: "United States", f: "United States"}, {v:0, f:""}], [{v: "New Zealand", f: "New Zealand"}, {v:1, f:""}], [{v: "Brazil", f: "Brazil"}, {v:2, f:""}], [{v: "Russia", f: "Russia"}, {v:3, f:""}]],
    "Answer": "United States"
  },
  {
    "Question": "https://restcountries.eu/data/gbr.svg",
    "Options": [[{v: "Spain", f: "Spain"}, {v:0, f:""}], [{v: "GB", f: "Great Britain"}, {v:1, f:""}], [{v: "Australia", f: "Australia"}, {v:2, f:""}], [{v: "Norway", f: "Norway"}, {v:3, f:""}]],
    "Answer": "GB"
  },
  {
    "Question": "https://restcountries.eu/data/can.svg",
    "Options": [[{v: "Canada", f: "Canada"}, {v:0, f:""}], [{v: "Russia", f: "Russia"}, {v:1, f:""}], [{v: "Greenland", f: "Greenland"}, {v:2, f:""}], [{v: "Algeria", f: "Algeria"}, {v:3, f:""}]],
    "Answer": "Canada"
  },
  {
    "Question": "https://restcountries.eu/data/deu.svg",
    "Options": [[{v: "Spain", f: "Spain"}, {v:0, f:""}], [{v: "Bolivia", f: "Bolivia"}, {v:1, f:""}], [{v: "Ethiopia", f: "Ethiopia"}, {v:2, f:""}], [{v: "Germany", f: "Germany"}, {v:3, f:""}]],
    "Answer": "Germany"
  },
  {
    "Question": "https://restcountries.eu/data/nor.svg",
    "Options": [[{v: "Kazakhstan", f: "Kazakhstan"}, {v:0, f:""}], [{v: "Norway", f: "Norway"}, {v:1, f:""}], [{v: "Venezuela", f: "Venezuela"}, {v:2, f:""}], [{v: "Indonesia", f: "Indonesia"}, {v:3, f:""}]],
    "Answer": "Norway"
  },
  {
    "Question": "https://restcountries.eu/data/fin.svg",
    "Options": [[{v: "Nigeria", f: "Nigeria"}, {v:0, f:""}], [{v: "Germany", f: "Germany"}, {v:1, f:""}], [{v: "Mexico", f: "Mexico"}, {v:2, f:""}], [{v: "Finland", f: "Finland"}, {v:3, f:""}]],
    "Answer": "Finland"
  },
  {
    "Question": "https://restcountries.eu/data/mex.svg",
    "Options": [[{v: "Libya", f: "Libya"}, {v:0, f:""}], [{v: "Iceland", f: "Iceland"}, {v:1, f:""}], [{v: "Sweden", f: "Sweden"}, {v:2, f:""}], [{v: "Mexico", f: "Mexico"}, {v:3, f:""}]],
    "Answer": "Mexico"
  },
  {
    "Question": "https://restcountries.eu/data/chl.svg",
    "Options": [[{v: "Colombia", f: "Colombia"}, {v:0, f:""}], [{v: "Chile", f: "Chile"}, {v:1, f:""}], [{v: "Kenya", f: "Kenya"}, {v:2, f:""}], [{v: "Pakistan", f: "Pakistan"}, {v:3, f:""}]],
    "Answer": "Chile"
  },
  {
    "Question": "https://restcountries.eu/data/ury.svg",
    "Options": [[{v: "Belarus", f: "Belarus"}, {v:0, f:""}], [{v: "Mongolia", f: "Mongolia"}, {v:1, f:""}], [{v: "Uruguay", f: "Uruguay"}, {v:2, f:""}], [{v: "Greenland", f: "Greenland"}, {v:3, f:""}]],
    "Answer": "Uruguay"
  },
  {
    "Question": "https://restcountries.eu/data/rus.svg",
    "Options": [[{v: "Ukraine", f: "Ukraine"}, {v:0, f:""}], [{v: "Peru", f: "Peru"}, {v:1, f:""}], [{v: "Russia", f: "Russia"}, {v:2, f:""}], [{v: "Iceland", f: "Iceland"}, {v:3, f:""}]],
    "Answer": "Russia"
  },
  {
    "Question": "https://restcountries.eu/data/tur.svg",
    "Options": [[{v: "Chad", f: "Chad"}, {v:0, f:""}], [{v: "France", f: "France"}, {v:1, f:""}], [{v: "Colombia", f: "Colombia"}, {v:2, f:""}], [{v: "Turkey", f: "Turkey"}, {v:3, f:""}]],
    "Answer": "Turkey"
  }
]);
