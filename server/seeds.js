if (Meteor.users.find().count() === 0) {
  var id = Accounts.createUser({
    username: "balta",
    email: "balta@test.com",
    password: "azeaze",
    profile: {name: "El Baltazor"}
  });
  
  console.log("Added Balta user...");

  var id = Accounts.createUser({
    username: "max",
    email: "max@test.com",
    password: "azeaze",
    profile: {name: "El Maxor"}
  });
  
  console.log("Added Max user...");

  var id = Accounts.createUser({
    username: "herbert",
    email: "herbert@test.com",
    password: "azeaze",
    profile: {name: "El Mexicano"}
  });

  console.log("Added Herbert user...");
}

var gamesSeed = [
  {
    creator: "balta",
    guy: "",
    poolcreator: ["img-aizhoa", "img-benjamin", "img-damien", "img-francis", "img-laurent", "img-mikaelle", "img-regis", "img-alexandra", "img-celine", "img-edem", "img-herbert", "img-lucie", "img-nelly", "img-severine", "img-alexandre", "img-céline", "img-emmanuel", "img-julien", "img-ludivine", "img-nicolas", "img-simon", "img-amelie", "img-charles", "img-eric", "img-julienR", "img-mahamadou", "img-nicolasT", "img-thierry", "img-ava", "img-coralie", "img-erwan", "img-julienV", "img-maxime", "img-pascal", "img-victor", "img-balthazar", "img-cyrille", "img-florian", "img-kevin", "img-michael", "img-ph"],
    poolguy: ["img-aizhoa", "img-benjamin", "img-damien", "img-francis", "img-laurent", "img-mikaelle", "img-regis", "img-alexandra", "img-celine", "img-edem", "img-herbert", "img-lucie", "img-nelly", "img-severine", "img-alexandre", "img-céline", "img-emmanuel", "img-julien", "img-ludivine", "img-nicolas", "img-simon", "img-amelie", "img-charles", "img-eric", "img-julienR", "img-mahamadou", "img-nicolasT", "img-thierry", "img-ava", "img-coralie", "img-erwan", "img-julienV", "img-maxime", "img-pascal", "img-victor", "img-balthazar", "img-cyrille", "img-florian", "img-kevin", "img-michael", "img-ph"],
    answercreator: "img-herbert",
    answerguy: "",
    crossedcreator: [],
    crossedguy: [],
    winner: "",
    turn: "",
    messages: [{
      created_at : new Date(),
      creator: "balta",
      text: "coucou :D pose ta question !"
    },{
      created_at : new Date(),
      creator: "pipi",
      text: "est-ce qu'il a un chapeau ?"
    },{
      created_at : new Date(),
      creator: "balta",
      text: "bah non"
    }],
    created_at : new Date()
  },
  {
    creator: "herbert",
    guy: "",
    poolcreator: ["img-aizhoa", "img-benjamin", "img-damien", "img-francis", "img-laurent", "img-mikaelle", "img-regis", "img-alexandra", "img-celine", "img-edem", "img-herbert", "img-lucie", "img-nelly", "img-severine", "img-alexandre", "img-céline", "img-emmanuel", "img-julien", "img-ludivine", "img-nicolas", "img-simon", "img-amelie", "img-charles", "img-eric", "img-julienR", "img-mahamadou", "img-nicolasT", "img-thierry", "img-ava", "img-coralie", "img-erwan", "img-julienV", "img-maxime", "img-pascal", "img-victor", "img-balthazar", "img-cyrille", "img-florian", "img-kevin", "img-michael", "img-ph"],
    poolguy: ["img-aizhoa", "img-benjamin", "img-damien", "img-francis", "img-laurent", "img-mikaelle", "img-regis", "img-alexandra", "img-celine", "img-edem", "img-herbert", "img-lucie", "img-nelly", "img-severine", "img-alexandre", "img-céline", "img-emmanuel", "img-julien", "img-ludivine", "img-nicolas", "img-simon", "img-amelie", "img-charles", "img-eric", "img-julienR", "img-mahamadou", "img-nicolasT", "img-thierry", "img-ava", "img-coralie", "img-erwan", "img-julienV", "img-maxime", "img-pascal", "img-victor", "img-balthazar", "img-cyrille", "img-florian", "img-kevin", "img-michael", "img-ph"],
    answercreator: "img-balthazar",
    answerguy: "",
    crossedcreator: [],
    crossedguy: [],
    winner: "",
    turn: "",
    messages: [],
    created_at : new Date()
  },
  {
    creator: "herbert",
    guy: "",
    poolcreator: ["img-herbert", "img-balthazar", "img-maxime"],
    poolguy: ["img-herbert", "img-balthazar", "img-maxime"],
    answercreator: "img-balthazar",
    answerguy: "",
    crossedcreator: [],
    crossedguy: [],
    winner: "herbert",
    turn: "",
    messages: [],
    created_at : new Date()
  }
];

if (Games.find().count() === 0) {
  _.each(gamesSeed, function(game) {
    Games.insert(game);
    console.log("insert " + game.creator + "'s game");
  })
}