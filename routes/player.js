Statskeeper.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    var player = this.store.find('player', params.player_id);
    return player
  }
})
