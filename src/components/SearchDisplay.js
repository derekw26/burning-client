import React, { Component } from 'react';
import SearchDisplayRow from './SearchDisplayRow';

class SearchDisplay extends Component {

  constructor() {
      super();
    }

  render() {

    const rows = [];
    const flights = this.props.flights;
    const query = this.props.query;

    flights.forEach((flight) => {

      if ( (query.origin === flight.origin && query.destination === flight.destination) ||
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
      <table class="table-primary">
        <thead>
          <tr class="table-info">
            <th>Date</th>
            <th>Flight No.</th>
            <th>From</th>
            <th>To</th>
            <th>Plane</th>
          </tr>
        </thead>
        <tbody> { rows } </tbody>
      </table>
    );
  }

}

export default SearchDisplay;
