import React, { Component } from 'react';
import './States.css';
import Header from "../header/Header";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: '', // State to store the input substring
    };
  }

  handleInputChange = (event) => {
    // Update the substring state when the input value changes
    this.setState({ substring: event.target.value });
  };

  render() {
    // Call the models.states() function to get the array of state names
    const stateNames = window.models.states();

    // Filter the state names based on the current substring
    const filteredStates = stateNames.filter((state) => state.toLowerCase().includes(this.state.substring.toLowerCase())
    );

    return (
      <div>
        <Header />
        <h2>States</h2>
        <input
          type="text"
          placeholder="Enter substring"
          value={this.state.substring}
          onChange={this.handleInputChange}
        />
        <p>Filtering by Substring: {this.state.substring}</p>
        <ul>
          {filteredStates.length > 0 ? (
            filteredStates.map((state, index) => (
              <li key={index}>{state}</li>
            ))
          ) : (
            <p>No matching states found.</p>
          )}
        </ul>
      </div>
    );
  }
}

export default States;
