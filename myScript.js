function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice){
    pIndex = choices.indexOf(playerChoice);
    cIndex = choices.indexOf(computerChoice);
    if ((pIndex + 1) % choices.length == cIndex){
        h1.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        playerScore++;
        console.log(playerChoice, '->', computerChoice);
    }
    else if ((cIndex + 1) % choices.length == pIndex){
        h1.textContent = `You lose. ${computerChoice} beats ${playerChoice}!`;
        computerScore++;
        console.log(playerChoice, '<-', computerChoice);
    }
    else if (pIndex == cIndex){
        h1.textContent = 'Tied game.';
        console.log(playerChoice, '--', computerChoice);
    }
    else{ h1.textContent = 'Invalid input.'; }
    scoreText.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
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
