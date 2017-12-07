import axios from 'axios';  // To make ajax requests
import { FETCH_WEATHER } from '../types/types';

const API_KEY = '2552a2f7906dd4cc64351fa8f24c59b9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},tt&units=metric&cnt=16`; // TT for Trinidad
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};