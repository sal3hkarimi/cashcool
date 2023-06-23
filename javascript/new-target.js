// 09 Ashnai Ba ES6 -> lesson 9

function person(name) {
  this.name = name;
  if (new.target) {
    return this;
  }

  if (!new.target) {
    throw "Person is a constructor and you can`t invoke it!";
  }
  return name;
}

// let ali = person("Ali"); // -> throw "Person is a constructor and you can`t invoke it!"
let hosein = new person("hosein");

// console.log(ali);
// console.log(hosein);
// -------------------------------------------------------------------------

class Company {
  constructor(nameCmp) {
    this.nameCmp = nameCmp;
    console.log(new.target.name);
  }
}

class Office extends Company {}

class Business extends Company {}

const bccholding = new Company("BCC Holding");
const saderat = new Office("Bank Saderat");
const zara = new Business("ZARA");
