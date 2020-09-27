const RLSYNC = require('readline-sync')
let Square = {
  UNUSED_SQUARE: " ",
  HUMAN_MARKER: "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },
  toString(){
    return this.marker;
  },
  setMarker(marker){
    this.marker = marker;
  },
  isUnused(){
    return this.marker === Square.UNUSED_SQUARE;
  },
  getMarker(){
    return this.marker;
  }
}
let Board = {
  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],
  init(){
    this.squares = {}
    for (let idx = 1; idx < 10; idx++){
      this.squares[String(idx)] = Object.create(Square).init();
    }
    return this
  },
  display(){
    console.log("")
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}  `)
    console.log(`     |     |     `)
    console.log(`-----+-----+-----`)
    console.log(`     |     |     `)
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}  `)
    console.log(`     |     |     `)
    console.log(`-----+-----+-----`)
    console.log(`     |     |     `)
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}  `)
  },
  markSquareAt(key, marker){
    this.squares[key].setMarker(marker);
  },
  isFull(){
    return this.unusedSquares().length === 0
  },
  unusedSquares(){
    return Object.keys(this.squares).filter(key => this.squares[key].isUnused())
  },
  playerWins(player){
    for (let idx = 0; idx < this.POSSIBLE_WINNING_ROWS.length; idx++) {
      let line = this.POSSIBLE_WINNING_ROWS[idx]
      let [sq1, sq2, sq3] = line
      if (
        this.squares[sq1].toString() === player.getMarker() &&
        this.squares[sq2].toString() === player.getMarker() &&
        this.squares[sq3].toString() === player.getMarker()
      ) {
        if (player.getMarker() === "X") {
          console.log("You won!")
        } else {
          console.log("Computer beat you!")
        }
        return "Winner"
      }
    }
  }
}

let Player = {
  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this
  },
  getMarker(marker){
    return this.marker;
  }
}


let TTTGame = {
  init(){
    this.board = Object.create(Board).init();
    this.human = Object.create(Player).init(Square.HUMAN_MARKER)
    this.computer = Object.create(Player).init(Square.COMPUTER_MARKER)
    return this
  },
  humanMove(){
    let answer;
    while (true){
      let emptySquares = this.board.unusedSquares()
      console.log(`Please select a square ${emptySquares}`)
      squareLocation = RLSYNC.question()
      if (emptySquares.includes(squareLocation)) break;
      console.log(`Invalid selection`)
    }
    this.board.markSquareAt(squareLocation, this.human.getMarker())

  },
  computerMove(){
    let availableSquares = this.board.unusedSquares()
    let idx = Math.floor(Math.random()*(availableSquares.length))
    this.board.markSquareAt(availableSquares[idx], this.computer.getMarker())
  },
  play() {
    console.log("Welcome to Tic Tac Toe!")
    this.board.display();
    while (true) {
      this.humanMove();
      if(this.board.playerWins(this.human)) break
      this.computerMove();
      this.board.display();
      if(this.board.playerWins(this.computer)) break
    }
  }
}

let game = Object.create(TTTGame).init()
game.play()