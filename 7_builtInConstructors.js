// JS comes with variety of built in constructors and prototypes so you can instantiate objects
let numbers = [1,2,3,4]

let emptyArray = new Array()

let colors = new Array('green', 'blue', 'yellow')

new Array(3) // returns [ <3 empty items> ]

// array allows you to omit the `new` keyword

Array(1,2,3) // returns [1,2,3]

(new Array(3)).fill('*') // ['*','*','*']

// Array.prototype
// just like any constructor, `Array` has a prototype 
// all arrays inherit from the object referenced by this property:
let numbers = [1,2,3];
Object.getPrototypeOf(numbers) === Array.prototype // returns true
// this means EVERY array can use the methods defined in Array.prototype, which includes: .forEach, .map, .include
// Array.prototype.constructor - specifies the function that creates an object's prototype

// Array.prototype has two properties: 
// 1) Array.prototype.constructor
// 2) Array.prototype.length

// The rest are methods, both instance methods i.e. map, forEach, etc & 
// static i.e. Array.isArray
// cannot use typeof to determine if an array is an array bc it'll just return 'object'

new Array(3.14) // single-number input of the constructor doesnt accept non-integers or negative numbers 
new Array(-5)

// Static Array methods:
// Array.isArray
// Array.from - creates an array from the values of an array-like object
Array.from({0: 'a', 1: 'b', 2: 'c', length: 3}) // returns ['a','b','c']
// here's the Array.from logic:
let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];
  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }
  return returnArr;
};
arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3});
// => [ 'a', 'b', 'c' ]


// The Object constructor
new Object()
// All objects created by the Object constructor or with object literal syntax {a:1, b:2}. inherit from Object.prototype
// Thus al objects have access to the methods defined in Object.prototype
// ex following instance methods: 
Object.hasOwnProperty() 
Object.prototype.isPrototypeOf()

// since arrays are a subtype of objects, they also have access to the methods defined on Object.prototype
['a','b','c'].hasOwnProperty(1) // returns true because integer indices equate to properties

// below verifies that the array inherits from Object.prototype
Object.getPrototypeOf(Array.prototype) === Object.prototype // returns true 

// Almost all objects inherit from Object.prototype, including prototype objects of constructors
// However remember it's possible to create objects that don't inherit from Object.prototype
let a = Object.create(null)

Object.prototype.toString()
let obj = { a: 1, b: 2 }
obj.toString() // returns '[object Object]'  not helpful
[1,2,3].toString() // '1,2,3'
let func = function hello() {}
func.toString() // 'function hello() {}'

// Static Object Methods:
// Object.assign, Object.create, Object.entries, Object.freeze, Object.isFrozen, Object.keys, Object.values

// The Date Constructor 
let now = new Date()
now // Wed Sep 09 2020 10:54:59 GMT-0500 (Central Daylight Time)
// you can create date objects that represent any given date and time by passing additional arguments to the Date constructor
let birthday = new Date("March 11, 1990")
birthday // 1990-03-11T06:00:00.000Z

// Date.prototype
// Date.prototype.toString
let now = new Date()
now.toString() // 'Wed Sep 09 2020 10:54:59 GMT-0500 (Central Daylight Time)'
// Date.prototype.getFullYear
now.getFullYear() // 2020
// Date.prototype.getDay - returns an integer 0 = Sunday 6 = Saturday
now.getDay() // 3

// String prototype
// There are 2 types of strings: string primitives and string objects
// so far we'v only created string primitives using quotes
// to create a string object:
let strObj = new String('xyz')
typeof strObj // 'object'
// Here's the difference:
'abc' === 'abc' // true
new String('abc') === new String('abc') // false
// if you call a method like .length on a string primitive, JS will wrap the string pimtiitve in a string object
// behind the scenes
// calling String without a new doesnt create an object, instead it returns a new string


// The Number and Boolean Constructors 
// similar to String, when called with new, they create number and boolean objects
// also with String, avoid creating these objects explicitly
Number('123') // 123
Boolean(0) // false
Boolean(123) // true


// Extending Built-in Prototypes
// all JS objects derive their behavior from the prototype object associated with their constructor, 
// so we can add new capabilities to our built-in objects by changing those prototypes
Array.prototype.first = function(){
  return this[0]
}
[1,2,3].first()
// but this is bad practice!


// Borrowing Array Methods for Strings 
// First class function benefit allows methods to be used across different object types
let string = 'EEE';
Array.prototype.every.call(string, char => char === 'E') // true
// above is using every to determine if every letter in string is equal to 'E'
// here's an abbreviated way to accomplish the same:
[].every.call(string,char => char === 'E')// true
// this works with strings because strings have a length property and use index-based element access
// so along with the method's use of `this`, this method borrow works
[].filter.call('olives', val => val < 'm') // ['  l','i','e']
// here we see a returned array.  This is because call doesnt change the logic of the method, only the object 
// the method uses for context
let ingredients = 'olives'
[].push.call(ingredients, 'peppers') // TypeError
// Array methods that muate the array won't work with strings because strings are immutable