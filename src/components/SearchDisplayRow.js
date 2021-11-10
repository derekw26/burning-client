import React, { Component } from 'react';
import {Link} from 'react-router-dom'




class SearchDisplayRow extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.flight_number}</td>
        <td>{this.props.origin}</td>
        <td>{this.props.destination}</td>
        <td>{this.props.plane}</td>
        <button type="submit">Book Flight</button>
      </tr>
    )
  }
}

export default SearchDisplayRow;
