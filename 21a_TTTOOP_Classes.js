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
const Initial_Marker = " "
const Human_Marker = 'X'
const Computer_Marker = 'O'
class Player {
  constructor(player) {
    this.player = player;
  }
}

class Human extends Player{
  constructor(player = "Human"){
    super(player)
  }
  playerMove(board, availablePieces){
    let answer;
    while (true){
      console.log(`Choose an available square: ${availablePieces}`)
      answer = rlsync.question()
      if (availablePieces.includes(answer)) break;
      console.log(`Invalid selection. Please select one of the following: ${availablePieces}`)
    }
    //`console.log(`You've choosen ${answer}`)
    board[answer] = Human_Marker;
    return board;
  }
}

class Computer extends Player{
  constructor(player = 'Computer'){
    super(player)
  }
  ChoosesSquare(board, emptySquares, winningCombos){
    let square;
    for (let idx = 0; idx < winningCombos.length; idx++) {
      let line = winningCombos[idx];
      square = this.atRiskSquare(line,board, Human_Marker);
      if (square) break;
    } 
    if (!square) {
      for (let idx = 0; idx < winningCombos.length; idx++) {
        let line = winningCombos[idx];
        square = this.atRiskSquare(line,board, Computer_Marker);
        if (square) break
    }
  }
    if (!square){
      let randomIdx = Math.floor(Math.random()*emptySquares.length)
      square = emptySquares[randomIdx]
    }

    board[square] = Computer_Marker
  }
  atRiskSquare(line, board, marker){
    console.log(board)
    if (line.filter(val => board[val] === marker).length === 2) {
      console.log(`DEFENSE NEEDED`)
      console.log(line.find(marker => board[marker] === Initial_Marker))
      return line.find(marker => board[marker] === Initial_Marker)
      //return line.find(this.Initial_Marker)
    }
  } 
}
class Board {
  constructor() {
    this.board = {}
  }
  initiateBoard(){
    for (let marker = 1; marker < 10; marker++) {
      this.board[String(marker)] = Initial_Marker
    }
    console.log(`board initiated`)
    return this.board
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
}

class TTTGame {
  constructor(name) {
    this.board = new Board()
    this.gameBoard = this.board.board
    this.player = new Human()
    this.computer = new Computer()
    this.name = name
    this.winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,4,8],[3,6,9],[1,5,9],[3,5,7]]
    this.availableSquares = [1,2,3,4,5,6,7,8,9]
  }
  emptySquares(){
    // console.log(this.gameBoard)
    // console.log(Object.keys(this.gameBoard).filter(square => this.gameBoard[square] === Initial_Marker))
    return Object.keys(this.gameBoard).filter(square => this.gameBoard[square] === Initial_Marker)
  }
  boardFull(){
    return this.emptySquares().length === 0
  }
  someoneWon(){
    return !!this.determineWinner()
  }
  determineWinner(){
    for (let idx = 0; idx < this.winningCombos.length; idx++) {
      let [sq1, sq2, sq3]  = this.winningCombos[idx]
      if (
        this.gameBoard[sq1] === Human_Marker &&
        this.gameBoard[sq2] === Human_Marker &&
        this.gameBoard[sq3] === Human_Marker
        ) {
          return 'You won!'
        } else if (
          this.gameBoard[sq1] === Computer_Marker &&
          this.gameBoard[sq2] === Computer_Marker &&
          this.gameBoard[sq3] === Computer_Marker 
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
      this.board.initiateBoard();
      this.board.showBoard()
      while (true){
        this.player.playerMove(this.gameBoard, this.emptySquares())
        this.board.showBoard()
        if (this.someoneWon() || this.boardFull()) break;
        this.computer.ChoosesSquare(this.gameBoard, this.emptySquares(), this.winningCombos)
        this.board.showBoard()
        if (this.someoneWon() || this.boardFull()) break;
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