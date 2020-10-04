// function createCar(make, model, year) {
//   return {
//     make,             // Same as "make: make"
//     model,            // Same as "model: model"
//     year,             // Same as "year: year"
//     started: false,

//     start() {         // Same as "start: function() {"
//       this.started = true;
//     },

//     stop() {          // Same as "stop: function() {"
//       this.started = false;
//     },
//   };
// }

// let car1 = createCar('Toyota', 'Corolla', 2016);
// let car2 = createCar('Honda', 'Civic', 2017);




// // Prototype inheritance
// let a = {
//   foo: 1,
// };

// let b = {
//   bar: 2,
// };

// let c = {
//   baz: 3,
// };

// Object.setPrototypeOf(c, b);
// Object.setPrototypeOf(b, a);

// console.log(c.bar); // => 2
// console.log(c.foo); // => 1

// c inherits from b, which inherits from a
// b is the prototype of c, a is the protype of b
// b and a are part of the prototype chain of c
// the prototype chain also includes the default prototype
// which is the prototype of object a 
// since the prototype of Object.prototype is null the complete prototype
// chain looks like this:
// c --> b --> a --> Object.prototype --> null


// #1
// write a function that searches the prototype chain of an object for a given property and 
// assigns it a new value

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// function assignProperty(obj, prop, val) {
//   while (obj !== null) {
//     if (obj.hasOwnProperty(prop)) {
//       obj[prop] = val;
//       break;
//     }
//     obj = Object.getPrototypeOf(obj)
//   }
//   console.log(obj)
// }

// assignProperty(fooC, "bar", 2)
// console.log(fooA.bar)

// #2
// if foo is an arbitrary object, will these loops always log the same results to the console?
// explain why or why not 
// if no, show an example
// let bar = {a: 1, b: 2}
// let foo = {c: 3}
// Object.setPrototypeOf(foo, bar)
// also let foo = Object.create(bar)

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// })

// they do not, for/in loops will include inherited properties whereas Object.keys(foo) will exclude 
// inherited properties

// #3
// how can you create an object that doesnt have a prototype?
// How can you determine whether an object has a prototype?

// let foo = Object.create(null)
// console.log(Object.getPrototypeOf(foo))


// #4 using .call method to set a function's explicit context to an object
// function logNum() {
//   console.log(this.num);
// }
// let obj = {
//   num: 42
// };

// logNum.call(obj) // logs 42

// #5 show the same idea with mutatating the obj to have logNum function as a method

// function logNum() {
//   console.log(this.num)
// }

// let obj = {
//   num: 42
// }

// obj.logNum = logNum
// obj.logNum()

// #6 
// Use call method to set the execution context to another object

// let obj1 = {
//   logNum() {
//     console.log(this.num)
//   }
// }

// let obj2 = {
//   num: 42
// }

// obj1.logNum.call(obj2)  // logs 42  **Note this did not use function invocation ()

// #7 
// Use mutation to change the context of the method seen above

// let obj1 = {
//   logNum() {
//     console.log(this.num)
//   }
// }

// let obj2 = {
//   num: 42
// }

// obj2.logNum = obj1.logNum
// obj2.logNum()

// #8 
// set the explicit context of a function to another object and provide the function an argument 
//    while using call method
// function sumNum(num1) {
//   return this.num + num1
// }

// let obj = {
//   num: 42
// }

// obj.num = sumNum.call(obj, 5) // returns 47
// console.log(obj.num)

// #9 
// same as above but mutate the obj 
// function sumNum(num1) {
//   return this.num + num1
// }

// let obj = {
//   num: 42
// }

// obj.sumNum = sumNum;
// obj.num = obj.sumNum(5)
// console.log(obj.num)

// #10 
// create a function call printLine that takes two objects: ipad & kindle both that have a 
// name and price property
// invoke the function with the call method setting   
// print line will log the name and price of the objects and has two arguments: a lineNumber and 
// punctuation that also get printed
// let iPad = {
//   name: 'iPad',
//   price: 40000,
// }

// let kindle = {
//   name: 'kindle',
//   price: 30000,
// }

// function printLine (lineNumber, punctuation) {
//   console.log(`${lineNumber}: ${this.name}, ${this.price/100} dollars${punctuation}`)
// }

// printLine.call(iPad, 1, `;`)
// printLine.call(kindle, 2, '.')

