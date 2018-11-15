const movies = require('./../../data/movies.json');
const files = require('./../../utils/files.js');
const asignMovieLike = require('./../../utils/asignMovieLike.js');

const getMovies = (request, resolve) => {
    resolve.send(movies);
}

const postMovie = (request, resolve) => {
    const newMovie = request.body;
    const movieAlredyExists = movies.find(movie => movie.name == newMovie.name);
    if(movieAlredyExists){
        resolve.send(`Film < ${newMovie.name} > alredy exists in the database`)
    } else {
        movies.push(newMovie);
        files.saveFile(movies)
        resolve.send(`Film < ${newMovie.name} > saved correctly!`);
    }
}

const likeMovie = (request, resolve) => asignMovieLike(request, resolve, true);

const dislikeMovie = (request, resolve) => asignMovieLike(request, resolve, false);

const getLikeMovies = (request, resolve) => {
    let likeMovies = [];
    movies.forEach(movie => {
        if (movie.like === true) likeMovies.push(movie);
    });
    resolve.send(likeMovies);
}

module.exports = {
    getMovies,
    postMovie,
    likeMovie,
    dislikeMovie,
    getLikeMovies
}