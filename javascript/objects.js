// 07 Javascript Sathe Pishrafte -> 4-objects
"use strict";

const person = {
  name: "azim",
  family: "karimi",
  get age() {
    return this.userAge;
  },
  set age(uAge) {
    this.userAge = uAge;
  },
};

// console.log(person);
// person.age = 23;
// console.log(person.age);

/* copy object */
const ali = { ...person };
ali.height = 180;
ali.name = "Ali";
// console.log(ali);

const mohammad = {};
Object.assign(mohammad, person, ali);
mohammad.name = "Mohammad";
mohammad.height = 179;
// console.log(mohammad);

/* Optional chaining */
const user = {};
// console.log(user.address.street); // Error
// console.log(user.address.street ? user.address.street : undefined);
// console.log(user.address && user.address.street && user.address.street.name);
// console.log(user?.address?.street); // undefined

// -------------------------------------------------

function course(name, dependence) {
  this.nameCourse = name;
  this.dependence = dependence;

  Object.defineProperties(this, {
    teacher: {
      get: () => {
        return this.teacherName;
      },
      set: (teacherName) => {
        this.teacherName = teacherName;
      },
    },
  });

  // Privet variable
  const userPassword = "User#Pass123";

  // Public variable
  this.password = userPassword;
}

const js = new course("Javascript", ["nodejs", "npm", "react js", "vue js"]);
// js.teacherName = "Azim Karimi";
// console.log(js.teacherName);
// console.log(js);
