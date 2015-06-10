Statskeeper.Team = DS.Model.extend({
  name: DS.attr(),
  players: DS.hasMany('players', {async: true})
});
