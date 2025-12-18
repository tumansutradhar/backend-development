function convertToInteger(str) {
    return parseInt(str);
}

var print = convertToInteger("45");

console.log(print);

function convertToIntegerWithRadix(str, radix) {
    return parseInt(str, radix);
}
var printWithRadix = convertToIntegerWithRadix("1010", 2);

console.log(printWithRadix);
