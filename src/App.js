import React, { Component } from 'react';
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import SearchBar from './containers/searchBar';
import WeatherList from './containers/weatherList';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Jumbotron/>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;
