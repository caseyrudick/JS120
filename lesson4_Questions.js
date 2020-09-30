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

// #59
// A grocery store uses a JavaScript function to calculate discounts on various items. 
// They are testing out various percentage discounts but are getting unexpected results. 
// Go over the code, and identify the reason why they aren't getting the expected 
// discounted prices from the function. Then, modify the code so that it produces the correct results.
// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     this.price -= discount;
    
//     return this.price;
//   },
// };
// > item.discount(20)   // should return 40
// = 40
// > item.discount(50)   // should return 25
// = 20
// > item.discount(25)   // should return 37.5
// = 15

// ANSWER // 
// let Item = {
//   init(price) {
//     this.name = 'Foo';
//     this.description = 'Fusce consequat dui est, semper.';
//     this.price = price;
//     this.quantity = 100;
//     return this;
//   },
//   discount(percent) {
//     let discount = this.price * percent / 100;
//     this.price -= discount;
    
//     console.log(this.price);
//   },
// };
// let itemA = Object.create(Item).init(100)
// console.log(itemA)
// itemA.discount(20)   // should return 40
// let itemB = Object.create(item)
// itemB.discount(50)   // should return 25
// let itemC = Object.create(item)
// itemC.discount(25)   // should return 37.5

// #60
// In JavaScript, comparing two objects either with == or === checks for object identity. 
// In other words, the comparison evaluates to true if it's the same object on either side of 
// == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects 
// have the same key/value pairs. JavaScript doesn't give us a way to do that.
// Write a function objectsEqual that accepts two object arguments and returns true or false 
// depending on whether the objects have the same key/value pairs.

// ANSWER //
// function objectsEqual(obj1, obj2) {
//   for (key in obj1) {
//     if (obj2[key] !== obj1[key]) {
//       console.log(`Here's the problem ${key}:${obj2[key]}`)
//       console.log(false)
//       return false
//     }
//   }
//   console.log(true)
// }
// let objA = {
//   1: 'a',
//   2: 'b'
// }
// let objC = Object.create(objA)
// for (key in objC) {
//   console.log(objC.hasOwnProperty(key))
// }
// let objB = {
//   1: 'a',
//   2: 'c'
// }
// objectsEqual(objA, objB)

// #61
// Create an object factory for a student object. The student object should have the following methods 
// and it should produce the expected results demonstrated in the sample code:

// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

// class Student {
//   constructor (name, year) {
//     this.name = name; 
//     this.year = year;
//     this.courses = []
//   }
//   info(){
//       console.log(`${this.name} is a ${this.year} year student`)
//   }
//   listCourses(){
//       //this.courses.forEach(course => console.log)
//       this.courses.forEach(courseObj => {
//         console.log(`${courseObj}`)
//       })
//   }
//   addCourse(course){
//     this.courses.push(course)
//   }
//   addNote(courseNumber, description){
//     // iterate through the course list, find the right object 
//     // whose "code === coursenUm"
//     this.courses.forEach(obj => {
//       if (obj['code'] === courseNumber) {
//         obj['note'] ? obj['note'] += `; ${description}` : obj['note'] = description
//       }
//     })
//   }
//   addGrade(courseName, courseGrade) {
//     this.courses.forEach(courseObj => {
//       if (courseObj['name'] === courseName) {
//         courseObj['grade'] = courseGrade
//       }
//     })
//     }
  
//   updateNote(courseNumber, descript) {
//     this.courses.forEach(course => {
//       if (course['code'] === courseNumber) {
//         course['note'] = descript
//       }
//     })
//   }
// }

// console.clear()
// let foo = createStudent('Foo', '1st');
// //foo.info();
// //foo.listCourses();
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// //foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// //foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// //foo.viewNotes();
// //foo.updateNote(101, 'Fun course');
// foo.listCourses()

// #62
// Create a school object. The school object uses the student object from the previous exercise. 
// It has methods that use and update information about the student. Be sure to check out the previous exercise 
// for the other arguments that might be needed by the school object. Implement the following methods for the school object:
// 
// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.


