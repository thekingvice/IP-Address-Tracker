import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useState } from "react";
import { useMap } from "react-leaflet";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function Map(props) {
  const { coordinates, setCoordinates } = props;

  const testCoordinates = [22, 22];

  const customIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: ["46px", "56px"],
  });

  const [map, setMap] = useState(null);

  // const onClickSet = useCallback(() => {
  //   setCoordinates(testCoordinates);
  //   map.setView(testCoordinates, 12);
  // }, [map]);

  return (
    <>
      {/* <button onClick={onClickSet}>{`<button>SetMapView();</button>`}</button> */}

      <MapContainer
        style={{ height: "50rem" }}
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
