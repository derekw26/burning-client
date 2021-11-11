import React, { Component } from 'react';
import axios from 'axios';
import "./FlightForm.css";

const AIRPLANES_URL = "https://burningair.herokuapp.com/airplanes.json";


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
          <input name="number" class="form-control" onChange={ this._handleInput } type="number" required placeholder="e.g. 24"/>
        </label>
        <label>
          Date:
          <input name="date" class="form-control" onChange={ this._handleInput } type="date" required placeholder="e.g. 23/06/2021"/>
        </label>
        <label>
          From:
          <input name="origin" class="form-control" onChange={ this._handleInput } type="text" required placeholder="e.g. Sydney"/>
        </label>
        <label>
          To:
          <input name="destination" class="form-control" onChange={ this._handleInput } type="text" required placeholder="e.g. Los Angeles"/>
        </label>
        <label>
          Plane:
          <select name="airplane_id" class="form-control" onChange={ this._handleInput } type="text" required >
            <option></option>
            { this.state.planeOptions }
          </select>
        </label>
        <div class="ms-2">
        <input type="submit" class="btn btn-primary" value="Save" />
        </div>
      </form>
      );
  }
}

export default FlightForm;
