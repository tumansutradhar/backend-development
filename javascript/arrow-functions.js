let arrow = function () {
    return Date();
}

// Using arrow function syntax
let myFunction = () => {
    return Date();
}

// More concise version
let arrowFunction = () => Date();

console.log(arrow());
console.log(myFunction());
console.log(arrowFunction());

// Arrow function with parameters
let add = (a, b) => a + b;

console.log(add(5, 5));

const myArray = [-3, 4, 2, -8, 3.5, 10, -12];

const positiveArray = (array) => {
    const result = array.filter(number => Number.isInteger(number) && number > 0).map(x => x * x);

    return result;
}

const squaredPositiveArray = positiveArray(myArray);

console.log(squaredPositiveArray);
