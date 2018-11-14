const movies = require('./../../data/movies.json');
const files = require('./../../utils/files.js');

const getMovies = (request, resolve) => {
    resolve.send(movies);
}

const postMovie = (request, resolve) => {
    const newMovie = request.body;
    const movieAlredyExists = movies.find( movie => movie.name == newMovie.name);
    if(movieAlredyExists){
        resolve.send(`Film < ${newMovie.name} > alredy exists in the database`)
    } else {
        movies.push(newMovie);
        files.saveFile(movies)
        resolve.send(`Film < ${newMovie.name} > saved correctly!`);
    }
}

const likeMovie = (request, resolve) => {    
    const movieId = request.params.id;
    const movie = movies.find( movie => movie.id == movieId);
    if (movie) {
        movie.like = 'true';
    }
    else resolve.send(`Movie with id ${movieId} do not exists in database`);
}

const dislikeMovie = (request, resolve) => {    
    const movieId = request.params.id;
    const movie = movies.find( movie => movie.id == movieId);
    if (movie) {
        movie.like = 'false';
    }
    else resolve.send(`Movie with id ${movieId} do not exists in database`);
}

module.exports = {
    getMovies,
    postMovie,
    likeMovie,
    dislikeMovie
}