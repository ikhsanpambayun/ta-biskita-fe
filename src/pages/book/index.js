import React from "react";
import QRPayment from "../../assets/qrTicket.svg";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

export default function index() {
  function showPayment() {
    var form = document.querySelector("form");
    if (!form.checkValidity()) {
      var tmpSubmit = document.createElement("button");
      form.appendChild(tmpSubmit);
      tmpSubmit.click();
      form.removeChild(tmpSubmit);
    } else {
      document.getElementById("paymentBtn").classList.remove("hidden");
      document.getElementById("paymentBtn").classList.add("block");
      document.getElementById("pesanBtn").classList.add("hidden");
    }
  }
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
          <form>
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
              <div id="pesanBtn" className="mt-2" onClick={showPayment}>
                <Button name="Buat Pemesanan Tiket" type="button" />
              </div>
            </div>
          </form>
        </div>
        <div id="paymentBtn" className="mt-3 mb-28 hidden">
          <div className="flex mx-auto justify-between">
            <p className="text-base text-primary font-semibold">
              Total Pembayaran
            </p>
            <p className="text-base text-primary font-semibold">Rp.5000</p>
          </div>
          <QRPayment className="max-w-xs mx-auto" />
          <p className="text-base text-primary font-medium text-center max-w-xs mx-auto mb-3">
            Pindai QR Code ini pada platform online payment pilihan Anda untuk
            membayar tiket
          </p>
          <Button
            name="Verifikasi Pembayaran"
            type="submit"
            link="/book/check-in"
          />
        </div>
      </div>
    </Layout>
  );
}
