let counter = 0;

function Movie(title, genre, year) {
    this._title = title;
    this._genre = genre;
    this._year = year;

    counter++;
}

Movie.prototype.getTitle = function() {
    return this._title;
};

Movie.prototype.setTitle = function(newTitle) {
    if (typeof newTitle === 'string') {
        this._title = newTitle;
    } else {
        console.log(`Invalid title: ${newTitle} (keeping ${this._title})`);
    }
};

Movie.prototype.getGenre = function() {
    return this._genre;
};

Movie.prototype.setGenre = function(newGenre) {
    if (Object.values(Movie.genres).includes(newGenre)) {
        this._genre = newGenre;
    } else {
        console.log(`Invalid genre: ${newGenre} (keeping ${this._genre})`);
    }
};

Movie.prototype.getYear = function() {
    return this._year;
};

Movie.prototype.setYear = function(newYear) {
    if (newYear >= 1888) {
        this._year = newYear;
    } else {
        console.log(`Invalid year: ${newYear} (keeping ${this._year})`);
    }
};

Movie.createActionMovie = (title, year) => {
    return new Movie(title, Movie.genres.ACTION, year);
};

Movie.count = () => {
    return counter;
};

Movie.genres = {
    ACTION: "action",
    ACTION_COMEDY: "action comedy",
    COMEDY: "comedy",
    CRIME: "crime",
    DRAMA: "drama"
};

module.exports = Movie;