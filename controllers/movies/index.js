const movies = require('./../../data/movies.json');

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
        resolve.send(`Film < ${newMovie.name} > saved correctly!`);
    }
}

module.exports = {
    getMovies,
    postMovie
}