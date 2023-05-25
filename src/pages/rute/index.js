import React from "react";
import { Card } from "flowbite-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import SearchBar from "../../components/SearchBar";

export default function index() {
  const polyline = [
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
  function showRute() {
    document.getElementById("cardRute").classList.remove("hidden");
    document.getElementById("cardRute").classList.add("block");
    document.getElementById("cardHalte1").classList.add("hidden");
    document.getElementById("cardHalte2").classList.add("hidden");
  }
  function showTrack() {
    document.getElementById("content").classList.add("hidden");
  }
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="absolute bg-white w-full h-max rounded-b-xl pb-6 z-10 drop-shadow-lg">
          <div className="md:container md:mx-auto mx-5">
            <div className="md:hidden mt-5">
              <Arrow />
            </div>
            <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
              Pilih Rute
            </p>
            <div id="content" className="flex flex-col gap-3">
              <SearchBar></SearchBar>
              <div onClick={showRute}>
                <Card id="cardHalte1" className="m-0">
                  <p className="text-base font-semibold text-primary m-0">
                    Halte Bappeda Bogor
                  </p>
                  <p className="text-sm font-light text-primary">
                    Jl. Kapten Muslihat, RT.01/RW.01, Pabaton, Kecamatan Bogor
                    Tengah, Kota Bogor, Jawa Barat
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm font-light text-primary">50 menit</p>
                    <p className="text-sm font-light text-primary">•</p>
                    <p className="text-sm font-light text-primary">
                      Perkiraan tiba 11:20
                    </p>
                  </div>
                </Card>
              </div>
              <div onClick={showRute}>
                <Card id="cardHalte2" className="m-0">
                  <p className="text-base font-semibold text-primary m-0">
                    Halte Sudirman 1
                  </p>
                  <p className="text-sm font-light text-primary">
                    Jl. Raya Dramaga - Bogor, RT.04/RW.01, Paledang, Kecamatan
                    Bogor Tengah, Kota Bogor, Jawa Barat 16121
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm font-light text-primary">45 menit</p>
                    <p className="text-sm font-light text-primary">•</p>
                    <p className="text-sm font-light text-primary">
                      Perkiraan tiba 11:15
                    </p>
                  </div>
                </Card>
              </div>
              <div onClick={showTrack}>
                <Card id="cardRute" className="hidden m-0">
                  <div className="flex">
                    <h5 className="text-primary text-base font-semibold">
                      Koridor K1B
                    </h5>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex-col justify-between">
                      <p className="text-sm text-primary">
                        &#x25cf; Sudirman 1 <br />
                      </p>
                      <p className="text-xs text-primary">
                        100 m • Keberangkatan selanjutnya 10:30
                      </p>
                    </div>
                    <div className="flex-col justify-between">
                      <p className="text-sm text-primary">
                        &#x25cf; Halte Bappeda Bogor
                      </p>
                      <p className="text-xs text-primary">
                        45 menit • Perkiraan tiba 11:15
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <MapContainer
          className="z-0"
          style={{ height: "100vh", width: "100vw" }}
          center={[-6.5865, 106.7963]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker id="marker1" position={[-6.5881244, 106.7969134]}>
            <Popup>Sudirman 1</Popup>
          </Marker>
          <Marker position={[-6.5964561, 106.7928963]}>
            <Popup>Halte Bappeda Bogor</Popup>
          </Marker>
          <Polyline pathOptions={{ color: "red" }} positions={polyline} />
        </MapContainer>
      </div>
    </Layout>
  );
}
