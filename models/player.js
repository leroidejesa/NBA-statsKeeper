Statskeeper.Player = DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  shotAttempts: DS.attr(),
  shotsMade: DS.attr(),
  shotPercentage: DS.attr(),
  assists: DS.attr(),
  rebounds: DS.attr(),
  points: DS.attr(),
  highScorer: DS.attr(),
  team: DS.belongsTo('team', {async: true})
});
