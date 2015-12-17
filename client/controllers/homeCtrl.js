Template.home.helpers({
  games: function() {
    return Games.find({winner: ""});
  }
});

Template.home.events({
  "click .create": function() {
    var date = new Date();
    var pool = ["img-aizhoa", "img-benjamin", "img-damien", "img-francis", "img-laurent", "img-mikaelle", "img-regis", "img-alexandra", "img-celine", "img-edem", "img-herbert", "img-lucie", "img-nelly", "img-severine", "img-alexandre", "img-céline", "img-emmanuel", "img-julien", "img-ludivine", "img-nicolas", "img-simon", "img-amelie", "img-charles", "img-eric", "img-julienR", "img-mahamadou", "img-nicolasT", "img-thierry", "img-ava", "img-coralie", "img-erwan", "img-julienV", "img-maxime", "img-pascal", "img-victor", "img-balthazar", "img-cyrille", "img-florian", "img-kevin", "img-michael", "img-ph"];
    var rand = Math.round(Math.random() * 100) % pool.length;
    Games.insert({
      creator: Meteor.user().username,
      guy: "",
      poolcreator: pool,
      poolguy: pool,
      answercreator: pool[rand],
      answerguy: "",
      crossedcreator: [],
      crossedguy: [],
      winner: "",
      turn: "",
      messages: [],
      created_at : date
    });
    var game = Games.findOne({created_at: date});
    Router.go('/' + game._id);
  }
})