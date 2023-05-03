import React from "react";
import Layout from "../../components/Layout";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function index() {
  return (
    <Layout>
      <div className="w-full h-full">
        <MapContainer
          style={{ height: "100vh", width: "100vw", zIndex: "-1" }}
          center={[-6.597, 106.8214]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
    </Layout>
  );
}
