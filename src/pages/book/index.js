import React from "react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

export default function index() {
  const halte1 = [
    "Terminal Bubulak",
    "Perum Sinbad",
    "BKP5K",
    "Lokatmala",
    "Pasar Gunung Batu",
  ];
  const halte2 = [
    "Ciawi",
    "UNITEX 1",
    "Pakuan 1",
    "Meteorologi",
    "Pakuan 2",
    "Mall Ekalokasari",
  ];
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
          Pesan Tiket
        </p>
        <div className="text-primary">
          <form action="/book/check-in">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label>Koridor</label>
                <select
                  className="rounded-lg bg-alternative p-3 border-alternative-dark"
                  required
                >
                  <option value="" selected disabled hidden>
                    Pilih Koridor
                  </option>
                  <option value="K1B">K1B</option>
                  <option value="K1B">K2B</option>
                  <option value="K1B">K5B</option>
                  <option value="K1B">K6B</option>
                </select>
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid email address
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <label>Halte Asal</label>
                <select
                  required
                  className="rounded-lg bg-alternative p-3 border-alternative-dark"
                >
                  <option value="" selected disabled hidden>
                    Pilih Halte
                  </option>
                  {halte1.map((halte) => (
                    <option value={halte}>{halte}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label>Halte Tujuan</label>
                <select
                  className="rounded-lg bg-alternative p-3 border-alternative-dark"
                  required
                >
                  <option value="" selected disabled hidden>
                    Pilih Halte
                  </option>
                  {halte2.map((halte) => (
                    <option value={halte}>{halte}</option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <Button name="Buat Pemesanan Tiket" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
