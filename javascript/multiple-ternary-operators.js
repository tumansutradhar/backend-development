function multipleTernaryOperators(value) {
    return value > 10 ? "Greater than 10" : value > 5 ? "Greater than 5 but less than or equal to 10" : "5 or less";
}

console.log(multipleTernaryOperators(5));
