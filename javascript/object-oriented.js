// 07 Javascript Sathe Pishrafte -> 6-object-oriented
"use strict";

/* Abstraction */

/* Encapsulation */

/* Inheritance */

/* Polymorphism */

function createPerson(name, age, height) {
  const personObject = {};
  personObject.name = name;
  personObject.age = age;
  personObject.height = height;
  personObject.sayName = function () {
    return `My name is: ${personObject.name}`;
  };
  return personObject;
}

const azim = createPerson("Azim", 25, 180);
// console.log(azim);

function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.sayName = function () {
    return `My name is ${this.name}`;
  };
}

const mohammad = new Person("mohammad", 20, 150);
// console.log(mohammad);

