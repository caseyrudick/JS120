
// Question 1 - Object Factories
// createHuman.prototype = Object.assign(createPlayer) - does it work to place this, 
// following the function, i.e. outside scope of function?

// Question 2 - Static properties
// which style uses them? Classes ?

// Question 3 - prototypes of constructors are object literals
// are the prototypes of factories object literals or functions or both?

// Question 4 - how do you set the prototype of an object factory, I'm having a hard time figuring out 
// how to perform the equivalent of super() seen in classes to object factories
// DO WE JUST UNDERSTAND REUSING ANOTHER OBJECT FACTORY VIA MIXING --> OBJECT.ASSIGN

// Question 5 - where do call, bind, apply fit in?  Just factory functions or also constructor functions 

// Question 6 - closure?

// Review 1 - Object.prototype methods
// a) setting prototype: 
let a = {}
let b = Object.create(a) 
// b) review object prototype
Object.getPrototypeOf(b) // returns {}, prototype is the object referenced by variable `a`.  The internal [[Prototype]] 
//                       // property of JS objects, here b is pointing to the object referenced by a
a.isPrototypeOf(b) // returns true. determines whether a is in the prototype chian of b
Object.getOwnPropertyNames(b) // will not return properties of a.  This is because objects don't AQUIRE properties 
//                            // and methods, through inheritance 
// c) instanceof 
console.log(b instanceof a) // TypeError, cannot do this with object literals, benefits of constructors/classes
// d) set prototype 
Object.setPrototypeOf(target, source) // overwrites the prexisting proto. In this case, its the default Object.prototype

// Review 2 - Iterating over objects with protos
// for/in - will return inherited properties as well
// .hasOwnProperty() will prevent that also Object.keys()

// Review 3 - Property Look Up in the Property Chain
// When you access a property on an object, JS first looks for an 'own' property, 
obj.someProp // will return it's property, if none, JS engine will go through the obj's [[Prototype]] chain until
//           // it finds it and then will retunr, unless it doesnt exist, then undefined

// Review 4 - function expressions, first class functions, hoisting, anonymous functions, typeof function value 
// remember if you want to use functions as values, you should not invoke them
// a) anonymous functions 
let prompt = function(){} // this is anonymous, along with all arrow functions.  
// Arrow functions are either immediately invoked, assigned to variables or properties, or passed around as arguments
// b) first class functions 
// can be assigned to variables, passed as arguments, or returned from another function
function logNum(num) {
  console.log(num)
}
[1,2,3].forEach(logNum) // NOT [1,2,3].forEach(logNum()) - TypeError: undefined is not a function 
// logNum is passed as an argument 
// this example above shows the 
// c) typeof function value
let myFunc = function(){}
typeof myFunc // "function"

// Review 5 - Higher Order Functions 
// HO functions either: take a func as argument, i.e. array methods or return a func

// Review 6 - Global object, implicit and explicit execution context
// a) global object serves as the implicit execution context.  it is avalable everywhere in your program
//    without 'let' before a variable, declaring foo, will add it to the global object
foo = 5
global.foo  // returns 5
// b) execution context refers to the environemtn in which a function executes.  It refers to the current value of this
//    when we talk about the execution context, we talk about the value of this
//    how you invoke a function determines the value of this
// c) explicit execution context 
//    context you set explicitly, aka binding this or setting the binding
// d) implicit execution context 
//    execution context JS sets implicitly when your code doesnt provide an explicit context
function foo(){
  console.log("this refers to: " + this)
}
foo() // this refers to [object global]
// this inside a function refers to the global object
// e) strict mode - "use strict"  
//    assigns this to undefined and not global
// f) method execution context (implicit)
//    when you call a method that belongs to an object the execution context inside that method call, 
//    is the object used to call the method!!!
let foo = {
  bar(){
    console.log(this)
  }
}
foo.bar() // {bar: [Function: bar]}
// f2) beware if you assign the method call to another variable without the invocation ().
//     this is because itll be called as a standalone function, and standalone function execution contexts are the 
//     global object
let baz = foo.bar
baz() // Object[global]
// g) explicit execution context.  .call allows us to call a function with the execution context of the argument 
//    .call invokes the function.  This is an important contrast to .bind() that returns a new function!
function logNum(){
  console.log(this.num)
}
let obj = {
  num: 42
}
logNum.call(obj) // logs 42
// g1) if the function contains arguments, remember apply works with arrays, but we can use ...args spread syntax with call instead
function sumNum(num1) {
  return this.num + num1
}
let obj = {
  num: 42
}
sumNum.call(obj, 5) // returns 47
// g2) hard binding 
function sumNum(num1){
  return this.num + num1
}
let obj = {
  num:42
}
let sumNum2 = sumNum.bind(obj)
sumNum2(5) // returns 47 FOREVER!
// Review 7 - Context loss 
// copied methods 
// inner function not using surrounding context
// function as argument 
////////// MUST GO BACK AND REVIEW!


