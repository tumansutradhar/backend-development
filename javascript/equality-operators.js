function myFunction(value) {
    if (value == 10) {
        return "Equal with ==";
    }
    return "Not equal with ==";
}

console.log(myFunction("10"));

function strictFunction(value) {
    if (value === 10) {
        return "Equal with ===";
    }
    return "Not equal with ===";
}

console.log(strictFunction("10"));

function notEqualFunction(value) {
    if (value != 10) {
        return "Not equal with !=";
    }
    return "Equal with !=";
}

console.log(notEqualFunction(5));

function strictNotEqualFunction(value) {
    if (value !== 10) {
        return "Not equal with !==";
    }
    return "Equal with !==";
}

console.log(strictNotEqualFunction("10"));

function greaterThanFunction(value) {
    if (value > 100) {
        return "Greater than 100";
    }
    if (value > 10) {
        return "Greater than 10";
    }
    return "10 or less";
}

console.log(greaterThanFunction(100));

function greaterThanOrEqualFunction(value) {
    if (value >= 100) {
        return "Greater than or equal to 100";
    }
    if (value >= 10) {
        return "Greater than or equal to 10";
    }
    return "Less than 10";
}

console.log(greaterThanOrEqualFunction(10));

function lessThanOrEqualFunction(value) {
    if (value <= 10) {
        return "Less than or equal to 10";
    }
    if (value <= 100) {
        return "Between 11 and 100";
    }
    return "Greater than 100";
}

console.log(lessThanOrEqualFunction(5));
