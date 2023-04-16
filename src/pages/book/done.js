import React from "react";
import Exit from "../../assets/exit.svg";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

export default function exit() {
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5 text-primary">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold mb-2 mt-2 md:mt-6">Pesan Tiket</p>
        <div className="flex flex-col mx-auto max-w-sm text-center">
          <p className="text-xl font-bold mt-7">
            Terima Kasih Telah Menggunakan Layanan BisKita!
          </p>
          <div className="mx-auto mt-6">
            <Exit />
          </div>
          <p className="text-sm mt-4">
            Anda telah berhasil check-out dari perjalanan BisKita. Silahkan
            kembali ke Beranda.
          </p>
        </div>
        <div className="mt-3">
          <Button name="Kembali ke Beranda" type="button" link="/" />
        </div>
      </div>
    </Layout>
  );
}
