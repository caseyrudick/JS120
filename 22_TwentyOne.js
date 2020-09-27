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
let deck = new Deck()
deck.showCards()

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
    })
    let sumOfCardValues = this.hand.reduce((sum, currentVal) => {
      if (["King","Queen","Jack"].includes(currentVal[1])) {
        sum += 10
      }
      else if (Number.isInteger(currentVal[1])) {
        sum += currentVal[1]
      }
      return sum
    })
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
}

class Computer extends Player {
  hitOrStay(cards) {
    if (this.sumOfCards() <= 17) {
      let card = cards.dealCard()
      this.hand.push(card)
      console.log(`${card[1]} of ${card[0]}`)
    } else {
      console.log("Dealer choose to stay")
    }
  }
}

class Human extends Player{
  hitOrStay(cards){
    let answer;
    while(true) {
      console.log(`Do you want to hit or stay? h/s`)
      answer = RLSYNC.question().toLowerCase();
      if (["h", "s"].includes(answer)) break;
      console.log("Invalid response")
    }
    if (answer === "h") {
      return this.hand.push(cards.dealCard())
    } else {
      console.log("You choose to stay")
      return null
    }
  }
}

class TwentyOne {
  constructor() {
    this.deck = new Deck()
    this.human = new Human()
    this.computer = new Computer()
  }
  play() {
    
  }
}