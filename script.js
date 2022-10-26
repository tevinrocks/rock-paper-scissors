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

  let btn = document.querySelector('button');

  let rounds = 10;
  let selection = document.querySelectorAll('.game');

  btn.addEventListener('click', e => {
    e.target.classList.add('hide');
  })
  selection.forEach(select => {
        select.addEventListener('click', (e) => {
          if(rounds === 0){
            console.log('That was the game!');
          } else {
          let choice = e.target.parentNode.id;
          game(choice,getComputerChoice())
          rounds--;
           }
        })
      })


//create a round of rock paper scissors(player choice parameter, computer choice paramater)
  const playRound = (playerChoice, computerChoice) => {
  //lowercase player choice
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice !== 'rock' && playerChoice !== 'scissors' && playerChoice !== 'paper') {
    while (playerChoice !== 'rock' && playerChoice !== 'scissors' && playerChoice !== 'paper'){
      playerChoice = prompt('Enter valid response');
    }
  }
  let res = document.querySelector('.result p');
  //if player chooses rock
  if (playerChoice === 'rock') {
    //if computer chooses scissors
    if (computerChoice === 'scissors') {
      //return 'player wins'
      res.textContent = 'You Win! Rock shatters Scissors!'
      return 'player';
    }
    // if computer chooses paper
    else if(computerChoice === 'paper') {
      //return 'computer wins'
      res.textContent = 'You Lose! Paper Wraps Rock!'
      return 'computer';
          }
    // else return draw
    else {
      res.textContent = `Draw! You Both Selected ${playerChoice}!`
      return 'draw';
    }
  }

  if (playerChoice === 'scissors') {
    //if computer chooses paper
    if (computerChoice === 'paper') {
      //return 'player wins'
      res.textContent = `You Win! Scissors Shreds Paper!`
      return 'player';
    }
    // if computer chooses rock
    else if(computerChoice === 'rock') {
      //return 'computer wins'
      res.textContent = `You Lose! Rock Shatters Scissors!`
      return 'computer';
    }
    // else return draw
    else {
      res.textContent = `Draw! You Both Selected ${playerChoice}!`
      return 'draw';
    }
  }

  if (playerChoice === 'paper') {
    //if computer chooses rock
    if (computerChoice === 'rock') {
      //return 'player wins'
      res.textContent = `You Win! Paper Wraps Rock!`;
      return 'player';
    }
    // if computer chooses scissors
    else if(computerChoice === 'scissors') {
      //return 'computer wins'
      res.textContent = `You Lose Scissors Shreds Paper!`;
      return 'computer';
    }
    // else return draw
    else {
      res.textContent = `Draw! You Both Selected ${playerChoice}!`;
      return 'draw';
    }
  }
}
    let playerScore = 0;//keep score
    let computerScore = 0;//keep score
    const game = (playerChoice, computerChoice) => {
      // let playerChoice = prompt('rock, paper, or scissors?');
      //run game save to result var
      let result = playRound(playerChoice, getComputerChoice());
      //if result equals 'player' incriment player score
      if(result === 'player'){
         //log player gets a point
        playerScore++;
        let domPlayerScore = document.querySelector('#player-score');
        domPlayerScore.textContent = playerScore;
      }
      //if result equals 'computer'
      if (result ==='computer'){
        //log computer gets a point
        computerScore++;
        let domPlayerScore = document.querySelector('#computer-score');
        domPlayerScore.textContent = computerScore;
      }
    if(rounds === 1) {
    const finalRound = document.querySelector('.result p');
    finalRound.textContent = `The Final Score Is: Player ${playerScore} Computer ${computerScore}`;
    if (playerScore > computerScore){
      let winner = document.createTextNode('p');
      winner.textContent = 'Player Wins!';
      finalRound.parentNode.appendChild(winner);
    } else if (playerScore < computerScore) {
      let winner = document.createTextNode('p')
      winner.textContent = 'Computer Wins!'
      finalRound.parentNode.appendChild(winner)
    } else {
      let winner = document.createTextNode('p')
      winner.textContent = 'Game ended in a draw!'
      finalRound.parentNode.appendChild(winner)
    }
      btn.classList.remove('hide');
    }
  }


