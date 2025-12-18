var obj = {
    outer: {
        inner: {
            key: "value",
        },
        quoteKey: {
            "key with spaces": "another value"
        }
    }
}

var innerValue = obj.outer.inner.key;

console.log(innerValue);

var myObject = [
    {
        name: "Alice",
        age: 30,
        hobbies: ["reading", "hiking", "coding"]
    },
    {
        name: "Bob",
        age: 25,
        hobbies: ["gaming", "cooking"]
    }
]

var accessHobby = myObject[1].hobbies[0];

console.log(accessHobby);
