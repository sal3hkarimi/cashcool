function isWhatPercentOf(x, y) {
  return (x / y) * 100;
}

// 👇️ `30` is 40% of `75`
console.log(isWhatPercentOf(30, 75)); // 👉️ 40

// 👇️ `20` is 26.666% of `75`
console.log(isWhatPercentOf(20, 75)); // 👉️ 26.666666...

//--------------------------------------------------------------

const percentage = (20 / 75) * 100;
console.log(percentage); // 👇️ 26.666666666...

// 👇️ 2 decimals
const fixed = percentage.toFixed(2);
console.log(fixed); // 👉️ "26.67"

//--------------------------------------------------------------

function isWhatPercentOf(x, y) {
  return Math.round((x / y) * 100);
}

console.log(isWhatPercentOf(20, 75)); // 👉️ 27
