import React, { Component } from 'react';

const FlightDisplay = (props) => {

  const flight = props.flightInfo;

  return (
    <div>
      <ul>
        <li>
          Flight Number: { flight.flight_no }
        </li>
        <li>
          Date: { flight.date }
        </li>
        <li>
          Origin: { flight.origin }
        </li>
        <li>
          Destination: { flight.destination }
        </li>
        <li>
          Plane: { flight.plane }
        </li>
      </ul>
    </div>
  );
}

export default FlightDisplay;
