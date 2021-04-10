import axios from 'axios';
import React from 'react';

import City from './City.js';
import Search from './Search.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      // haveWeSearchedYet indicates whether a city has been searched for
      haveWeSearchedYet: false,
      // citySearchedFor is the user's requested city, starts out empty
      citySearchedFor: '',
    };
  }


  // this function is being passed into the City child component
  // it sets the state of haveWeSearchedYet back to false 
  handleShowSearch = () => {
    this.setState({haveWeSearchedYet: false});
  }

  // this function is being passed into the Search child component
  // it console.logs "Searched" and the city that was searched for
  // then it gets the location data using our LocationIQ key (stored in our .env file) for the city that was searched for
  // then it console.logs the data that is returned
  // then it updates the state of haveWeSearchedYet to true, updates the state of the city searched for, and the locationData's state to the data of the city we searched for.
  handleSearch = async(citySearchedFor) => {
    console.log('searched', citySearchedFor);

    let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
    console.log(locationResponseData);

    this.setState({
      haveWeSearchedYet: true,
      citySearchedFor: citySearchedFor,
      locationData: locationResponseData.data[0]
    });
  }

  // here we are rendering a heading that says "City Explorer"
  // if the state of "haveweSearchedYet" is true = it calls in the City.js component to render, and displays the data of the city that was searched for
  // if the state of "haveWeSearchedYet" is false = it calls in the Search.js component to render
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        {this.state.haveWeSearchedYet ?
          <City handleShowSearch={this.handleShowSearch} cityData={this.state.locationData} /> :
          <Search handleSearch={this.handleSearch} />}
      </>
    );
  }
}

export default App;
