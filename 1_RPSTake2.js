// flow: user makes a choice
//       computer makes a choice
//       winner is displayed

// need to create players
// need to create moves
// rules/determine winner

// Nouns: player, move, rule
// Verbs: choose, compare

// we will start by outlining our object factories and the compare method 
// this object factory uses encapsulation which bundles state (data) and behavior
// (operations) to form an object

// we need an engine to orchestrate everything --> const RPSGame object
const readline = require('readline-sync');
const WINS = {ROCK: ['SCISSORS', 'LIZARD'],
PAPER: ['ROCK', 'SPOCK'],
SCISSORS: ['PAPER', 'LIZARD'],
LIZARD: ['SPOCK', 'PAPER'],
SPOCK: ['SCISSORS', 'ROCK']
};
const RPSGame = {  // object
  human: createHuman(), // property with return value of createPlayer as value
  computer: createComputer(), // ^^
  score: [0,0,5],
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (humanMove === computerMove) {
      console.log("It's a tie!");
      return 'tie';
    } else if (WINS[humanMove].includes(computerMove)) {
      console.log('You win!');
      return 'you';
    } else {
      console.log("Computer wins!");
      return 'computer';
    }
  },
  updateScore() {
    let score = this.score;
    let winner = this.displayWinner();
    if (winner === 'computer') {
      score[1] += 1
      score[2] -= 1
    } else if (winner === 'you') {
      score[0] += 1
      score[2] -= 1
    } else {
      score[2] -= 1
    }
    console.log(`=> Current Score \n You: ${score[0]} versus Computer: ${score[1]}
    Games Left: ${score[2]}`);
    return score;
  },
  displayGoodByeMessage() {
    console.log('Thanks for Playing!');
  },
  playAgain() {
    let answer;
    while (true) {
      console.log('Do you want to play again? y or n');
      answer = readline.question();
      if (['y','no'].includes(answer.toLowerCase())) break;
      console.log("Invalid response");
    }
    return answer === 'n';
  },
  displayFinalScore(){
    if (this.score[1] === this.score[0]) {
      console.log( "GameOver, tied game")
    } else {
      return this.score[0] > this.score[1] ? console.log('Game Over You Won!') : 
      console.log('Game Over Computer Wins')
    }
  },
  displayPreviousMoves() {
    console.log(`Your previous moves: ${this.human.priorMoves}. Computer's previous moves: ${this.computer.priorMoves}`)
  },
  play() { // method - operation - this is function in compact syntax form
    this.displayWelcomeMessage(); // since displayWelcomeMessage() function is in the
                                //  same object as play, we must use this to call it
    while (this.score[2] > 0) {
      this.human.choose(); // accessing property choose from this human property
      this.computer.choose(); // accessing property choose from this compuer property
      this.updateScore()
      this.displayPreviousMoves()
      if (!this.score[2] > 0 || this.playAgain()) break;
    }
    this.displayFinalScore()
    this.displayGoodByeMessage();
  },
};

function createPlayer() {
  return {
    move: null,
    priorMoves: []
  };
}

function createHuman () {
  let playerObject = createPlayer();
  let humanObj = {
    choose() {
      let choice;
      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock','paper','scissors'].includes(choice.toLowerCase())) break;
        console.log('Invalid selection, try again')
      }
      this.move = choice.toUpperCase();
      this.priorMoves.push(choice)
    },
  };
  return Object.assign(playerObject, humanObj);
}

function createComputer () {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      let weighedOptions = weighOptions(RPSGame.human.priorMoves)
      let choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
      choices = choices.concat(weighedOptions)
      console.log(`choices weighted: ${choices} `)
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex].toUpperCase();
      this.priorMoves.push(choices[randomIndex])
    },
  };
  return Object.assign(playerObject, computerObject);
}

function weighOptions (previousHands) {
  let weightedOptions = []
  previousHands.forEach(val => {
    console.log(`val: ${val}`)
    for (win in WINS) {
      if (WINS[win].includes(val.toUpperCase())) {
        weightedOptions.push(win.toLowerCase())
        break;
      }
    }
  })
  return weightedOptions
}

RPSGame.play();