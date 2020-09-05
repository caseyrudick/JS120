// function createCar(make, fuelLevel, engineOn) {
//   return {
//     make: make,
//     fuelLevel: fuelLevel,
//     engineOn: engineOn,

//     startEngine() {
//       this.engineOn = true;
//     },

//     drive() {
//       this.fuelLevel -= 0.1;
//     },

//     stopEngine() {
//       this.engineOn = false;
//     },

//     refuel(percent) {
//       if ((this.fuelLevel + (percent / 100)) <= 1) {
//         this.fuelLevel += (percent/100);
//       }
//       else {
//         this.fuelLevel = 1;
//       }
//     }
//   }
// }
let raceCar1 = createCar("BMW", 0.5, false);
raceCar1.drive();
let raceCar2 = createCar("Ferrari", 0.7, true);
raceCar2.drive();

console.log(raceCar1);

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

function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    }, 

    drive() {
      this.fuelLevel -= .1;
    },

    stopEngine() {
      this.engineOn = false;
    },
    
    refuel(percent) {
      if ((this.fuelLevel + (percent/100)) <= 1) {
        this.fuelLevel += (percent/100);
      } else {
        this.fuelLevel = 1;
      }
    }
  }
}

let jag = createCar('jaguar', .9, true)

console.log(jag)

