Statskeeper.Router.map(function() {
  this.resource('teams', {path: '/'}, function() {
    this.resource('team', {path:'teams/:team_id'}, function() {
      this.resource('new-player');
      });
    this.resource('player', {path:'/:player_id'});
  });

  });
