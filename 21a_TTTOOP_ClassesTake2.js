// tic tac toe game in OOP
// 1) write a textual description of the problem or exercise
// 2) extract the significant nouns and verbs from the description
// 3) organize and associate the verbs with the nouns

// 1 - Description
// the game is a two player game
// player is x, computer is o
// a boardard 3x3 is blank
// player chooses where to play his mark on the boardard
// computer responds with a move
// the player responds
// the game evaluates if either player gets 3 in a row

// 2 - Nouns and Verbs
// player 
// computer
// boardard
// move - computer 
// ask for move - player
// determine winner 
// winning combinations 

// 3 - Organize and Associate Nouns with Verbs
// player - ask for move
// boardard - determine winner, winning comboards, options left
// computer - move
const rlsync = require('readline-sync');

class Player {
  constructor(marker) {
    this.marker = marker;
  }
}

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X"
  static COMPUTER_MARKER = "O"
  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
  toString(){
    return this.marker;
  }
  setMarker(marker){
    this.marker = marker
  }
  getMarker(){
    return this.marker
  }
}

class Human extends Player{
  constructor(){
    super(Square.HUMAN_MARKER)
  }
  move(board, availablePieces){
    let answer;
    while (true){
      console.log(`Choose an available square: ${availablePieces}`)
      answer = rlsync.question()
      if (availablePieces.includes(answer)) break;
      console.log(`Invalid selection. Please select one of the following: ${availablePieces}`)
    }
    //`console.log(`You've choosen ${answer}`)
    board[answer] = Square.HUMAN_MARKER;
  }
}

class Computer extends Player{
  constructor(){
    super(Square.COMPUTER_MARKER)
  }
  move(board) {
    let square;
    let winningCombos = board.winningCombos
    for (let idx = 0; idx < winningCombos.length; idx++) {
      let line = winningCombos[idx];
      square = this.atRiskSquare(line,board, Square.HUMAN_MARKER);
      if (square) break;
    } 
    if (!square) {
      for (let idx = 0; idx < winningCombos.length; idx++) {
        let line = winningCombos[idx];
        square = this.atRiskSquare(line,board, Square.COMPUTER_MARKER);
        if (square) break
    }
  }
    if (!square){
      let randomIdx = Math.floor(Math.random()*board.emptySquares.length)
      square = board.emptySquares[randomIdx]
    }

    board[square] = Square.COMPUTER_MARKER
  }

  atRiskSquare(line, board, marker){
    if (line.filter(val => board[val] === marker).length === 2) {
      console.log(`DEFENSE NEEDED`)
      console.log(line.find(marker => board[marker] === Square.UNUSED_SQUARE))
      return line.find(marker => board[marker] === Square.UNUSED_SQUARE)
      //return line.find(this.Initial_Marker)
    }
  } 
}
class Board {
  constructor() {
    this.board = {}
    for (let marker = 1; marker < 10; marker++) {
      this.board[String(marker)] = new Square()
    }

  }
  showBoard() {
    console.log();
    console.log("You are 'X' and Computer is 'O'")
    console.log(`    |     |     `)
    console.log(`  ${this.board['1']} |  ${this.board['2']}  |  ${this.board['3']}`)
    console.log(`    |     |     `)
    console.log(`----+-----+-----`)
    console.log(`    |     |     `)
    console.log(`  ${this.board['4']} |  ${this.board['5']}  |  ${this.board['6']}`)
    console.log(`    |     |     `)
    console.log(`----+-----+-----`)
    console.log(`    |     |     `)
    console.log(`  ${this.board['7']} |  ${this.board['8']}  |  ${this.board['9']}`)
    console.log(`    |     |     `)
  }  
  emptySquares(){
    return Object.keys(this.board).filter(square => this.board[square].getMarker() === Square.UNUSED_SQUARE)
  }
  boardFull(){
    return this.emptySquares().length === 0
  }
}

class TTTGame {
  constructor(name) {
    this.board = new Board()
    //this.gameBoard = this.board.getMarker()
    this.player = new Human()
    this.computer = new Computer()

  }


  someoneWon(){
    return !!this.determineWinner()
  }
  determineWinner(){
    for (let idx = 0; idx < this.board.winningCombos.length; idx++) {
      let [sq1, sq2, sq3]  = this.board.winningCombos[idx]
      if (
        this.board[sq1] === Square.HUMAN_MARKER &&
        this.board[sq2] === Square.HUMAN_MARKER &&
        this.board[sq3] === Square.HUMAN_MARKER
        ) {
          return 'You won!'
        } else if (
          this.board[sq1] === Square.COMPUTER_MARKER &&
          this.board[sq2] === Square.COMPUTER_MARKER &&
          this.board[sq3] === Square.COMPUTER_MARKER 
        ) {
          return 'Computer wins!'
        } 
    }
    return null
  }
  playAgain(){
    let answer
    while (true) {
      console.log('Do you want to play again? y/n')
      answer = rlsync.question();
      if (['y','n'].includes(answer)) break;
      console.log('Invalid Response.  Please enter: y/n')
    }
    return answer
  }

  play(){
    while (true) {
      console.log('\nWelcome to TTT!')
      this.board.showBoard()
      while (true){
        this.player.move(this.board, this.board.emptySquares())
        this.board.showBoard()
        console.log(this.board)
        if (this.someoneWon() || this.board.boardFull()) break;
        this.computer.move(this.board)
        this.board.showBoard()
        if (this.someoneWon() || this.board.boardFull()) break;
      }
      if (this.someoneWon()){
        console.log(this.determineWinner())
      }
      if (this.playAgain() === 'n') break; 
    }
  }
 }


let game = new TTTGame()
game.play()