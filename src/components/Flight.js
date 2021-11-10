import React, { Component } from 'react';
import FlightForm from './FlightForm'
import FlightDisplay from './FlightDisplay'

class Flight extends Component {
  constructor() {
    super();
    this.state = {
      flightInfo: {
        flight_no: '',
        date: '',
        origin: '',
        destination: '',
        plane: ''
      }
    };
  }

  fetchFlightInfo = (flight) => {

    this.setState({
      flightInfo: {
        flight_no: flight.flight_no,
        date: flight.date,
        origin: flight.origin,
        destination: flight.destination,
        plane: flight.plane
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Create Flights</h1>
        <FlightForm onSubmit={ this.fetchFlightInfo }/>
        <FlightDisplay flightInfo={ this.state.flightInfo }/>
      </div>
    )
  }
}

export default Flight;
