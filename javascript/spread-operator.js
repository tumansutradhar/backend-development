const months = ['January', 'February', 'March', 'April', 'May', 'June'];
let array;

(function () {
    array = [...months];
    months[0] = 'Modified';
})();

console.log(months);
