
import React, { Component } from 'react';
import './Res.css';
import axios from 'axios'
import {Link} from 'react-router-dom'



const FLIGHT_SERVER_URL = 'https://burningair.herokuapp.com/flights.json';


class Reservations extends React.Component {


  constructor() {
    super();

      this.state = {
        flight_id: 2,
      seat: [
        'A1','A2','A3',
        'B1','B2','B3',
        'C1','C2','C3',
        'D1','D2','D3'

      ],
      seatAvailable: [
        'A1','A2','A3',
        'B1','B2','B3',
        'C1','C2','C3',
        'D1','D2','D3'

      ],
      seatReserved: []
    }
  }



  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      })
    }
  }


  render() {
    return (
      <div>
        <h1>Booking System</h1>
        <DrawGrid
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) }
          />
      </div>
    )
  }
}

class DrawGrid extends React.Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    alert('Yay , Good to go !');
  }

  render() {
    return (
       <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>
        <div class="middle">
        <button class="btn btn-primary" onClick={this.sayHello}>Book </button>
         </div>
        <AvailableList available = { this.props.available } />
        <ReservedList reserved = { this.props.reserved } />
       </div>
    )
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}




class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="left">
        <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
        </ul>
      </div>
    )
  }
}

class ReservedList extends React.Component {
  render() {
    return(
      <div className="right">
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
        <ul>
          { this.props.reserved.map(res => <li key={res} >{res}</li>) }
        </ul>
      </div>
    )
  }
}
export default Reservations;
