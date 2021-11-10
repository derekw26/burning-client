import React, { Component } from 'react';

class FlightForm extends Component {
  constructor() {
    super();
    this.state = {
      flight_no: '',
      date: '',
      origin: '',
      destination: '',
      plane: ''
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

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <label>
          Flight Number:
          <input name="flight_no" onChange={ this._handleInput } type="number" required placeholder="e.g. 24"/>
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
          <select name="plane" onChange={ this._handleInput } type="text">
          </select>
        </label>

        <input type="submit" value="Save" />
      </form>
      );
  }
}

export default FlightForm;
