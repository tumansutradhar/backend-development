function myFunction() {
    const obj = {
        pi: 3.14,
    }

    Object.freeze(obj);

    try {
        obj.pi = 69;
    } catch (e) {
        console.log(e);
    }

    return obj.pi;
}

const result = myFunction();

console.log(result);
