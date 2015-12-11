var playerChoice, computerAttack, userScore, computerScore;
var attackOptions = ["Rock", "Paper", "Scissors"];

function bindControl() {
  $(".btn").on("click", function() {          
    playerChoice = $(this).attr('data-choice'); 
    playersMove();  
    setTimeout(gameLogic, 3000);
    setTimeout(bindControl, 6000);  
  });
}

function playersMove(){
   $(".btn").off();

  console.log(playerChoice)
  if (playerChoice === "rock") {
    $(".fa-hand-rock-o, .playerTurn").fadeTo("fast", 1.0).delay(2000).fadeTo("fast", 0.3);
  }
  else if(playerChoice === "paper") {
    $(".fa-hand-paper-o, .playerTurn").fadeTo("fast", 1.0).delay(2000).fadeTo("fast", 0.3);
  }
    else if(playerChoice === "scissors") {
    $(".fa-hand-scissors-o, .playerTurn").fadeTo("fast", 1.0).delay(2000).fadeTo("fast", 0.3);
  }
}


function gameLogic() {


  var computerChoice = Math.floor(Math.random() * attackOptions.length);
  if (computerChoice === 0) {
    computerAttack = "paper";
    $(".fa-hand-scissors-o, .computerTurn").fadeTo("fast", 1.0).delay(2000).fadeTo("fast", 0.3);
  } else if (computerChoice === 1) {
    computerAttack = "rock";
    $(".fa-hand-scissors-o, .computerTurn").fadeTo("fast", 1.0).delay(2000).fadeTo("fast", 0.3);
  } else if (computerChoice === 2) {
    computerAttack = "scissors";
    $(".fa-hand-scissors-o, .computerTurn").fadeTo("fast", 1.0).delay(2000).fadeTo("fast", 0.3);
  }
  console.log(playerChoice, computerAttack)

  if (playerChoice === computerAttack) {
    console.log("tie");
    $(".playerTie").fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3);
  } else if ((playerChoice === "rock" && computerAttack === "paper") || (playerChoice === "paper" && computerAttack === "scissors") || (playerChoice === "scissors" && computerAttack === "rock")) {
    console.log("you lose");

    $(".computerVictory").fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3);
    RPS.gameState.computerScore++;

  } else if ((playerChoice === "rock" && computerAttack === "scissors") || (playerChoice === "scissors" && computerAttack === "paper") || (playerChoice === "paper" && computerAttack === "rock")) {
    console.log("you win!");
    RPS.gameState.userScore++;
    $(".playerVictory").fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3);
  }
  RPS.gameState.roundCount++;

  $("span").each(function() {
    $(this).html(RPS.gameState[$(this).attr("id")]);
  });
}

$(document).ready(function(){
bindControl();  
});