// #11
// What will the following code output?
//  function func() {
//   return this;
// }
// let context = func();
// console.log(context)

// the function func is assigned as a standalone function to the variable 'context'
// the implicit execution context for func is the global object
// the global function get logged

// #12 
// What will the following code output?
// let obj = {
//   func: function() {
//     return this;
//   }
// }
// let context = obj.func();
// console.log(context)

// as a method invocation, this receives an explicit execution context that refers to the object
// used to invoke it  {func: [Function: func]}

// #13
// What will the following code output?
// message = "hello from the global scope!"
// function deliverMessage() {
//   console.log(this.message)
// }
// deliverMessage();
// let foo = {
//   message: "hello from the function scope!"
//   // deliverMessage() {
//     // console.log(this.message)
//   }

// foo.deliverMessage = deliverMessage;
// foo.deliverMessage()  // method call on object foo

// itll log global from 234 and local from 242
// since the first is a function call, the implied function invocation execution 
// context is global
// the second mutates the object foo by adding a method deliverMessage
// the second log operation is generated by the method call on 242
// since the implicit function execution context for a method invocation is the calling
// object, this resolves to foo.message

// #14
// what methods have we learned to specify a function execution's context explicity?

// we've learned about call & apply 
// someFunction.call(objContext, args)
// someFunction.apply(objContext, [arg1, arg2, arg3])

// #15 
// Take a look at the following code snippet. 
// use call to invoke the add method, but with foo as execution context
// what will this return?

// let foo = {
//   a: 1,
//   b: 2,
// }

// let bar = {
//   a: 'abc',
//   b: 'def',
//   add: function() {
//     return this.a + this.b
//   }
// }

// console.log(bar.add.call(foo)) // this will return 3

// #16
// use bind to permanently bind a new function to the execution context of an object
// function sumNum(num1) {
//   return this.num + num1;
// }
// let obj = {
//   num: 42
// }

// let sumNum2 = sumNum.bind(obj)
// console.log(sumNum2(5)) // returns 47

// #17 
// what method can we use to bind a function permanently to a particular execution context?
// bind!

// #18
// What will the following code log to the console?
// let obj = {
//   message: 'Javascript',
// };
// function foo() {
//   console.log(this.message);
// }
// foo.bind(obj)

// nothing, unlike call & apply, bind doesnt invoke the function used to call it. 
// Instead it returns a new function that is permanently bound to the context argument

// 18a 
// what will the following code output?
// let obj = {
//   a: 2,
//   b: 3,
// };
// function foo() {
//   return this.a + this.b;
// }
// let bar = foo.bind(obj);
// console.log(foo());
// console.log(bar());

// foo() returns undefined + undefined resulting in NaN
// bar() returns 5

// 18b 
// what will the reutrn value output?
// let positivity = {
//   message: 'JavaScript makes sense!',
// };
// let negativity = {
//   message: 'JavaScript makes no sense!',
// };
// function foo() {
//   console.log(this.message);
// }
// let bar = foo.bind(positivity);
// negativity.logMessage = bar;
// negativity.logMessage();

// it will log Javascript makes sense
// bar is bound to positivity as the return value of the bind invocation 
// so positivity's property message is logged 

// #18c
// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };
// function foo() {
//   console.log(this.a);
// }
// let bar = foo.bind(obj) 
// bar.call(otherObj);  
// bar is bound to obj as the return value of 
// the bind invocation on foo
// this returns Amazebulous

// #19 
// Context Loss I - Method copied from object 
// The code below should output: "Christopher Turk is a Surgeon"
// without running the code, what will it output?  
// How can you fix it, show two solutions 
// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// john.greetings();         // context is john
// let foo = john.greetings; // Strips context
// foo();  
///////////////// Solution I passing context to second function  
// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// john.greetings();         // context is john
// let foo = john.greetings.bind(john); // Strips context
// foo();  




// logReturnVal(turk.getDescription.bind(turk)); // here we lose the context of the getDescription 
// methods passed as arguments to other functions lose their original context and get the implicit
// context of the global object.  Should pass in context and call with context, or bind during invocation

// #20
// will the following produce "The Elder Scrolls: Arena" for each of the titles?
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// no, it will consolelog undefined: title
// fix it with arrow function, provide a variable assigned to `this` inside
// the outer function optional 4th argument, bind
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     }.bind(this));
//   }
// };

