const movies = require('./../data/movies.json');
const files = require('./fileUtils.ts');

const asignLike = (request, resolve, bool:boolean) => {
    const movieId = request.params.id;
    const movie = movies.find( movie => movie.id == movieId);
    if (movie) {
        movie.like = bool;
        files.saveFile(movies);
        resolve.send(`Movie with id ${movieId} has got a like/dislike!!`);
    }
    else resolve.send(`Movie with id ${movieId} do not exists in database`);
}

export = {
    asignLike
}