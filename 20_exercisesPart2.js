// 1 Using the folowing code, create two class - Truck and Car that both inherit from Vehicle

// class Vehicle {
//   constructor(year) {
//     this.year = year
//   }
// }
// let truck = new Truck (2003)
// console.log(truck.year)
// let car = new Car(2015)
// console.log(car.year)

// class Truck extends Vehicle{}
// class Car extends Vehicle{}


// 2
// Change the following code so that creating a new Truck automatically invokes the `startEngine`
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year){
//     super(year)
//     this.startEngine()
//   }
//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003)
// console.log(truck.year); // 2003

// #3
// Using the folloiwng code, allow `Truck` to accept a second argument upon instantiation.  Name the 
// parameter `bedType` and implement the modification so `Car` continues to only accept 1 argument

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }
// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year)
//     this.bedType = bedType
//   }
// }
// class Car extends Vehicle {
//   constructor(year) {
//     super(year)
//   }
// }
// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);

// #4
// Given the following code, modify `startEngine` in `Truck` by appending "Drive fast, please!" to 
// the return value of `startEngine` in `Vehicle`.  The `fast` in "'Drive fast, please!'" should be the value of `speed`

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }
// class Truck extends Vehicle {
//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}. Please!`
//   }
// }
// let truck = new Truck();
// console.log(truck.startEngine('fast'));

// here we are using `super` to call function on the object's parent

// #5
// create a mix-in named `walkMixin` that contains a method named `walk`
// This method should return `Let's go for a walk!`. Include walkMixin in Cat and invoke walk on kitty.

// const walkMixin = {
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

// #6 
// Correct the following program so it will work properly.  Just make the smallest change to ensure 
// the objects of Maltese and Fish class have access to swim method.

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }
// class Fish {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, swimMixin)
//   }
// }
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Maltese extends Dog {
//   constructor(name) {
//     super(name)
//     Object.assign(this, swimMixin)
//   }
// }
// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");
// console.log(dog1.swim());
// console.log(fish1.swim());

// #7
// Using the follwoing code, create a `towMixin` mixin that contains a method named `tow`
// that returns `I can tow a trailer!` when invoked.  Incldue the mixin in the `Truck` class

// const towMixin = {
//   tow(){
//     console.log('I can tow a trailer')
//   }
// }
// class Truck {
//   constructor(){
//     Object.assign(this, towMixin)
//   }
// }
// class Car{}
// let truck = new Truck()
// truck.tow()

// its wasteful to do the above because then towMixin will be copied to every instance!
// instead, put it in it's proto: 
// Object.assign(Truck.prototype, towMixin)

// #8
// Create a class named `Vehicle` that upon instantiation, assigns the passed in argument to year
// property.  Both `Truck` and `Car` should inherit from vehicle

// const towMixin = {
//   tow() {
//     return "'I can tow a trailer!'";
//   }
// }

// class Vehicle {
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

// class Car extends Vehicle{
//   constructor(year) {
//     super(year)
//   }
// }

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);