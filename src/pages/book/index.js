import React from "react";
import QRPayment from "../../assets/qrTicket.svg";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

export default function Index() {
  let randNum = Math.random();
  let qrUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + randNum;
  function showPayment() {
    var form = document.querySelector("form");
    if (!form.checkValidity()) {
      var tmpSubmit = document.createElement("button");
      form.appendChild(tmpSubmit);
      tmpSubmit.click();
      form.removeChild(tmpSubmit);
    } else {
      document.querySelector("fieldset").setAttribute("disabled", "disabled");
      document.getElementById("paymentBtn").classList.remove("hidden");
      document.getElementById("paymentBtn").classList.add("block");
      document.getElementById("pesanBtn").classList.add("hidden");
    }
  }
  function checkKoridor() {
    var form = document.querySelector("form");
    if (!document.getElementById("koridorOptions").value) {
      var tmpSubmit = document.createElement("button");
      form.appendChild(tmpSubmit);
      tmpSubmit.click();
      form.removeChild(tmpSubmit);
    }
  }
  const k1b1 = [
    "Terminal Bubulak",
    "SBJ 1",
    "Semplak",
    "Ruko Yasmin 1",
    "Radar Bogor",
    "Transmart Trans Pakuan",
    "Cimanggu 1",
    "UIKA 1",
  ];
  const k1b2 = [
    "Cidangiang",
    "Terminal Baranangsiang",
    "SDN Bangka",
    "KLHK",
    "KPPN Bogor",
    "Juanda Bogor",
    "Taman Ekspresi Bogor",
    "Bantar Jati 1",
    "YPHB",
    "Warung Jambu",
  ];
  const k2b1 = [
    "Terminal Bubulak",
    "Perum Sinbad",
    "BKP5K",
    "Lokatmala",
    "Pasar Gunung Batu",
    "Bappeda Bogor",
    "Veteran Bogor",
    "RS PMI Bogor",
    "Kebun Raya Bogor",
  ];
  const k2b2 = [
    "Ciawi",
    "UNITEX 1",
    "Pakuan 1",
    "Meteorologi",
    "Pakuan 2",
    "Mall Ekalokasari",
    "Damkar Bogor",
    "Pulo Armin",
    "PDAM 1",
    "Masjid Raya Bogor",
  ];
  const k5b1 = [
    "Ciparigi",
    "SMPN 19 1",
    "Komplek PGRI",
    "Villa Bogor Indah 2-2",
    "SDN Kedung Halang 1",
    "Simpang Talang 1",
    "Jambu Dua",
    "SMPN 8 Bogor",
    "BPJS Bogor",
  ];
  const k5b2 = [
    "Stasiun Bogor 1",
    "Bappeda Bogor",
    "RS Salak",
    "Sudirman 1",
    "Air Mancur 2",
    "GOR 1",
    "DPRD Baru",
    "SMPN 5 Bogor",
    "	ugu Narkoba 1",
  ];
  const k6b1 = [
    "Parung Banteng",
    "Kol. Ahmad Syam 1",
    "Simpang Bogor Baru",
    "Masjid Al Muttaqin Bogor",
    "Taman Corat Coret 1",
    "Jambu Dua",
    "SMPN 8 Bogor",
    "BPJS Bogor",
    "Dinas Kesehatan Bogor",
  ];
  const k6b2 = [
    "Dinas Kesehatan Bogor",
    "Air Mancur 2",
    "GOR 1",
    "DPRD Baru",
    "SMPN 5 Bogor",
    "Vila Citra Bantarjati",
    "Vila Citra Bantarjati",
    "Vila Citra Bantarjati",
    "Parung Banteng",
  ];
  function setHalte() {
    var koridor = document.getElementById("koridorOptions").value;
    var optionHalteAsal = document.getElementById("halteAsal");
    var optionHalteTujuan = document.getElementById("halteTujuan");
    while (optionHalteAsal.hasChildNodes()) {
      optionHalteAsal.removeChild(optionHalteAsal.firstChild);
    }
    while (optionHalteTujuan.hasChildNodes()) {
      optionHalteTujuan.removeChild(optionHalteTujuan.firstChild);
    }
    var defOption1 = document.createElement("option");
    defOption1.innerHTML = "Pilih Koridor";
    defOption1.setAttribute("selected", "selected");
    defOption1.setAttribute("disabled", "disabled");
    defOption1.setAttribute("hidden", "hidden");
    document.getElementById("halteAsal").append(defOption1);
    var defOption2 = defOption1.cloneNode(true);
    document.getElementById("halteTujuan").append(defOption2);
    if (koridor == "K1B") {
      k1b1.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteAsal").appendChild(option);
      });
      k1b2.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteTujuan").appendChild(option);
      });
    }
    if (koridor == "K2B") {
      k2b1.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteAsal").appendChild(option);
      });
      k2b2.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteTujuan").appendChild(option);
      });
    }
    if (koridor == "K5B") {
      k5b1.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteAsal").appendChild(option);
      });
      k5b2.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteTujuan").appendChild(option);
      });
    }
    if (koridor == "K6B") {
      k6b1.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteAsal").appendChild(option);
      });
      k6b2.map((halte) => {
        var option = document.createElement("option");
        option.value = halte;
        option.innerHTML = halte;
        document.getElementById("halteTujuan").appendChild(option);
      });
    }
  }
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
            <fieldset>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label>Koridor</label>
                  <select
                    id="koridorOptions"
                    className="peer rounded-lg bg-alternative p-3 border-alternative-dark"
                    onChange={setHalte}
                    required
                  >
                    <option value="" selected disabled hidden>
                      Pilih Koridor
                    </option>
                    <option value="K1B">K1B</option>
                    <option value="K2B">K2B</option>
                    <option value="K5B">K5B</option>
                    <option value="K6B">K6B</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label>Halte Asal</label>
                  <select
                    required
                    className="rounded-lg bg-alternative p-3 border-alternative-dark"
                    id="halteAsal"
                    onClick={checkKoridor}
                  >
                    <option value="" selected disabled hidden>
                      Pilih Halte
                    </option>
                    {/* {halte1.map((halte) => (
                    <option value={halte}>{halte}</option>
                  ))} */}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label>Halte Tujuan</label>
                  <select
                    className="rounded-lg bg-alternative p-3 border-alternative-dark"
                    required
                    id="halteTujuan"
                    onClick={checkKoridor}
                  >
                    <option value="" selected disabled hidden>
                      Pilih Halte
                    </option>
                    {/* {halte2.map((halte) => (
                    <option value={halte}>{halte}</option>
                  ))} */}
                  </select>
                </div>
                <div id="pesanBtn" className="mt-2" onClick={showPayment}>
                  <Button name="Buat Pemesanan Tiket" type="button" />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div id="paymentBtn" className="mt-3 mb-28 hidden">
          <div className="flex mx-auto justify-between">
            <p className="text-base text-primary font-semibold">
              Total Pembayaran
            </p>
            <p className="text-base text-primary font-semibold">Rp.4000</p>
          </div>
          <img
            src={qrUrl}
            alt="QRCode Pembayaran"
            className="max-w-xs mx-auto"
          />
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
