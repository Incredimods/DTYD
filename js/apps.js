// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Dance 'Till You're Dead",
  version: "DTYD",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 6233,
  bpm: 154,
  totalframe: 298,
  nbpolo: 7,
  bonusloopA: 0, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: 0,
  colBck: "#000000",
  col0: "#84A78F",
  col1: "#84A78F",
  col2: "#000000",
  col3: "#435461",
  col4: "#84A78F",
  animearray: [
    {name:"0_blank",color:"0",uniqsnd:!0},
        {name:"1_model",color:"ffffff",uniqsnd:!0},
        {name:"2_mario",color:"D60058",uniqsnd:!0},
        {name:"3_piñata",color:"FDD602",uniqsnd:!0},
        {name:"0_blank",color:"0",uniqsnd:!0},

        {name:"0_blank",color:"0",uniqsnd:!0},
        {name:"4_día-de-muertos",color:"00B497",uniqsnd:!1},
        {name:"5_ameriman",color:"0059AD",uniqsnd:!0},
        {name:"6_melodeal-crash",color:"FDD602",uniqsnd:!1},
        {name:"0_blank",color:"0",uniqsnd:!0},

        {name:"0_blank",color:"0",uniqsnd:!0},
        {name:"7_sunrise-concept-4",color:"E07843",uniqsnd:!1},
        {name:"8_alien",color:"00B497",uniqsnd:!1},
        {name:"9_coldboy",color:"0088E5",uniqsnd:!1},
        {name:"0_blank",color:"0",uniqsnd:!0},

        {name:"0_blank",color:"0",uniqsnd:!0},
        {name:"10_gay",color:"E07843",uniqsnd:!1},
        {name:"11_beach-captain",color:"00B4FF",uniqsnd:!1},
        {name:"12_emcee-jacky",color:"FDD602",uniqsnd:!1},
        {name:"0_blank",color:"0",uniqsnd:!0},
  ],
  bonusarray: [
    {       name:"DANCE",
            src:"bonus-dance",
            code:"2,4,7,12,17",
            sound:"bonus-dance",
            aspire:"aspire-dance",
            loop: 4,
            },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...
