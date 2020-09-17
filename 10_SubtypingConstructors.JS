// we had learned before the combination of constructors and prototypes 
// classes are like constructors and prototypes wrapped into one 


// the following class is the equivalent as the following constructor/proto relationship
class Rectangle {
  constructor (length, width) {
    this.length = length;
    this.width = width 
    // this is the constructor
  }
  // these belong to the prototype
  getArea() {
    return this.length * this.width 
  }
  toString() {
    return `[Rectangle ${this.width * this.length}]`
  }
}

function Rectangle1(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle1.prototype.getArea = function() {
  return this.width * this.length
}

Rectangle1.prototype.toString = function() {
  return `[Rectangle ${this.width * this.length}]`
}

// constructors and classes mimic classes in JS
// an essential part of OO paradigm is inheritance

// Let's introduce a square constructor and prototype

function Square(size) {
  this.length = size;
  this.width = size
}
Square.prototype.getArea = function() {
  return this.length * this.width
}
Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`; 
}

// there's duplication of getArea method between square and rectangle
// we can create a relationship to remove duplication like calling square a special type of
// rectangle.  Then we would say `Square` is a SUB-TYPE of `Rectangle`, or that `Rectangle` is
// a SUPER-TYPE of `Square`.  
// Remove the redundant code by setting the Square prototype to Rectangles and then overwrite the 
// toString method

Square.prototype = Object.create(Rectangle1.prototype)
Square.prototype.toString = function(){
  return `[Square ${this.length} x ${this.width}]`
}

let sqr = new Square(5)
console.log(sqr.getArea())
console.log(sqr.toString())

// here's a look at the prototype chain:
// sqr --> Square.prototype --> Rectangle.prototype -- Object.prototype

// Although there is a side-effect of this: the constructor property of Square's prototype points to Rectangle
sqr.constructor === Rectangle // true

// so we need to point it back to Square 
Square.prototype.constructor = Square
// although it normally doesnt make a difference


// Constructor Resuse
// there's code that is similar in the constructor of both Square and rectangle
// so makes sense to use it 
function Square1(size) {
  Rectangle.call(this, size, size)
}
// now the code looks like this 

function Rectangle2(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle2.prototype.getArea = function() {
  return this.length * this.width
}
Rectangle2.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
}

function Square2(size) {
  Rectangle2.call(this,size, size)
}
Square2.prototype = Object.create(Rectangle2)
Square2.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width} ]`
}
Square2.prototype.constructor = Square2


// Prototypal Inheritance vs. Pseudo-Classical Inheritance
// Inheritance is used to describe 2 different types of inheritance: 
// 1) Prototypal inheritance
// 2) Pseudo-Classical Inheritance

// Prototypal Inheritance
// Simpler form.  Also called object inheritance since it works with one object at a time
// An object's internal [[prototype]] property points to another object, and the object can delegate method 
// calls to that other object. For example...
let personPrototype = {
  name: '',
  age: 0,
  toString() {
    return `My name is ${this.name} and I'm ${this.age} years old.`;
  },
}
let will = Object.create(personPrototype) 
will.name = 'William'
will.age = 28
will.toString()
// will object inherits from the personPrototype object; will's [[prototype]] property refers to `personPrototype`


// Pseudo-Classical Inheritance
// aka constructor inheritance.  When people talk about inheritance in the context of JS, they normally
// mean this one.  A constructor's prototype inherits from another constructor's prototype, that is, a sub-type 
// inherits from a super-type.  Pseudo-classical refers to the fact that constructor inheritance mimics classes from 
// other OOP languages, but doesnt actually use classes

