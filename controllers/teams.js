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
            var newPlayersArray = [];
            players.forEach(function(player){
              scores.push(player.get('points'));
            });
            scores = scores.sort(function(a,b){return b-a});
                scores.forEach(function(score) {
                  players.forEach(function(player) {
                    if (player.get('points') === score) {
                      delete players[players.indexOf(player)];
                      players.splice(scores.indexOf(score), 0, player);
                    }
                  });
                });
                players.forEach(function(player){
                  if (player.get('points') === scores[0] && scores.length > 0){
                    player.set('highScorer', true);
                  } else {
                    player.set('highScorer', false);
                  }
                });
          });
      this.get('model').save();
    }
    // sortByPoints: function() {
    //   var teams = this;
    //   console.log('hi')
    //   teams.forEach(function(team){
    //     console.log(team.get('name'))
    //     var players = team.get('players');
    //     function compare(a,b) {
    //       if (a.get('points') < b.get('points'))
    //         return -1;
    //       if (a.get('points') > b.get('points'))
    //         return 1;
    //       return 0;
    //     }
    //     players = players.sort(compare);
    //     team.set('players', players);
    //     team.get('model').save();
    //   });
    // }
  }
});
