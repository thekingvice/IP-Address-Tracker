import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Map";

function App() {
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);
  const [ipAddress, setIpAddress] = useState("");
  const [input, setInput] = useState("");
  const [ipData, setIpData] = useState({
    location: {
      region: "",
      city: "",

      postalCode: "",
      timezone: "",
    },

    isp: "",
  });

  function handleData(ipAddress) {
    //set ip address to input value
    let coordinatesList = [];
    let ipDataObj = {
      location: {
        region: "",
        city: "",

        postalCode: "",
        timezone: "",
      },

      isp: "",
    };
    const apiKey = "at_UtjCdoDfEBMQHwZjIbCvqsWaL1txO";
    const apiUrl = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        coordinatesList = [data.location.lat, data.location.lng];
        ipDataObj.location.region = data.location.region;
        ipDataObj.location.city = data.location.city;
        ipDataObj.location.postalCode = data.location.postalCode;
        ipDataObj.location.timezone = data.location.timezone;
        ipDataObj.isp = data.isp;
        setIpData(ipDataObj);
        console.log(ipDataObj);
        setCoordinates(coordinatesList);
        console.log(coordinatesList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const handleIP = () => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Error fetching IP:", error));
  };

  useEffect(() => {
    handleIP();
  }, []);

  function validateIPAddress(ipAddress) {
    // Regular expression pattern for IPv4 address
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;

    // Regular expression pattern for IPv6 address
    const ipv6Pattern = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/;

    if (ipv4Pattern.test(ipAddress)) {
      // Valid IPv4 address
      console.log(true);
      return true;
    } else if (ipv6Pattern.test(ipAddress)) {
      // Valid IPv6 address
      console.log(true);
      return true;
    } else {
      // Invalid IP address
      console.log(ipAddress);
      return false;
    }
  }

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <section className="App__search">
        <h1 className="App__header">IP Address Tracker</h1>
        <div className="App__searchbar-wrapper">
          <input
            className="App__searchbar"
            type="text"
            name="search"
            placeholder="Search for an IP Address"
            value={input}
            onChange={inputChange}
          />
          <button
            onClick={() => {
              // validateIPAddress(ipAddress);
              // handleData();
              setIpAddress(input);
              handleData();
              console.log(ipAddress);
            }}
          >
            Submit
          </button>
        </div>
        <section className="App__details">
          <div className="App__details-section">
            <p className="App__details-p">IP ADDRESS</p>
            <h1 className="App__details-h1">{ipAddress}</h1>
          </div>
          <div className="App__details-section">
            <p className="App__details-p">LOCATION</p>
            <h1 className="App__details-h1">
              {ipData.location.city}, {ipData.location.region}{" "}
              {ipData.location.postalCode}
            </h1>
          </div>
          <div className="App__details-section">
            <p className="App__details-p">TIMEZONE</p>
            <h1 className="App__details-h1">{ipData.location.timezone}</h1>
          </div>
          <div className="App__details-section">
            <p className="App__details-p">ISP</p>
            <h1 className="App__details-h1">{ipData.isp}</h1>
          </div>
        </section>
      </section>

      <Map coordinates={coordinates} setCoordinates={setCoordinates}></Map>
    </div>
  );
}

export default App;

// --project layout--

// fetch current ip
// use ip to fetch locational data
// use locational data to set map to current location
// display locational data

// when search button is clicked
// validate ip
// if ip is valid
// > use ip to change map and data display
// else
// > display error

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
