let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

let isAutoPlaying = false;
let setIntervalId;

//const autoPlay = () => {}
function autoplay(){
  if(!isAutoPlaying){
  intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;
} else{
  clearInterval(intervalId);
  isAutoPlaying = false;
}
}

document.querySelector('.js-rock-button')
  .addEventListener('click', ()=> {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', ()=> {
    playGame('paper');
    });

 document.querySelector('.js-scissors-button')
    .addEventListener('click', ()=> {
      playGame('scissors');
      });
      
//example of using event keydown//
document.body.addEventListener('keydown', (event)=> {
  if(event.key === 'r'){
    playGame('rock');
}else if(event.key === 'p'){
  playGame('paper');
}else if(event.key=== 's'){
  playGame('scissors');
}
});

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';
if (playerMove === 'Scissors') {
  if(computerMove === 'Rock') {
  result = 'You lose';
} else if(computerMove === 'Paper') {
  result = 'You win';
} else if(computerMove === 'Scissors') {
  result = 'Tie';
}
} 
else if (playerMove === 'Paper') {
  if(computerMove === 'Rock') {
  result = 'You win';
} else if(computerMove === 'Paper') {
  result = 'Tie';
} else if(computerMove === 'Scissors') {
  result = 'You lose';
} }
else if (playerMove === 'Rock') {
  if(computerMove === 'Rock') {
  result = 'Tie';
} else if(computerMove === 'Paper') {
  result = 'You lose';
} else if(computerMove === 'Scissors') {
  result = 'You win';
}
}


if (result === 'You win') {
  score.wins+=1;
} else if (result === 'You lose') {
  score.losses+=1;
} else if (result === 'Tie') {
  score.ties +=1;
}
localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;


}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove () {
const randomNumber = Math.random();

let computerMove = '';

if(randomNumber >= 0 &&randomNumber <= 1/3) {
  computerMove = ('Rock');
} else if (randomNumber >= 1/3 && randomNumber <= 2/3){
  computerMove = ('Paper');
} else if (randomNumber >= 2/3 && randomNumber < 1){
  computerMove = ('Scissors');
} 

return computerMove;
}
