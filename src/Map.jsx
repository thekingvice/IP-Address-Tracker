import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map(props) {
  const { coordinates } = props;

  const customIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: ["46px", "56px"],
  });


  return (
    <>
      <button onClick={ChangeMap}>change map view</button>
      <MapContainer
        style={{ height: "50rem" }}
        center={coordinates}
        zoom={12}
        scrollWheelZoom={false}
      >(
        const ChangeMap = () = {
          const randcoord = [45.52345, -122.67621];
          const map = useMap();
          map.flyTo(randcoord);
        };)
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customIcon} position={coordinates}></Marker>
      </MapContainer>
    </>
  );
}
