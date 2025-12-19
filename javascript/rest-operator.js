const restOperator = (function () {
    return function myFunction(...args) {
        return args.reduce((x, y) => x + y, 0);
    }
})();

console.log(restOperator(1, 2, 3, 7));
