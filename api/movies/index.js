const express = require('express');
const router = express.Router();
const app = express();

const movies = require('./../../data/movies.json');

router.get('/', (require, resolve) => {
    resolve.send(movies);
})

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

