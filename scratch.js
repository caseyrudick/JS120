class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log('YO')
  }
}

Cat.prototype.personalGreeting = function () {
  console.log('Heyyy')

}

let kitty = new Cat("Sophie")
Cat.genericGreeting()
kitty.personalGreeting()