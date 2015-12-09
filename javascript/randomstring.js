$(document).ready(function() {
  var playerChoice, computerAttack 
  $(".rock").on("click", function(){
    playerChoice = "rock";
    return playerChoice;
    });

  $(".paper").on("click", function(){
    playerChoice = "paper";
    return playerChoice;
    });

  $(".scissors").on("click", function(){
    playerChoice = "scissors";
    return playerChoice;
    });

  var attackOptions = ["Rock", "Paper", "Scissors"];
  
  $(".rock, .paper, .scissors").on("click", function() {
    var computerChoice = Math.floor(Math.random() * attackOptions.length);
    if (computerChoice ===0) {
    computerAttack = "paper";
    }
    else if (computerChoice ===1) {
    computerAttack = "rock";
    }

    else if (computerChoice ===2) {
    computerAttack= "scissors";
  }
    console.log(playerChoice)
    console.log(computerAttack)

    if (playerChoice === "rock" && computerAttack === "rock") {
        alert("it's a tie!");
      }
 
    else{
      // prompt('you win!')
    }


    
  });
});