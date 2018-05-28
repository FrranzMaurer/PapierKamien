"use strict";

var output = document.getElementsByClassName("output")[0];
var player;
var round = 0;
var comp;
var compChoice;
var playerScore = 0;
var compScore = 0;
var rounds;
var newgame = document.getElementById('new-game');

var playerChoice = document.querySelectorAll('.player-move');
for (var i = 0; i < playerChoice.length; i++) {
  var playerMove = playerChoice[i].getAttribute("data-move");
  document.write(playerMove);
  };




var rounds2win = document.getElementById('rounds-to-win');
var choices = { 
  rock: 'kamień', 
  paper: 'papier',
  scissors: 'nożyce'
}

var compare = function(player, compChoice) {
  if (player === compChoice) {
    output.innerHTML = "Remis" + "<br>";
  } 
  else if (player === choices.rock) {
    if (compChoice === choices.paper) {
      {
        compScore = compScore + 1;
        output.innerHTML = "Przegrywasz, papier pokonuje kamień" + "<br>";
      }
    } else {
      {
        playerScore = playerScore + 1;
        output.innerHTML = "Wygrywasz, kamień pokonuje nożyce" + "<br>";
      }
    }
  } 
  else if (player === choices.paper) {
    if (compChoice === choices.rock) {
      {
        playerScore = playerScore + 1;
        output.innerHTML = "Wygrywasz, papier pokonuje kamień" + "<br>";
      }
    } else {
      {
        compScore = compScore + 1;
        output.innerHTML = "Przegrywasz, nożyce pokonują papier" + "<br>";
      }
    }
  } 
  else if (player === choices.scissors) {
    if (compChoice === choices.rock) {
      {
        compScore = compScore + 1;
        output.innerHTML = "Przegrywasz, kamień pokonuje nożyce" + "<br>";
      }
    } else {
      {
        playerScore = playerScore + 1;
        output.innerHTML = "Wygrywasz, nożyce pokonują papier" + "<br>";
      }
    }
  }
};

function getCompChoice () {
  comp = Math.random() * 3;
  if (comp < 1) {
  compChoice = choices.rock;
} else if (comp < 2) {
  compChoice = choices.paper;
} else {
  compChoice = choices.scissors;
}
}

function getID(clicked_object) {
  player = clicked_object.getAttribute("id");
  getCompChoice ();
  round = round + 1;
  compare(player, compChoice);
  output.innerHTML =
    playerScore +
    " : " +
    compScore +
    "<br>" +
    "Runda " +
    round +
    "<br>" +
    output.innerHTML;
  output.innerHTML =
    "Gracz: " +
    player +
    " <br>Komputer: " +
    compChoice +
    "<br>" +
    output.innerHTML;
  win (rounds);
}

newgame.addEventListener('click', function(){
	
	rounds = window.prompt('Ile rund do wygranej?');
  rounds2win.innerHTML = "Rund do wygrania: " + rounds;
  clearGame ();
});

function clearGame () {
    playerScore = 0;
    compScore = 0;
    round = 0;
    output.innerHTML =
    playerScore +
    " : " +
    compScore +
    "<br>" +
    "Runda " +
    round +
    "<br>";
}

function win (rounds) {
  if (playerScore == rounds) {
    window.alert('YOU WON');
    clearGame ();
  }
  else if (compScore == rounds) {
    window.alert('YOU LOST');
    clearGame ();
  }
}