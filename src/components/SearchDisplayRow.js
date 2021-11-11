import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Reservations from './Reservations'




class SearchDisplayRow extends Component {

  render() {
    return (
<<<<<<< HEAD
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
=======
        <tr class="table-info">
          <td>{this.props.date}</td>
          <td>{this.props.flight_number}</td>
          <td>{this.props.origin}</td>
          <td>{this.props.destination}</td>
          <td>{this.props.plane}</td>
          <td><Link className="nav-link" to="/Reservations">Book Now</Link></td>
        </tr>
>>>>>>> c25044cf31c953b62bae21007db6e00ed4026c3f
    )
  }
}






export default SearchDisplayRow;
