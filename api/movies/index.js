const express = require('express');
const router = express.Router();

const movies = require('./../../data/movies.json');
const movieController = require('./../../controllers/movies/index.js');

router.get('/', (require, resolve) => movieController.getMovies(require, resolve));
router.post('/', (require, resolve) => movieController.postMovie(require, resolve));

module.exports = router;

