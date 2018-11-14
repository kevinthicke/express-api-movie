const express = require('express');
const router = express.Router();

const movies = require('./../../data/movies.json');
const movieController = require('./../../controllers/movies/index.js');

router.get('/', (require, resolve) => movieController.getMovies(require, resolve));

router.post('/', (require, resolve) => {
    const newMovie = require.body;
    const movieAlredyExists = movies.find( movie => movie.name == newMovie.name);
    if(movieAlredyExists){
        resolve.send(`Film < ${newMovie.name} > alredy exists in the database`)
    } else {
        movies.push(newMovie);
        resolve.send(`Film < ${newMovie.name} > saved correctly!`);
    }
});

module.exports = router;

