function getComputerChoice(){
    
    let choice = (Math.floor(Math.random()*100) % 3) + 1;
    if (choice === 1){
        return "rock";
    }
    else if (choice === 2){
        return "paper";
    }
    else if (choice === 3){
        return "scissors";
    }
    else{
        return null;
    }
}

function playRound(playerSelection, computerSelection){
    //playerSelection is set to lowercase
    let playerMove = playerSelection.toLowerCase();
    if (playerMove != "rock" || playerMove != "paper" || playerMove != "scissors"){
        return `Invalid player move "${playerMove}"`;
    }
    if (playerMove == computerSelection){
        return `It's a draw! You and the computer both picked ${playerSelection}`;
    }
    else if ((playerMove == "paper" && computerSelection == "rock") ||
             (playerMove == "rock" && computerSelection == "scissors") ||
             (playerMove == "scissors" && computerSelection == "paper")){
                return `You won! ${playerMove} beats ${computerSelection}`;
             }
    else{
        return `You lose! ${computerSelection} beats ${playerMove}`;
    }
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let roundCount = 0;
    
    while (++roundCount < 6){
        
    }
}