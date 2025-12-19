var value = { a: 1, b: 2, c: 3 };

var a = value.a;
var b = value.b;
var c = value.c;

const { a: x, b: y, c: z } = value;

console.log(x);
console.log(y);
console.log(z);

const temp = {
    temp1: 45,
    temp2: 50,
}

function myFunction(myTemp) {
    const { temp2: myTemp2 } = myTemp;

    return myTemp2;
}

console.log(myFunction(temp));

const [p, q, , r] = [10, 20, 30, 40, 50];

console.log(p, q, r);

let s = 60, t = 70;

(() => {
    [s, t] = [t, s];
})();

console.log(s, t);

const myArray = [100, 200, 300, 400];

function anotherFunction(list) {
    const [, , ...rest] = list;

    return rest;
}

const result = anotherFunction(myArray);

console.log(result);
console.log(myArray);

const myObject = {
    num1: 5,
    num2: 10,
    num3: 15,
    num4: 20,
    num5: 25,
}

const myFunction2 = ({ num1, num2 }) => {
    return (num1 + num2) / 2;
}

console.log(myObject);
console.log(myFunction2(myObject));
