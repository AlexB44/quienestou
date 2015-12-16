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
    poolcreator: ["img-herbert", "img-balthazar", "img-maxime"],
    poolguy: ["img-herbert", "img-balthazar", "img-maxime"],
    answercreator: "",
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
    answercreator: "",
    answerguy: "",
    crossedcreator: [],
    crossedguy: [],
    winner: "",
    turn: "",
    messages: [],
    created_at : new Date()
  },
];

if (Games.find().count() === 0) {
  _.each(gamesSeed, function(game) {
    Games.insert(game);
    console.log("insert " + game.creator + "'s game");
  })
}