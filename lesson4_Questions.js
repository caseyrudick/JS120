// #42 
// Change the following code so that creating a new Truck automatically invokes the `startEngine`
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }
// class Truck extends Vehicle {
//   startEngine() {
//     console.log('Ready to go!')
//   }
// }
// let truck = new Truck(2003);
// console.log(truck.year); // 2003

/// ANSWER //
// class Vehicle {
//   constructor(year) {
//     this.year = year
//   }
// }
// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//     this.startEngine()
//   }
//   startEngine() {
//     console.log('Ready to go!')
//   }
// }
// let truck = new Truck(2003)
// console.log(truck.year)


// #43
// Given the following code, modify startEngine in Truck by appending 'Drive fast, please!' 
// to the return value of startEngine in Vehicle. The 'fast' in 'Drive fast, please!' should be the value of speed.
// class Vehicle{
//   startEngine() {
//     return 'Ready to go!'
//   }
// }
// class Truck extends Vehicle{
//   startEngine(speed) {
//     return super.startEngine() + `Drive ${speed} please`
//   }
// }
// let truck = new Truck()
// console.log(truck.startEngine('fast'))


// #44
// Using the following code, create a mixin named walkMixin that contains a 
// method named walk. This method should return Let's go for a walk! when invoked. 
// Include walkMixin in Cat and invoke walk on kitty.
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }
// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// Answer //
// let walkMixin = {
//   walk(){
//     return 'Lets go for a walk'
//   }
// }
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }
// Object.assign(Cat.prototype, walkMixin)
// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// #45
// Correct the following program so it will work properly. Just make the smallest possible change 
// to ensure that objects of Maltese and Fish class have access to swim method.
// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }
// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Maltese extends Dog {}
// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");
// console.log(dog1.swim());
// console.log(fish1.swim());

// ANSWER // 
// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }
// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Maltese extends Dog {
//   constructor(name){
//     super(name)
//   }
// }
// Object.assign(Fish.prototype, swimMixin)
// Object.assign(Maltese.prototype, swimMixin)
// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");
// console.log(dog1.swim());
// console.log(fish1.swim());


// #46
// Using the following code, create a towMixin mixin that contains a 
// method named tow that returns I can tow a trailer! when invoked. Include the mixin in the Truck class.
// class Truck {}
// class Car {}
// let truck = new Truck();
// truck.tow();

// ANSWER
// class Truck {
//   constructor(){
//     Object.assign(this, towMixin)
//   }
// }
// let towMixin = {
//   tow() {
//     console.log('I can tow!')
//   }
// }
// class Car {}
// let truck = new Truck();
// truck.tow();


// #47
// Using the following code, create a class named Vehicle that, upon instantiation, 
// assigns the passed in argument to year property. Both Truck and Car should inherit from Vehicle.
// const towMixin = {
//   tow() {
//     return "'I can tow a trailer!'";
//   }
// }
// class Truck {
//   constructor() {
//     Object.assign(this, towMixin);
//   }
// }
// class Car {}
// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());
// let car = new Car(2015);
// console.log(car.year);

// ANSWER //
// const towMixin = {
//   tow() {
//     return "'I can tow a trailer!'";
//   }
// }
// class Vehicle{
//   constructor(year) {
//     this.year = year
//   }
// }
// class Truck extends Vehicle{
//   constructor(year) {
//     super(year)
//     Object.assign(this, towMixin);
//   }
// }
// class Car extends Vehicle{}
// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);


// #48
// Create a class Rectangle.
// The constructor should take 2 arguments which represent width and length respectively.
// Implement the class so that the output from the example below is correct.

// // ANSWER //
// class Rectangle{
//   constructor(width, length){
//     this.width = width;
//     this.length = length
//   }
//   getWidth(){
//     return this.width
//   }
//   getLength(){
//     return this.length
//   }
//   getArea(){
//     return this.length * this.width
//   }
// }
// let rect = new Rectangle(4, 5);
// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20


// #49
// With the previous code, Write a class called Square that inherits from Rectangle, and is used like this:
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// ANSWER //
// class Square extends Rectangle{
//   constructor(side) {
//     super(side, side)
//   }
// }
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25


