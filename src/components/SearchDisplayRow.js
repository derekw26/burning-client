import React, { Component } from 'react';

class SearchDisplayRow extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.flight_number}</td>
        <td>{this.props.origin}</td>
        <td>{this.props.destination}</td>
        <td>{this.props.plane}</td>
      </tr>
    )
  }
}

export default SearchDisplayRow;
