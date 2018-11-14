const express = require('express');
const router = express.Router();

const movieController = require('./../../controllers/movies/index.js');

router.get('/', (request, resolve) => movieController.getMovies(request, resolve));
router.post('/', (request, resolve) => movieController.postMovie(request, resolve));
//router.post('/:id', (request,resolve) => movieController.likeMovie(request, resolve));

module.exports = router;

