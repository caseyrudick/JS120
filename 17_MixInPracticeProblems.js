// 1 how can you mix-in the speed object to check whether your `Car` or `Truck` can 
// now go fast?

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`)
  }
};
class Car {
  goSlow() {
    console.log(`I'm safe and driving slow`)
  }
}
class Truck {
  goVerSlow(){
    console.log(`Im heavy and go very slow`)
  }
}
Object.assign(Car.prototype, Speed)
Object.assign(Truck.prototype, Speed)
let car = new Car()
car.goFast()

// 2 How did the string print the type of vehicle we are using
//   Since the `constructor` property references a function object, `constructor.name` references
//   the `name` property on that object


// 3 Programmers decided to break out a 3rd class, WheeledVehicle, that shared state and methods of 
//   both `Auto` and `Motorcycles`

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
  tirePressure(tireIdx){
    return this.tires[tireIdx]
  }
  inflateTire(tireIDX, pressure){
    this.tires[tireIDX] = pressure;
  }
  range(){
    return this.fuelCap * this.fuelEfficiency
  }
}
class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tirepressure for 4 tires
    super([30,30,32,32], 50, 25)
  }
}
class Motorcycle extends WheeledVehicle {
  constructor(){
    super([20,20], 80, 8)
  }
}
// Add a new class Catamaran, that takes advantage of kmTravelledPerliter, fuelCapInLiter
class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount
    this.hullCount = hullCount
  } 
}

///////////////////////////// Solution ///////////////////////////////
const Vehicle = {
  range() {
    return this.fuelCap * this.fuelEfficiency
  }
}
class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
  tirePressure(tireIdx){
    return this.tires[tireIdx]
  }
  inflateTire(tireIDX, pressure){
    this.tires[tireIDX] - pressure;
  }
}
class Motorcycle extends WheeledVehicle {
  constructor() {
    super([80,80], 80, 15)
  }
}
Object.assign(Motorcycle.prototype, Vehicle)
class Car extends WheeledVehicle {
  constructor(){
    super([50,50,49,49], 35, 40)
  }
}
Object.assign(Car.prototype, Vehicle)
// Add a new class Catamaran, that takes advantage of kmTravelledPerliter, fuelCapInLiter
class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount
    this.hullCount = hullCount
  } 
}
Object.assign(Catamaran.prototype, Vehicle)