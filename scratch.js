// OLOO
let Poodle = {
  init(name, color) {
    this.name = name;
    this.color = color
    return this
  },
  getInfo(){
    console.log(`Hey I'm ${this.name} and I'm a ${this.color} poodle`)
  }
}



let Ry = Object.create(Poodle).init('Ry', 'brown')
Ry.getInfo()

// Constructor/Prototypes

function Car (name, speed = 'average') {
  this.name = name
  this.speed = speed
}
Car.prototype.driveFast = function(){
  console.log(this.speed)
}

function Sportscar(name, speed = "FAST"){
  Car.call(this, name, speed)
}

Sportscar.prototype = Object.create(Car.prototype)
let Ferrari = new Sportscar('Ferrari')
Ferrari.driveFast()

// Inheritance types : prototypal and pseudo-classical
// Prototypal is the easier one, an object's internal [[Prototype]] points to another object
// like creating an object from another by simply newObj = Object.create(oldObject)
// pseudo-classical inheritance is also called CONSTRUCTOR inheritance.  This is the inheritance that's relevant



function Animal() {}
function Cat() {}
Cat.prototype = new Animal();
function makeCat() {
  return {};
}

let fluffy = makeCat();
console.log(fluffy instanceof Animal);