const mongoose = require('mongoose');
const db =
  'mongodb://moviewebapi:abc123456@ds141043.mlab.com:41043/movie-web-api';

mongoose
  .connect(db)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Mongoose connection Error', error);
  });

// Title, Year, Genre, Actors, Plot and Poster
const schema = new mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: String
  },
  genre: {
    type: String
  },
  actors: {
    type: String
  },
  plot: {
    type: String
  },
  poster: {
    type: String
  }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
