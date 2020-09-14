// #27
// rewrite the following to use object-literal syntax to generate the 
// returned object
// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// #28 SEE /Users/caseyrudick/LaunchSchool/JS120/invoicePayments.js

// #29
// what happens when you run the following code
// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // ?

// throws a typeError since scamper is an undefined property on lizzy.  
// Since Lizard was invoked without the new operator and it doesnt have 
// an explicit return value, the return value is undefined
// Thus lizzy gets assgined to undefined which causes the call to scamper to 
// throw an error: you can't call a method on undefined

// #30
// create a constructor named Ninja with a property named swung, set it to true
// add a method to the constructor prototype named swingSword and return the property swung
// create a new instance of Ninja called ninja and invoke the method

// function Ninja () {
//   this.swung = true;
// }
// Ninja.prototype.swingSword = function(){
//   return this.swung
// }
// let ninja = new Ninja()
// console.log(ninja.swingSword())

// #31
// constructor function that takes radius as an argument 
// call area method on any objects created by the construcor to get area 


// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty('area')); // => false


// #32
// function Dog() {
// }
// function Pet(type) {
//   if (type === 'dog'){
//     return new Dog();
//   } else if (type === 'lion') {
//     return 'not a pet'
//   }
// }
// let dog = new Pet('dog')
// let lion = new Pet('lion')
// let cat = new Pet('cat')
// console.log(dog.constructor)
// console.log(lion.constructor)
// console.log(cat.constructor)

// #33
// let arr1 = new String(123)
// let arr2 = String(123)
// console.log(arr1)
// console.log(arr2)

// #34 
// Name the constructor - write code to log the name of the constructor the values belong 
// console.log("Hello");
// console.log([1,2,3]);
// console.log({name: 'Srdjan'});

// console.log("Hello".constructor.name)
// console.log([1,2,3].constructor.name)
// console.log({name: 'Srdjan'}.constructor.name)

// #35
// create an empty class named Cat

// class Cat {
//   constructor (args) { // this is a method where you can insert args and use this
//     //insert this and args 
//   }
// }


// #36 create an instance of Cat and assign it to the variable Kitty

// class Cat {
//   constructor(arg) {

//   }
// }
// let kitty = new Cat()
// console.log(kitty) // Cat {} 
// console.log(kitty.constructor) // [Function: Cat]
// console.log(kitty.prototype) // undefined 
// console.log(kitty.constructor.name) // returns Cat
// console.log(kitty instanceof Cat) // true
// console.log(kitty.constructor === Cat) //true
// console.log(typeof Cat)  // function 
// console.log(typeof kitty)  // object
// console.log(Object.getPrototypeOf(kitty) === Cat.prototype) //true


// #37a
// inspect the following code and insert the missing portion to make the logs true
// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }
// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };
// // missing code
// // need to create constructor function
// class Child {
//   constructor(name, school){
//     Person.call(this, name)
//     this.school = school 
//   }
// }
// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person === false);                    // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log();

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true

// #37b
// inspect the following code and insert the missing portion to make the logs true
// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }
// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };
// function Child(name, school) {
//   Person.call(this, name)
//   this.school = school
// }
// Child.prototype = Object.create(Person.prototype) // this returns a new copy of the Person prototype object and assigns it to the Child.prototype
// //Child.prototype.constructor = Child
// // missing code
// // need to get speak on Child 
// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

//let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person);                              // true
// console.log(Object.getPrototypeOf(child) === Person.prototype);     // true
// console.log(Child.prototype.constructor === Child)
// console.log(Object.getPrototypeOf(child).constructor === Person);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log(child.speak() === "Hello, my name is Suzy.");          // true
// console.log();

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true
// console.log(person.learn === undefined);                           // true


// #38
// Create a class Person, give it one argument for "name", if no arguments , person object should 
// instantiate with a "name" of "John Doe"
// class Person {
//   constructor(name = "John Doe"){
//     this.name = name
//   }
// }
// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

// #39
// Using the following code, add an instance method named `rename` that renames `kitty` when invoked
// class Cat {
//   constructor(name) {
//     this.name = name
//   }
//   rename(newName) {
//     this.name = newName
//   }
// }
// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

// class Cat {
//   constructor(name) {
//     this.name = name
//   }
//   rename(newName) {
//     this.name = newName
//   }
// }

// #40
// Modify the following code so that `Hello! I'm a cat` is logged when Cat.genericGreeting is invoked
// class Cat{
// }
// Cat.genericGreeting()

// class Cat {
//   static genericGreeting() {
//     console.log("Hello I'm a cat")
//   }
// }

// #41
// Add 2 methods, static `genericGreeting` and instance method `personalGreeting`
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let kitty = new Cat("Sophie");
// Cat.genericGreeting();
// kitty.personalGreeting();

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   static genericGreeting() {
//     console.log(`Hello I'm a cat`)
//   }
//   personalGreeting() {
//     console.log(`Hello I'm ${this.name}`)
//   }
// }