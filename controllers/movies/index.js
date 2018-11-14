const movies = require('./../../data/movies.json');
const files = require('./../../utils/files.js');

const getMovies = (require, resolve) => {
    resolve.send(movies);
}

const postMovie = (require, resolve) => {
    const newMovie = require.body;
    const movieAlredyExists = movies.find( movie => movie.name == newMovie.name);
    if(movieAlredyExists){
        resolve.send(`Film < ${newMovie.name} > alredy exists in the database`)
    } else {
        movies.push(newMovie);
        files.saveFile(movies)
        resolve.send(`Film < ${newMovie.name} > saved correctly!`);
    }
}

module.exports = {
    getMovies,
    postMovie
}