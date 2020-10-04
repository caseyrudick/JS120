// the return value of the method call on `obj` object sets `obj` as the 
// execution context of this.  the method is returning the value of this which is 
// referenced by the variable context.  
// let obj = {
//   func: function() {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context);  // returns {func: [Function]: func}

// the variable message is declared without let var or const preceding it 
// which adds it as a property to the global object.  the function invocation of 
// deliver message has a execution context of the global object, which has 
// message as a property.  so it will log `hello` from the global scope

// the function is assigned to varible without invocation, making it a method
// the method is invoked on the object foo.  The value of this is this obejct
// so the value of this.message is of the 'hello from the function scope'

// if we wish to use a specific execution context for a function call, we 
// must use call, bind, apply

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };

// console.log(bar.add.call(foo))

function createPerson() {
  return {
    a: 1,
    hello(){
      console.log(`${this.a}`)
    }
  }
}

let Casey = createPerson()
//console.log(Casey.prototype.constructor === createPerson())
//console.log(Casey instanceof createPerson())


function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log('Woof');
  };
}

Dog.prototype = {
  sayHi() {
    console.log(`$${this.name}`)
  } 
}

let Rylee = new Dog('Ry','poodle', 5)
console.log(Rylee instanceof Dog)
console.log(Object.getPrototypeOf(Rylee))
console.log(Dog.prototype)