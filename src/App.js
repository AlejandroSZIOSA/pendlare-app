import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentLocalisation, setCurrentLocalisation] = useState({});
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("si");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("no");
    }
    async function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      /* const accuracy = position.coords.accuracy; */

      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
      setCurrentLocalisation({ latitude: latitude, longitude: longitude });
    }
  }, []);

  return (
    <div className="App">
      <h1>Pendlaren App</h1>
      <h2>Your Current Position: </h2>
      <p>Latitude = {currentLocalisation.latitude}</p>
      <p>Longitude = {currentLocalisation.longitude}</p>
    </div>
  );
}

export default App;
