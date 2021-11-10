import React, { Component } from 'react';
import {Link} from 'react-router-dom'




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
        <button type="submit">Book Flight</button>
      </tr>

      <div className="buttonThing" onClick={this.handleClick}>
      <a href="./reservations">Reservations</a>
      </div>
</div>
    )
  }
}

export default SearchDisplayRow;
