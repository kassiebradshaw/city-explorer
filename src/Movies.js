import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() {
    let listItems = this.props.moviesArray.map( (selection, index) => (
      <ListGroup.Item key={index}>{`${selection.title}: ${selection.overview}`}</ListGroup.Item>
    )
    )
    return (
      <ListGroup>
        {listItems}
      </ListGroup>
    )
  }
}

export default Movies;