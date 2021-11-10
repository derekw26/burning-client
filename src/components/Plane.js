import React, { Component } from 'react';
import axios from 'axios';

import PlaneForm from './PlaneForm'
import PlaneDisplay from './PlaneDisplay'
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/planes.json';

const AIRPLANES_URL = "http://localhost:3000/airplanes.json";

class Plane extends Component {
  constructor() {
    super();
    this.state = {
      planeInfo: {
        name: '',
        rows: 0,
        columns: 0
      }
    };
    this.savePlane = this.savePlane.bind(this);
  }

  savePlane(adminInput) {
    axios.post(AIRPLANES_URL, { airplane: adminInput }).then((response) => {
      const plane = response.data
      this.setState({
        planeInfo: {
          name: plane.name,
          rows: plane.rows,
          columns: plane.columns
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Create Planes</h1>
        <PlaneForm onSubmit={ this.savePlane }/>
        <PlaneDisplay planeInfo={ this.state.planeInfo }/>
      </div>
    )
  }
}

export default Plane;
