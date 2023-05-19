import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon, setView } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useState } from "react";

export default function Map(props) {
  const { coordinates } = props;

  const customIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: ["46px", "56px"],
  });

  const [map, setMap] = useState(null);

  const onClickSet = useCallback(() => {
    map.setView(coordinates, 12);
  }, [map, coordinates]);

  return (
    <>
      <button onClick={onClickSet}>change map view</button>
      <MapContainer
        style={{ height: "50rem" }}
        center={coordinates}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customIcon} position={coordinates}></Marker>
      </MapContainer>
    </>
  );
}
