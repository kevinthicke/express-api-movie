import * as express from 'express';
const { getMovies, postMovies, likeMovie, dislikeMovie } = require('../controllers/movieController'); //porqué no puedo importarlo como un módulo?

const router = express.Router();

router.get('/', getMovies);
router.post('/', postMovies);
router.post('/like/:id', likeMovie);
router.delete('/dislike/:id', dislikeMovie);
export = router;
