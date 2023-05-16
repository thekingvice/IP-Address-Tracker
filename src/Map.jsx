import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const customIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: ["46px", "56px"],
  });
  return (
    <MapContainer
      style={{ height: "50rem" }}
      center={[51.505, -0.09]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
}
