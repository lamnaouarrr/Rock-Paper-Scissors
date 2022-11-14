let computerScore = 0;
let playerScore = 0;
let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Draw! you got no point";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"){
        playerScore =+1;
        return "One point for you! "+playerSelection+" beats "+computerSelection+".";
    }
    else{
        computerScore =+1;
        return "The computer got one point! "+computerSelection+" beats "+playerSelection+".";
    }
}

function game() {
    for (let i = 1; i <= 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("What is your weapon? Rock, Paper or Scissors?");
        alert(playRound(playerSelection.toLowerCase(), computerSelection));
    }
    if (computerScore == playerScore){
        alert("Draw!\nYour score is: "+playerScore+"\nComputer's score is: "+computerScore);
    }
    else if(computer > player){
        alert("Unlucky,you lose.\nYour score is: "+playerScore+"\nComputer's score is: "+computerScore);
    }
    else{
        alert("Congratulations, you win!\nYour score is: "+playerScore+"\nComputer's score is: "+computerScore);
    }
}

game();

