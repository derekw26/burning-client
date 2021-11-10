import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import SearchDisplay from './SearchDisplay';

const FLIGHTS_URL = "http://localhost:3000/flights.json";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      query: {
        origin: '',
        destination: ''
      }
    }
  }

  componentDidMount() {
    axios.get(FLIGHTS_URL).then((response) => {
      const flights = response.data;
      console.log(flights)
      this.setState({flights: flights});
      // gets all the flight JSON data from server to display
    })
  }

  fetchQuery = (q) => {
    this.setState({
      query: {
        origin: q.origin,
        destination: q.destination
      }
    })
  }

  render() {

    return (
      <div>
        <h1>Search for Flights</h1>
        <SearchForm onSubmit={ this.fetchQuery }/>
        <SearchDisplay flights={ this.state.flights } query={ this.state.query }/>
      </div>
    )
  }
}

export default Search;
