function myFunction(number) {
    if (number < 5) {
        return "Tiny";
    } else if (number < 10) {
        return "Small";
    } else if (number < 15) {
        return "Medium";
    } else if (number < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(myFunction(20));
