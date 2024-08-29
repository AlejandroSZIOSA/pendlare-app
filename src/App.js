import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentLocalization, setCurrentLocalization] = useState({});
  const [nerbayLocalisations, setNerbayLocalisations] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("si");
      navigator.geolocation.getCurrentPosition(showPosition);
      getNerbayStops();
    } else {
      console.log("no");
    }
    async function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      /* const accuracy = position.coords.accuracy; */

      setCurrentLocalization({ latitude: latitude, longitude: longitude });
    }
    async function getNerbayStops() {
      try {
        const res = await fetch(
          "https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=59.1921152&originCoordLong=17.907712&format=json&accessId=967b1027-72b3-4502-9b8c-2f950af672f5"
        );
        const data = await res.json();
        console.log(data.stopLocationOrCoordLocation);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <div className="App">
      <h1>Pendlaren App</h1>
      <h2>Your Current Position: </h2>
      <p>Latitude = {currentLocalization.latitude}</p>
      <p>Longitude = {currentLocalization.longitude}</p>
    </div>
  );
}

export default App;
