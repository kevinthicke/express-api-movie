const movies = require('./../data/movies.json');
const { saveFile } = require('./../utils/fileUtils');
const { asignLike } = require('./../utils/asignLike');

const getMovies = (request, resolve) => {
    resolve.send(movies);
}

const postMovies = (request, resolve) => {
    const newMovie = request.body;
    const movieAlredyExists = movies.find(movie => movie.name == newMovie.name);
    
    if(movieAlredyExists){
        resolve.send(`Film < ${newMovie.name} > alredy exists in the database`)
    } else {
        movies.push(newMovie);
        saveFile(movies)
        resolve.send(`Film < ${newMovie.name} > saved correctly!`);
    }   
}

const likeMovie = (request, resolve) => {
    asignLike(request, resolve, true);
}

const dislikeMovie = (request, resolve) => {
    asignLike(request, resolve, false);
}


export = {
    getMovies,
    postMovies,
    likeMovie,
    dislikeMovie
}