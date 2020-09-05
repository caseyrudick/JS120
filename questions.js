// #1
// write a function that searches the prototype chain of an object for a given property and 
// assigns it a new value

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

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

// #3
// how can you create an object that doesnt have a prototype?
// How can you determine whether an object has a prototype?

// #4 
// using .call method to set a function's explicit context to an object

// #5 
// show the same idea with mutatating the obj to have logNum function as a method

// #6 
// Use call method to set the execution context to another object

// #7 
// Use mutation to change the context of the method seen above

// #8 
// set the explicit context of a function to another object and provide the function an argument 
//    while using call method
// function sumNum(num1) {
//   console.log(this.num + num1)
// }
// let obj = {
//   num: 42
// }

// #9 
// same as above but mutate the obj 
// function sumNum(num1) {
//   console.log(this.num + num1)
// }

// let obj = {
//   num: 42
// }

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
// printLine.call(iPad, 1, `;`)
// printLine.call(kindle, 2, '.')

// #11
// What will the following code output?
//  function func() {
//   return this;
// }
// let context = func();
// console.log(context)

// #12 
// What will the following code output?
// let obj = {
//   func: function() {
//     return this;
//   }
// }
// let context = obj.func();
// console.log(context)

// #13
// What will the following code output?
// message = "hello from the global scope!"
// function deliverMessage() {
//   console.log(this.message)
// }
// deliverMessage();
// let foo = {
//   message: "hello from the function scope!",
//   }
// foo.deliverMessage = deliverMessage
// foo.deliverMessage()

// #14
// what methods have we learned to specify a function execution's context explicity?

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

// #16
// use bind to permanently bind a new function to the execution context of an object
// function sumNum(num1) {
//   console.log(this.num + num1);
// }
// let obj = {
//   num: 42
// }

// #17 
// what method can we use to bind a function permanently to a particular execution context?

// #18
// What will the following code log to the console?
// let obj = {
//   message: 'Javascript',
// };
// function foo() {
//   console.log(this.message);
// }
// foo.bind(obj)

// #19 
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

// #20
// what does the following log?
// let positivity = {
//   message: 'JavaScript makes sense!',
// }
// let negativity = {
//   message: 'Java make no sense!'
// }
// function foo {
//   console.log(this.message)
// }

// let bar = foo.bind(positivity)
// negativity.logMessage = bar
// negativity.logMessage()

// #21
// what will the code below output?
// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj);

// bar.call(otherObj);
// Amazebulous! because the bind is permanant for EC