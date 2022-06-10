import { useState, useEffect } from "react"
import { getWeather } from "./calls";
import _ from "lodash"
import './App.css';
import Card from "./Card"
import ThermostatIcon from '@mui/icons-material/Thermostat';

function App() {

  const [result, setResult] = useState([])
  const [error, setError] = useState(false)
  //  http://server2.sincgrid.com:5000/api/v1/cedt/weather-station-221
  useEffect(() => {
    const url = "http://server2.sincgrid.com:5000/api/v1/pu/air-quality1";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setResult(json.data)
      } catch (error) {
        console.log("error", error);
        setError(true)
      }
    };


    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30 * 1000)

    return () => clearInterval(interval)
  }, []);
  return (
    <div className="App">
      <h1>Air Quality</h1>
      {error && <p>Sorry something went wrong.</p>}
      {_.isEmpty(result)
        ?
        <p>Loading...</p>
        :
        <div className="cardsParent">

          <div className="card">

            <p><span>Hit-time</span><br />{Object.values(result[0].hit_time)}</p>
            <p><span>Temperature</span><br />{Object.values(result[0].Temperatue)}°C</p>
            <p><span>Humidity</span><br />{Object.values(result[0].Humidity)}%RH</p>
            <p><span>CH<sub>2</sub>O</span><br />{Object.values(result[0].CH2O)}mg/m<sup>3</sup> </p>
            <p><span>CO<sub>2</sub><br /></span>{Object.values(result[0].CO2)}ppm</p>
            <p><span>CO</span><br />{Object.values(result[0].Co)}ppm</p>
            <p><span>NO<sub>2</sub><br /></span>{Object.values(result[0].NO2)}ppm</p>
            <p><span>PM1.0</span><br />{Object.values(result[0].PM_1_0)}ug/m<sup>3</sup></p>
            <p><span>PM2.5</span><br />{Object.values(result[0].PM_2_5)}ug/m<sup>3</sup></p>
            <p><span>PM10</span><br />{Object.values(result[0].PM_10)}ug/m<sup>3</sup></p>

          </div>
        </div>
      }

    </div>
  );
}

export default App;
