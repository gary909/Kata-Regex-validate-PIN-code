function validatePIN(pin) {
    let isCorrectLength = (pin.length === 4 || pin.length === 6);
    let hasOnlyNumbers = pin.match(/^\d+$/);
    if (hasOnlyNumbers && isCorrectLength) {
        return true;
    } else {
        return false;
    }
}

console.log(validatePIN("a234")); // false
console.log(validatePIN("1")); // false
console.log(validatePIN("-1234")); // false
console.log(validatePIN("1.234")); // false
console.log(validatePIN("-1.234")); // false
console.log(validatePIN(".234")); // false
console.log(validatePIN("0000")); // true
console.log(validatePIN("123456")); // true
console.log(validatePIN("000000")); // true
console.log(validatePIN("090909")); // true