Statskeeper.PlayerController = Ember.ObjectController.extend({
  actions: {
      missed_shot: function() {
      var player = this.get('player');
      player.set('shotAttempts', player.shotAttempts + 1);
      player.save();
    },
    made_shot: function () {
      var player = this.get('player');
      player.set("shotAttempts", player.shotAttempts + 1);
      player.set("shotsMade", player.shotsMade + 1);
      player.save();
    },
    add_assist: function() {
      var player = this.get('player');
      player.set("assists", player.assists + 1);
      player.save();
    },
    add_rebound: function() {
      var player = this.get('player');
      player.set("rebounds", player.rebounds + 1);
      player.save();
    }
  }

});
