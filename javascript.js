function getComputerChoice(){
    //Computer choice is randomly generated
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

function isValid(choice){
    if (choice == "rock" || choice == "paper" || choice == "scissors"){
        return true;
    }
    else{
        return false;
    }
}

function playRound(playerSelection, computerSelection){
    //playerSelection is set to lowercase for equality testing
    let playerMove = playerSelection.toLowerCase();
    if (!isValid(playerMove)){
        return "invalid";
    }
    if (playerMove == computerSelection){
        return "draw";
    }
    //This is the Rock Paper Scissors logic. Rock beats scissors, scissors beats paper, paper beats rock.
    else if ((playerMove == "paper" && computerSelection == "rock") ||
             (playerMove == "rock" && computerSelection == "scissors") ||
             (playerMove == "scissors" && computerSelection == "paper")){
                return "win";
             }
    //This should only happen in cases where the player makes a valid move, the opponent doesn't make
    //the same move, and the player's move wasn't a winning move. I can't see an edge case here that needs
    //to be accounted for.
    else{
        return "loss";
    }
}

function game(){
    //Initialize win counts for player and computer, round count to 0
    let playerWin = 0;
    let computerWin = 0;
    let roundCount = 0;
    
    //States current standings and prompts player for their move
    //The game goes for 5 rounds total unless an invalid move is made by the player
    //If player picks an invalid move, the player is asked to try again and round count is decremented
    //If the player and computer pick the same move, the match continues but round isn't decremented
    //If either the player or computer wins, their respective win counts get incremented
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