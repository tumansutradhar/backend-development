class movie {
    constructor(title) {
        this._title = title;
    }

    get writer() {
        return this._author;
    }

    set writer(newAuthor) {
        this._author = newAuthor;
    }
}

const myMovie = new movie("Inception");
myMovie.writer = "Christopher Nolan";
console.log(myMovie.writer);
