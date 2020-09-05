const readline = require('readline-sync');
const WINS = { ROCK: ['SCISSORS', 'LIZARD'],
  PAPER: ['ROCK', 'SPOCK'],
  SCISSORS: ['PAPER', 'LIZARD'],
  LIZARD: ['SPOCK', 'PAPER'],
  SPOCK: ['SCISSORS', 'ROCK']
}

let RPSGame = {
  player: createHuman(), // return value is an object, so they are collaborator objects
  computer: createComputer(),
  score: [0,0,5],
  //insert methods
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!')
  },
  determineWinner(){
    let playerHand = this.player.currentHand().toUpperCase();
    let computerHand = this.computer.currentHand().toUpperCase();
    console.log(`Player: ${playerHand}`)
    console.log(`Computer: ${computerHand}`)
    let result;
    if (playerHand === computerHand) {
      result = 'Tie'
    } else if (WINS[playerHand].includes(computerHand)) {
      result = 'You win!'
    } else {
      result = 'You Lose!'
    }
    console.log(result);
    return this.updateScore(result)
  },
  updateScore(roundResult) {
    let score = this.score;
    if (roundResult === 'Tie') {
      score[2] -= 1;
    } else if (roundResult === 'You win!') {
      score[0] += 1;
      score[2] -= 1;
    } else {
      score[1] += 1;
      score[2] -= 1;
    }
    console.log(`CurrentScore -- You: ${score[0]} versus Computer ${score[1]}  Games Left: ${score[2]} `)
  },
  diplayGoodByeMessage() {
    console.log('Thanks for playing')
  },
  playAgain() {
    let answer
    while (true) {
      console.log('Do you want to play again? y/n') 
      answer = readline.question();
      if (['y', 'Y','n','N'].includes(answer)) break
      console.log('Invalid response')
    }
    return answer.toLowerCase() === 'n';
  },
  displayFinalScore() {
    console.log(`Your Previous Hands: ${this.player.previousHands}`)
    console.log(`Computer's Previous Hands: ${this.computer.previousHands}`)
    if (this.score[0] === this.score[1]) {
      console.log('You tied')
    } else if (this.score[0] > this.score[1]) {
      console.log("You won overall!")
    } else {
      console.log("Computer won overall!")
    }
  },
  play() {
    this.displayWelcomeMessage();
    while (this.score[2] > 0) {
      this.determineWinner();
      if (this.score[2] === 0) break
      if (this.playAgain()) break
    }
    this.displayFinalScore();
    this.diplayGoodByeMessage();
    
    //insert method calls
    //display welcome message
    //ask player what to do 
    //have computer generate card
    //compare scores 
    //keep game to 5 games

  }
}
function createHuman() {
  return {
    previousHands: [],
    // can insert new property move: and have method below update it via 'this.move = answer'
    currentHand() {
      let answer; 
      while (true) {
        console.log('Please choose rock, paper, scissors, spock, or lizard:')
        answer = readline.question()
        if (['rock','paper','scissors', 'spock','lizard'].includes(answer)) break
        console.log('Invalid response')
      }
      this.previousHands.push(answer)
      return answer
    },
  }
}

function createComputer() {
  return {
    previousHands: [],
    currentHand() {
      let choices = ['rock','paper','scissors', 'spock','lizard']
      let randomIndex = Math.floor(Math.random()*choices.length)
      this.previousHands.push(choices[randomIndex])
      return choices[randomIndex].toUpperCase()
      }
    }
  }

RPSGame.play()