// REVIEW 8 - FACTORY FUNCTIONS
// disadvantages: 1) every object created has a copy of every method, too much disk space
//                2) no way to figure out its type (instance of) 
function createCar(make, model, year) {
  return {
    make, // same as make: make
    mode, 
    year,
    started: false,
    start(){
      this.started = true;
    },
    stop(){
      this.started = false;
    }
  }
}
let car1 = createCar('Toyota', 'Corolla', 2016)
// REVIEW 9 - INHERITANCE
// In JS, objects can inherit properties and behavior from other objects.  If another object, for 
// example, has a language property and speak behavior, a new object can access and use language without 
// explicitly defining them in the new object
// Specifically JS uses prototypal inheritance.  The object that you inherit properties and methods 
// from is the prototype.  The function `Object.create` creates a new object that inherits properties from 
// an exisitng object, called the KEYWORD: PROTOTYPE OBJECT as an argument and returns a new object that inherits 
// properties from the prototype object.  The newly created object has access to all the properties and 
// methods that the prototype object provides
let a = {
  propA: 1, 
  propB: 2
}
let b = Object.create(a)
// REVIEW 10 - DELEGATE PROPERTIES/METHODS
// here we see the inheritinng object doesnt receive any prop or methods of its own.  Instead, it KEYWORD: DELEGATES
// property and method access to its prototype.  
// Even though objects DONT acquire any properties and methods through inheritance, they can still define them 
// separately from the inheritance process
// Ex.1: 
b.propA // returns 1
b // returns {}
// Ex. 2: 
b.hasOwnProperty('foo') // false
// hasOwnProperty is available on all JS objects 

// REVIEW 10 - [[PROTOTYPE]]
// JS objects use an internal [[Prototype]] property to keep track of their prototype.  
// When you create an object with Object.create(), the new object's [[Prototype]] property gets assigned to the 
// KEYWORD: prototype object
// Note [[Prototype]] is an internal property.  Cannot access it directly in your code. BUT you can access and replace
// its value with Object function.  
// Object.getPrototypeOf() 
Object.getPrototypeOf(b) // { foo: 1, bar: 2 }
// can set the prototype with:
let a = {
  foo: 1,
  bar: 2,
}
let b = {}
Object.setPrototypeOf(b,a)
// Objects hold a reference to their KEYWORD PROTOTYPE OBJECTS through their internal [[prototype]] property
// if the object's prototype changes in some way, the changes are observable in the inherting object as well

// REVIEW 11 - DEFAULT PROTOTYPE
// All JS objects have a prototype.  Passing an empty object to Object.getPrototypeOf() returns a 
// defuault prototype object. That object is the prototype for all objects created using the object literal syntax, let a = {one: 1}
// The default prototype is the prototype object of the Object constructor, Object.prototype.  This means the 
// Object.prototype provides the default prototype

// REVIEW 12 - PROTOTYPE CHAIN
// All JS objects can inherit from another object using the prototype model.  Since the prototype of an 
// object is itself an object, the prototype can also have a prototype from which it inherits
let a = {foo: 1,}
let b = {bar: 2}
let c = {baz: 3}
Object.setPrototypeOf(c,b)
Object.setPrototypeOf(b,a)
// here c inherits from b and b inherits from a.  So a & b are part of the prototype chain of c
// The complete prototype chain: c --> b --> a --> Object.prototype --> null
// the prototype of Object.prototype is null

// REVIEW 13 - PROPERTY LOOKUP 
// When you access a property on a JS object, it firrst looks for an "own" property, with that name on
// the object.  If the obejct does not define the specified property, JS looks for it in the object's prototype
// This process continues until it finds the property or it reaches Object.prototype.  If Object.prototype also 
// doesnt define the property, the property access evaluates to undefined
// This also means if there are two objects in the same prototype chain with the same name, the object that's closer
// to the calling object takes precedence.  Ex:
let a = {foo: 1,}
let b = {foo: 2}
Object.setPrototypeOf(b,a)
let c = Object.create(b)
console.log(c.foo)  // 2
// This also applies to methods as methods are simply properties that refer to functions 

// REVIEW 14 - METHODS ON OBJECT.PROTOTYPE
Object.prototype.toString()
Object.prototype.isPrototypeOf()
Object.prototype.hasOwnProperty()

// REVIEW 15 - OOP 
// OOP is a programming paradigm where we think of a problem in terms of objects
// instead of a series of steps, it becomes a collection of objects tat interact with each other.  
// The idea is to model a program based on how objects in the real world interact.  A real world object 
// like a car, has state - properties, and behavior - methods 
let car = {
  make: "Toyota",
  model: "4Runner",
  engineOn: false,
  startEngine(){
    this.engineOn = true
  }
}

// REVIEW 16 - ENCAPSULATION
// The core of OOP - the idea of bundling the data and operations that work on that data into 
// a single entity, an object
// In other languages, encapsulation also refers to restricting access to the state and certain behaviors.  
// Object expose a KEYWORD PUBLIC INTERFACE for interacting with other objects and keep their implementation 
// details hidden.  Thus other objects can't change the data of an object without going through the proper interface
// Unfortunately, JS doesnt support access restrictions.  

// REVIEW 9 - CONSTRUCTOR/PROTOTYPES
// Similar to factory functions, though it doesnt return an explicit object.  It uses `this` to set 
// the object's properties and methods



// Review 2 - Constructor/Prototypes
// setting the prototype of a constructor function to include multiple methods instead of one by one
// (one by one: 
function functionConstructor(name){
  this.name = name
}
functionConstructor.prototype.methodName = function(){
  console.log(`${this.name}`)
}//method()})
// multiple: let constrProto = {
//   method1() {},
//   method2() {}
// }
// let 

// Review 3 - Object Factories VS ConstructorFunctions - `this`
// object factories do not use this in the state portion, whereas constructors do
function objectFactory(name) {
  return {
    name: name
  }
}
function ConstructorProto (name) {
  this.name = name 
}