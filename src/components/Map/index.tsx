import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const Map: React.FC = () => {
  return (
    <MapContainer center={{ lat: 48.71291, lng: 44.52693 }} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
