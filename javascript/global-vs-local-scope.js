var globalVar = "I am a global variable";

function checkScope() {
    var localVar = "I am a local variable";

    console.log(globalVar);
    console.log(localVar);
}

checkScope();
console.log(globalVar);
