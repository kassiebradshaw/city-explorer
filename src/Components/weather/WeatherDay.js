import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {
  render() {
    return(
      <ListGroup.Item>
        {`Date: ${this.props.date} || ${this.props.description}`}
      </ListGroup.Item>
      // <tr>
      //   <td>{this.props.date}</td>
      //   <td>{this.props.description}</td>
      // </tr>
    );
  }
}

export default WeatherDay;
