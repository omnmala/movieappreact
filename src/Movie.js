import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <MoviePoster photo={this.props.photo} />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    photo: PropTypes.string.isRequired
  }
  render() {
    return (
      <img src={this.props.photo} />
    );
  }
}

export default Movie;
