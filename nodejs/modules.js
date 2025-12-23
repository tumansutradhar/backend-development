const { lastName } = require("./first-module");
const { firstName } = require("./first-module");
const { person } = require("./alternative-syntax");
const { items } = require("./alternative-syntax");
const myFunction = require("./utils");

require("./mind-grenade");

console.log(myFunction(firstName + " " + lastName));
console.log(person.firstName + " " + person.lastName);
console.log(items[0]);
