// function Dog(name, breed, age) {
//   this.name = name;
//   this.breed = breed;
//   this.age = age;
// }
// Dog.prototype.bark = function (){
//   console.log(this.name + 'barks')
// }
// let Ry = new Dog('Ry', 'Poodle', 7)
// console.log(Ry.constructor)  // [Function: dog]
// console.log(Dog.prototype.constructor)  // 

// let Dog = class{
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
// }
// let ryry = new Dog('Rylee', 'Thai Poodle')
// console.log(ryry instanceof Dog) // true
// console.log(ryry.constructor) // Dog {}


// function Dog(name, breed) {
//   this.name = name; 
//   this.breed = breed;
// }

// Dog.prototype.bark = function() {
//   console.log(`${this.name} says woof`)
// }
// let ry = new Dog('ry', 'thai poodle')
// ry.bark()

// class Animal{
//   constructor(name) {
//     this.name
//   }
//   sayHey(){
//     console.log("Hey")
//   }
// }
// class Dog extends Animal{
//   constructor(name){
//     super(name)
//     this.numberOfLegs = 4
//   }
//   woof(){
//     console.log("woof")
//   }
// }

// class Poodle extends Dog{
//   constructor(name){
//     super(name)
//     this.hair = 'frizzy'
//   }
//   angry(){
//     console.log(`${this.name} is angry`)
//   }
// }

// let ry = new Poodle('Ry')
// for (prop in ry) {
//   console.log(prop)
// }
// ry.sayHey()
// console.log(Object.getPrototypeOf(Dog))
// console.log(ry instanceof Animal)
// console.log(Object.keys(ry))

// let obj1 = {ap: 1}
// let objA = Object.create(obj1)
// objA["foo"] = 1// {foo: 1, bar: 2, mehtod1(){console.log(foo)}}
// for (prop in objA) {
//   console.log(prop)
// }
// console.log('')
// console.log(`objA: ${this.objA}`)
// console.log(objA)
// let objB = Object.create(objA)
// console.log(objB instanceof objA)


// object factories 
// disadvantages: cannot determine type via instanceof as the instanceof operator looks to see if the object's constructor prototype object exists 
// appears anywhere in the prototype chain
// there is no constructor 
// copies all methods to the newly created objects, requires lots of memory.  It does not make use of property delegation
// syntax is like an object, but you use the return {} object literal 
// the prototype object of the newly objects created will point to an empty object as it'll point to the default prototype
// object of hte Object constructor

// The default prototype is the prototype object of the Object constructor, Object.prototype.  This means the 
// Object.prototype provides the default prototype

// function createCar(make, model) {
//   return {
//     make, 
//     model,
//     sayMake() {
//       console.log(`${this.make}`)
//     }
//   }
// }

// let car1 = createCar('toyota', '4runner')
// car1.sayMake()

// constructors 
// similar in structure to object factories. Differences:
// begins with capital letter
// makes referecnces to `this`
// must be invoked with `new`
// doesnt have explicit return statement 
// events that occur when invoked with new: 
// 1) creates new object 
// 2) sets the value of the function prototype as the object pointed to by the object prototype property 
// 3) sets execution context of this to the newly created obj
// 4) invokes the function 
// 5) returns the newly created object 

// let dogPrototype = {
//   bark() {
//     console.log(this.name + " says woof!")
//   }
// }

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight; 
// }
// Object.setPrototypeOf(Dog, dogPrototype);

// let Rylee = new Dog('ry', 'poodle', 5)
// console.log(Rylee instanceof Dog)  // true

// classes 
// same strategy as constructor prototype, except they have syntactic sugar to make it more evident
// constructors are methods instead of standalone functions 

class Poodle{
  static temper = 'angry'
}

console.log(Poodle.temper)