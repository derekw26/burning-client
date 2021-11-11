import React, { Component } from 'react';
import SearchDisplayRow from './SearchDisplayRow';
import "./SearchDisplay.css"

class SearchDisplay extends Component {

  constructor() {
      super();
    }

  render() {

    let rows = [];
    const flights = this.props.flights;
    const query = this.props.query;

    flights.forEach((flight) => {


    if ( (flight.origin.includes(query.origin)  && flight.destination.includes(query.destination) ) ||
      (query.origin === flight.origin && query.destination === '') ||
      (query.origin === '' && query.destination === flight.destination) ) {
        rows.push(
          <SearchDisplayRow
            flight_number={flight.number}
            origin={flight.origin}
            destination={flight.destination}
            date={flight.date}
            plane={flight.airplane.name}
          />
        );
      }
    });

    return (
      <table class="table table-striped">
        <thead>
          <tr class="table-info ">
            <th>Date</th>
            <th>Flight No.</th>
            <th>From</th>
            <th>To</th>
            <th>Plane</th>
            <th>Book Here</th>
          </tr>
        </thead>
        <tbody> { rows } </tbody>
      </table>
    );
  }

}

export default SearchDisplay;
