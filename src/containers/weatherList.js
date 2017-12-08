import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  
  renderWeather(cityData) {
    if(!cityData)
      return

    const name = cityData.city.name;
    const id = cityData.city.id;
    const weather = {
      main: cityData.list[0].weather[0].main,
      description: cityData.list[0].weather[0].description
    }
    const temp = cityData.list.map(day => parseInt(day.main.temp));
    const humidity = cityData.list.map(day => parseInt(day.main.humidity));

    return (
      <tr key={id}>
        <td className="col-sm-2">
         <h4>{name}</h4>
        </td>
        <td className="col-sm-4">
          <Chart data={temp} color="#18bc9c" unit="°C"/>
        </td>
        <td className="col-sm-4">
          <Chart data={humidity} color="#2e3c50" unit="%"/>
        </td>
        <td className="col-sm-2">
          <p>{weather.main}</p>
          <p>{weather.description}</p>
        </td>
      </tr>
    )
  }
 
  render() {
    if(!this.props.weather) {
      return (<div>Enter a location</div>);
    }
    return (
      <div className="table-responsive">
        <hr/>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Current Weather</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

//  ES6 magic, pull off weather from state - state.weather, then return object {weather} which is {weather:weather}
const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);