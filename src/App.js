import axios from 'axios';
import React from 'react';

import City from './Components/City.js';
import Movies from './Components/movie/Movies.js';
import Search from './Components/Search.js';
import Weather from './Components/weather/Weather.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      // haveWeSearchedYet indicates whether a city has been searched for
      haveWeSearchedYet: false,
      // citySearchedFor is the user's requested city, starts out empty
      citySearchedFor: '',
      errorMessage: false,
      weatherData: [],
      lat: '',
      lon: '',
      moviesArray: [],
    };
  }

  // hideError = () => {
  //   this.setState({error: {}});
  // }

  // this function is being passed into the City child component
  // it sets the state of haveWeSearchedYet back to false 
  handleShowSearch = () => {
    this.setState({haveWeSearchedYet: false});
  }

  // function to request weather data from server, server to WeatherBit
  // returns weatherData
  // sets state of weaterData to weatherData.data
  getForecastData = async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND}/weather`, 
    {
      params: 
      {
        lat: this.state.lat,
        lon: this.state.lon
      },
    })
    .then(weatherData => {
      console.log(weatherData.data)
      this.setState({weatherData: weatherData.data})
    })
  }

  getMovieData = async (citySearchedFor) => {
    await axios.get(`${process.env.REACT_APP_BACKEND}/movies`,
    {
      params: {
        city: this.state.citySearchedFor
      },
    })
    .then(response => {
      console.log(response.data)
      this.setState({moviesArray: response.data})
    
    })
  }



  // this function is being passed into the Search child component
  // it console.logs "Searched" and the city that was searched for
  // then it gets the location data using our LocationIQ key (stored in our .env file) for the city that was searched for
  // then it console.logs the data that is returned
  // then it updates the state of haveWeSearchedYet to true, updates the state of the city searched for, and the locationData's state to the data of the city we searched for.
  handleSearch = async(citySearchedFor) => {
    console.log('searched', citySearchedFor);

    try {
      let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
      console.log(locationResponseData);

      this.setState({
        haveWeSearchedYet: true,
        citySearchedFor: citySearchedFor,
        locationData: locationResponseData.data[0],
        lat: locationResponseData.data[0].lat,
        lon: locationResponseData.data[0].lon,
      });

      this.getForecastData();

      this.getMovieData(citySearchedFor);

    } catch (error) {
      // console.log(`We have an error: ${error.message}`);
      console.error(error);
      this.setState({errorMessage: error.message});
    }

  }

  // here we are rendering a heading that says "City Explorer"
  // if the state of "haveweSearchedYet" is true = it calls in the City.js component to render, and displays the data of the city that was searched for
  // if the state of "haveWeSearchedYet" is false = it calls in the Search.js component to render
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        {/* {this.state.error.message ? <Error errorState={this.state.error} hideError={this.hideError} /> : ''} */}

        {this.state.haveWeSearchedYet ?
        <>
          <City handleShowSearch={this.handleShowSearch} cityData={this.state.locationData} 
          // errorState={this.state.error}
          />
          <Weather weatherData={this.state.weatherData}/>
          <Movies moviesArray={this.state.moviesArray}/>
        </>
        : <Search handleSearch={this.handleSearch} hideError={this.hideError} />}
      </>
    );
  }
}

// exporting the App
export default App;
