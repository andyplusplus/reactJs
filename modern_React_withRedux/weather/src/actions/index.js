import axios from 'axios';
const API_KEY='3dcd235692a88f1e1af4b0f69dfc7134';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
