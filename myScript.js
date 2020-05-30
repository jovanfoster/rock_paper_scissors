function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice){
    pIndex = choices.indexOf(playerChoice);
    cIndex = choices.indexOf(computerChoice);
    if (pIndex % choices.length - 1 < cIndex % choices.length - 1){
        h1.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        playerScore++;
    }
    else if (pIndex % choices.length - 1 > cIndex % choices.length - 1){
        h1.textContent = `You lose. ${computerChoice} beats ${playerChoice}!`;
        computerScore++;
    }
    else if (pIndex % choices.length - 1 == cIndex % choices.length - 1){
        h1.textContent = 'Tied game.';
    }
    else{ h1.textContent = 'Invalid input.'; }
    scoreText.textContent = `You: ${playerScore}  Computer: ${computerScore}`;

/*
    if (playerChoice == 'rock'){
        if (computerChoice == 'scissors'){
            h1.textContent = `You win! Rock beats Scissors!`;
            playerScore++;
        }
        else if (computerChoice == 'paper'){
            h1.textContent = `You lose! Paper beats Rock!`;
            computerScore++;
        }
        else if (computerChoice == 'rock'){
            h1.textContent = `It's a tie! You both played Rock!`;
        }
    }
    else if (playerChoice == 'paper'){
        if (computerChoice == 'rock'){
            h1.textContent = `You win! Paper beats Rock!`;
            playerScore++;
        }
        else if (computerChoice == 'scissors'){
            h1.textContent = `You lose! Paper beats Rock!`;
            computerScore++;
        }
        else if (computerChoice == 'paper'){
            h1.textContent = `It's a tie! You both played Paper!`;
        }
    }
    else if (playerChoice == 'scissors'){
        if (computerChoice == 'paper'){
            h1.textContent = `You win! Scissors beats Paper!`;
            playerScore++;
        }
        else if (computerChoice == 'rock'){
            h1.textContent = `You lose! Rock beats Scissors!`;
            computerScore++;
        }
        else if (computerChoice == 'scissors'){
            h1.textContent = `It's a tie! You both played scissors!`;
        }
    }
    else { h1.textContent = 'Invalid input.'; } 
    */
}

let choices = ['paper', 'rock', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const scoreText = document.createElement('h1');
scoreText.textContent = `You: ${playerScore}  Computer: ${computerScore}`;

const h1 = document.createElement('h1');
h1.textContent = '';

const selection = document.querySelectorAll('.selection');
let playerChoice;

selection.forEach((button) => {
    button.addEventListener('click', function makeSelection(e) {
        playerChoice = button.id;
        h1.textContent = `You chose ${playerChoice}.`;
    });
  });

const play = document.querySelector('#play');

play.addEventListener('click', (e) => playRound(playerChoice, computerPlay()));

const body = document.querySelector('body');
body.appendChild(h1);
body.appendChild(scoreText);
