Template.gaming.helpers({
  game: function() {
    return Games.findOne({_id: Router.current().params.id});
  },
  checkCreator: function() {
    return Meteor.user().username == this.creator;
  }
})

Template.gaming.events({
  "click img": function() {
    console.log(this.valueOf())
  }
})