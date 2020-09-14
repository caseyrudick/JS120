// ECMAScript 6 (ES6) added the class keyword to JS 
// this provided a more natural way and familiar way to create constructors and prototypes
// think of classes as syntactic sugar 


// Class Declarations
class Rectange {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width
  }
  toString() {
    return `[Rectangle ${this.width * this.length}]`
  }
}
// begins with `class` keyword and the name of the class. Rest looks like object literaly syntax without commas after 
// properties/methods
// instantiating a new object from a class is identical to creating one with constructor/prototype pairs
let rec1 = new Rectange(10,5);
rec1.getArea()


// Classes as First-Class Citizens
// first class citizen is a value that can be passed into a function, returned from a function, and assigned to a variable
// classes like functions are first class values
function createObject(classDef) {
  return new classDef()
}
class Foo {
  sayHi() {
    console.log('Hi!')
  }
}
let obj = createObject(Foo)
obj.sayHi() // logs 'hi!'
// Remember classes are just functions, you can see with typeof 
typeof Foo // returns 'function'


// Static Methods with Classes
// You can defined static methods on classes by using the `static` keyword
class Rectangle{
  constructor(length, width) {
    this.length = length;
    this.width = width
  }
  static getDescription() {
    return 'A rectangle is a geometrical shape with 4 sides'
  }
  getArea() {
    return this.length * this.width
  }
  toString(){
    return `[Rectangle ${this.width * this.length}]`
  }
}
// Static Properties
class Rectangle {
  static description = 'A rectangle is...'
}


// Practice Problems: 
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

// what does the static modifier do? it makes it static 
// He method is defined directly on the class, and not the ojects the class creates
Television.manufacturer();
// whereas the model method is an instance method and must be called by an instance object
let tv = new Television();
tv.model();