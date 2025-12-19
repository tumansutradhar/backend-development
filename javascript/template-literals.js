const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const greeting = `Hello, my name is ${person.firstName} ${person.lastName}
and I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "prefer-const", "no-eval"],
    skipped: ["no-extra-semi", "no-dup-keys"],
}

function myFunction(array) {
    const messages = [];

    for (let i = 0; i < array.length; i++) {
        messages.push(`<li class="text-warning">${array[i]}</li>`);
    }

    return messages;
}

const warnings = myFunction(result.failure);

console.log(warnings);
