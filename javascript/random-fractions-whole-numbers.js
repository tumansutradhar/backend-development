function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

var randomWholeNumber = Math.floor(Math.random() * 10);

function randomWholeNum() {
    return randomWholeNumber;
}

console.log(randomWholeNum());

function randomRangeWholeNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRangeWholeNum(5, 15));
