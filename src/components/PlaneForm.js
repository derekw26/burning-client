import React, { Component } from 'react';
import "./PlaneForm.css"

class PlaneForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rows: 0,
      columns: 0
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
          Name:
          <input name="name" onChange={ this._handleInput } type="text" required placeholder="e.g. Boeing 787"/>
        </label>
        <label>
          Rows:
          <input name="rows" onChange={ this._handleInput } type="number" required placeholder="e.g. 6"/>
        </label>
        <label>
          Columns:
          <input name="columns" onChange={ this._handleInput } type="number" required placeholder="e.g. 50"/>
        </label>

        <input type="submit" class="btn btn-primary" value="Create Plane" />
      </form>
      );
  }
}

export default PlaneForm;
