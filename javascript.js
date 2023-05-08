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
    if (!(playerMove == "rock") && !(playerMove == "paper") && !(playerMove == "scissors")){
        return "invalid";
    }
    if (playerMove == computerSelection){
        return "draw";
    }
    else if ((playerMove == "paper" && computerSelection == "rock") ||
             (playerMove == "rock" && computerSelection == "scissors") ||
             (playerMove == "scissors" && computerSelection == "paper")){
                return "win";
             }
    else{
        return "loss";
    }
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let roundCount = 0;
    
    while (++roundCount < 6){
        console.log(`Current score: \nPlayer ${playerWin}\nComputer: ${computerWin}\n`)
        let playerChoice = prompt("Will you play Rock, Paper, or Scissors?")
        let computerChoice = getComputerChoice();
        let outcome = playRound(playerChoice, computerChoice);
        if (outcome == "invalid"){
            console.log(`Player picked an invalid choice "${playerChoice}", try again!\n`);
            roundCount--;
        }
        else if (outcome == "draw"){
            console.log(`It's a draw! Both players picked ${playerChoice}.\n`)
        }
        else if (outcome == "win"){
            playerWin++;
            console.log(`Congratulations, you won with ${playerChoice}! `)
        }
        else if (outcome == "loss"){
            computerWin++;
            console.log(`Oof, you lost to the opponent's ${computerChoice}`)
        }
        else{
            console.log("Something went wrong, exitting!");
            return -1;
        }
    }
    if (playerWin > computerWin){
        alert(`Congratulations, you won the game! \nPlayer ${playerWin} Computer ${computerWin}`);
        return 0;
    }
    else if (playerWin == computerWin){
        alert(`It's a draw! You and the computer are both losers! \nPlayer ${playerWin} Computer ${computerWin}`);
        return 0;
    }
    else{
        alert(`Welp, better luck next time! The computer won! \nPlayer ${playerWin} Computer ${computerWin}`);
        
        return 0;
    }

    return 0;
}