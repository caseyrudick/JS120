////////////////////////// Context Loss I - Using a method in an argument for another function ////////////
// context gets stripped in the invocation of repeat() by using the 
// method as reference rather than call.  
// need to carry over context as an argument in order to carry over 
// the context if using in another function

// function repeatThreeTimes(func) {
//   func(); // can't use func.call(john); john is out of scope
//   func();
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

//   repeatThreeTimes(john.greetings); // Strips context
// }

// foo();

////////////Solution 1/////////////
// function repeatThreeTimes(func, context) {
//   func.call(context); // can't use func.call(john); john is out of scope
//   func.call(context);
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

//   repeatThreeTimes(john.greetings, john); // Strips context
// }

// foo()

/////////////Solution 2/////////////
// use bind during invocation 
// function repeatThreeTimes(func) {
//   func(); // can't use func.call(john); john is out of scope
//   func();
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

//   repeatThreeTimes(john.greetings.bind(john)); // Strips context
// }

// console.log('#3')
// foo()

////////////////////////////// Context loss II - Nested functions ////////////////////////////
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

// obj.foo(); // => undefined undefined
// because bar is invoked as a standalone method, context is lost and the program 
// looks for the value of global property a and global property b


////////// Solution 1 /////////////
// solution is to provide a variable assigned to this inside the outer function 
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this;
//     function bar() {
//       console.log(self.a + ' ' + self.b);
//     }

//     bar();
//   },
// };

// obj.foo()

/////////// Solution 2 /////////
// use call(this) to provide explicit context during the invocation of the inner function
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.call(this);
//   },
// };

// obj.foo()

/////////// Solution 3 /////////
// use bind(this) with function expression to provide explicit context 

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = function () {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this)

//     bar()
//     bar()
//   },
// };

// obj.foo()

///////// Solution 3a ///////////
// using bind with function declaration to preserve context for inner functions

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar () {
//       console.log(this.a + ' ' + this.b);
//     }
//     let qux = bar.bind(this)
//     qux()
//   },
// };

// obj.foo()

//////// Solution 4 ///////////
// using arrow function 
// arrow functions inherit their execution context from the surroundign scope
// similar to using bind!  once you use it, you cannot change it 

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     bar = () => {
//       console.log(this.a + ' ' + this.b);
//     }
    
//     bar()
//   },
// };

// obj.foo()

////////////////// Context Loss III - Function As Argument ///////////////////
// below, forEach calls a function expression.  Function expressions get context from global object

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

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

//////////// Solution I ///////////////////////
// perserve context with a variable in outer scope
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

//////////// Solution II ///////////////////////
// use bind
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }.bind(this));
//   },
// };

// obj.foo();

//////////// Solution III ///////////////////////
// Use arrow function 
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(number => {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     });
//   },
// };

// obj.foo()

//////////// Solution IV ///////////////////////
// Use optional 4th argument

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo()