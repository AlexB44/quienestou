Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  template: 'home'
});

Router.route('/:id', {
  template: 'gaming'
});