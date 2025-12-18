var obj = {
    name: "Alice",
    age: 30,
    city: "New York"
};

function myFunction(check) {
    if (obj.hasOwnProperty(check)) {
        return obj[check];
    } else {
        return "Not Found";
    }
}

console.log(myFunction("age"));
