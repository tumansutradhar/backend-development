function myFunction(value) {
    if (value <= 50) {
        if (value >= 20) {
            return "Value is between 20 and 50";
        }
    }
}

console.log(myFunction(30));

// Refactored using logical AND operator

function myFunction(value) {
    if (value <= 50 && value >= 20) {
        return "Value is between 20 and 50";
    }
}

console.log(myFunction(30));

// Example using logical OR operator

function checkValue(value) {
    if (value <= 50 || value >= 20) {
        return "Value is either less than or equal to 50, or greater than or equal to 20";
    }
}

console.log(checkValue(10));
