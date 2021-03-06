Statskeeper.NewPlayerController = Ember.ObjectController.extend({
  needs: ['team'],
  actions: {

      save_player: function() {
        var imageUrl = this.get('image');
        var newItem = this.store.createRecord('player', {
          name: this.get('playername'),
          image: (imageUrl),
          points: 0,
          shotAttempts: 0,
          shotsMade: 0,
          assists: 0,
          rebounds: 0,
          shotPercentage: 0,
          highScorer: false
        });
        newItem.save();

        var team = this.get('controllers.team.model');
        team.get('players').pushObject(newItem);
        team.save();

        this.transitionToRoute('team', team.id)
      }
    }
});
