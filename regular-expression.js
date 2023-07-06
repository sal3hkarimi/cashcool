function isValidIranianNationalCode(input) {
    if(!/^\d{10}$/.test(input))
        return false;
    let check = parseInt(input[9]);
    let sum = Array.from(input.substr(0, 9)).reduce(function(p, c, i) {
        return p + (10 - i) * parseInt(c);
    }, 0);
    sum = sum % 11;
    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}
let nationalCode = "0018462345";
if(isValidIranianNationalCode(nationalCode)) {
    console.log("کد ملی معتبر است");
} else {
    console.log("کد ملی معتبر نیست");
}

// -------------------------------
let phoneNumber = "09123456789";
let regex = /^09\d{9}$/;
if(regex.test(phoneNumber)) {
    console.log("شماره تلفن معتبر است");
} else {
    console.log("شماره تلفن معتبر نیست");
}

// -------------------------------------
function isPersian(str) {
    // \u0600-\u06FF is the range of Persian characters
    // \u200C is the zero-width non-joiner
    // \u200D is the zero-width joiner
    // \u064B-\u065F are arabic diacritic characters which are used in Persian too
    // \s is the whitespace character class
    var persianRegex = /^[\u0600-\u06FF\u200C\u200D\u064B-\u065F\s]+$/;
    return persianRegex.test(str);
}
