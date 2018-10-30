const express = require('express');
const app = express();
const Movie = require('./Movie');
const axios = require('axios');

//Axios + Express + MongoDB(Mlab)

const apikey = 'b8330e6e';

// localhost:5000/getmovie?title=YourTitle&apikey=YourAPIKey
app.get('/getmovie', (req, res) => {
  const title = req.query.title;

  const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

  axios
    .get(querystr)
    .then(response => {
      // res.status(200).json(response.data);
      const movie = new Movie({
        title: response.data.Title,
        year: response.data.Year,
        genre: response.data.Genre,
        actors: response.data.Actors,
        plot: response.data.Plot,
        poster: response.data.Poster
      });

      if (!movie.title) {
        res.status(200).json('Not found');
        return;
      }

      movie
        .save()
        .then(response => {
          res.status(200).json(response);
        })
        .catch(error => {
          res.status(400).json(error);
        });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

//localhost:5000/getallmovies
app.get('/getallmovies', (req, res) => {
  Movie.find({})
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

//localhost:5000/deletemovie?title=MovieTitle
app.get('/deletemovie', (req, res) => {
  Movie.deleteMany({ title: req.query.title })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
