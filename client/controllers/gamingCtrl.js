Template.gaming.helpers({
  game: function() {
    var game = Games.findOne({_id: Router.current().params.id});
    Session.set("currentGame", game);
    return game;
  },
  messages: function() {
    var messages = Games.findOne({_id: Router.current().params.id}).messages;
    messages = _.sortBy(messages, function(message){ return message.created_at; });
    return messages = messages.reverse();
  },
  checkCreator: function() {
    return Meteor.user().username == this.creator;
  },
  checkWaiting: function() {
    return !Session.get("currentGame").guy;
  }
})

Template.gaming.events({
  "click .unchecked img": function() {
    var game = Session.get("currentGame")
    if (game.turn != Meteor.user().username || game.winner)
      return
    if (Meteor.user().username == game.creator) {
      Games.update({_id: Router.current().params.id}, {$pull: {poolcreator: this.valueOf()},
      $push: {crossedcreator: this.valueOf()}});
      if (game.poolcreator.length == 2) {
        game = Games.findOne({_id: Router.current().params.id});
        if (game.answerguy == game.poolcreator[0]) {
          alert("gagné !");
          Games.update({_id: Router.current().params.id}, {$set: {winner: game.creator}});
          game = Games.findOne({_id: Router.current().params.id});
          Session.set("currentGame", game);
        }
        else {
          alert("perdu c'était " + game.answerguy);
          Games.update({_id: Router.current().params.id}, {$set: {winner: game.guy}});
          game = Games.findOne({_id: Router.current().params.id});
          Session.set("currentGame", game);
        }
      }
    }
    else {
      Games.update({_id: Router.current().params.id}, {$pull: {poolguy: this.valueOf()},
        $push: {crossedguy: this.valueOf()}});
      if (game.poolguy.length == 2) {
        game = Games.findOne({_id: Router.current().params.id});
        if (game.answercreator == game.poolguy[0]) {
          alert("gagné !");
          Games.update({_id: Router.current().params.id}, {$set: {winner: game.guy}});
          game = Games.findOne({_id: Router.current().params.id});
          Session.set("currentGame", game);
        }
        else {
          alert("perdu c'était " + game.answercreator);
          Games.update({_id: Router.current().params.id}, {$set: {winner: game.creator}});
          game = Games.findOne({_id: Router.current().params.id});
          Session.set("currentGame", game);
        }
      }
    }
  },
  "submit form": function(event) {
    event.preventDefault();
    if (!$("form input")[0].value) return;
    var data = {};
    data.text = $("form input")[0].value;
    data.creator = Meteor.user().username;
    Games.update({_id: Router.current().params.id}, {$push: {messages: data}});
    $("form input")[0].value = "";
  },
  "click .turn": function() {
    var game = Session.get("currentGame");
    if (game.winner) return
    if (Meteor.user().username == game.creator) {
      Games.update({_id: Router.current().params.id}, {$set: {turn: game.guy}});
    }
    else {
      Games.update({_id: Router.current().params.id}, {$set: {turn: game.creator}});
    }
  }
})

Template.gaming.onRendered(function() {
  var target = document.querySelector('.winner');
  console.log(target)

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      alert("l'autre a gagné !")
    })
  })

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };
 
  // pass in the target node, as well as the observer options
  observer.observe(target, config);
})