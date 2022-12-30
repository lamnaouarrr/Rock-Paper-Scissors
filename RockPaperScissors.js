let computerScore = 0;
let playerScore = 0;
let computerChoice = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let rounds = 0;
const container = document.querySelector('#container');
const content = document.createElement('div');

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function checkRound(){
    if (computerScore == playerScore){
        content.textContent = "Draw!\nYour score is: "+playerScore+"\nComputer's score is: "+computerScore;
    }
    else if(computerScore > playerScore){
        content.textContent = "Unlucky,you lose.\nYour score is: "+playerScore+"\nComputer's score is: "+computerScore;
    }
    else{
        content.textContent = "Congratulations, you win!\nYour score is: "+playerScore+"\nComputer's score is: "+computerScore;
    }
}

function initialize(){
    computerScore = 0;
    playerScore = 0;
    rounds = 0;
}


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection == computerSelection){
        content.textContent = "Draw! you got no point";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        content.textContent = "One point for you! "+playerSelection+" beats "+computerSelection+".";
    }
    else{
        computerScore++;
        content.textContent = "The computer got one point! "+computerSelection+" beats "+playerSelection+".";
    }
    if(rounds == 4){
        checkRound();
        initialize();
    }
    container.appendChild(content);
}

document.getElementById('button1').addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    rounds++;
});
document.getElementById('button2').addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    rounds++;
});
document.getElementById('button3').addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    rounds++;
});

content.style.color = 'black';
container.appendChild(content);