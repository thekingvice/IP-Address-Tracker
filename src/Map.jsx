import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useMap } from "react-leaflet";

// Function to change the view of the map
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

// Main Map component
export default function Map(props) {
  // Destructure coordinates from the props
  const { coordinates } = props;

  // Create a custom icon for the marker
  const customIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: ["46px", "56px"],
  });

  // Initialize state for the map instance
  const [map, setMap] = useState(null);

  // Render the MapContainer component with the specified coordinates
  return (
    <>
      <MapContainer
        style={{ height: "30rem" }}
        center={coordinates}
        zoom={12}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <ChangeView center={coordinates} zoom={12} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customIcon} position={coordinates}></Marker>
      </MapContainer>
    </>
  );
}

// const onClickSet = useCallback(() => {
//   setCoordinates(testCoordinates);
//   map.setView(testCoordinates, 12);
// }, [map]);
