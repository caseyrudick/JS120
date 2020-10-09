// REVIEW 1 - OBJECTS, OBJECT FACTORIES, CONSTRUCTORS/PROTOTYPES, OLOO, ES6 CLASSES
// 1) OBJECTS: 
// Objects are one of the 8 fundamental types in JS (String, Number, Boolean, Null, Undefined, Object, BigInt, Symbol)
// They are a collection of properties where each property has a key and value.  While values can be any of the JS types, 
// property keys are always strings.  If you define a property with a non-string key, it will first be converted to a string
// When dealing with objects we are basically doing one of two things: setting a property or accessing a property.  We can do both
// operations through the property key by using the bracket notation or the dot notation. Difference is brackets can take any UTF-8 
// compatible string as the key, while the dot notation requires valid variable names
obj["a-key"] = 4
obj.a-key // SyntaxError
// If we access a non-existent property on an object it returns undefined, but we also get undefined if we set the value to undefined
// note: examples of non-enumerable properties are object's prototype object or length property!
// best way to find out if the property exists: 
Object.keys() 
// returns an object's "own" property keys
for (prop in prop) {
  if (obj.hasOwnProperty(prop))  
}
// for/in iteration includes properties from the objects in its prototype chain.  Use `hasOwnProperty` to skip the prototype properties
// JS objects use an internal [[Prototype]] property to keep track of their prototype.  
// When you create an object with Object.create(), the new object's [[Prototype]] property gets assigned to the prototype object
// Note [[Prototype]] is an internal property.  Cannot access it directly in your code. BUT you can access and replace
// its value with an Object method.  
// Object.getPrototypeOf() 
Object.getPrototypeOf(b) // { foo: 1, bar: 2 }
// can set the prototype with:
let a = {
  foo: 1,
  bar: 2,
}
let b = {}
Object.setPrototypeOf(b,a)
// Objects hold a reference to their PROTOTYPE OBJECTS through their internal [[prototype]] property
// if the object's prototype changes in some way, the changes are observable in the inherting object as well

// 2) OBJECT FACTORIES: 
// serve two purposes: 1) returns objects that represent data of a specific type, even though you cannot determine the type lol.  They do not set the newly created object's prototype to a "function prototype" like constructors do
//                     2) it reuses code 
// They give us the ability to create objects of the same type by calling a function 
// Disadvantages: 1) every object created has a copy of every method, too much disk space - DOESN'T MAKE USE OF PROTOTYPAL METHOD DELEGATION!
//                2) no way to figure out its type (instance of) 
//                
function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    started: false,
    start(){
      this.started = true
    },
    stop(){
      this.started = false
    }
  }
}
let car1 = createCa('Toyota', '4Runner', 2018)
console.log(Object.getPrototypeOf(car1)) // {}
console.log(car1 instanceof createCar) // false. Since the instanceof operator tests to see if the prototype property of a 
// constructor appears anywhere in the prototype chain of an object

// 3) CONSTRUCTORS:
// Constructors are factories that can create endless number of objects of the same type.  Looks similar to factory function.  
// Differences to factory functions: 
// 1) function name begins with a capital. 
// 2) must make references to `this`
// 3) no explicit return value
// 4) must be invoked with a preceding `new` - this is what treats the function as a constructor & returns the newly created object
// Here are the steps that occur when you invoke a function with `new`:
// 1) creates an entirely new object
// 2) Sets the constructor's prototype object as the object pointed to by the newly created object's prototype property
// 2) sets the value of `this` for use inside the function to point to the new object
// 3) invokes the function.  Since `this` refers to the new object, we use it within the function to set the object's properties
// and methods
// 4) Once the function finishes running, `new` returns the new object
// 5) without `new` itll invoke the constructor as a typical function.  Car() in the example below returns undefined
// `new` is what sets the function prototype (aka constructor's prototype object) as the object pointed to by the newly created object's 
// prototype property this is what permits method delegation!  And property lookup sequence in the prototype chain, aka prototypal inheritance 

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;
  this.start = function(){
    this.started = true
  }
  this.stop = function(){
    this.started = false
  }
}
let car1 = new Car('Toyota', '4Runner', 2018)

