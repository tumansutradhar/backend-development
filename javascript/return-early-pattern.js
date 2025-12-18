function myFunction(a, b) {
    if (a < 0 || b < 0) {
        return "Invalid input";
    }

    return Math.round(Math.sqrt(a) + Math.sqrt(b));
}

console.log(myFunction(4, 4));
