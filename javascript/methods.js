// 07 Javascript Sathe Pishrafte -> 5-methods

/* Return Methods */
function pow(x, n) {
  if (n == 10) {
    return x;
  }
  const result = x * pow(x, n + 1);
  console.log(result);
  return result;
}
// console.log(pow(2, 3));

// ----------------------------------------------------
const name = "AZIM";
// console.log([...name]); // ['A', 'Z', 'I', 'M']

/* Name Function */ // ?
const sayHi = function (who) {
  if (who) {
    console.log(`Hello ${who}`);
  } else {
    sayHi("Hello Guest"); // Hello Hello Guest
  }
};
// sayHi();
const sHi = sayHi();
sayHi = null;
// sHi();

/* func in Name Function */
const sayHello = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Hello Guest"); // use "func" to re-call itself
  }
};
// sayHello();


