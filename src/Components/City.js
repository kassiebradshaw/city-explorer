import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

// this displays the rendered content after a search request has been made in a Jumbotron bootstrap component
// it renders a button labeled search again which - when clicked - calls the handleShowSearch function to set the state of haveWeSearchedYet back to false, to start over
// it renders a result showing the display_name of the cityData
// it renders the latitude and longitude of the cityData
// it renders a map of the city searched for zoomed in to '12'

class City extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>{this.props.cityData.display_name}</h2>
          <p>Latitude: {this.props.cityData.lat}</p>
          <p>Longitude: {this.props.cityData.lon}</p>
          <p>
            <Button onClick={this.props.handleShowSearch} variant="primary">Search Again!</Button>
          </p>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=12`} alt="map" />
        </Jumbotron>
      </Container>
    )
  }
}

export default City;