Statskeeper.Player = DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  shotAttempts: DS.attr(),
  shotsMade: DS.attr(),
  assists: DS.attr(),
  rebounds: DS.attr(),
  team: DS.belongsTo('team', {async: true})
});
