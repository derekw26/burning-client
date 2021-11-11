import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Reservations from './Reservations'




class SearchDisplayRow extends Component {

  render() {
    return (
      <div>
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.flight_number}</td>
        <td>{this.props.origin}</td>
        <td>{this.props.destination}</td>
        <td>{this.props.plane}</td>


      </tr>

   <div>

<Link className="nav-link" to="/Reservations">BooK nOW</Link>
      </div>
</div>
    )
  }
}






export default SearchDisplayRow;
