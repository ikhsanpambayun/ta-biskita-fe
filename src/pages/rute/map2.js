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

export default function map2() {
  const polyline2 = [
    [-6.5957185, 106.7889518],
    [-6.5955816, 106.7883056],
    [-6.5955816, 106.7883056],
    [-6.5955134, 106.7876954],
    [-6.5955134, 106.7876954],
    [-6.5952832, 106.7875308],
    [-6.5932837, 106.786632],
    [-6.5931916, 106.7865712],
    [-6.5925715, 106.7861907],
    [-6.592267, 106.7861089],
    [-6.5913774, 106.7860211],
    [-6.5912432, 106.7860224],
    [-6.5911594, 106.7861009],
    [-6.5909, 106.7864831],
    [-6.5909, 106.7864831],
    [-6.5903214, 106.7861778],
    [-6.5902377, 106.7862036],
    [-6.5901747, 106.7862898],
    [-6.5900211, 106.7865375],
    [-6.5896453, 106.786974],
    [-6.5894713, 106.7873193],
    [-6.5894366, 106.7875266],
    [-6.5893879, 106.787704],
    [-6.5893459, 106.7877491],
    [-6.5892931, 106.7877806],
    [-6.5879273, 106.7877477],
    [-6.5868921, 106.7876786],
    [-6.585636, 106.7876959],
    [-6.5828244, 106.7877636],
    [-6.5829053, 106.7903749],
    [-6.5829126, 106.7906325],
    [-6.5829766, 106.7910462],
    [-6.5831245, 106.7913875],
    [-6.5831504, 106.7916416],
    [-6.5831631, 106.7920353],
    [-6.5831078, 106.7924201],
    [-6.5829693, 106.7927407],
    [-6.5825429, 106.7931752],
    [-6.5822445, 106.7931966],
    [-6.5819927, 106.7933455],
    [-6.5818275, 106.7937492],
    [-6.5817209, 106.7941529],
    [-6.5815714, 106.7949079],
    [-6.5812583, 106.7964582],
    [-6.5813869, 106.7966685],
    [-6.5815698, 106.7967399],
    [-6.5849115, 106.7968747],
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
          center={[-6.59, 106.792]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker id="lokasiAnda" position={[-6.5957107, 106.7902753]}>
            <Popup>Lokasi Anda</Popup>
          </Marker>
          <Marker id="lokasiAnda" position={[-6.5860546, 106.7971062]}>
            <Popup>Lokasi Tujuan</Popup>
          </Marker>

          <Marker id="marker1" position={[-6.5958782, 106.7893765]}>
            <Popup>Halte Jembatan Merah</Popup>
          </Marker>
          <Marker position={[-6.5851288, 106.7970093]}>
            <Popup>Halte Museum Peta</Popup>
          </Marker>
          <Polyline pathOptions={{ color: "red" }} positions={polyline2} />
        </MapContainer>
      </div>
    </Layout>
  );
}
