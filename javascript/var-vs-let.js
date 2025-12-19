var name = "Alice";
var age = 22;

var name = "Bob"; // This will not cause an error

console.log(name);

let city = "New York";
let country = "USA";

// let city = "Los Angeles"; // This will cause an error

console.log(city);

function myFunction() {
    var i = "Hello from function scope";

    if (true) {
        var i = "Hello from block scope";
        console.log(i);
    }

    console.log(i);
    return i;
}

myFunction();

function anotherFunction(){
    let j = "Hello from function scope";

    if(true){
        let j = "Hello from block scope";
        console.log(j);
    }

    console.log(j);
    return j;
}

anotherFunction();
