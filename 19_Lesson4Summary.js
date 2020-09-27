// 1) OOLO pattern of object creation.  Allows you to create multiple objects with shared behavior.  The initializer customizes the state
//    for each object, usually named `init`
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

// 2) The combination of constructors and prototypes creates classical inheritance
//    We can create SUB-TYPE objects that inherit from SUPER-TYPE objects
class ThaiPoodle {
  constructor (name, color, type = "Thai Poodle") {
    this.name = name;
    this.color = color;
    this.type = type;
  }
  getInfo() {
    console.log(`I, ${this.name}, am a ${this.type}`)
  }
}
class ThaiRoyalPoodle extends ThaiPoodle{
  constructor(name, color, type) {
    super(name, color, type)
  }
}
let Rylee = new ThaiPoodle('Ry', 'brown')
let Pepper = new ThaiRoyalPoodle("Pepp", "black", 'THAI ROYAL POODLE')
Rylee.getInfo()
Pepper.getInfo()

// 3) There's a limitation with the inheritance pattern, which is that objects can only directly inherit from
//    one super-type object.  An object canhave onl one prototype object.  Mixins provide a solution! 
//    limitation.  The mix-in pattern involves creating a mix-in object containing certain methods, and 
//    using Object.assign()

let Isan = {
  origin: 'Isan',
  enjoyStickyRice(){
    console.log(`Hey I'm ${this.name} and from ${this.origin} and enjoy eating sticky Rice`)
  }
}

Object.assign(ThaiRoyalPoodle.prototype, Isan)
Pepper.enjoyStickyRice()

// 4) Polymorphism.  Using the same method name on different objects with different results.
//    A) Either through METHOD OVERRIDING - inheritance
//    B) Duck typing.  Objects of different types have the same method name (there's no inheritance here)

class Restaurant{
  constructor(name){
    this.employees = [];
    this.name = name;
  }
  work(){
    console.log(`Purpose of ${this.name} is to get Money`)
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  getEmployeeNameAndPurpose(){
    this.employees.forEach(person => person.work())
  }
}

class Employee {
  constructor(name, employer, position){
    this.name = name;
    this.placeOfEmployment = employer.name
    this.position = position
  }
  work(){
    console.log(`Hey I'm ${this.name} and I'm a ${this.position} for ${this.placeOfEmployment}`)
  }
}

class Chef extends Employee {
  constructor(name, employer, position = 'chef'){
    super(name, employer, position)
  }
}
let Cantina229 = new Restaurant('Cantina229');
let Josh = new Chef('Josh', Cantina229)

let work = [Cantina229, Josh]
work.forEach(item => item.work())  // DUCK TYPING

console.log(Josh instanceof Chef)
console.log(Josh instanceof Employee)
console.log(Object.getPrototypeOf(Josh))
console.log(Object.getPrototypeOf(Chef))
console.log(Object.getPrototypeOf(Employee))

