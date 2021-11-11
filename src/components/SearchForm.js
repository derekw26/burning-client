import React, { Component } from 'react';
import "./SearchForm.css"

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
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
      <div>
        <form onSubmit={ this._handleSubmit }>
          <label>
            From:
            <input name="origin" class="form-control" aria-label="Disabled input example" onChange={ this._handleInput } type="text" placeholder="e.g. Sydney"/>
          </label>
          <label>
            To:
            <input name="destination" class="form-control" aria-label="Disabled input example" onChange={ this._handleInput } type="text" placeholder="e.g. Los Angeles"/>
          </label>
          <input type="submit" class="btn btn-primary " value="Search for Flights" />
        </form>
      </div>
      );
  }
}

export default SearchForm;
