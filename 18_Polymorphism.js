// POLYMORPHISM - allowing different objects of different types to call the same method 

// First Implementation - Poly through Inheritance

class Animal {
  move() {
    console.log(`${this.constructor.name} doesn't move`)
  }
}
class Fish extends Animal {
  move() {
    console.log("swimming")
  }
}
class Cat extends Animal {
  move() {
    console.log('walking')
  }
}

class Sponge extends Animal {}
class Coral extends Animal {}

let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
animals.forEach(animal => animal.move()) // logs swimmming, walking 

// every animal in the above example is different, but the code that uses those objects in the array
// can treat each as a generic animal.  The different objects are OVERRIDING the appropriate method 
// this is also known as DUCK TYPING
// This use of a method across different types is POLYMORPHISM!
// sponge and coral classes dont have their own move method, so they inherit from the Animal class via the 
// prototype chain.  So when we call `move` on them, `move` from animal gets called

// toString method is another example.  The Object type provides a default variety of `toString()` that other
// types inherit.  Other types can also use their own variety and OVERRIDE
// without OVERRIDING itll return '[object Object]'
// with OVERRIDING: 
let arr = [1,2,3]
arr.toString() // '1,2,3'
//(new Date()).toString() // 'Thu Sep 17 2020 10:13:52 GMT-0500 (Central Daylight Time)'

////////////////////////////// Poly Through Duck Typing /////////////////////////////

// Duck typing occurs when different types repsond to the same method name
// We don't care about type, only behavior
// if an object quacks like a duck, then we can treat it like a duck
// Example: an app may have a lot of elements that can respond to a mouse click by calling a method like `handleClick`
// this is informal, classes & constructors are formal

class Chef { // class is created 
  prepare(wedding) { // method prepare with parameter 
    this.prepareFood(wedding.guests) // invokes another method, prepareFood with argument's guest property as argument
  }
  prepareFood(guests) {       // method preparefood that console.logs the 
    console.log(`I'm cooking for the ${this.guests}`)
  }
}
class Decorator {
  prepare(wedding){
    this.decoratePlace(wedding.flowers)
  }
  decoratePlace(flowers) {
    console.log("I'm decorating")
  }
}
class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs)
  }
  preparePerformance(songs) {
    console.log("I'm preparing songs")
  }
}
class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests
    this.flower = flowers
    this.songs = songs
  }
  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this)
    })
  }
}

let wedding = new Wedding('guests', 'flowers', 'songs')
wedding.prepare([new Chef(), new Decorator(), new Musician()])