// CANNOT USE ARROW FUNCTIONS BECAUSE OF CONTEXT LOSS!
let car = (make, model, year) => {}
// cannot use concise sytnax
this.start(){} // wont work!
// Constructors that explicitly return objects, will return the object
// wont happen for primitives
// Determining Type 
console.log(car instanceof Car) // true. Since the instanceof operator tests to see if the prototype property of a 
// constructor appears anywhere in the prototype chain of an object
// 3b) CONSTRUCTORS WITH PROTOTYPES:
//     Benefit is Method Delegation to Prototypes
let DogProto = {
  bark(){
    console.log(`${this.name} says hi`)
  }
}
function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogProto)
  this.name = name; 
  this.breed = breed;
  this.weight = weight
}
// constructors are special because, like all function objects, they have a prototype property
// when you set call a function with `new` keyword, JS sets the new object's prototype to the current value 
// of the prototype property.  THE CONSTRUCTOR CREATES AN OBJECT THAT INHERITS FROM THE CONSTRUCTOR FUNCTION'S PROTOTYPE
// this is called the constructor's prototype object aka the function prototype.  This becomes the object prototype!
console.log(Dog.prototype.constructor) // [Function: Dog]
let ry = new Dog('Ry', 'Poodle', 7)
console.log(ry.constructor === Dog) // true

// 4) CLASSES
// Classes are syntatic sugar to create constructor and prototypes.
// simplest way to create a class is with a CLASS DECLARATION
// Different in that the constructor in aclass is now a method named `constructor` instead of 
// being a standalone function 
// instantiate a new object the same way with `new` keyword, but with classes you MUST use the `new` keyword

class Animal{
  constructor(species, color, weight) {
    this.species = species;
    this.color = color;
    this.weight = weight;
  }
  sayName(){
    console.log(`I am a ${this.name}`)
  }
}
// there are class expressions as well 
let Dog = class{
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}
// Two ways to identify an object's type: 
// 1) Using `instanceof` keyword
// 2) Using the `constructor` property on the object
let ryry = new Dog('Rylee', 'Thai Poodle')
console.log(ryry instanceof Dog) // true
console.log(ryry.constructor) // [Function: Dog]
console.log(ryry.constructor === Dog) // true
// Classes as first-class citizens 
// a first class citizen can be passed into a function, returned from a function and assigned to a variable.  
// Example, you can pass classes into functions as arguments
function createObject(classDefinition) {
  return new classDefinition
}
class Foo{
  say(){
    console.log('hi')
  }
}
let obj = createObject(Foo)
obj.say() // logs "hi"
// Classes are just functions, seen with typeof
typeof Foo // returns "function"
// Static Methods can be defined on classes by using the `static` keyword
// These can be called directly on the class
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static sayWoof(){
    console.log('Woof!')
  }
}
Dog.sayWoof() // logs "Woof!"

// #5 OLOO
// Objects linked to other objects uses prototypes and involves extracting properties common to all objects of the same type.  All objects
// of fhe same type then inherit from that prototype
let carPrototype = {
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this  // needed for init to return a reference to the car object it was called on to chain create and init 
  },
  start(){
    this.started = true;
  },
  stop(){
    this.started = false
  } 
}
let car1 = Object.create(carPrototype).init('Tesla', 'S', 2020)
// OLOO inherits from a single prototype object. 
// Dunno why but LS only compares OLOO to factory functions in regards to bulk creation objects of the same type.



// REVIEW 2 - METHODS AND PROPETIES; INSTANCE AND STATIC MEMBERS
// properties and methods that a constructor and prototype define are called MEMBERS of the 
// constructor or members of the objects produced by that constructor
// in the following dog example, `name`, `breed`, `age` properties and the `bark` method are instance members
// Isntance memebers are properties and methods that require an instance of the object created by that constructor. 
// You cannot access these properties on the Dog constructor because they're not defined directly on the dog 
// constructor 
function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
Dog.prototype.bark = function (){
  console.log(this.name + 'barks')
}
// Instance means the objects created using a constructor 
// Static members - are  defined and accessed directly on the constructor.  These props and methods that belong to say dogs in 
// general.  They can be methods as well: 
Dog.averageLifeSpan = 20.
Dog.getAverageLifeSpan = function() {
  return 20
}
class Poodle{
  static temper = 'angry'
}

