SyncedCron.add({
  name: 'Archiving yesterday\'s games',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 mins');
  },
  job: function() {
    console.log('1 minute')
  }
});

SyncedCron.start();