import React from "react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

export default function map1() {
  const polyline1 = [
    [-6.596593, 106.7932177],
    [-6.5965307, 106.792941],
    [-6.5966228, 106.7933596],
    [-6.5966378, 106.7936171],
    [-6.5966119, 106.7937066],
    [-6.5965463, 106.7937894],
    [-6.5964387, 106.7939252],
    [-6.5964387, 106.7939252],
    [-6.5962393, 106.7940003],
    [-6.5956835, 106.7942199],
    [-6.5945578, 106.7946766],
    [-6.594264, 106.7951258],
    [-6.5938038, 106.796139],
    [-6.5936013, 106.7964461],
    [-6.5931758, 106.7969298],
    [-6.592981, 106.7970926],
    [-6.5928177, 106.7971393],
    [-6.5918489, 106.7971154],
    [-6.5892708, 106.7970416],
    [-6.5880352, 106.7970007],
  ];
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="bg-white w-full h-max rounded-b-xl pb-6 z-10">
          <div className="md:container md:mx-auto mx-5">
            <div className="md:hidden mt-5">
              <Arrow />
            </div>
            <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
              Pilih Rute
            </p>
          </div>
        </div>
        <MapContainer
          className="z-0"
          style={{ height: "80vh", width: "100vw" }}
          center={[-6.592, 106.794]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker id="lokasiAnda" position={[-6.5957107, 106.7902753]}>
            <Popup>Lokasi Anda</Popup>
          </Marker>
          <Marker id="lokasiAnda" position={[-6.5860546, 106.7971062]}>
            <Popup>Lokasi Tujuan</Popup>
          </Marker>

          <Marker id="marker1" position={[-6.5881244, 106.7969134]}>
            <Popup>Halte Sudirman 1</Popup>
          </Marker>
          <Marker position={[-6.5964561, 106.7928963]}>
            <Popup>Halte Bappeda Bogor</Popup>
          </Marker>
          <Polyline pathOptions={{ color: "red" }} positions={polyline1} />
        </MapContainer>
      </div>
    </Layout>
  );
}
