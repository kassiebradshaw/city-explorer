import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Movie from './Movie.js';

class Movies extends React.Component {
  render() {
    return (
      <Container>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Movie Overview</th>
            </tr>
          </thead>
          <tbody>
            {this.props.moviesArray.map((selection, index) => (
              <Movie
                key={index}
                title={selection.title}
                overview={selection.overview}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default Movies;
