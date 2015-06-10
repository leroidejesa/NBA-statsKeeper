Statskeeper.TeamsController = Ember.ArrayController.extend({
  actions: {
    save_team: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('name')
      });
      newTeam.save();
    }
  }
});
