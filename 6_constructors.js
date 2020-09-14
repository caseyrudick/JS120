// here's an object
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2016,
  started: false,

  start() {
    this.started = true;
  },

  stop() {
    this.started = false;
  },
}

// here's the constructor function to make the object above

function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;
  this.start = function(){
    this.started = true;
  }
  this.stop = function(){
    this.started = false
  }
}

// 1 notice the name of the function is capitalized
// 2 function parameters match the properties associated with each car
// 3 use this to set the object's properties and methods
// 4 doesnt have an explicit return value

let caseysCar = new Car('Toyota', '4Runner', 2018);
let purisCar = new Car('BMW', 'X3', 2019)
console.log(caseysCar)
console.log(purisCar)

// 1 Notice invocation is preceded by `new` keyword.  This is what treats the function as a constructor
// 2 It returns the newly created object, even though the constructor function doesnt have a return statement

// here's using new on a method
let foo = {
  car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let car3 = new foo.car('BMW', 'X5', 2020)
console.log(car3)

// BUT you cannot use it to call a method with concise syntax
// many built in objects and methods are incompatible with `new`
//    new console.log()
//    new Math()
//    new parseInt('3')
//    new Date()

// constructor functions sometimes need to grow with the needs of the program, which means adding more 
// arguments to the constructor.  Like below: 
function Car4(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}
// this can cause bugs by passing in arguments in the wrong order which will = bugs
// solution: pass an object argument ...
let fourRunnerArgs = {
  make: 'Toyota',
  model: '4Runner',
  year: 2018,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 50000
}
let newFourRunner = new Car5(fourRunnerArgs)
console.log(newFourRunner)

// but this means we have to rework our Car constructor to accept an object as an argument

function Car5(args) {
  this.make = args.make;
  this.model = args.model;
  this.year = args.year;
  this.color = args.color;
  this.passengers = args.passengers;
  this.convertible = args.convertible;
  this.mileage = args.mileage;
  this.started = false;

  this.drive = function() {
    this.started = true
  }
}

// that's the expanded view, we can simplify this with Object.assign!

function Car6(args) {
  Object.assign(this,args);
  this.drive = function() {
    this.started = true;
  }
  // rest of the methods
}
let caseyCar2 = new Car6(fourRunnerArgs)
console.log(caseyCar2)
// the problem with this is the args objec may contain properties that the car object doesn't need
// those may cause trouble

/////////// Constructors with Prototypes ///////////
// here we will make use of prototypes to reduce replication of methods across objects from the same 
// constructor

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
maxi.hasOwnProperty('bark') // true
dexter.hasOwnProperty('bark') // true
biggie.hasOwnProperty('bark') // true

// everytime you create an instance of dog, bark() is recreated.  Unlike the other properties, it isn't unique
// so it'd be best to use a prototype.  This is called Method Delegation to Prototypes

let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!': 'Yip!')
  }
}

function Dog2(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight; 
}

// now lets tweak the naming convention of the DogPrototype to make the relationship clear that it will provide 
// properties/methods to dog
// note there is no `let` before the new style of the prototype definition

Dog3.myPrototype = {
  bark() {
    return this.weight > 20? 'Woof!' : 'Hiw ka!'
  }
}

function Dog3(name, breed, weight) {
  Object.setPrototypeOf(this, Dog3.myPrototype)
  this.name = name;
  this.breed = breed;
  this.weight = weight; 
}
console.log('checking Dog3.hasOwnPrototype')
console.log(Dog3.hasOwnProperty('bark'))
// invoke it and then call .hasOwnProperty('bark') on the newly created objects

let pepp = new Dog3('Pepper', 'Thai Poodle', 15)
console.log(`Pepp says: ${pepp.bark()}`)

