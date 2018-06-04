"use strict";

var output = document.getElementsByClassName("output")[0];
var player;
var round = 0;
var comp;
var compChoice;
var newgame = document.getElementById('new-game');

var params = {
  rounds: null,
  playerScore: 0,
  compScore: 0,
  progress: [
    totalPlayerScore: 0,
    totalCompScore: 0,
    totalRounds: 0];
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
        params.compScore = params.compScore + 1;
        output.innerHTML = "Przegrywasz, papier pokonuje kamień" + "<br>";
      }
    } else {
      {
        params.playerScore = params.playerScore + 1;
        output.innerHTML = "Wygrywasz, kamień pokonuje nożyce" + "<br>";
      }
    }
  } 
  else if (player === choices.paper) {
    if (compChoice === choices.rock) {
      {
        params.playerScore = params.playerScore + 1;
        output.innerHTML = "Wygrywasz, papier pokonuje kamień" + "<br>";
      }
    } else {
      {
        params.compScore = params.compScore + 1;
        output.innerHTML = "Przegrywasz, nożyce pokonują papier" + "<br>";
      }
    }
  } 
  else if (player === choices.scissors) {
    if (compChoice === choices.rock) {
      {
        params.compScore = params.compScore + 1;
        output.innerHTML = "Przegrywasz, kamień pokonuje nożyce" + "<br>";
      }
    } else {
      {
        params.playerScore = params.playerScore + 1;
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
    params.playerScore +
    " : " +
    params.compScore +
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
  win (params.rounds);
}

newgame.addEventListener('click', function(){
	
	params.rounds = window.prompt('Ile rund do wygranej?');
  rounds2win.innerHTML = "Rund do wygrania: " + params.rounds;
  clearGame ();
});

function clearGame () {
    params.playerScore = 0;
    params.compScore = 0;
    round = 0;
    output.innerHTML =
    params.playerScore +
    " : " +
    params.compScore +
    "<br>" +
    "Runda " +
    round +
    "<br>";
}

function win () {
  if (params.playerScore == params.rounds) {
    document.getElementById('modal-overlay').classList.add('show');
    document.getElementById('modal-one').classList.add('show');
    totalRounds = totalRounds + 1;
    totalPlayerScore = totalPlayerScore + 1;
    clearGame ();
  }
  else if (params.compScore == params.rounds) {
    document.getElementById('modal-overlay').classList.add('show');
    document.getElementById('modal-two').classList.add('show');
    totalRounds = totalRounds + 1;
    totalCompScore = totalCompScore + 1;
    clearGame ();
  }
}

var hideModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
  };
  
var closeButtons = document.querySelectorAll('.modal .close');
  
for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
  }

document.querySelector('#modal-overlay').addEventListener('click', hideModal);