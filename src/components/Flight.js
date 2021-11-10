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
        airplane_id: ''
      }
    };
    this.saveFlight = this.saveFlight.bind(this);
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
          airplane_id: flight.airplane_id
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
