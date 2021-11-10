import React, { Component } from 'react';



class SearchDisplay extends Component {

  constructor() {
      super();
      this.state = {
        flights: []
      }
    }


  render() {

    const rows = [];

    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flight No.</th>
            <th>From</th>
            <th>To</th>
            <th>Plane</th>
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </table>
    );
  }

}

export default SearchDisplay;
