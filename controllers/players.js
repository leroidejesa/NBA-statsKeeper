Statskeeper.PlayersController = Ember.ArrayController.extend({
  // sortProperties: ['date:desc'],
  // sortedLots: Ember.computed.sort('model', 'sortProperties'),
  addingPlayer: false,
  actions: {
    new_player: function() {
      this.set('addingPlayer', true);
    },
      save_player: function() {
        this.set('addingPlayer', false);
        var imageUrl = this.get('image');
        var newItem = this.store.createRecord('player', {
          name: this.get('name'),
          image: (imageUrl)

        });
        newItem.save();
      }
    }
});