// REVIEW 3 - PROTOTYPAL & PSEUDO-CLASSICAL INHERITANCE
// Prototypal inheritance is the only form of inheritance in JS and applies to any use of prototype objects to 
// inherit properties.  The pseudo-classical patterns use constructor functions and a prototype object.  This can be done
// directly, or by using the class keyword. 
// If a function is used as a constructor, the returned object's internal [[Prototype]] will reference the constructor's
// `prototype` property.  That lets us set properties on the constructor's prototype object so that ll objects 
// created by the constructor will share them.  We call this the PSEUDO-CLASSICAL PATTERN OF OBJECT CREATION
// The pseudo-classical pattern of object creation generates objects using a constructor function that defines state,
// then defines shared behaviors on the constructor's prototype
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age
  }
  greeting(){
    console.log(this.name + "says woof")
  }
}
// Prototypal inheritance: The object that you inherit properties and methods from is the prototype.  
// The function `Object.create` creates a new object that inherits properties from 
// an exisitng object, called the KEYWORD: PROTOTYPE OBJECT as an argument and returns a new object that inherits 
// properties from the prototype object.  The newly created object has access to all the properties and 
// methods that the prototype object provides, called method delegation
// When you create an object with Object.create(), the new object's [[Prototype]] property gets assigned to the 
// prototype object
// the difference is that the prototype is a working object instance 
let a = {
  propA: 1, 
  propB: 2
}
let b = Object.create(a)


// REVIEW 4 - ENCAPSULATION
// The core of OOP - the idea of bundling the data and operations that work on that data into 
// a single entity, an object
// In other languages, encapsulation also refers to restricting access to the state and certain behaviors.  
// Object expose a KEYWORD PUBLIC INTERFACE for interacting with other objects and keep their implementation 
// details hidden.  Thus other objects can't change the data of an object without going through the proper interface
// Unfortunately, JS doesnt support access restrictions.  


// REVIEW 5 - POLYMORPHISM
// Polymorphism refers to the ability of objects with different types to respond to the same method invocation.  It 
// Can be implemented through inheritance by METHOD OVERRIDING.  It can also be implemented through DUCK TYPING; by ensuring that objects of 
// different types use the same method NAME to perform different but related functions, those objects can interact in a 
// uniform way.
// DUCK TYPING - different types, no inheritance invovled! Note the lack of `extends`.  Each of the speak-type classes
// provide a speak method 
class Bird {
  constructor(name) {
    this.name = name
  }
  speak(){
    console.log(`My name is ${this.name}`)
  }
}
class Dog {
  constructor(name) {
    this.name = name
  } 
  speak(){
    console.log(`My name is ${this.name}`)
  }
}
let tweety = new Bird('tweety')
let icarus = new Dog('Icarus')
let animals = [tweety, icarus]
animals.forEach(obj => obj.speak(this))

// POLYMORPHISM THROUGH INHERITANCE and METHOD OVERRIDING 
// different objects can respond to the same method call by overriding the appropriate method in the class
// class cat inherits the huntingMethod from the class Feline
class Feline {
  constructor(subType){
    this.subType = subType
  }
  huntingMethod(){
    console.log(`${this.subType}: skulks`)
  }
}
class Cat extends Feline{}
class Tiger extends Feline{
  huntingMethod(){
    console.log(`skulks and brute`)
  }
}
class Cheetah extends Feline{
  huntingMethod(){
    console.log(`chases down`)
  }
}
let cat = new Cat('cat')
let tiger = new Tiger('tiger')
let cheetah = new Cheetah('cheetah')
let cats = [cat, tiger, cheetah]
cats.forEach(cat => cat.huntingMethod())


// REVIEW 6 - COLLABORATOR OBEJCTS
// Objects that are used to store state within another object are called collaborator objects.  They work 
// in collaboration with the object to which they belong 
// Collaborators are important for OOP design.  They represent connections between actors in your program. 
// Collaborators dont beed to be custom objects, they can be built-in obejcts like arrays and dates.
// They also don't need to be objects at all; primitives like strings and numbers frequently collaborate with 
// objects to form the state of those objects
let dog = {name: "Rylee", speak(){console.log('woof!')}}
let Casey = {name: Casey, pet: dog}
dog.speak() // "woof!"
Casey.pet.speak() // "woof!"


