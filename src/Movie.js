import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>Hello! This is a movie app!</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src='https://pds.joins.com/news/component/htmlphoto_mmdata/201703/03/6e592a4e-7c36-4ae4-9532-9af7bfb11d68.jpg' />
    );
  }
}

export default Movie;
