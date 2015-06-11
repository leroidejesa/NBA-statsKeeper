Statskeeper.PlayerController = Ember.ObjectController.extend({
  actions: {
    missed_shot: function() {
      this.set('shotAttempts', this.get('shotAttempts') + 1);
      var shotsMade = this.get('shotsMade');
      var shotAttempts = this.get('shotAttempts');
      console.log(shotsMade)
      var percentage = (shotsMade/shotAttempts)*100;
      this.set("shotPercentage", percentage);
      this.get("model").save();
    },
    made_shot: function() {
      this.set("shotAttempts", this.get('shotAttempts') + 1);
      this.set("shotsMade", this.get('shotsMade') + 1);
      var shotsMade = this.get('shotsMade');
      var shotAttempts = this.get('shotAttempts');
      var percentage = (shotsMade/shotAttempts)*100;
      this.set("shotPercentage", percentage);
      this.set('points', this.get('points') + 2);
      this.get("model").save();
    },
    add_assist: function() {
      this.set("assists", this.get('assists') + 1);
      this.get('model').save();
    },
    add_rebound: function() {
      this.set("rebounds", this.get('rebounds') + 1);
      this.get('model').save();
    },




  }
});