// REVIEW 7 - SINGLE VS MULTPLE INHERITANCE
// There's a limitation with inheritance pattern in JS.  Objects can only directly `inherit` from one super-type object
// An object can only have one prototype object.  In the example below, we see objA is created.  objB is formed via the 
// Object.create() method with objA as the object prototype for objB.  objB has access to the methods in objA, demonstrated
// below and we can confirm via Object.getPrototypeOf(objB) === objA is true
// Introducing objC and setting it as the prototype of objB, indicates we cannot have multiple prototype objects for any given object
// objB has access to all the methods of objC, but no longer of objA
// DELEGATE PROPERTIES/METHODS
// here we see the inheritinng object doesnt receive any prop or methods of its own.  Instead, it DELEGATES
// property and method access to its prototype.  
// Even though objects DONT acquire any properties and methods through inheritance, they can still define them 
// separately from the inheritance process
// Ex.1: 
b.propA // returns 1
b // returns {}
// Ex. 2: 
b.hasOwnProperty('foo') // false
// hasOwnProperty is available on all JS objects 
let objA = {
  name: 'objA', 
  sayName(){
    console.log(this.name + ' says hi!')
  },
}
let objB = Object.create(objA)
objB.name = 'objB'
objB.sayName()
console.log(Object.getPrototypeOf(objB))
let objC = {
  name: 'objC', 
  sayName(){
    console.log("objC is now the prototype!")
  },
  anotherMethod(){
    console.log(`objC has one more method available for objB to inherit`)
  }
}
Object.setPrototypeOf(objB, objC)
console.log(Object.getPrototypeOf(objB))
objB.sayName()
objB.anotherMethod()

// REVIEW 8 - MIX-INS: MIX-INS VERSUS INHERITANCE
// Mix-ins provide a strategy around the limitiation of JS objects only being permitted to directly inherit from 
// one super-type object. If we wanted to make methods from one object available to another without 
// overwriting the prototype object, we can use Object.assign(this, that) to copy the members from object to another. This 
// is called Mix-ins
// SEE OBJECT.ASSIGN
// Conversely, inheritance referes to the fact that in JS, every object has a protype, called the prototype object.  
// The newly created object has access to all the properties and methods that the prototype object provides.
// The difference between prototypal inheritance from mix-ins is highlighted with the inheritance from prototype chain.  
// Newly created objects that receive copied members via mix-in do not have access to the members further up the 
// prototype chain. That is to say this strategy does not benefit from mehtod and property sequence of prototypal 
// inheritance.   
// Whenever deciding on the strategy to use, decide if the types have an `is a` relationship.  Penguin `is a` swimming bird. 
// If so, use constructor or class inheritance.  
// Specifically JS uses prototypal inheritance.  The object that you inherit properties and methods 
// from is the prototype.  The function `Object.create` creates a new object that inherits properties from 
// an exisitng object, called the KEYWORD: PROTOTYPE OBJECT as an argument and returns a new object that inherits 
// properties from the prototype object.  The newly created object has access to all the properties and 
// methods that the prototype object provides
let obj = {
  methodInheritedThroughProtoChain(){
    console.log('Here we see inheritance through the prototype chain')
  }
}
let objA = {
  name: 'objA', 
  methodInheritedThroughPrototypeObject(){
    console.log(this.name + ' says hi!')
  },
}
Object.setPrototypeOf(objA, obj)
let objB = Object.create(objA)
objB.name = 'objB'
console.log(Object.getPrototypeOf(objB))
let objC = {
  name: 'objC', 
  sayName(){
    console.log("objC is now the prototype!")
  },
  methodCopiedFromMixin(){
    console.log(`objC has one more method available for objB to inherit`)
  }
}
let objD = {
  methodTestProtoypeChainAvailableToMixins(){
    console.log(`methods on prototype chain are available via mixins`)
  }
}
Object.setPrototypeOf(objC,objD)
Object.assign(objB, objC)
console.log(Object.getPrototypeOf(objB))
objB.methodInheritedThroughProtoChain()
obj.methodInheritedThroughPrototypeObject()
objB.methodCopiedFromMixin()
objB.methodTestProtoypeChainAvailableToMixins() //doesnt work!


// REVIEW 9 - METHODS AND FUNCTIONS: METHOD INVOCATIONS VS FUNCTION INVOCATIONS
// Function invocations rely upon implicit execution context that resolves to the global object
// Method invocations rely upon implicit context that resolves to the object that holds the method 
// caveat: can use explicit execution context, call, apply, bind

// REVIEW 10 - HIGHER ORDER FUNCTIONS
// HO functions either: take a func as argument, i.e. array methods or return a func


