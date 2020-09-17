// Now we'll begin to use prototypal delegation to create object subtypes
// Another method of enabling code re-use is by using mix-ins 
// Finally will tie it all together with polymorphism and OLOO

// OLOO
// Another way to create objects in bulk
// This uses prototypes and involves extracting properties common to all objects of a same type 
// to a prototype object.  All objects of the same type then inherit from that prototype, think car objects

let carPrototype = {
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  }
}

// now that we have a car prototype, all car objects can inherit from it 

let car1 = Object.create(carPrototype)
car1.make = 'Toyota'
car1.model = 'Corolla'
car1.year = 2016

// We can now call start and stop on the car1 object since both are accessible through its prototype

car1.start() 
car1.started // true

car1.stop()
car1.started // false

// Now we must automate the make, model, year properties 
// the most common technique is to use an `init` method on the prototype object

let carPrototype1 = {
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  },
}

// this is how we create it
let car2 = Object.create(carPrototype1);
car2.init('Toyota', 'Corolla', 2016)

// although the init method still needs 2 lines of code to create a new car object...
// init needs to return `this`

let carPrototype2 = {
  // omit code for brevity

  init(make, model, year) {
    this.make = make;
    this.model = model; 
    this.year = year;
    return this;
  }
}

// Since init now returns a reference to the car object it was called on, we can chain `create` and `init` 
// and assign the result to the `car` variable

let car3 = Object.create(carPrototype2).init('Toyota', 'Corolla', 2016)

// Benefit of OLOO vs Factory Functions: memory efficiency 
// This is because all objects created with the OLOO pattern inherit methods from a single prototype object 
// the objects that inherit from that prototype object share the same methods 
// Factory function conversely create copies of all the methods for each new object


// here's an example of a factory function pattern, versus the OLOO for the same needs
let pudding = createPet("Cat", "Pudding")
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`)
pudding.sleep()
pudding.wake()
console.log(`pudding1: ${pudding}`)

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
console.log(`neptune1: ${neptune}`)

function createPet(animal, name) {
  return {
    name: name, 
    animal: animal,

    sleep: function(){
      console.log("I'm sleeping")
    },
    wake: function() {
      console.log("I'm awake")
    }
  }
}

// now the OLOO pattern...
let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name
    return this
  },
  sleep: function (){
    console.log('I am sleeping')
  },
  wake: function() {
    console.log("I am awake")
  },
}

let pudding1 = Object.create(PetPrototype).init('Cat','Pudding')
console.log(`I am a ${pudding1.animal}. My name is ${pudding1.name}.`);
pudding1.sleep(); // I am sleeping
pudding1.wake();  // I am awake
console.log(`pudding2: ${pudding1}`)

let neptune1 = Object.create(PetPrototype).init('Fish', 'Neptune')
console.log(`I am a ${neptune1.animal}. My name is ${neptune1.name}.`);
neptune1.sleep(); // I am sleeping
neptune1.wake();  // I am awake
console.log(`neptune1: ${neptune1}`)


let puddin2 = Object.create(PetPrototype).init('princess','Ry')
console.log(puddin2)
console.log(Object.getOwnPropertyNames(puddin2))

// What is the difference between the two objects created from factory functions versus OLOO?

// factory fucntion objects each have a copy of all the methods, whereas objects created with OLOO 
// have a prototype object that contains the methods associated with the created object.  They all share the 
// same methods.  Thus objects from OLOO are more efficient in terms of memory use

// Private State
// Objects created with the factory function can have private state
// Any state stored in the body of a factory function, instead of the returned object is private to the returned object
// they can be accessed or modified unless one of the object methods exposes the state
// With OLOO, there is no way to define private state -- all of it can be accessed and modified by outside code
