function myFunction(value) {
    var result;

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[value];
    return result;
}

console.log(myFunction("charlie"));
