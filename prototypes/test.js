const Movie = require('./movie');

console.log(`
Creating Hangover...`);
let hangover = new Movie('Hangover', Movie.genres.ACTION_COMEDY, 2009);
console.log(hangover);

console.log(`
Changing Hangover to Hangover II...`);
hangover.setTitle('Hangover II');
hangover.setGenre(Movie.genres.COMEDY);
hangover.setYear(2011);
console.log(hangover);

console.log(`
Changing Hangover II to Hangover III (fails due to invalid values)...`);
hangover.setTitle(3);
hangover.setGenre('mystery');
hangover.setYear(1700);
console.log(hangover);