/* 

Game Name: Rock Paper Scissor

- offer user to play this game
- if user accepts, then we will start the game
- once the game starts, we will ask an input(rock, paper or scissor) from the user
- take that input and we will store it
- our automated code/computer will choose one option out of this rock, paper and scissor
- we will compare both the response, and will determine the winner
- we will notify the user

Rules:
1. rock beats scissor
2. scissor beats paper
3. paper beats rock

To-Do:
1. add a recurring option
2. add a html/css
3. refactor the code

*/

// Requesting to play game
var startGame = confirm("Let's Play Rock-Paper-Scissor game?");

if (startGame) {
  var input = prompt("Please write Rock, Paper or Scissor"); // Taking input from user
  var playerInput = input.toLowerCase(); // making it lowercase

  // If input is correct
  if (
    playerInput == "rock" ||
    playerInput == "paper" ||
    playerInput == "scissor"
  ) {
    
    // Computer Choice
    var computerChoice = Math.random();  // return a value between 0 - 1
    if (computerChoice < 0.33) {
      computerChoice = "rock";
    } else if (computerChoice < 0.66) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissor";
    }

    // Compare Response

    var result;

    if (playerInput == computerChoice) {
        result = 'Match Tie'
    } else if ( playerInput == 'rock' && computerChoice == 'scissor') {
        result = 'Player Wins'
    } else if ( playerInput == 'scissor' && computerChoice == 'paper') {
        result = 'Player Wins'
    } else if (playerInput == 'paper' && computerChoice == 'rock') {
        result = 'Player Wins'
    } else {
        result = 'Computer Wins'
    }

    alert(`Player Choose ${playerInput} \n Computer Choose ${computerChoice} \n ${result} `)

  } else {
    // If input is wrong or empty
    alert("You haven't passed correct Response, please try again");
  }
} else {
  alert("Okay, maybe next time");
}
