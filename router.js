Statskeeper.Router.map(function() {
  this.resource('teams', {path: '/'});
  this.resource('players', {path:'teams/:team_id'}, function() {
    this.resource('player', {path:'teams/:team_id/:player_id'});
  });
});
