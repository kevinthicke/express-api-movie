import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routerMovies from './src/routes/movies' 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/movies', routerMovies);

app.listen(port, () => console.log('Server running!'));