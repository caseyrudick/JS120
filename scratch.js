// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     console.log(this.a + ' ' + this.b) 
//   },
// };

// obj.foo();

// let obj = {
//   func: function() {
//     return this;
//   }
// }
// let context = obj.func;
// console.log(`first: ${context()}`)
/// versus 
// let obj1 = {
//   func: function() {
//     return this;
//   }
// }
// let context1 = obj1.func;
// console.log(context1())

// obj2 = {
//   func: function() {
//     return this;
//   }
// }
// let context2 = obj2.func();
// console.log(`third ${context2}`)


// let baz = obj.foo.bind(obj)
// baz()
// let obj2 = {
//   a: 'hi',
//   b: 'there'
// }
// baz.call(obj2)


// let foo = {
//   bar: 42,
//   qux() {
//     console.log(this.bar);
//   },
// };

// let baz = Object.create(foo);  // inherits properties
// baz.qux()  //initiates qux in context of baz

// console.log(sum(3, 4));

// const sum = (number1, number2) => number1 + number2;

// let obj = {
//   foo() {
//     return this;
//   },
// };

// let foo = obj.foo;
// console.log(foo());

// function bar() {
//   console.log('good morning');
// }
// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };
// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },
//     foo() {
//       bar();
//     },
//   },
//   bar() {
//     console.log('wake up');
//   },
//   foo() {
//     this.inner.bar(); // goodnight
//     inner.bar(); // good afternoon
//     bar(); // good morning
//   }
// };
// obj.foo();

// function bar() {
//   console.log('good morning');
// }

// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };
// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },
//     foo() {
//       bar();
//     },
//   },
//   bar() {
//     console.log('wake up');
//   },
//   foo() {
//     this.inner.bar();  // 
//     inner.bar();
//     bar();
//   }
// };
// let foo = function() {
//   console.log('go to sleep');
// }
// function go(foo) {
//   foo();
// }
// go(obj.foo);

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     //let self = this 
//     let report = () => {
//       console.log(`${this.name} is a ${this.colors} cat.`);
//     }//.bind(cat);
//     report()//.apply(cat)//.call(this);
//   },
// };
// cat.identify();


// let logResult = function(func) {
//   let result = func();
//   console.log(result);
//   return result;
// };

// let foo = function() {
//   let sue = {
//     name: 'Sue Perkins',
//     age: 37,
//     myAge() {
//       return `${this.name} is ${this.age} years old.`;
//     },
//   };
//   logResult(sue.myAge.bind(sue));
// };

// foo();

// let logResult = function(func) {
//   let result = func();
//   console.log(result);
//   return result;
// };

// let foo = function() {
//   let sue = {
//     name: 'Sue Perkins',
//     age: 37,
//     myAge() {
//       return `${this.name} is ${this.age} years old`;
//     },
//   };
//   logResult(sue.myAge.bind(sue));
// };

// foo()

// let cats = {
//   names: [ 'Butterscotch', 'Pudding', 'Fluffy' ],
//   foo() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(`${number}: ${this.names[number - 1]}`);
//     },this);
//   },
// };

// cats.foo();
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy


// console.log(global.hasOwnProperty('global'))

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// function assignProperty(obj, prop, val) {
//   while (obj !== null) {
//     if (obj.hasOwnProperty(prop)) {
//       obj[prop] = val
//       console.log(val)
//       break;
//     }
//     obj = Object.getPrototypeOf(obj)
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// let obj = Object.create(null)

// let greetings = {
//   morning: 'Good morning, ',
//   afternoon: 'Good afternoon, ',
//   evening: 'Good evening, ',

//   greeting: function(name) {
//     let currentHour = (new Date()).getHours();

//     if (currentHour < 12) {
//       console.log(this.morning + name);
//     } else if (currentHour < 18) {
//       console.log(this.afternoon + name);
//     } else {
//       console.log(this.evening + name);
//     }
//   }
// };

// let spanishWords = {
//   morning: 'Buenos dias, ',
//   afternoon: 'Buenas tardes, ',
//   evening: 'Buena noches, '
// };

// let spanishGreeter = greetings.greeting.bind(spanishWords);

// spanishGreeter('Jose');
// spanishGreeter('Juan');

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// issue is nested function losing surrounding context
// 1 fix with arrow, 
// 2 saving context to variable, use inner function to invoke bind(this)
// 3 optional 4th argument
// 4 variable in outerscope

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let bar = function() {
//       this.a += 1;
//       console.log(this.a)
//     }.bind(this)

//     // or let qux = bar.bind(this)
//     // qux()
//     bar();
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// function bar() {
//   console.log('good morning');
// }

// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };
// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },
//     foo() {
//       bar();
//     },
//   },
//   bar() {
//     console.log('wake up');
//   },
//   foo() {
//     this.inner.bar();
//     inner.bar();
//     bar();
//   }
// };
// let foo = function() {
//   console.log('go to sleep');
// }

// function go(foo) {
//   foo(); {
//     inner.bar
//     inner.bar
//     bar
//   }
// }

// go(obj.foo);


// obj.foo loses context 


// let cats = {
//   names: [ 'Butterscotch', 'Pudding', 'Fluffy' ],
//   foo() {
//     [1, 2, 3].forEach(function (number) {
//       console.log(`${number}: ${this.names[number - 1]}`);
//     }.bind(cats));
//   },
// };

// cats.foo();// issue is function inside a method
// arrow function 
// this
// bind it 
// optional 4th
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' 3 ' + this.a + ' ' + this.b);
//     }.bind(obj));
//   },
// };
// obj.foo();

// this 
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy


/////////constructor function 
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.started = false;
//   this.start = function(){
//     this.started = true;
//   },
//   this.stop = function(){
//     this.stop = true
//   }
//   return 'hello'
// }

// let car1 = new Car('Toyota', 'Corolla', 2016)
// console.log(car1)


// constructors that explicitly try to return an object, will return that object instead of the 
// new object of the desired type

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?