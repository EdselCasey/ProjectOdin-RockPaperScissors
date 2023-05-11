function getComputerChoice() {
    const computerOptions = ["rock","paper","scissors"]
    const randNum = Math.floor(Math.random() * 3)
    return computerOptions[randNum]
}

function getPlayerChoice(){
    let correctChoice = false;
    let playerSelection;
do {
    let userInput = prompt("Choose Rock, Paper or Scissors...");
    let userInputLowercase = userInput.toLowerCase();
    if (userInputLowercase === "rock" || userInputLowercase === "paper" || userInputLowercase === "scissors") {
        playerSelection = userInputLowercase
        correctChoice = true
    }else{
        console.log("Invalid choice: Choose rock, paper or scissors!")
    }
}while (!correctChoice)
return playerSelection;
}

    

function gameRound() {
    let playerWin = false;
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == computerSelection){
        playerWin = null
        console.log("It's a Draw..");
        return playerWin;
    }
    else if (playerSelection == "rock") {
        if(computerSelection == "paper"){
            playerWin = false
            console.log("You lose!")
            return playerWin;
        }else if(computerSelection == "scissors"){
            playerWin = true;
            console.log("You win!")
            return playerWin;
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "scissors"){
            playerWin = false
            console.log("You lose!")
            return playerWin;
        }else if(computerSelection == "rock"){
            playerWin = true;
            console.log("You win!")
            return playerWin;
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock"){
            playerWin = false
            console.log("You lose!")
            return playerWin;
        }else if(computerSelection == "paper"){
            playerWin = true;
            console.log("You win!")
            return playerWin;
        }
    }
}


function Game(){
let playerScore = 0;
let computerScore = 0;
do {
    roundResult = gameRound();
    if (roundResult === true) {
      playerScore++;
    } else if (roundResult === false) {
      computerScore++;
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}while (playerScore < 3 && computerScore < 3)

if (playerScore > computerScore){
    console.log("You won the game!!")
}else{
    console.log("You lost the game :(")
}
}
Game();