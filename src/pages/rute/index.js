import React from "react";
import { Card } from "flowbite-react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import SearchBar from "../../components/SearchBar";
import { Link } from "gatsby";

export default function index() {
  function showRute1() {
    document.getElementById("cardRute1").classList.remove("hidden");
    document.getElementById("cardRute1").classList.add("block");
    document.getElementById("cardHalte1").classList.add("hidden");
    document.getElementById("cardHalte2").classList.add("hidden");
  }
  function showRute2() {
    document.getElementById("cardRute2").classList.remove("hidden");
    document.getElementById("cardRute2").classList.add("block");
    document.getElementById("cardHalte1").classList.add("hidden");
    document.getElementById("cardHalte2").classList.add("hidden");
  }
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
            <div id="content" className="flex flex-col gap-3">
              <SearchBar></SearchBar>
              <div onClick={showRute1}>
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
              <div onClick={showRute2}>
                <Card id="cardHalte2" className="m-0">
                  <p className="text-base font-semibold text-primary m-0">
                    Halte Jembatan Merah
                  </p>
                  <p className="text-sm font-light text-primary">
                    Jl. Raya Dramaga - Bogor RT.01/RW.01, Cibogor, Kecamatan
                    Bogor Tengah, Kota Bogor, Jawa Barat
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm font-light text-primary">
                      1 jam 5 menit
                    </p>
                    <p className="text-sm font-light text-primary">•</p>
                    <p className="text-sm font-light text-primary">
                      Perkiraan tiba 11:35
                    </p>
                  </div>
                </Card>
              </div>
              <div id="cardRute1" className="hidden m-0">
                <Card href="map1/">
                  <div className="flex">
                    <h5 className="text-primary text-base font-semibold">
                      Koridor K1B
                    </h5>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex-col justify-between">
                      <p className="text-sm text-primary">
                        &#x25cf; Halte Bappeda Bogor <br />
                      </p>
                      <p className="text-xs text-primary">
                        100 m • Keberangkatan selanjutnya 10:30
                      </p>
                    </div>
                    <div className="flex-col justify-between">
                      <p className="text-sm text-primary">
                        &#x25cf; Sudirman 1
                      </p>
                      <p className="text-xs text-primary">
                        50 menit • Perkiraan tiba 11:20
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div id="cardRute2" className="hidden m-0">
                <Card href="map2/">
                  <div className="flex">
                    <h5 className="text-primary text-base font-semibold">
                      Koridor K1B
                    </h5>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex-col justify-between">
                      <p className="text-sm text-primary">
                        &#x25cf; Halte Jembatan Merah <br />
                      </p>
                      <p className="text-xs text-primary">
                        50 m • Keberangkatan selanjutnya 10:30
                      </p>
                    </div>
                    <div className="flex-col justify-between">
                      <p className="text-sm text-primary">
                        &#x25cf; Halte Museum Peta
                      </p>
                      <p className="text-xs text-primary">
                        1 jam 5 menit • Perkiraan tiba 11:35
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
