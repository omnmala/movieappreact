import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster photo={this.props.photo} />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    console.log(this.props);
    return (
      <img src={this.props.photo} />
    );
  }
}

export default Movie;
