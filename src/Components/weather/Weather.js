import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
  render() {
    // let listItems = this.props.weatherData.map( (day, index) => (
    //   <ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
    // ))
    return (
      <Container>
        <ListGroup>
          {this.props.weatherData.map( (day, index) => (
            <WeatherDay
              key={index}
              date={day.date}
              description={day.description}
            />
          ))}
        </ListGroup>
      </Container>
    )
  }
}

export default Weather;
