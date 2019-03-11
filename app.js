const Movie = require('./movie');

let forrestGump = new Movie('Forrest Gump', Movie.genres.DRAMA, 1994);
console.log(forrestGump);
console.log(`The ${forrestGump.getGenre()} movie "${forrestGump.getTitle()}" was released in ${forrestGump.getYear()}.\n`);

let blackPanther = Movie.createActionMovie('Black Panther', 2018);
console.log(blackPanther);
console.log(`The ${blackPanther.getGenre()} movie "${blackPanther.getTitle()}" was released in ${blackPanther.getYear()}.\n`);

console.log(`Number of Movies: ${Movie.count()}`);