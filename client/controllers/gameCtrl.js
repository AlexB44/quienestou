Template.game.events({
  "click button": function() {
    var turn = Math.round(Math.random());
    var game = Games.findOne({_id: this._id});
    var first = turn ? game.creator : game.guy;
    Games.update({_id: this._id}, {$set: {guy: Meteor.user().username, turn: first}});
    Router.go('/' + this._id);
  }
})