// constructor prototypes and object prototypes
// if bar is an object, then the object from which bar inherits is the object prototype
//    by default, constructor functions set the object prototype for the objects they create to the constructor's prototype object
// the constructor's prototype object, also called the function prototype, is a function object that the constructor uses as the 
// object prototype for the objects it creates.  Meaning, each object the constructor creates, inherits from the constructor's 
// prototype object.  The constructor stores its prototype object in its prototype property. If the constructor's name is Foo,
// then Foo.prototype references the constructor's prototype object
// Note that constructors don't inherit from the constructor's prototype object.  Instead, the objects that the constructor 
// creates inherit from it 
// Every JS function has a prototype property.  BUT JS only uses it when you call that function as a constructor, but using the 
// `new` keyword
// this means we can delete the explicit constructor-prototype pairing we did above (Object.setPrototypeOf(this, DogProto))

function Dog4(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype)
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog4.prototype.bark = () => {
  return this.weight > 20 ? 'Woof!' : 'Loei loei!'
}

let Ryry = new Dog4('Ryry', 'Thai Poodle', 6)
//console.log(Object.getPrototypeOf(Ryry))
// for (prop in Ryry) {
//   console.log(prop)
//   console.log(Ryry.hasOwnProperty(prop) === true)
// }
console.log(typeof Ryry)

// here are the steps of what happens when you work with a constructor and prototype as described above
// 1) It creates an entirely new object
// 2) It sets Dog.prototype as the prototype for the new object.  So the new object inherits from the 
//    object referenced by Dog.prototype
// 3) It sets the execution context (this) for the function to point to the new object
// 4) It invokes the function
// 5) It returns the new object unless the function returns another object

// Remember when you call a method on an object, JS binds `this` to the object whose method you used to call it
// If it doesnt find the method in that object, but does find it on the prototype, it doesnt change the value of `this`
// `this` always refers to the object used to call the method, aka the original object.  Even if the method is in the prototype
// Long story short, if we find the bark method in the prototype, `this` references the original dog object, not the prototype


// a property of interest on the prototype object, is the constructor property: 
console.log(Dog4.prototype.constructor)

// Similar to `instanceof` operator, `constructor` property lets us determine the type of an object

if (Ryry.constructor === Dog4) {
  console.log(`She came from Dog4 constructor`)
} else {
    console.log('she cam from somewhere else')
}

// Although it's possible to reassign the constructor property to something else, be careful. 
// Will learn about later, but here's an example:

Dog4.prototype.constructor = function () {};
Ryry.constructor === Dog4 // returns false
Ryry instanceof Dog4 // true -- still returns true

// OVERRIDING THE PROTOTYPE
// Inherited methods doesnt mean the inherited object is stuck with those methods.  
// Ex. we can change the bark method, just define a custom bark() on pepp

pepp.bark = () => {
  console.log('Super hiw ka') 
}

console.log(`Ryry: ${Ryry.bark()}`)
pepp.bark()


function Myconstructor() {} // this is just a function, doesnt become a constructor until invoked with new 
//console.log(Object.getOwnPropertyNames(Myconstructor)) // returns ["length", "name", "arguments", "caller", "prototype"]
// the prototype property is what is usually referred to as the 'Function Prototype', aka the `prototype` property of a function 
//console.log(Myconstructor.prototype)

// a constructor only has one prototype property, see above
// this property points to an object that objects created from the constructor function delegates to


// Mutating the Constructor's Prototype Property After Instantiating
let myObj = new Myconstructor()
console.log(Object.getPrototypeOf(myObj)) // returns the object pointed to by the constructor's prototype property
// here's the mutation...
Myconstructor.prototype.someOtherMethod = () => console.log('heyyy')
myObj.someOtherMethod() // logs 'heyyy'
// this is because the object assigned to the constructor's prototype is the object prototype for the instance myObj

// Internal [[prototype]] property 
// There is an internal [[prototype]] property, for functions this points to the prototype property of the `Function` class 
// or constructor 
// this is what JS uses to keep track of an object's prototype 
// we can see what [[prototype]] is pointing to by using:
Object.getPrototypeOf()