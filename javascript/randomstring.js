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
    console.log(playerChoice, computerAttack)


    if (playerChoice === computerAttack) {
        console.log("tie");
      }
    
    else if ((playerChoice === "rock" && computerAttack ==="paper")||(playerChoice === "paper" && computerAttack ==="scissors")||(playerChoice === "scissors" && computerAttack ==="rock")) {
    console.log("you lose");
    }

    else if ((playerChoice === "rock" && computerAttack ==="scissors")||(playerChoice === "scissors" && computerAttack ==="paper")||(playerChoice === "paper" && computerAttack ==="rock"))  {
        console.log("you win!");
    }
 


    
  });
});