// REVIEW 11 - THE GLOBAL OBJECT
// JS creates a global object when it starts running.  This serves as an implicit execution context.
// In Node.js the global obejct is the object named `global` in the browser its the `window` object
// the global object is available everywhere in your program and houses important global properties.
// You can add properties to it at any time just dont declare variables with "let", "var", "const" 
// these are called undeclared variables
foo = "bar"
global.foo // "bar"
foo // "bar"


// REVIEW 12 - METHOD AND PROPERTY LOOKUP SEQUENCE
// When you access a property on a JS object, it first looks for an "own" property, with that name on
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


// REVIEW 13 - FUNCTION EXECUTION CONTEXT & `THIS`
// Execution context refers to the ENVIRONMENT in which a function executes.  It commonly refers 
// to the current the value of the `this` keyword.  So when we talk about the value of `this`, we're talking
// about the execution context of a function or method call.  This context depends on how the function or 
// method was invoked.  Not on where the function was defined.  So the only factor that determines the 
// the context is how you call the function or method
// SEE EXAMPLES FROM IMPLICIT EXECUTION CONTEXT


// REVIEW 14 - IMPLICIT & EXPLICIT EXECUTION CONTEXT
// IMPLICIT EXECUTION CONTEXT
// IMPLICIT the execution context that JS sets implicitly, when your code doesnt provide an explicit context.
// JS uses the global object when you invoke a function with parenthesis, and it uses the object you used to call 
// when invoking methods 
// Implicit example: a function invocation's context is the global object.  Every JS function call has an
// execution context.  So `this` is available to every function in your JS program.  Every time you call
// that function, JS binds some object to `this`
function foo(){
  console.log("this refers to: " + this)
}
foo() // this refers to [object global]
// this inside a function refers to the global object
// a) global object serves as the implicit execution context.  it is avalable everywhere in your program
//    without 'let' before a variable, declaring foo, will add it to the global object
foo = 5
global.foo  // returns 5
// Another example of implicit- Method Execution Context.  Here we see the execution context  inside a method call
// is the object used to call the method
let foo = {
  bar(){
    console.log(this)
  }
}
foo.bar() // `foo` is the implicit execution context for `bar` returns: {bar: [Function: bar]}
// EXPLICIT EXECUTION CONTEXT
// Using parenthesis after a function or method name is not hte only way to invoke it 
// ALL JS functions have the call method.  The call method calls a function with an explicit execution
// context.  Example:
function logNum(){
  console.log(this.num)
}
let obj = {
  num: 42
}
logNum.call(obj)
// Here we called the logNum function told it to use obj as the execution context.  When we use call 
// in this manner, `this` refers to the object inside the logNum function.  The first argument to call 
// provides the explicit context for the function execution. This shows how the function's 
// definitin has no bearing on its execution context. CONTEXT DOESNT GET DETERMINED UNTIL WE INVOKE THE FUNCTION


// REVIEW 15 - CONTEXT LOSS - See Context Loss Notes
// Context loss refers to how functions and methods can lose the context you'd expect them to have.
// they dont lose their context in reality
// 3 Types of Context loss: 
// 1) Copied methods - when you take a method out of an object and execute it as a function or as 
//    a method on another object.  THe Function's context is no longer the original object. Ex:

// REVIEW 16 - CALL, BIND, APPLY
// These methods allow us to explicitly set the execution context on both methods and functions. 
// see example above for call.  Call invokes the function or method with the first argument providing the 
// explicit context for the execution.  It can take multiple arguments, or with the spread syntax, an array
// APPLY
// works the same way as call except you can pass an array 
someObject.someMethod.apply(context, [arg1,arg2,arg3,...])
// although with ES6 apply isnt needed because of spread operator in conjuction with call
let args = [arg1, arg2, arg3]
someObject.someMethod.call(context,...args)
// BIND 
// doesnt call the function immediately, as does call & apply, but rather returns a new function.  The 
// new function is PERMANENTLY bound to the object passed as bind's first argument. Example:
function sumNum(num1) {
  return this.num + num1
}
let obj = {num: 42}
let sumNum2 = sumNum.bind(obj)
sumNum2(5) // 47
// note you cannot change execution context of permanently bound functions 
sumNum2.call(newObj,5) // will still return 47
// remember bind does not chagne the original function, it returns a new function and that 
// new function is permanently context-bound to the object provided as the first argument to bind


