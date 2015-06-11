Statskeeper.PlayerRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({outlet: 'player'})
  },
  model: function(params) {
    var player = this.store.find('player', params.player_id);
    return player
  }
})
