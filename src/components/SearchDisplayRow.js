import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Reservations from './Reservations'




class SearchDisplayRow extends Component {

  state = {clicked: false }

handleClick = () => {
    this.setState({clicked: this.state.clicked})
}

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

<<<<<<< HEAD
   <div>

<Link className="nav-link" to="/Reservations">BooK nOW</Link>
=======
      <div className="buttonThing" onClick={this.handleClick}>
      <a href="./reservations">Reservations</a>
>>>>>>> a4089f5ff7a8196cc86b4db51ba2dada5f433a44
      </div>
</div>
    )
  }
}






export default SearchDisplayRow;
