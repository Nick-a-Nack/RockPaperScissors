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
    if (playerMove == computerSelection){
        document.getElementById("anouncement").textContent = "It's a draw! Try again!";
    }
    //This is the Rock Paper Scissors logic. Rock beats scissors, scissors beats paper, paper beats rock.
    else if ((playerMove == "paper" && computerSelection == "rock") ||
             (playerMove == "rock" && computerSelection == "scissors") ||
             (playerMove == "scissors" && computerSelection == "paper")){
                document.getElementById("anouncement").textContent = `Congratulations, ${playerMove} beats ${computerSelection}!`;
                let temp = parseInt(document.getElementsByClassName("playerScore")[0].textContent);
                temp++;
                document.getElementsByClassName("playerScore")[0].textContent = temp;
                if (temp == 5){
                    alert("Congratulations, you won the match!");
                }
             }
    //This should only happen in cases where the player makes a valid move, the opponent doesn't make
    //the same move, and the player's move wasn't a winning move.
    else{
        document.getElementById("anouncement").textContent = `Sorry, ${computerSelection} beats ${playerMove}!`;
                let temp = parseInt( document.getElementsByClassName("computerScore")[0].textContent);
                temp++;
                document.getElementsByClassName("computerScore")[0].textContent = temp;
                if (temp == 5){
                    alert("Oof, computer won the match! Maybe next time!");
                }
    }
}

function game(){
    //Initialize win counts for player and computer, round count to 0
    let playerWin = 0;
    let computerWin = 0;
    
    //States current standings and prompts player for their move
    //The game goes for 5 rounds total unless an invalid move is made by the player
    //If player picks an invalid move, the player is asked to try again and round count is decremented
    //If the player and computer pick the same move, the match continues but round isn't decremented
    //If either the player or computer wins, their respective win counts get incremented
    while (playerWin < 5 && computerWin < 5){

        if (outcome == "invalid"){
            console.log(`Player picked an invalid choice "${playerChoice}", try again!\n`);
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
        else{
            alert(`Welp, better luck next time! The computer won! \nPlayer ${playerWin} Computer ${computerWin}`);
            
            return 0;
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice())
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice())
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice())
});