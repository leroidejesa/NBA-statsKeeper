Statskeeper.TeamRoute = Ember.Route.extend({
  model: function(params) {
    var team = this.store.find('team', params.team_id);
    return team
  }
})
