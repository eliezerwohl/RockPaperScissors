window.helloGoodbye = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    // var tagName = $(this).data("tag");
    // helloGoodbye.gameState[tagName]++;
    prompt('herro')

    // $("#" + tagName).html(helloGoodbye.gameState[tagName]);
  });

});

