// we will develop a factor function for objects that represent books

// attribute:
//   title: Mythos
//   Author: Stephen Fry

// Behavior:
//   console.log(this.title)
//   console.log(this.author)

//   let createBooks = (Title, Author, read = false) => {
//     return {
//       Title,
//       Author,
//       read,

//     readBook() {
//       this.read = true;
//     },

//     printAttributes() {
//       let result = ''
//       console.log(`${this.Title} was written by ${this.Author}.
//        I ${this.read ? 'have' : 'havent'} read it.`)
//       },
//     }
//   }
//   let books = [['Mythos', 'Stephen Fry'],
//    ['Me Talk Pretty One Day', 'David Sedaris'],
// ["Aunts aren't Gentlemen", "PG Wodehouse"]]

// books.forEach((book, idx) => {
//   let [title, author, read] = book;
//   if (title === "Aunts aren't Gentlemen") {
//     this.read = true
//   }
//   console.log(createBooks(title, author))
// })

// let mythos = createBooks ('Mythos', 'Stephen Fry', false)

// mythos.printAttributes(); // Mythos was written by
//                            David Fry. I haven't read it.
// mythos.readBook();
// mythos.printAttributes()


// nouns: player, move, rule
// verbs: choose, compare
const readline = require('readline-sync');
const RPSGame = {
  human: createHuman(),  // player object is a property of the RPSGame object
  computer: createComputer(), // this means they collaborate with ^^
  displayWelcomeMessage () {  // this is a mothod
    console.log("Welcome to Rock, Paper, Scissors!");
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock')  ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
                    (humanMove === 'paper' && computerMove === 'scissors') ||
                    (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer Wins!');
    } else {
      console.log("It's a tie!");
    }
  },

  displayGoodByeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },
  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },
  play() { // method with methods
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodByeMessage();
  }
};

function createPlayer() {
  return {
    move: null, // good practice to initialize object properties explicity,
    // makes it easy to see what the initial state of the object looks like
  };
}

function createComputer () {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman () {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log("Please choose rock, paper");
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Invalid choice, please try again');
      }
      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

RPSGame.play();


// only difference between the factory functions is the code used to implement
// the choose methods.
// The code that uses these objects can treat them both as "players" and call
// their choose method
// the human and computer object types are subtypes of the player type
// sub-types often share multiple properties and methods
// javascript provide some constructs that help extract such duplications
// for example the move property of the createHuman and createComputer

