import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          <MovieGenres genres={genres} />
        </div>
        <div className="Movie__Synopsis">
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

function MovieGenres({genres}) {
  return (
    <span className="Movie__Genre">{genres}</span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
  genres: PropTypes.array.isRequired
}

export default Movie;
