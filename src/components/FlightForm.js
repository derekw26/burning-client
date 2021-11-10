import React, { Component } from 'react';
import axios from 'axios';

const AIRPLANES_URL = "http://localhost:3000/airplanes.json";


class FlightForm extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      date: '',
      origin: '',
      destination: '',
      airplane_id: '',
      planeOptions: []
    };

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    const target = event.target
    const key = target.name
    const value = target.value

    this.setState({
      [key]: value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  componentDidMount() {
    axios(AIRPLANES_URL).then((response) => {
      let planes = response.data.map( (plane, i) => (<option key={i} value={ plane.id }>{ plane.name }</option>) );
      this.setState({planeOptions: planes });
    });
  }

  render() {

    return (
      <form onSubmit={ this._handleSubmit }>
        <label>
          Flight Number:
          <input name="number" onChange={ this._handleInput } type="number" required placeholder="e.g. 24"/>
        </label>
        <label>
          Date:
          <input name="date" onChange={ this._handleInput } type="date" required placeholder="e.g. 23/06/2021"/>
        </label>
        <label>
          From:
          <input name="origin" onChange={ this._handleInput } type="text" required placeholder="e.g. Sydney"/>
        </label>
        <label>
          To:
          <input name="destination" onChange={ this._handleInput } type="text" required placeholder="e.g. Los Angeles"/>
        </label>
        <label>
          Plane:
          <select name="airplane_id" onChange={ this._handleInput } type="text" required >
            <option></option>
            { this.state.planeOptions }
          </select>
        </label>
        <input type="submit" value="Save" />
      </form>
      );
  }
}

export default FlightForm;