// #50
// Without calling the Cat constructor, create an object that
// looks and acts like a Cat instance that doesn't have a defined name.
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }
// let fakeCat = // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// ANSWER //
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }
// let fakeCat = Object.create(Cat.prototype)// your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.


// #51
// Consider the following program.
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Cat extends Pet {
// }
// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');
// console.log(pudding.info());
// console.log(butterscotch.info());
// Update this code so that when you run it, you see the following output:
// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

// ANSWER //
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Cat extends Pet {
//   constructor(name, age, colors) {
//     super(name, age)
//     this.colors = colors
//   }
// }
// let info = {
//   info() {
//     return `My cat ${this.name} is ${this.age} and has ${this.colors} fur`
//   }
// }
// Object.assign(Cat.prototype, info)
// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');
// console.log(pudding.info());
// console.log(butterscotch.info());

// #51B
// FURTHER EXPLORATION
// An alternative approach would be to modify the Pet class to accept a colors parameter
// if we did this we wouldnt need to supply a constructor method for Cat

// Why would we be able to omit the constructor method?  
// Would it be a good idea to modify Pet in this way? Why or why not?
// How might you deal with some of the problems, if any, that may arise from modifying Pet?

// ANSWER //
// 1) Extending classes without constructor methods automatically call the super-class' constructor and 
//    pass all arguments to super
// 2) No because adding variables limits the superclass' scope as a base for other subtypes to inherit from
// 3) you can set the superclass's parameters to null by default

// #52
// Given a class Animal create two classes Cat and Dog than inherit from it.
// The Cat constructor should take 3 arguments, name, age and status. Cats should always have a leg count of 4 and a species 
// of cat. Also, the introduce method should be identical to the original except, after the phrase there should be a single space and the words Meow meow!. For example:
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }
// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true


// ANSWER //
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }
// class Cat extends Animal{
//   constructor(name, age, status){
//     super(name, age, 4, "cat", status)
//   } 
  // introduce() {
  //   return `${super.introduce()} Meow meow!`
  // }
// }
// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy.");
// logs true

// in order to use methods on the prototype of superclasses from sub classes, you have to say super.method()
// instances will get there without hte use of .super

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status )
//     this.master = master
//   }
  // introduce() {
  //   return `Hello ${this.master}! Woof, woof!`
  // }
// }

// let dog = new Dog('Ry', 6, 'emotional', 'CaseyPuri')
// console.log('***** #52 - Dog Logs *****')
// console.log(dog.introduce())
// console.log(dog instanceof Dog) // true
// console.log(dog instanceof Animal) //true
// console.log(Object.getPrototypeOf(dog)) // Dog {} 
// console.log(Object.getPrototypeOf(Dog)) // [Function: Animal]


// #53
// Consider the following classes and refactor so they all use one superclass and inherit behavior as needed
// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   getWheels() {
//     return 4;
//   }
//   info() {
//     return `${this.make} ${this.model}`
//   }
// }
// class Motorcycle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   getWheels() {
//     return 2;
//   }
//   info() {
//     return `${this.make} ${this.model}`
//   }
// }
// class Truck {
//   constructor(make, model, payload) {
//     this.make = make;
//     this.model = model;
//     this.payload = payload;
//   }
//   getWheels() {
//     return 6;
//   }
//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// ANSWER //
// class Vehicle {
//   constructor(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }
//   getWheels() {
//     return this.wheels
//   }
//   info() {
//     return `${this.make} ${this.model}`
//   }
// }
// class Car extends Vehicle {
//   constructor(make, model, wheels){
//     super(make, model, wheels)
//   }
// }
// class Motorcycle extends Vehicle{
//   constructor(make, model, wheels){
//     super(make, model, wheels)
//   }
// }
// class Truck extends Vehicle{
//   constructor(make, model, wheels, payload) {
//     super(make, model, wheels)
//     this.payload = payload;
//   }
//   info() {
//     return `${this.make} ${this.model} ${this.payload}`
//   }
// }
// let car = new Car('Toyota', '4Runner',4)
// console.log(car.info())
// let truck = new Truck('F250', 'Ford', 6, 9000)
// console.log(truck.info())


