Statskeeper.PlayersRoute = Ember.Route.extend({
  model: function() {
    var players = this.players;
    // team.get('players').then(function(players) {
    //   players.pushObject(player)
    // });
    return players
  }
});
