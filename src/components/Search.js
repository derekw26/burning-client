import React, { Component } from 'react';
import SearchForm from './SearchForm'
import SearchDisplay from './SearchDisplay'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: {
        origin: '',
        destination: ''
      }
    };
  }

  fetchQuery = (search) => {

    this.setState({
      query: {
        origin: search.origin,
        destination: search.destination
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Search for Flights</h1>
        <SearchForm onSubmit={ this.fetchQuery }/>
        <SearchDisplay searchInfo={ this.state.query }/>
      </div>
    )
  }
}

export default Search;
