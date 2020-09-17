class Game {
  play() {
    return 'Start the game!'
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}
// instances of Bingo will use the new play() method 
// objects created by Bingo class will use that method instead of looking up
// the prototype chain and finding it in the Game class.  As soon as JS finds a method, it calls it
// When a class redefines a method that a superclass defines, we call this mehtod overriding


//Create class called `Greeting` that has a single method `greet`.  The method should take a string argument, and it 
// should print that argument to the console
// Now create two more classes that inherit from `Greeting`: one named `Hello` and the other `Goodbye`
// `Hello` class should have a `hi` method

class Greeting {
  greet(str) {
    console.log(str)
  }
}
class Hello extends Greeting {
  hi() {
    this.greet("Hello")
  }
}
class Goodbye extends Greeting {
  bye() {
    this.greet("GoodBye")
  }
}

let hey = new Hello()
hey.hi()