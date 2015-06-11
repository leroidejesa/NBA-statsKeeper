$('#checkHighScorer').click(function(){
  var team = $('#checkHighScorer').val();
  console.log(team)
  var players = team.players();
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
  this.get('model').save();
});
