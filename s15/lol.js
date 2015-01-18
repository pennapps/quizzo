console.log([] - 1)

console.log(['penguins!'] - 1)

function add(a, b, c) {
  console.log(a + b + c);
}

add.call(null, [1, 2, 3]);

var m = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

[1, 2, 3].forEach(function (x) {
  console.log(x)
});

function Foo() { return 1 }
function Bar() { return [] }
function Baz() { return new String('!') }
Foo.prototype.toString = function () { return 'hello' }
Bar.prototype.toString = function () { return 'world' }
Baz.prototype.toString = function () { return '?' }
console.log(new Foo() + new Bar() + new Baz());
