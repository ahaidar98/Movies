const express = require('express');
const bodyParser = require('body-parser');
const api_helper = require('./API_helper')

const app = express();
const port = process.env.PORT || 5000;

const API_KEY = '3d1fe54bcb2a662f3f0afd04c484ffdc';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getPopularMovies/:pgNum', (req, res) => {
  api_helper.make_API_call(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${req.params.pgNum}`)
    .then((response) => { res.json(response) })
    .catch((error) => { res.send(error) })
});

app.get('/api/getMovieSearchQuery/:searchQuery/:pgNum', (req, res) => {
  api_helper.make_API_call(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${req.params.searchQuery}&page=${req.params.pgNum}&include_adult=false`)
    .then((response) => { res.json(response) })
    .catch((error) => { res.send(error) })
});

app.get('/api/getMovieProfile/:movieId', (req, res) => {
  api_helper.make_API_call(`https://api.themoviedb.org/3/movie/${req.params.movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => { res.json(response) })
    .catch((error) => { res.send(error) })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
