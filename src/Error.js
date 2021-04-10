import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Error extends React.Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1>{`${this.props.errorState.message}: ${this.props.errorState.response.data.error}`}</h1>
          <p>Please search again.</p>
        </Jumbotron>
      </>      
    );
  }
}

export default Error;
