// This component renders the initial search form with a button that says "Explore!"
import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);

    // what does this line mean?
    this.textInput = React.createRef();
  }
// this function will prevent the page from reloading, and passes in the handleSearch function from App.js (as noted by the .props)
// it puts the current value of the textInput in the search box (city searched for) as the parameter for the handleSearch function
  handleFormSubmitted = event => {
    event.preventDefault();
    this.props.handleSearch(this.textInput.current.value);
  }

  // this renders the original search box with placeholder text of "City Name"
  // when the form is submitted, it invokes the handleFormSubmitted function
  render() {
    return (
      <form onSubmit={this.handleFormSubmitted}>
        <input type="text" placeholder="City Name" ref={this.textInput} />
        <input type="submit" value="Explore!" />
      </form>
    )
  }
}

export default Search;
