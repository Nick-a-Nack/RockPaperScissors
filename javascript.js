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
                    if (confirm("Play again?")){
                        document.getElementsByClassName("playerScore")[0].textContent = 0;
                        document.getElementsByClassName("computerScore")[0].textContent = 0;
                    }
                    else{
                        let rock = document.getElementsByClassName("rock")[0];
                        rock.disabled = true;
                        rock.removeAttribute("border-color");

                        let paper = document.getElementsByClassName("paper")[0];
                        paper.disabled = true;
                        paper.removeAttribute("border-color");

                        let  scissors = document.getElementsByClassName("scissors")[0];
                        scissors.disabled = true;
                        scissors.removeAttribute("border-color");
                    }
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
                    if (confirm("Play again?")){
                        document.getElementsByClassName("playerScore")[0].textContent = 0;
                        document.getElementsByClassName("computerScore")[0].textContent = 0;
                    }
                    else{
                        let rock = document.getElementsByClassName("rock")[0];
                        rock.disabled = true;
                        rock.removeAttribute("border-color");

                        let paper = document.getElementsByClassName("paper")[0];
                        paper.disabled = true;
                        paper.removeAttribute("border-color");

                        let  scissors = document.getElementsByClassName("scissors")[0];
                        scissors.disabled = true;
                        scissors.removeAttribute("border-color");
                    }
                }
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