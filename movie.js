let counter = 0;

class Movie {
    constructor(title, genre, year) {
        this._title = title;
        this._genre = genre;
        this._year = year;

        counter++;
    }

    static createActionMovie(title, year) {
        return new Movie(title, Movie.genres.ACTION, year);
    }

    get title() {
        return this._title
    }

    set title(newTitle) {
        if (typeof newTitle === 'string') {
            this._title = newTitle;
        } else {
            console.log(`Invalid title: ${newTitle} (keeping ${this.title})`);
        }
    }

    get genre() {
        return this._genre;
    }

    set genre(newGenre) {
        if (Object.values(Movie.genres).includes(newGenre)) {
            this._genre = newGenre;
        } else {
            console.log(`Invalid genre: ${newGenre} (keeping ${this.genre})`);
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (newYear >= 1888) {
            this._year = newYear;
        } else {
            console.log(`Invalid year: ${newYear} (keeping ${this.year})`);
        }
    }

    static count() {
        return counter;
    }
}

Movie.genres = {
    ACTION: "action",
    ACTION_COMEDY: "action comedy",
    COMEDY: "comedy",
    CRIME: "crime",
    DRAMA: "drama"
};

module.exports = Movie;