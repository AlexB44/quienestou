Template.game.events({
  "click button": function() {
    var turn = Math.round(Math.random());
    var game = Games.findOne({_id: this._id});
    var first = turn ? game.creator : game.guy;
    var rand = Math.round(Math.random() * 10) % game.poolcreator.length;
    console.log(game.poolcreator[rand])
    Games.update({_id: this._id}, {$set: {guy: Meteor.user().username,
      turn: first, answerguy: game.poolcreator[rand]}});
    Router.go('/' + this._id);
  }
})