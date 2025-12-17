function myFunction(value) {
    if (value <= 10) {
        return "10 or less";
    } else if (value < 100) {
        return "Between 11 and 99";
    } else {
        return "Greater than 99";
    }
}

console.log(myFunction(5));
