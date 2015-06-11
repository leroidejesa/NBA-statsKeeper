Statskeeper.PlayerController = Ember.ObjectController.extend({
  actions: {
    missed_shot: function() {
      this.set('shotAttempts', this.get('shotAttempts') + 1);
      this.get('model').save()
    },
    made_shot: function () {
      this.set("shotAttempts", this.get('shotAttempts') + 1);
      this.set("shotsMade", this.get('shotsMade') + 1);
      this.get('model').save();
    },
    add_assist: function() {
      this.set("assists", this.get('assists') + 1);
      this.get('model').save();
    },
    add_rebound: function() {
      this.set("rebounds", this.get('rebounds') + 1);
      this.get('model').save();
    }
  }

});
