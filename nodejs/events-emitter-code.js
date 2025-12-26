const events = require("events");
const customEvents = new events();

customEvents.on("greet",()=>{
    console.log("Hello, world!");
});

customEvents.emit("greet");
