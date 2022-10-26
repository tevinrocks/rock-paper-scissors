let rounds = 5;
let playerScore = 0; //keep score
let computerScore = 0; //keep score
let winner = document.createTextNode('p') //instantiate winner node
let selection = document.querySelectorAll('.game');
let btn = document.querySelector('button');
let domComputerScore = document.querySelector('#computer-score'); //instantiate computer score var
let domPlayerScore = document.querySelector('#player-score'); //instantiate player score var
let res = document.querySelector('.result p');

let reset = () => {
  rounds = 5;
  playerScore = 0;
  computerScore = 0;
  domComputerScore.textContent = 0;
  domPlayerScore.textContent = 0;
  res.textContent = '';
  winner.remove();
}

btn.addEventListener('click', e => {
  reset();
    e.target.classList.add('hide');
  })

//get computer choice function
const getComputerChoice = () => {
  //randomize number 1-3
  let randomNum = Math.floor(Math.random() * 3) + 1;
  //if number is 1
  if (randomNum === 1) {
    //return rock
    return 'rock';
  }
  //if number is 2
  else if (randomNum === 2) {
    //return paper
    return 'paper';
  }
  else {
  //else return scissors
    return 'scissors';
  }
};

  selection.forEach(select => {
        select.addEventListener('click', (e) => {
          if(rounds === 0){
            console.log('That was the game!');
          } else {
          let choice = e.target.parentNode.id;
          game(choice, getComputerChoice())
          rounds--;
           }
        })
      })

//create a round of rock paper scissors(player choice parameter, computer choice paramater)
const playRound = (playerChoice, computerChoice) => {
  //lowercase player choice
  playerChoice = playerChoice.toLowerCase();
  //if player chooses rock
  if (playerChoice === 'rock') {
    //if computer chooses scissors
    if (computerChoice === 'scissors') {
      res.textContent = 'You Win! Rock shatters Scissors!'; //update result in dom
      return 'player';  //return 'player wins'
    }
      // if computer chooses paper
    else if(computerChoice === 'paper') {
      res.textContent = 'You Lose! Paper Wraps Rock!'; //update result in dom
      return 'computer'; //return 'computer wins'
    }
    else {
      res.textContent = `Draw! You Both Selected ${playerChoice}!`; //update result in dom
      return 'draw';  // else return draw
    }
  }

  if (playerChoice === 'scissors') {
    //if computer chooses paper
    if (computerChoice === 'paper') {
      res.textContent = `You Win! Scissors Shreds Paper!` //update result in dom
      return 'player';  //return 'player wins'
    }
    // if computer chooses rock
    else if(computerChoice === 'rock') {
      res.textContent = `You Lose! Rock Shatters Scissors!` //update result in dom
      return 'computer'; //return 'computer wins'
    }
    else {
      res.textContent = `Draw! You Both Selected ${playerChoice}!` //update result in dom
      return 'draw'; // else return draw
    }
  }

  if (playerChoice === 'paper') {
    //if computer chooses rock
    if (computerChoice === 'rock') {
      res.textContent = `You Win! Paper Wraps Rock!`;//update result in dom
      return 'player'; //return 'player wins'
    }
    // if computer chooses scissors
    else if(computerChoice === 'scissors') {
      res.textContent = `You Lose Scissors Shreds Paper!`; //update result in dom
      return 'computer'; //return 'computer wins'
    }
    else {
      res.textContent = `Draw! You Both Selected ${playerChoice}!`; //update result in dom
      return 'draw'; // else return draw
    }
  }
}
const game = (playerChoice, computerChoice) => {
  //run game save to result var
  let result = playRound(playerChoice, getComputerChoice());
  //if result equals 'player' incriment player score
  if(result === 'player') {
    playerScore++; //incriment player score

    domPlayerScore.textContent = playerScore; //update player score on dom
  }
  //if result equals 'computer'
  if (result ==='computer'){
    computerScore++; //incriment computer score

    domComputerScore.textContent = computerScore; //update computer score on dom
  }
  //procedure for end game
  if(rounds === 1) {
    const finalRound = document.querySelector('.result p'); //instantiate finalRound variable inside html result;
    finalRound.textContent = `The Final Score Is: Player ${playerScore} Computer ${computerScore}`; //display final score on dom
    //if player wins
    if (playerScore > computerScore) {
      winner.textContent = 'Player Wins!';  //adjust text inside winner node
      finalRound.parentNode.appendChild(winner); //appending winner node
    }
    //if computer wins
    else if (playerScore < computerScore) {
      winner.textContent = 'Computer Wins!'; //adjust text inside winner node
      finalRound.parentNode.appendChild(winner); //appending winner node
    }
    //game ends in a draw
    else {
      winner.textContent = 'Game ended in a draw!' //adjust text inside winner node
      finalRound.parentNode.appendChild(winner); //appending winner node
    }
      btn.classList.remove('hide'); //display reset button
    }
  }