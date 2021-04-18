import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render(){
    let listItems = this.props.weatherData.map( (day, index) => (
      <ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
    )
    )
    return (
      <ListGroup>
        {listItems}
      </ListGroup>
    )
  }
}

export default Weather;
