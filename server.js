const express = require('express');
const movieRouter = require('./api/movies/index');

const port = 3000;
const app = express();
app.use(express.json());

app.get('/', (request, resolve) => resolve.send('Home Page'));
app.use('/movies', movieRouter);
app.post('/movies/like/:id', (request, resolve) => {
    const movies = require('./data/movies.json');
    const movieId = request.params.id;
    console.log(movieId);
    const movie = movies.find( movie => movie.id == movieId);
    if (movie) {
        movie.like = 'true';
        resolve.send(`Movie ${movie} has get a like`);
    }
    else resolve.send(`Movie ${movie} do not exists in database`);
});

app.listen(port);