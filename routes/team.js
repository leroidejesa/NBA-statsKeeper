Statskeeper.TeamRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({outlet: 'team'})
  },
  model: function(params) {
    var team = this.store.find('team', params.team_id);
    return team
  }
})
