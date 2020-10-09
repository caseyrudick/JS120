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
// provide a variable assigned to this inside the outer function 
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
// WARNING DO NOT USE ARROW FUNCTIONS FOR METHODS!!!
let obj = {
  a: 5,

  foo: () => {
    console.log(this.a);
  },
};

obj.foo(); // => undefined
// The reason that this code doesn't work is that arrow functions always 
// get the value of this from the surrounding context. In the code shown above, 
// it certainly looks like the surrounding context is obj, so shouldn't this 
// refer to obj? Despite appearances and what your logic tells you, that isn't 
// the case.
// THE SURROUNDING CONTEXT IS THE GLOBAL OBJECT.  The let statement in this example
// is in the program's top-level code, so its context is the global object
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

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }, this);
//   },
// };

// obj.foo()





let contextLoss = {
  let john = {
    firstName: "John", 
    LastName: "Doe ",
    greeting(){
      console.log(`Hello ${this.firstName} ${this.LastName} `)
    }
  }
  john.greeting() // Hello John Doe (context is john)
  let foo = john.greeting  // context is stripped
  foo() // hello undefined undefined (context is now the global object)
  // Solution: 
  let foo = john.greeting.bind(john)
  // 2) Nested function not using surrounding context
  let obj = {
    a: 'hello',
    b: 'world',
    foo: function(){
      function bar(){
        console.log(this.a + ' ' + this.b)
      }
      bar()  // bar is invoked as a standalone function!
    },
  }
  obj.foo()
  // Solution: Preserve Context with a Variable in the OuterScope, see 
  let self = this
  // Solution: Call Inner function with Explicit context
  bar.call(this)
  // Solution: Use bind on inner function 
  foo: function(){
    let bar = function(){
      console.log(this.a + this.b)
    }.bind(this)
  }
  // Solution Arrow function 
  let bar = () => {console.log(this.a + this.b)}
  // WARNING DO NOT USE ARROW FUNCTIONS AS METHODS ON AN OBJECT, THYE
  // DONT WORK AS EXPECTED
  // 3) Functions as arguments - see notes!
  // Passing a function as an argument to another ufnction strips it of its execution context, 
  // which means the function argument gets invoked with the context set to the global object, same issues 
  // as copying a method from and object and using it as a bare function.  
  
  // f2) beware if you assign the method call to another variable without the invocation ().
  //     this is because itll be called as a standalone function, and standalone function execution contexts are the 
  //     global object
  let baz = foo.bar
  baz() // Object[global]
  // g) explicit execution context.  .call allows us to call a function with the execution context of the argument 
  //    .call invokes the function.  This is an important contrast to .bind() that returns a new function!
  function logNum(){
    console.log(this.num)
  }
  let obj = {
    num: 42
  }
  logNum.call(obj) // logs 42
  // g1) if the function contains arguments, remember apply works with arrays, but we can use ...args spread syntax with call instead
  function sumNum(num1) {
    return this.num + num1
  }
  let obj = {
    num: 42
  }
  sumNum.call(obj, 5) // returns 47
  // g2) hard binding 
  function sumNum(num1){
    return this.num + num1
  }
  let obj = {
    num:42
  }
  let sumNum2 = sumNum.bind(obj)
  sumNum2(5) // returns 47 FOREVER!
  // Review 7 - Context loss 
  // copied methods 
  // inner function not using surrounding context
  // function as argument 