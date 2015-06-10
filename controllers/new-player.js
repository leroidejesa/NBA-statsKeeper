Statskeeper.NewPlayerController = Ember.ObjectController.extend({
  needs: ['team'],
  actions: {

      save_player: function() {
        var imageUrl = this.get('image');
        var newItem = this.store.createRecord('player', {
          name: this.get('playername'),
          image: (imageUrl)

        });
        newItem.save();

        var team = this.get('controllers.team.model');
        team.get('players').pushObject(newItem);
        team.save();
        console.log(team)

        this.transitionToRoute('team', team.id)
      }
    }
});
