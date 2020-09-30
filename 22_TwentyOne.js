// player
// hand

// human player
// hand
// hit or stay
// bust 
// score

// computer player
// hand
// hit or stay
// bust score

// game
// deal first round 
//// one card up another down
//// see computer's top card
// $5 to start, $1 to play, $10 to quit by winning

// deck
// cards
// shuffle cards

const RLSYNC = require("readline-sync")
class Deck {
  static suites = ["Hearts", "Clubs", "Diamonds", "Spades"]
  static cardNumber = [2,3,4,5,6,7,8,9,'Jack',"Queen","King","Ace"]
  constructor() {
    this.deck = []
    for (let card = 0; card < Deck.suites.length; card++) {
      for(let cardVal = 0; cardVal < Deck.cardNumber.length; cardVal++){
        this.deck.push([Deck.suites[card], Deck.cardNumber[cardVal]])
      }
    }
  }
  showCards(){
    console.log(this.deck)
  }
  dealCard(){
    let idx = Math.floor(Math.random()*this.deck.length)
    let card = this.deck[idx]
    this.deck.splice(idx, 1)
    return card
  }
}
class Player {
  constructor(){
    this.hand = []
  }  
  sumOfCards() {
    let aceCount = this.hand.reduce((count, currentVal) => {
      if (currentVal[1] === "Ace") {
        count += 1
      }
      return count
    },0)
    let sumOfCardValues = this.hand.reduce((sum, currentVal) => {
      if (["King","Queen","Jack"].includes(currentVal[1])) {
        sum += 10
      }
      else if (Number.isInteger(currentVal[1])) {
        sum += currentVal[1]
      }
      return sum
    },0)
    while (aceCount > 0) {
      if (sumOfCardValues <= 10) {
        sumOfCardValues += 11
        aceCount -= 1
      } else {
        sumOfCardValues += 1
        aceCount -= 1
      }
    }
    return sumOfCardValues
  }
  bust(){
    if (this.sumOfCards() > 21) {
      return true
    }
    return null
  }
}

class Computer extends Player {
  hitOrStay(cards) {
    let computerCount = this.sumOfCards()
    while (computerCount <= 17) {
      let card = cards.dealCard()
      this.hand.push(card)
      computerCount = this.sumOfCards()
      console.log(`${card[1]} of ${card[0]}`)
    } 
    console.log(`Dealer choose to stay ${this.sumOfCards()}`)
  }
}


class Human extends Player{
  hitOrStay(cards){
    let answer = "";
    while(true) {
      console.log('')
      console.log(`Do you want to hit or stay? h/s`)
      answer = RLSYNC.question();
      if (["h", "s"].includes(answer)) break;
      console.log("Invalid response")
    }
    if (answer === "h") {
      let card = cards.dealCard()
      console.log(`Drawn card: ${card[1]} of ${card[0]}`)
      this.hand.push(card)
      return true
    }
    return false
  }
}

class TwentyOne {
  constructor() {
    this.deck = new Deck()
    this.human = new Human()
    this.computer = new Computer()
    this.moneyPot = 2
  }
  play() {
    this.welcomeMessage()
    while (true) {
      this.human.hand = []
      this.computer.hand = []
      if (this.outOfMoney()) break
      this.dealFirstRound()
      while (true) {
        if (!this.human.hitOrStay(this.deck)) break
        if (this.human.bust()) break
        this.displayCards("Human")
      }
      this.computer.hitOrStay(this.deck)
      this.determineWinner()
      if (this.outOfMoney()) break      
      if (!this.playAgain()) break
    }
    this.goodbyeMessage()
  }
  displayCards(player) {
    if (player === "human") {
      return `${this.human.hand.map(val => val[1] + " of " + val[0]).join(", ")}`
    } 
    else if (player === "computerFirstRound") {
      let showEveryCardExceptTop = this.computer.hand.slice(1)
      return `Dealer's top card: ${showEveryCardExceptTop.map(val => val[1] + " of " + val[0])}`
    } 
    else if(player === "computerAllCards") {
      return `Dealer's Cards: ${this.computer.hand.map(val => val[1] + " of " + val[0]).join(", ")}`
    }
  //  else if (player === "Computer ")
  }
  dealFirstRound() {
    let count = 2
    while (count > 0) {
      this.human.hand.push(this.deck.dealCard())
      this.computer.hand.push(this.deck.dealCard())
      count -= 1
    }
    console.log(`Your cards: ${this.displayCards("human")}`)
    console.log(this.displayCards("computerFirstRound"))
  }

  determineWinner(){
    let playerScore = this.human.sumOfCards();
    let dealerScore = this.computer.sumOfCards();
    if (this.human.bust()) {
      this.moneyPot -= 1
      console.log('')
      console.log(`Bust! You lose! Your card count: ${playerScore}`)
      console.log(`Your Cards: ${this.displayCards("human")}`)
      console.log(`Your remaining pot: $${this.moneyPot}`)
      console.log('')
    } else if (!this.human.bust() && this.computer.bust()) {
      this.moneyPot += 1
      console.log('')
      console.log(`Your Cards: ${this.displayCards("human")}`)
      console.log(`Dealer busts! ${this.displayCards("computerAllCards")}`)
      console.log(`Your remaining pot: $${this.moneyPot}`)
      console.log('')
    } else if (this.human.sumOfCards() >  this.computer.sumOfCards()) {
      this.moneyPot += 1;
      console.log('')
      console.log(`Your Cards: ${this.displayCards("human")}`)
      console.log(`Dealer's Cards: ${this.displayCards("computerAllCards")}`)
      console.log(`You win! ${playerScore} to ${dealerScore}`)
      console.log(`Your remaining pot: $${this.moneyPot}`)
      console.log('')
    } else if (this.human.sumOfCards() < this.computer.sumOfCards()){
      this.moneyPot -= 1
      console.log('')
      console.log(`Your Cards: ${this.displayCards("human")}`)
      console.log(`Your Dealer's Cards: ${this.displayCards("computerAllCards")}`)
      console.log(`You lose! ${playerScore} to ${dealerScore}`)
      console.log(`Your remaining pot: $${this.moneyPot}`)
      console.log('')
    } else {
      console.log('')
      console.log(`Your Cards: ${this.displayCards("human")}`)
      console.log(`Your Dealer's Cards: ${this.displayCards("computerAllCards")}`)
      console.log(`You Tie! ${playerScore} to ${dealerScore}`)
      console.log(`Your remaining pot: $${this.moneyPot}`)
      console.log('')
    }
  }
  playAgain(){
    let answer;
    while(true) {
      console.log(`Do you want to play again? y/n`)
      answer = RLSYNC.question()
      if(['y','n'].includes(answer.toLowerCase())) break
      console.log("Invalid response")
    }
    return answer.toLowerCase() === 'y'
  }
  welcomeMessage(){
    console.clear()
    console.log("Welcome to 21!")
    console.log("")
  }
  goodbyeMessage(){
    console.log("Thanks for playing TwentyOne!")
  }
  outOfMoney(){
    if (this.moneyPot < 1) {
      console.log("Sorry you're broke!")
    }
    return this.moneyPot < 1 
  }
}

let game = new TwentyOne()
game.play()