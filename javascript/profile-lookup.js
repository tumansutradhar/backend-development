var contacts = [
    {
        name: "Tuman",
        phone: "1234567890",
        email: "tuman@gmail.com"
    },
    {
        name: "Bunny",
        phone: "9876543210",
        email: "bunny@gmail.com"
    },
    {
        name: "Bishal",
        phone: "5555555555",
        email: "bishal@gmail.com"
    }
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i][prop] || "No such property";
        }
    }

    return "No such contact";
}

var data = lookUpProfile("Tuman", "email");

console.log(data);
