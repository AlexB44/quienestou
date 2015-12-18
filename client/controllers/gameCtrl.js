Template.game.helpers({
  checkFull: function() {
    return this.creator && this.guy;
  }
})

Template.game.events({
  "click button": function() {
    if (this.creator && this.guy) return
    var turn = Math.round(Math.random());
    console.log("turn", turn)
    console.log("creator", this.creator)
    console.log("guy", Meteor.user().username)
    var game = Games.findOne({_id: this._id});
    var first = turn ? this.creator : Meteor.user().username;
    var rand = Math.round(Math.random() * 10) % game.poolcreator.length;
    Games.update({_id: this._id}, {$set: {guy: Meteor.user().username,
      turn: first, answerguy: game.poolcreator[rand]}});
    Router.go('/' + this._id);
  }
})
