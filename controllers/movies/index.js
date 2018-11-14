const movies = require('./../../data/movies.json');

const getMovies = (require, resolve) => {
    resolve.send(movies);
}

module.exports = {
    getMovies
}