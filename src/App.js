import React, { Component } from 'react';
import './App.css';
import VistaAlbums from './VistaAlbums';
import Header from './Header';
import CardView from './CardView';
class App extends Component {
	
  render() {
    return (
      <div className="App">
      	<Header />
      	<VistaAlbums />
      	<CardView />
      </div>
    );
  }
}

export default App;
