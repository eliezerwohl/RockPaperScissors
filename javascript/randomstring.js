var playerChoice, computerAttack, userScore, computerScore;
var attackOptions = ["Rock", "Paper", "Scissors"];

function bindControl() {
  $(".btn").on("click", function() {          
    playerChoice = $(this).attr('data-choice'); 
    playersMove();  
    setTimeout(removePlayerAnimation, 2000);
    setTimeout(gameLogic, 3000);
    // gameLogic();
  });
}

function playersMove(){
   $(".btn").off();

  console.log(playerChoice)
  if (playerChoice === "rock") {
    $(".fa-hand-rock-o").fadeTo("slow", 1.0).delay(1500).fadeTo("slow", 0.3);
  }
  else if(playerChoice === "paper") {
    $(".fa-hand-paper-o").fadeTo("slow", 1.0).delay(1500).fadeTo("slow", 0.3);
  }
    else if(playerChoice === "scissors") {
    $(".fa-hand-scissors-o").fadeTo("slow", 1.0).delay(1500).fadeTo("slow", 0.3);
  }
}

function removePlayerAnimation() {
  $(".fa").removeClass("slideDown");
}

function gameLogic() {


  var computerChoice = Math.floor(Math.random() * attackOptions.length);
  if (computerChoice === 0) {
    computerAttack = "paper";
    $(".fa-hand-paper-o").addClass("slideUp");

    setTimeout(function() {
      $(".fa-hand-paper-o").removeClass("slideUp");
      bindControl();
    }, 700);
  } else if (computerChoice === 1) {
    computerAttack = "rock";

    $(".fa-hand-rock-o").addClass("slideUp");
    setTimeout(function() {
      $(".fa-hand-rock-o").removeClass("slideUp");
      bindControl();
    }, 700);
  } else if (computerChoice === 2) {
    computerAttack = "scissors";

    $(".fa-hand-scissors-o").addClass("slideUp");
    setTimeout(function() {
      $(".fa-hand-scissors-o").removeClass("slideUp");
      bindControl();
    }, 700);
  }
  console.log(playerChoice, computerAttack)

  if (playerChoice === computerAttack) {
    console.log("tie");
  } else if ((playerChoice === "rock" && computerAttack === "paper") || (playerChoice === "paper" && computerAttack === "scissors") || (playerChoice === "scissors" && computerAttack === "rock")) {
    console.log("you lose");
    RPS.gameState.computerScore++;

  } else if ((playerChoice === "rock" && computerAttack === "scissors") || (playerChoice === "scissors" && computerAttack === "paper") || (playerChoice === "paper" && computerAttack === "rock")) {
    console.log("you win!");
    RPS.gameState.userScore++;
  }
  RPS.gameState.roundCount++;

  $("span").each(function() {
    $(this).html(RPS.gameState[$(this).attr("id")]);
  });
}

$(document).ready(function(){
  bindControl();  
});
