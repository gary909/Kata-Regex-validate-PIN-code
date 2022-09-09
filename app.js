function validatePIN(pin) {
    //return true or false
    return pin.length;
}

console.log(validatePIN("1")); // false
console.log(validatePIN("12")); // false
console.log(validatePIN("123")); // false
console.log(validatePIN("12345")); // false
console.log(validatePIN("1234567")); // false
console.log(validatePIN("-1234")); // false
console.log(validatePIN("1.234")); // false
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("00000000")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN(".234")); // false
console.log(validatePIN("0000")); // true
console.log(validatePIN("123456")); // true
console.log(validatePIN("098765")); // true
console.log(validatePIN("000000")); // true
console.log(validatePIN("090909")); // true