// TESgames.listGames();

// #22 
// Context Loss II - method passed to function as argument
// fix the following code to prevent context loss
// method passed to function as argument

// function repeatThreeTimes(func) {
//   func(); 
// }
// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };
//   repeatThreeTimes(john.greetings); 
// }
// foo();

/////////////// Solution 1 ///////////////////
// function repeatThreeTimes(func, context) {
//   func.call(context); 
// }
// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };
//   repeatThreeTimes(john.greetings, john); 
// }
// foo();
//////////////Solution 2 //////////////////
// function repeatThreeTimes(func) {
//   func(); 
// }
// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };
//   repeatThreeTimes(john.greetings.bind(john)); 
// }
// foo();

// #23
// fix the following nested to prevent context loss
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }
//     bar();
//   },
// };
// obj.foo();
////////////////////Solution 1/////////////////////
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this
//     function bar() {
//       console.log(self.a + ' ' + self.b);
//     }
//     bar();
//   },
// };
// obj.foo();
////////////////////Solution 2/////////////////////
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' a ' + this.b);
//     }
//     bar.call(this);
//   },
// };
// obj.foo();
////////////////////Solution 3/////////////////////
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar () {
//       console.log(this.a + ' c ' + this.b);
//     }
//     let qux = bar.bind(this);
//     qux()
//   },
// };
// obj.foo();
////////////////////Solution 4/////////////////////
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     bar = () => {
//       console.log(this.a + ' d ' + this.b);
//     }
//     bar()
//   },
// };
// obj.foo();

// #24
// fix the following to prevent context loss in the function as argument scenario
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     });
//   },
// };
// obj.foo();
////////////////Solution 1///////////////////////
// variable in outer scope
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this;
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + self.a + ' ' + self.b);
//     });
//   },
// };
// obj.foo();
///////////////Solution 2////////////////////////
// arrow function 
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(number => {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     });
//   },
// };
// obj.foo();
///////////////Solution 3//////////////////////
// bind
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
///////////////Soluton 4///////////////////////
// optional 4th arg
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' 4 ' + this.a + ' ' + this.b);
//     }, obj);
//   },
// };
// obj.foo();

// #25
// fix the following to prevent context loss
// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment () {
//       this.a += 1;
//       return this.a
//     }

//     increment();
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// context loss in inner function, a is undefined and cannot be incremented
// 3 ways to solve: arrow function, bind, call, 
////////////////// solution 1 arrow
// let foo = {
//   a: 0,
//   incrementA: function() {
//     increment = () => {
//       this.a += 1;
//       return this.a
//     }
//     console.log(increment());
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
///////////////////// solution 2 call
// let foo = {
//   a: 0,
//   incrementA: function() {
//     increment = () => {
//       this.a += 1;
//       return this.a
//     }
//     console.log(increment.call(this));
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
///////////////////// solution 3 bind
// let foo = {
//   a: 0,
//   incrementA: function() {
//     let increment = function () {
//       this.a += 1;
//       return this.a
//     }.bind(this);
//     console.log(increment());
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
////////////////// solution 3b bind
// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment () {
//       this.a += 1;
//       return this.a
//     };
//     let qux = increment.bind(this)
//     console.log(qux());
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();


// const OPERATIONS = {
//   '+': (num1, num2) => num1 + num2,
//   '-': (num1, num2) => num1 - num2,
//   '*': (num1, num2) => num1 * num2,
//   '/': (num1, num2) => num1 / num2,
// };

// let getOperation = operation => OPERATIONS[operation];

// let compute = function(operation, num1, num2) {
//   return operation(num1, num2);
// };

// console.log(compute(getOperation('*', 18, 6)))
// console.log(compute(getOperation('+'), 5, 9) === 14);

// #26
// update the following code so it logs the name of the constructor to which 
// it belongs 

// console.log("Hello");
// console.log([1,2,3]);
// console.log({name: 'Srdjan'});

function createBook(title, author, description) {
  return {
    title: title,
    author: author,
    description: description,
    getDescription(){
      console.log(`${this.title} was written by ${this.author}`)
    }
  }
}

let book1 = new createBook("Mythos","Stephen Fry","nada")
book1.getDescription()