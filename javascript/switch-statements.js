function mySwitch(value) {
    var result;
    switch (value) {
        case 1:
            result = 'one';
            break;
        case 2:
            result = 'two';
            break;
        default:
            break;
    }

    return result;
}

console.log(mySwitch(2));
