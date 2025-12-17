function myFunction(array, item) {
    array.push(item);

    return array.shift();
}

var myArray = [1, 2, 3];

console.log("Before: " + myArray);
console.log(myFunction(myArray, 4));
console.log("After: " + myArray);
