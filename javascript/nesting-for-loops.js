function myFunction(array) {
    var result = 1;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result *= array[i][j];
        }
    }

    return result;
}

var result = myFunction([[1, 2], [3, 4], [5, 6]]);

console.log(result);
