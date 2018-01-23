import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange = event => {
    //Binding one time
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a location..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </span>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchWeather }, dispatch);
export default connect(null, mapDispatchToProps)(SearchBar);