// #54
// What will the following code log?
// class Something {
//   constructor() {
//     this.data = "Hello";
//   }
//   dupData() {
//     return this.data + this.data;
//   }
//   static dupData() {
//     return "ByeBye";
//   }
// }
// let thing = new Something();
// console.log(Something.dupData());
// console.log(thing.dupData());

// Answer//
// ByeBye
// HelloHello

// #55 
// Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. 
// Person exposes method greeting which when called logs the provided greeting text. Shouter is a subtype of 
// Person and is a bit loud so whatever he says is uppercased.
// function Person() {
// }
// Person.prototype.greeting = function(text) {
//   console.log(text);
// }
// function Shouter() {
//   Person.call(this);
// }
// Shouter.prototype = Object.create(Person.prototype)
// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// }
// let person = new Person();
// let shouter = new Shouter();
// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// function Person() {
// }
// Person.prototype.greeting = function(text) {
//   console.log(text);
// }
// function Shouter() {
//   Person.call(this);
// }
// Shouter.prototype = Object.create(Person.prototype)
// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// }
// let person = new Person();
// let shouter = new Shouter();
// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// Answer //
// class Person {
//   greeting(text) {
//     console.log(text)
//   }
// }
// class Shouter extends Person {
//   greeting(text) {
//     return super.greeting(text.toUpperCase())
//   }
// }
// let casey = new Person()
// casey.greeting('everything alright?')
// let puri = new Shouter()
// puri.greeting("I'm mad")

// #56
// You modify the following classes so the instances work to produce the commneted out logs
// BUT are only allowed one method to do this
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   gait() {
//     return "strolls";
//   }
// }
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   gait() {
//     return "saunters";
//   }
// }
// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }
//   gait() {
//     return "runs";
//   }
// }
// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"
// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"
// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"


// ANSWER //
// const locomotion = {
//   walk(){
//     return `${this.name} ${this.gait()} forward`
//   }
// }
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   gait() {
//     return "strolls";
//   }
// }
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   gait() {
//     return "saunters";
//   }
// }
// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }
//   gait() {
//     return "runs";
//   }
// }
// Object.assign(Person.prototype, locomotion)
// Object.assign(Cat.prototype, locomotion)
// Object.assign(Cheetah.prototype, locomotion)
// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"
// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"
// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// #57
// Write classes and methods so the following logs will output:
// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.

// class Pet {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   getinfo(){
//     console.log(`A ${this.type} named ${this.name}`)
//   }
// }
// class Owner {
//   constructor (name) {
//     this.name = name;
//     this.pets = []
//   }
//   ownPet(pet) {
//     this.pets.push(pet)
//   }
//   printPets(){
//     this.pets.forEach(pet => pet.getinfo())
//   }
//   numberOfPets(){
//     return this.pets.length
//   }
// }
// class Shelter {
//   constructor(name) {
//     this.name = name
//     this.owners = {}
//   }
//   adopt(human, pet){
//     human.ownPet(pet)
//     if (!this.owners[human.name]) {
//       this.owners[human.name] = human
//     }
//   }
//   printAdoptions(){
//     for (let owner in this.owners) {
//       console.log('')
//       console.log(`${owner} has the following pets:`)
//       this.owners[owner].printPets()
//       console.log('')
//       console.log('')
//     }
//   }
// } 

// let Chatuchak = new Shelter("Chatuchak")
// let Ry = new Pet('RyRy', "Thai Poodle")
// let Casey = new Owner("Casey")
// let Purisa = new Owner("Pui")
// let Pepp = new Pet("Pepp", "Royal Thai Poodle")
// Chatuchak.adopt(Purisa, Pepp)
// Chatuchak.adopt(Purisa, Ry)
// Chatuchak.printAdoptions()
// console.log(`${Purisa.name} has ${Purisa.numberOfPets()} adopted pets.`)

// #58
// class Banner {
//   constructor(message) {
//     this.message = message
//   }

//   displayBanner() {
//     console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
//   }

//   horizontalRule() {
//     return "+-" + "-".repeat(this.message.length) + "-+"
//   }
//   emptyLine() {
//     return "| " + " ".repeat(this.message.length) + " |"
//   }

//   messageLine() {
//     return `| ${this.message} |`
//   }
// }

// let banner1 = new Banner('To boldly go where no one has gone before.');
// banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

