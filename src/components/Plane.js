import React, { Component } from 'react';
import PlaneForm from './PlaneForm'
import PlaneDisplay from './PlaneDisplay'

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
  }

  fetchPlaneInfo = (plane) => {

    this.setState({
      planeInfo: {
        name: plane.name,
        rows: plane.rows,
        columns: plane.columns
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Create Planes</h1>
        <PlaneForm onSubmit={ this.fetchPlaneInfo }/>
        <PlaneDisplay planeInfo={ this.state.planeInfo }/>
      </div>
    )
  }
}

export default Plane;
