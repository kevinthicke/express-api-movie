const express = require('express');
const movieRouter = require('./api/movies/index');

const port = 3000;
const app = express();
app.use(express.json());

app.get('/', (request, resolve) => resolve.send('Home Page'));
app.use('/movies', movieRouter);

app.listen(port);