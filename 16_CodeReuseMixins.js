// CODE REUSE WITH MIXINS
// Problem: JS inheritance only allows objects to inherit from ONE other object, class extend only one other class.
// Thsi means they can only have ONE prototype object
// AKA Single Inheritance

// JS doesnt allow MULTIPLE INHERITANCE 
// This doesn't refer to prototype chain or classes.  It means directly, each object or class inherits from a single thing
// so it is single inheritance

// MIX-INS
// This pattern copies the members of one object to another with Object.assign 
// Example a list of birds that can swim and or fly 
class Bird {}

class Stork extends Bird{
  fly() {}
}
class Parrot extends Bird{
  fly() {}
}
class Penguin extends Bird{
  swim(){}
}
class Ostrich extends Bird{
  swim(){}
}
class Duck extends Bird{
  swim(){}
  fly(){}
}
class Goose extends Bird{
  swim(){}
  fly(){}
}
// Problem: lots of dupliction 
// Solution: create a new class
class Bird{}
class FlyingBird extends Bird{
  fly(){}
}
class SwimmingBird extends Bird{
  swim(){}
}
class Stork extends FlyingBird{}
class Parrot extends FlyingBird{}
class Ostrich extends SwimmingBird{}
class Penguin extends SwimmingBird{}
// here's our problem, duck and geese!
// we must use a mix-in.  A mix-in is an object that defines one or more methods that can be 
// "mixed in" to a class

//mix-in!
const Swimmable = {
  swim() {}
}
class Bird{}
class FlyingBird extends Bird{
  fly(){}
}
class Stork extends FlyingBird{}
class Parrot extends FlyingBird{}
class Penguin extends Bird{}
Object.assign(Penguin.prototype, Swimmable)
class Ostrich extends Bird{}
Object.assign(Ostrich.prototype, Swimmable)
class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable)
class Geese extends FlyingBird {}
Object.assign(Geese.prototype, Swimmable)

// we can eliminate inheritance completely to make it cleaner
const Swimmable = {
  swim(){}
}
const Flyable = {
  fly(){}
}
class Stork{}
Object.assign(Stork.prototype, Flyable)
class Parrot{}
Object.assign(Parrot.prototype, Flyable)
class Penguin{}
Object.assign(Penguin.prototype, Swimmable)
class Duck{}
Object.assign(Duck.prototype, Swimmable, Flyable)

// Some developers say to use factory functions with mix-ins, but it suffers from the same thing
// all factory functions suffer from: 
// 1) every object receives a new copy of all its methods - taxing on memory
// 2) instanceof operator cannot be used to figre out where they came from 

// When deciding whether you need mix-ins: 
// 1) check if it's a "is a" relationship: penguin is a swimming bird
// 2) see if there's other relationships that don't follow: storks are not swimming birds.
//    if this is the case you may need to endow the object with a mix-in