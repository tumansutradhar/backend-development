const myFunction = (function () {
    return function myFunction(x, y = 10) {
        return x + y;
    }
})();

console.log(myFunction(5, 5));
