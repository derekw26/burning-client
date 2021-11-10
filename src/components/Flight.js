import React, { Component } from 'react';
import axios from 'axios';

import FlightForm from './FlightForm'
import FlightDisplay from './FlightDisplay'

const FLIGHTS_URL = "http://localhost:3000/flights.json";

class Flight extends Component {
  constructor() {
    super();
    this.state = {
      flightInfo: {
        number: '',
        date: '',
        origin: '',
        destination: '',
        plane: ''
      }
    };
  }

  saveFlight(adminInput) {
    axios.post(FLIGHTS_URL, { flight: adminInput }).then((response) => {
      const flight = response.data
      this.setState({
        flightInfo: {
          number: flight.number,
          date: flight.date,
          origin: flight.origin,
          destination: flight.destination,
          plane: flight.plane
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Create Flights</h1>
        <FlightForm onSubmit={ this.saveFlight }/>
        <FlightDisplay flightInfo={ this.state.flightInfo }/>
      </div>
    )
  }
}

export default Flight;
