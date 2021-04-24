import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.title}</td>
          <td>{this.props.overview}</td>
        </tr>
      </>
    )
  }
}

export default Movie;
