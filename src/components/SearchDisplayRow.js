import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Reservations from './Reservations'




class SearchDisplayRow extends Component {

  render() {
    return (
<<<<<<< HEAD
=======
      
>>>>>>> 719ffce4d47903d4a4d19ec97cef01321ec468d0
        <tr class="table-info">
          <td>{this.props.date}</td>
          <td>{this.props.flight_number}</td>
          <td>{this.props.origin}</td>
          <td>{this.props.destination}</td>
          <td>{this.props.plane}</td>
          <td><Link className="nav-link" to="/Reservations">Book Now</Link></td>
        </tr>
    )
  }
}






export default SearchDisplayRow;
