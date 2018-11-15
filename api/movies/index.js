const express = require('express');
const router = express.Router();

const movieController = require('./../../controllers/movies/index.js');

router.get('/', (request, resolve) => movieController.getMovies(request, resolve));
router.post('/', movieController.postMovie);
router.post('/like/:id', movieController.likeMovie);
router.delete('/dislike/:id', movieController.dislikeMovie);
router.get('/like', movieController.getLikeMovies);

module.exports = router;

