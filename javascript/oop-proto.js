"use strict";

let text = "salam";
function testFunc() {
  alert(1);
}
let obj1 = {};

// console.dir(text.__proto__);
// console.dir(testFunc);
// console.dir(obj1.__proto__);

let animal = {
  eats: true,
  walk() {
    console.log("walking ......");
  },
};

let rabbit = {
  __proto__: animal,
  jumb: true,
};

// rabbit.__proto__ = animal;
console.log(rabbit);

rabbit.walk();

function cat() {
  this.eats = false;
  var status = true;

  this.printStatus = () => {
    console.log("your status is " + status);
  };
}

cat.prototype = animal;
cat.prototype.testFunc = testFunc;

let cat1 = new cat();

console.log(cat1.eats);
console.log(cat1.status);
cat1.printStatus();
