import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    console.log('in weather js', this.props.forecastData);
    return (
      <>
        <h2>{this.props.forecastData.data[0].date}</h2>
        <h2>{this.props.forecastData.data[0].description}</h2>
      </>
    )
  }
}

export default Weather;
