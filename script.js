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

//create a round of rock paper scissors(player choice parameter, computer choice paramater)
  const playRound = (playerChoice, computerChoice) => {
  //lowercase player choice
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice !== 'rock' && playerChoice !== 'scissors' && playerChoice !== 'paper') {
    while (playerChoice !== 'rock' && playerChoice !== 'scissors' && playerChoice !== 'paper'){
      playerChoice = prompt('Enter valid response');
    }
  }
  //if player chooses rock
  if (playerChoice === 'rock') {
    //if computer chooses scissors
    if (computerChoice === 'scissors') {
      //return 'player wins'
      console.log('You Win! Rock shatters Scissors!');
      return 'player';
    }
    // if computer chooses paper
    else if(computerChoice === 'paper') {
      //return 'computer wins'
      console.log('You Lose! Paper Wraps Rock!');
      return 'computer';
          }
    // else return draw
    else {
      console.log(`Draw! You Both Selected ${playerChoice}!`);
      return 'draw';
    }
  }

  if (playerChoice === 'scissors') {
    //if computer chooses paper
    if (computerChoice === 'paper') {
      //return 'player wins'
      console.log('You Win! Scissors Shreds Paper!');
      return 'player';
    }
    // if computer chooses rock
    else if(computerChoice === 'rock') {
      //return 'computer wins'
      console.log('You Lose! Rock Shatters Scissors!');
      return 'computer';
    }
    // else return draw
    else {
      console.log(`Draw! You Both Selected ${playerChoice}!`);
      return 'draw';
    }
  }

  if (playerChoice === 'paper') {
    //if computer chooses rock
    if (computerChoice === 'rock') {
      //return 'player wins'
      console.log( 'You Win! Paper Wraps Rock!');
      return 'player';
    }
    // if computer chooses scissors
    else if(computerChoice === 'scissors') {
      //return 'computer wins'
      console.log('You Lose Scissors Shreds Paper!');
      return 'computer';
    }
    // else return draw
    else {
      console.log(`Draw! You Both Selected ${playerChoice}!`);
      return 'draw';
    }
  }
}

  const game = () => {
    //keep score
    let playerScore = 0;
    let computerScore = 0;

      // prompt playerChoice
      // let playerChoice = prompt('rock, paper, or scissors?');
      //run game save to result var
      let result = playRound(playerChoice, getComputerChoice());
      //if result equals 'player' incriment player score
      if(result === 'player'){
         //log player gets a point
        playerScore++;
        console.log(`Player's Score is ${playerScore}!`);
      }
      //if result equals 'computer'
      else if (result ==='computer'){
        //log computer gets a point
        computerScore++;
        console.log(`Computer's score is ${computerScore}!`);
      }
      else {
        //log neither player gets a point
        console.log('Neither player gets a point!')
      }
    //console.log(score)
    console.log(`The Final Score Is: Player ${playerScore} Computer ${computerScore}`);
    if (playerScore > computerScore){
      console.log ('Player Wins!');
    } else if (playerScore < computerScore) {
      console.log('Computer Wins!')
    } else {
      console.log('The Game Is A Draw!');
    }
  }
  game();