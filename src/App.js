import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const twiceMember = [
  {
    name: 'sana',
    photo: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201703/03/6e592a4e-7c36-4ae4-9532-9af7bfb11d68.jpg'
  },
  {
    name: 'mina',
    photo: 'https://pbs.twimg.com/media/C6J5sQrVMAA1wH6.jpg'
  },
  {
    name: 'jeongyeon',
    photo: 'https://pds.joins.com/news/component/ilgan_isplus/201808/30/2018083017483094900.jpeg'
  },
  {
    name: 'momo',
    photo: 'http://www.getnews.co.kr/news/photo/201804/63938_57095_5731.jpg'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {twiceMember.map(twice => {
          return (<Movie name={twice.name} photo={twice.photo} />);
        })}
      </div>
    );
  }
}

export default App;