// REVIEW 17 - OBJECT.CREATE() & OBJECT.ASSIGN()
// Object.create():
// Specifically JS uses prototypal inheritance.  The object that you inherit properties and methods 
// from is the prototype.  The function `Object.create` creates a new object that inherits properties from 
// an exisitng object, called the PROTOTYPE OBJECT as an argument and returns a new object that inherits 
// properties from the prototype object.  The newly created object has access to all the properties and 
// methods that the prototype object provides
// When you create an object with Object.create(), the new object's [[Prototype]] property gets assigned to the 
// prototype object
let a = {
  propA: 1, 
  propB: 2
}
let b = Object.create(a)
// SEE DELEGATE PROPERTIES/METHODS 
// SEE INHERITANCE 
// SEE [[Prototype]]
// Object.assign()
// allows you to copy properties or methods from one object to another without changing the target object's prototype object
// especially handy when you want to make use of Mix-ins, that is to say, JS doesnt permit multiple inheritance, 
// one object factory can reuse another object factory by mixing the object returned by another factory function 
// into itself by using Object.assign


// REVIEW 18 - BUILT-IN CONSTRUCTORS: ARRAY, OBJECT, STRING & NUMBER
// See builtInContructors Notes
// JS comes with a variety of built-in constructors and prototypes that let you instantiate useful objects
// These constructors work like constructors for other objects.


// REVIEW 19 - READING OO CODE
// OOP is a style of programming that involves JS objects to organize a program.  It is a programming paradigm
// in which we think about a problem in terms of objects.  The way we think about a problem changes from 
// a series of steps to a collection of objects that interact with each other.  The idea is to model how 
// objects in the real world interact.  A real-world object like a car, for example, has state -- properties --
// like color, number of doors and fuel-level amongst others.  It also has behavior; it can be driven, etc.  That's how 
// we think about problems in OOP: set of objects with state and behavior. This allows programmers to think ata higher level of 
// abstraction.  Allows programmers to reduce dependencies and makes maintenance easier.  OOP can make our code more flexible,
// easy to understand, easy to change.  Although These programs are often much larger than the non-OOP equivalent.  It can lead to 
// less efficient code; require more memory, more disk space and computing power. 






MISCELLANOUS NOTES


// REVIEW MISC1 - INHERITANCE
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


// REVIEW MISC2- [[PROTOTYPE]]
// JS objects use an internal [[Prototype]] property to keep track of their prototype.  
// When you create an object with Object.create(), the new object's [[Prototype]] property gets assigned to the prototype object
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

// REVIEW MISC3 - DEFAULT PROTOTYPE
// All JS objects have a prototype.  Passing an empty object to Object.getPrototypeOf() returns a 
// default prototype object. That object is the prototype for all objects created using the object literal syntax, let a = {one: 1}
// The default prototype is the prototype object of the Object constructor, Object.prototype.  This means the 
// Object.prototype provides the default prototype

// REVIEW MISC4 - PROTOTYPE CHAIN
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



// REVIEW MISC5 - METHODS ON OBJECT.PROTOTYPE
Object.prototype.toString()
Object.prototype.isPrototypeOf()
Object.prototype.hasOwnProperty()

// REVIEW MISC6 - OOP 
// OOP is a programming paradigm where we think of a problem in terms of objects
// instead of a series of steps, it becomes a collection of objects tat interact with each other.  
// The idea is to model a program based on how objects in the real world interact.  A real world object 
// like a car, has state - properties, and behavior - methods 
// Advantages: makes coding robust, clear to work with, easy to remove dependencies 
//             allows programmers think about a problem at a higher-level of abstraction
//             lets them break down and solve the problem
// Disadvntages: often requires much more code than procedural coding
//               may lead to less efficient code, require more memory, disk space, computing power
let car = {
  make: "Toyota",
  model: "4Runner",
  engineOn: false,
  startEngine(){
    this.engineOn = true
  }
}

// Review MISC7 - ACCESSING CONSTRUCTOR PROPERTY 
// instances have a constructor property
// constructors have a prototype property with a constructor property
function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
Dog.prototype.bark = function (){
  console.log(this.name + 'barks')
}
let ry = new Dog('Ry', 'Poodle', 7)
console.log(ry.constructor)  // [Function: dog]
Dog.prototype.constructor  // [Function: dog]



// strict mode - "use strict"  
//  assigns this to undefined and not global
