import './App.css';
import React from 'react';

import Card from './Card';
import Followers from './Followers';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <Card />
        <Followers />
      </div>   
    )
  }
}