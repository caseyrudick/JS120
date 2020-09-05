// let raceCar = {
//   make: "BMW",
//   fuelLevel: 0.5,
//   engineOn: false,
  
//   startEngine: function() {
//     raceCar.engineOn = true;
//   },

//   drive: function() {
//     raceCar.fuelLevel -= 0.1;
//   },

//   stopEngine: function() {
//     raceCar.engineOn = false;
//   },

//   refuel: function (percent) {
//     if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
//       raceCar.fuelLevel += (percent / 100);
//     } else {
//       raceCar.fuelLevel = 1;
//     }
//   }
// };
// raceCar.refuel(30)
// console.log(raceCar)


////////////////////// compact method syntax  //////////////////////////

// let raceCar = {
//   make: "BMW",
//   fuelLevel: 0.5,
//   engineOn: false,
  
//   startEngine() {
//     raceCar.engineOn = true;
//   },

//   drive() {
//     raceCar.fuelLevel -= 0.1;
//   },

//   stopEngine() {
//     raceCar.engineOn = false;
//   },

//   refuel(percent) {
//     if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
//       raceCar.fuelLevel += (percent / 100);
//     } else {
//       raceCar.fuelLevel = 1;
//     }
//   }
// };

// let raceCar = {
//   make: "BMW",
//   fuelLevel: 0.5,
//   engineOn: false,
  
//   startEngine() {
//     this.engineOn = true;
//   },

//   drive() {
//     this.fuelLevel -= 0.1;
//   },

//   stopEngine() {
//     this.engineOn = false;
//   },

//   refuel(percent) {
//     if ((this.fuelLevel + (percent / 100)) <= 1) {
//       this.fuelLevel += (percent / 100);
//     } else {
//       this.fuelLevel = 1;
//     }
//   }
// };

let cat = {
  name: "Fluffy",

  makeNoise() {
    console.log("Meow! Meow!");
  },
  eat() {

  },
}

let dog = {
  name: "Maxi",

  makeNoise() {
    console.log("Woof Woof")
  },

  eat() {
    
  }
}

let pete = {
  name: "Pete",
  pet: [],
  printName() {
    console.log(`My name is ${this.name}`)
    console.log(`My pet's name is ${this.pet.name}`)
  }
}

let theCat = pete.pet
theCat.makeNoise()
pete.printName()

pete.pet.push(cat)
pete.pet.push(dog)
pete.printName()
