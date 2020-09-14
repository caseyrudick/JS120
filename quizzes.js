let foo = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo);
baz.qux()

// what is true about the invocation on line 9?
// the baz object delegates the invocation of qux to the foo object

// #2
// without running the code which of the following code snippets
// will return true?
let abc = { foo: 1, bar: 2 };
let pqr = Object.create(abc);
pqr.qux = 3;
pqr.bar = 4;
abc.hasOwnProperty('foo');
abc.hasOwnProperty('bar');
pqr.hasOwnProperty('bar');
pqr.hasOwnProperty('qux');