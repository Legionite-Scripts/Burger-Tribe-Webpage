import React from "react";
import { Container } from "react-bootstrap";
import { MapContainer, TileLayer } from "react-leaflet";
//npm install react-leaflet

export const Map = () => {
  return (
    <Container fluid>
      <MapContainer
        center={[6.5044347814424555, 3.086884701631786]}
        zoom={13}
        id="map"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
      </MapContainer>
    </Container>
  );
};
