import { useState } from "react";
import "./App.css";
import Map from "./Map";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);

  //get ip address, set ip address
  //search for more info using ip address
  //pass down courdinates to map and use it in map element

  //create search bar with default value of ip address
  //on submit check if valid ip address, if valid

  // fetch('https://api.ipify.org?format=json')
  // .then(response => response.json())
  // .then(data => console.log('My public IP address is:', data.ip))
  // .catch(error => console.error('Error fetching IP:', error));

  const handleIP = () => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Error fetching IP:", error));
  };

  const handleCoordinates = () => {
    let coordinatesList = [];
    let addressData = {};
    const apiKey = "at_UtjCdoDfEBMQHwZjIbCvqsWaL1txO";
    const apiUrl = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        coordinatesList = [data.location.lat, data.location.lng];
        console.log(coordinatesList);
        setCoordinates(coordinatesList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="App">
      <button onClick={handleIP}>Handle IP:{ipAddress}</button>
      <button onClick={handleCoordinates}>Handle Coordinates</button>
      <Map coordinates={coordinates}></Map>
    </div>
  );
}

export default App;

// {
//   "ip": "97.120.46.202",
//   "location": {
//       "country": "US",
//       "region": "Oregon",
//       "city": "Portland",
//       "lat": 45.52345,
//       "lng": -122.67621,
//       "postalCode": "97201",
//       "timezone": "-07:00",
//       "geonameId": 5746545
//   },
//   "as": {
//       "asn": 209,
//       "name": "CENTURYLINK-US-LEGACY-QWEST",
//       "route": "97.120.0.0/16",
//       "domain": "http://www.lumen.com",
//       "type": "NSP"
//   },
//   "isp": "CenturyLink",
//   "proxy": {
//       "proxy": false,
//       "vpn": false,
//       "tor": false
//   }
// }
