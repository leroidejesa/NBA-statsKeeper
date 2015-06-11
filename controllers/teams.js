Statskeeper.TeamsController = Ember.ArrayController.extend({
  actions: {
    save_team: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('name'),
      });
      newTeam.save();
    },
    highScorer: function() {
      var teams = this;
      teams.forEach(function(team){
        var players = team.get('players');
            var scores = [];
            players.forEach(function(player){
              scores.push(player.get('points'));
            });
            scores = scores.sort(function(a,b){return b-a});
                players.forEach(function(player){
                  if (player.get('points') === scores[0] && scores.length > 0){
                    player.set('highScorer', true);
                  }
                });
          });
      this.get('model').save();
      console.log('hi')
    }
  }
});
