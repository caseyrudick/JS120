// we will look at syntax required to create sub-types from classes

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle ${this.width * this.length}]`;
  }
}

// Below shows the use of the `extend` keyword.  This means the name to the left of `extends` should 
// inherit from the class specified to the right of extends

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
  toString() {
    return `[Square] ${this.width * this.length}`
  }
}

// Above also makes use of `super` keyword.  When called inside the cosntructor method 
// the `super` referes to the constructor method for the parent class.  Thus super(size, size) 
// performs the same role performed by the following constructor function:
function Square2(){
  Rectangle.call(this, size, size)
}

// You normally need to use `super` for subclasses.  If the superclass' constructor creates any
// object properties, you must call super to make sure the properties are set properly
// If you do call `super` in a subclass' constructor, you must call it before you use `this` in 
// that constructor

// Inheritance with Class Expression

let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(`My name is ${this.name}`)
  }
}

let Student = class extends Person {
  constructor (name, age, semester) {
    super(name, age)
    this.semester = semester
  }
  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}`)
  }
}

let person = new Person('Casey', 30)
let student = new Student('Kim', 22, 'Fall')
student.sayName()  // 'Hi my name is Kim'
student.enrollInCourse('JS120')  // Kim has enrolled in course JS120
console.log(student instanceof Student)   // true
console.log(student instanceof Person)    // true
console.log(Student instanceof Person)    // false
console.log(Object.getPrototypeOf(student))   // Student {}
console.log(Object.getPrototypeOf(person))   // Person {}
console.log(Object.getPrototypeOf(Student))   // [Function: Person]
console.log(Object.getPrototypeOf(Person))   // [Function]
console.log(Object.getOwnPropertyNames(student))  // [ 'name', 'age', 'semester' ]
console.log(Object.getOwnPropertyNames(person))  // [ 'name', 'age']
console.log(Object.getOwnPropertyNames(Student))  // [ 'length', 'prototype', 'name' ]
console.log(Object.getOwnPropertyNames(Person))  // [ 'length', 'prototype', 'name' ]

// Student inherits from Person class



