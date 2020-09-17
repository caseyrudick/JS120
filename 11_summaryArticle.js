// dont create instances without new.  This causes a problem!  It will add the property in the constructor
// function to the global object.  You can prevent calling the constructor without `new` with the following code:
function Person(name) {
  if (!(this instanceof Person)) {
    return new Person(name)
  }
  this.name = name
}
// 1) The code above checks whether `this` is really a `Person`.  It would be if called with `new`
// 2) If it is a `Person`, continue
// 3) If not, use `new` to create a `Person` - the correct way, and return it

// If the constructor returns an object, JS will return that object (except for primitives) 
function Cat(name) {
  this.name = name
}
function Person1(name) {
  return new Cat(name)
}
let bob = new Person1('bob')
bob instanceof Person1// false
bob instanceof Cat // true

// you can find out if an instance has a given property:
'name' in bob // true

// Internal proto [[prototype]] 
// It's in every object and points to another object.  _proto_ property
// Using Object.create(obj) we can create an object linked to another 
animal = {
  type: 'mammal',
  breathe: function(){
    console.log("I'm breathing")
  }
} 
let dog = Object.create(animal)
console.log(dog)    // {}
console.log(dog.type)   // "mammal"
console.log(dog.__proto__)  // {type: 'mammal, breathe: [Function: breathe]}
console.log(dog.__proto__ === animal)     // true

// now lets create a breed that inherits from dog
let terrier = Object.create(dog)
console.log(terrier.type)   //mammal
console.log(terrier.__proto__)    // {}
console.log(terrier.__proto__ === dog)    //true
console.log(terrier.__proto__ === animal)   //false

// we can use Object.prototype.isPrototypeOf() to check if one object exists anywhere 
// on the prototype chain of another object
// we know animal is on the prototype chain of both dog and terrier and dog 
// is on the chain of terrier
console.log(animal.isPrototypeOf(terrier)) // true
console.log(animal.isPrototypeOf(dog)) // true
console.log(dog.isPrototypeOf(terrier)) // true

// though if we want to know if dog is directly linked to animal and not just on the chain
// we use Object.getPrototypeOf()
console.log(Object.getPrototypeOf(terrier) === dog) // true
console.log(Object.getPrototypeOf(terrier) === animal) // false

// What happens if something is changed to the dog prototype?  Will the change
// be reflected in the SUB-TYPE?
dog.speak = function() {
  console.log("Woof woof")
}
terrier.speak() // Woof woof
console.log(Object.getPrototypeOf(terrier))
// The newly added property is available to the SUB-TYPE!  This is because terrier's prototype property
// is pointing to dog 

// How to view methods of prototype of Classes????
//////////////////////TBD////////////////////////////

// Difference between Object.prototype & Object.__proto__
// former is a property of a class constructor, and .__proto__ is a 
// property of a class instance
// dont use .__proto__, instead use Object.getPrototypeOf(obj)

// Using OLOO to share methods, efficiently
// animal <- reptile
// animal <- mammal
// animal <- dog
// dog <- terrier
let Animal5 = {
  init(type) {
    this.type = type;
  }, 
  breath: function(){
    console.log("I'm breathing")
  }
}
let Dog5 = Object.create(Animal5);
let Terrier5 = Object.create(Dog5);
let Mammal = Object.create(Animal5)
Mammal.init("mammal")
let reptile = Object.create(Animal5)
reptile.init("reptile")

console.log(Mammal.type) // "mammal"
Mammal.breath() // "I'm breathing"
console.log(Object.getPrototypeOf(reptile)) // reptile
reptile.breath() // "I'm breathing"

// OLOO inheritance versus constructor/class inheritance
// currentyl only up to subtyping with constructors and protos 
// next will be subtyping with classes

// psuedo-classical aka constructor inheritance
// new objecs are created from constructor functions using the keyword `new`
// constructors and classes

// prototypal inheritance aka object inheritance
// OLOO 