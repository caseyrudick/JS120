// // function Rectangle(length, width) {
// //   this.length = length;
// //   this.width = width;
// // }

// // Rectangle.prototype.getArea = function() {
// //   return this.width * this.length
// // }

// // Rectangle.prototype.toString = function() {
// //   return `[Rectangle ${this.width * this.length}]`
// // }
// // class Rectangle {
// //   constructor (length, width) {
// //     this.length = length;
// //     this.width = width 
// //     // this is the constructor
// //   }
// //   // these belong to the prototype
// //   getArea() {
// //     return this.length * this.width 
// //   }
// //   toString() {
// //     return `[Rectangle ${this.width * this.length}]`
// //   }
// // }
// // console.log(Rectangle.prototype)


// // let PetPrototype = {
// //   init(animal, name) {
// //     this.animal = animal;
// //     this.name = name
// //     return this
// //   },
// //   sleep: function (){
// //     console.log('I am sleeping')
// //   },
// //   wake: function() {
// //     console.log("I am awake")
// //   },
// // }

// // let pudding1 = Object.create(PetPrototype).init('Cat','Pudding')


// // class Rectangle {
// //   constructor(length, width) {
// //     this.length = length;
// //     this.width = width;
// //   }

// //   getArea() {
// //     return this.length * this.width;
// //   }

// //   toString() {
// //     return `[Rectangle ${this.width * this.length}]`;
// //   }
// // }


// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.width * this.length
// }

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.width * this.length}]`
// }

// function Square(size) {
//   Rectangle.call(this,size, size)
// }

// Square.prototype = Object.assign(Rectangle.prototype)
// Square.prototype.constructor = Square

// Square.prototype.toString = function () {
//   console.log('HEY')
// }
// Rectangle.prototype.toString = function () {
//   console.log("This affects inheritance")
// }
// let square = new Square(4)
// square.toString()

// let rec = new Rectangle(3,4)
// rec.toString()


// let PetPrototype = {
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name
//     return this
//   },
//   sleep: function (){
//     console.log('I am sleeping')
//   },
//   wake: function() {
//     console.log("I am awake")
//   },
// }

// let pudding1 = Object.create(PetPrototype).init('Cat','Pudding')
// console.log(Object.getOwnPropertyNames(pudding1))

// class vs OOLO
// Part One
// 1) create a class, whose constructor has a parameter & has at least 1 method
// 2) add to the class' methods after creating the class
// 3) create an instance from the class, invoke the methods 
// 4) log the prototype of the instance
// 5) log the name of instance's constructor
// Part Two 
// 1) Extend the original class to cover another.  Have this class include 2 parameters, one that is sent to the supertype and another misc
// 2) add a mix-in to to this new class 
// Part Three - Repeat Part 1, but Convert to OOLO
// 
class Dog {
  constructor (nickname) {
    this.nickname = nickname
  }
  sayNickName(){
    console.log(`${this.nickname}`)
  }
}
Dog.prototype.scream = function (){
  console.log(this.nickname.toUpperCase())
}
let Rylee = new Dog('RyRy')
console.log("")
console.log(`//////////PART 1///////////`)
console.log(Rylee.constructor.name) // Dog
console.log(Rylee.prototype) // undefined

Rylee.sayNickName() // 'RyRy'
console.log(Rylee instanceof Dog) // true
console.log(Object.getPrototypeOf(Rylee))  // Dog {scream: [Function]}
Rylee.scream()  // 'RYRY'
console.log(Object.getOwnPropertyNames(Dog)) // ['length', 'prototype', 'name']

console.log(`//////////PART 2///////////`)
class Chihuahua extends Dog{
  constructor(name, tailSize){
    super(name)
    this.name = name
    this.tailSize = tailSize
  }
}
const Swimmer = {
  swim(){
    if (this.tailSize === 'large') {
      console.log(`${this.name} is a fast swimmer`)
    }
  }
}
let taco = new Chihuahua('tacito', 'large')
Object.assign(Chihuahua.prototype, Swimmer)
taco.sayNickName()  // tacito
taco.swim()   // tacito is a fast swimmer
console.log(taco instanceof Chihuahua)  // true
console.log(taco instanceof Dog)  // true
console.log(Object.getPrototypeOf(Chihuahua)) // [Function: Dog]

///////////////////////// OLOO //////////////////////////////
let bird = {
  init: function(nickname, feathers) {
    this.nickname = nickname
    this.featherColors = feathers
    return this
  },
  eatFood(){
    console.log(`${this.nickname} is eating`)
  }, 
  colorOfFeathers() {
    console.log(`${this.nickname} has ${this.featherColors} feathers`)
  }
}
////////////////////////// Part 3 //////////////////////////
let birdie = Object.create(bird).init('birdie', 'brown')
birdie.eatFood()
console.log(Object.getPrototypeOf(birdie))  // entire object referenced by `bird`
console.log(birdie.constructor.name) // Object
console.log(birdie.constructor) // [Function: Object]
console.log(birdie instanceof bird) // TypeError, right side of instance not callable

bird.scream = function() {
  console.log(`${this.nickname.toUpperCase()}`)
}
birdie.scream()

// Biggest differences: 
// 1) cannot methods to instance's prototype object.  Instance, it is not an instanceof




