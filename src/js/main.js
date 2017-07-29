var player1Hp = 100;
var player2Hp = 100;
$(document).ready(function() {
  var newgame = function() {
    player1Hp = 100;
    player2Hp = 100;
    $('#player1hp').text('HP:' + player1Hp + '/100');
    $('#player2hp').text('HP:' + player2Hp + '/100');
  }
  var endGameP1 = function() {
    if (player1Hp == 0) {

      return [alert('Przegrałeś!'), newgame()];

    }
  };

  var endGameP2 = function() {
    if (player2Hp == 0) {

      return [alert('Wygrałeś!'), newgame()];

    }

  };
  var changeP1 = function() {
    player1Hp = player1Hp - 10;
    $('#player1hp').text('HP:' + player1Hp + '/100');
    endGameP1(player1Hp);
  };
  var changeP2 = function() {
    player2Hp = player2Hp - 10;
    $('#player2hp').text('HP:' + player2Hp + '/100');
    endGameP2(player2Hp);
  };
  var compare = function(me, opponent) {

    if (me === 'rock') {

      if (opponent === 'rock') {
        return 'Remis!';

      } else if (opponent === 'paper') {

        return ['Kamień przegrywa z papierem! Tracisz 10 HP', changeP1(player1Hp)];


      } else if (opponent === 'scissors') {
        return ['Kamień wygrywa z nożycami! Przeciwnik traci 10 HP', changeP2(player2Hp)];
      }

    } else if (me === 'paper') {

      if (opponent === 'paper') {
        return 'Remis!';
      } else if (opponent === 'rock') {
        return ['Papier wygrywa z kamieniem! Przeciwnik traci 10 HP', changeP2(player2Hp)];
      } else if (opponent === 'scissors') {
        return ['Papier przegrywa z nożycami! Tracisz 10 HP', changeP1(player1Hp)];
      }
    } else if (me === 'scissors') {

      if (opponent === 'scissors') {
        return 'Remis!';
      } else if (opponent === 'paper') {
        return ['Nożyce wygrywają z papierem! Przeciwnik traci 10 HP', changeP2(player2Hp)];
      } else if (opponent === 'rock') {
        return ['Nożyce przegrywaja z kamieniem! Tracisz 10 HP', changeP1(player1Hp)];
      }
    } else {
      return "Wystąpił błąd!"
    }
  };

  var computerChoice = function() {
    var random = Math.random();
    if (random < 0.333) {
      return 'rock';
    } else if (random < 0.67777) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };


  $('#player1hp').text('HP:' + player1Hp + '/100');
  $('#player2hp').text('HP:' + player2Hp + '/100');

  $('button#kamien').click(function() {
    var result = compare('rock', computerChoice());
    $("#decision").html(result);

  });


  $('button#papier').click(function() {
    var result = compare('paper', computerChoice());
    $("#decision").html(result);
  });


  $('button#nozyce').click(function() {
    var result = compare('scissors', computerChoice());
    $("#decision").html(result);
  });



});