class Student {
  constructor (name, year) {
    this.name = name; 
    this.year = year;
    this.courses = []
    this.GPA = 0
  }
  info(){
      console.log(`${this.name} is a ${this.year} year student`)
  }
  listCourses(){
      //this.courses.forEach(course => console.log)
      this.courses.forEach(courseObj => {
        console.log(`${courseObj}`)
      })
  }
  addCourse(courseName, courseNumber){
    let obj = {}
    obj['name'] = courseName;
    obj['code'] = courseNumber
    this.courses.push(obj)
  }
  addNote(courseNumber, description){
    // iterate through the course list, find the right object 
    // whose "code === coursenUm"
    this.courses.forEach(obj => {
      if (obj['code'] === courseNumber) {
        obj['note'] ? obj['note'] += `; ${description}` : obj['note'] = description
      }
    })
  }
  addGrade(courseName, courseGrade) {
    this.courses.forEach(courseObj => {
      console.log(courseObj)
      if (courseObj['name'] === courseName) {
        courseObj['grade'] = courseGrade
      }
    })
    }
  
  updateNote(courseNumber, descript) {
    this.courses.forEach(course => {
      if (course['code'] === courseNumber) {
        course['note'] = descript
      }
    })
  }
  calculateGPA() {
    let score = 0
    let classCount = 0
    this.courses.forEach(courseObj => {
      score += courseObj['grade']
      classCount += 1
    })
    return score/classCount
  }
}

class School {
  constructor() {
    this.students = []
    this.classes = []
  }
  viewStudentCourses(studentObject) {
    return studentObject.courses
  }
  viewClasses(){
    console.log(this.classes)
  }
  addClass(className) {
    if (this.classes[className]) {
      console.log("Class already exists")
    } else {
      this.classes[className] = []
    }
  }
  enrollStudent(className, student) {
    // iterates through the student object
    // extracts the student's name 
    // extracts the student's grade 
    // packages info above as object and adds it to the className list 
    let studentObjectOmittingCoursesProperty = {}
    console.log(student)
    for (let prop in student) {
      if (prop === 'name') {
        studentObjectOmittingCoursesProperty['name'] = student[prop];
      }
      if (prop === 'courses') {
        student[prop].forEach(courseObject => {
          for (prop in courseObject) {
            if (courseObject[prop] === className) {
              studentObjectOmittingCoursesProperty['grade'] = courseObject['grade'] || "In Progress"
            }
          }
        })
      } 
    }
    this.classes[className].push(studentObjectOmittingCoursesProperty)
  }
  getReportCard(student) {
    student.courses.forEach(courseObj => {
      console.log(`${courseObj['name']}: ${courseObj['grade'] || "In Progress"}`)
    })
  }
  courseReport(courseName) {
    // create course report 
  }
  toString(courseName) {
    return this.classes[courseName]
  }
  viewClassRoster(courseName) {
    console.log(`${courseName}:`)
    console.log(this.toString(courseName))
  }
  viewStudentCourseInfo(student) {
    console.log(student)
  }
}

let Casey = new Student("Casey Rudick", "2nd")
let Puri = new Student("Puri Rudick", '1st')
let LaunchSchool = new School()
Casey.addCourse("Math", 101)
Casey.addGrade("Math", 94)
Casey.addCourse("JavaScript", 102)
Casey.addGrade("JavaScript", 95)
Casey.addCourse("OOP", 120)
Casey.addNote(101, "Good class")
Casey.addNote(102, "Difficult")
Casey.addNote(102, "Excited for OOP")
Puri.addCourse("Multivariable Calculus", 110)
Puri.addCourse("Machine Learning", 120)
Puri.addGrade("Machine Learning", 98)
let Ryry = new Student("Rylee Rudick", "0")
Ryry.addCourse("Machine Learning", 120)
Ryry.addGrade("Machine Learning", -5)
//Puri.addGrade("Multivariable Calculus", 99)
// LaunchSchool.enrollStudent(Casey, "Physics")
// LaunchSchool.enrollStudent(Casey, "Chemistry")

//LaunchSchool.viewClasses()
//console.log(LaunchSchool.viewStudentCourses(Casey))
//Casey.addGrade("Chemistry",93)
//console.log(`Student courses in the school${LaunchSchool.viewStudentCourses(Casey)}`)
console.clear()
console.log(Puri.calculateGPA())
LaunchSchool.getReportCard(Puri)

//console.log(Array.isArray(LaunchSchool.classes))
//LaunchSchool.viewStudentCourses(Casey)
LaunchSchool.addClass("Machine Learning")
LaunchSchool.addClass("Multivariable Calculus")
LaunchSchool.addClass("JavaScript")
LaunchSchool.enrollStudent("Machine Learning", Puri)
LaunchSchool.enrollStudent("Machine Learning", Ryry)
LaunchSchool.enrollStudent("Multivariable Calculus", Puri)
console.clear()
LaunchSchool.viewClassRoster("Machine Learning")
LaunchSchool.viewClassRoster("OOP")

//LaunchSchool.viewClassRoster("Multivariable Calculus")  