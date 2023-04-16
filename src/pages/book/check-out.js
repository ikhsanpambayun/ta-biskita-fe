import React from "react";
import Check from "../../assets/check.svg";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

export default function checkout() {
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5 text-primary">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold mb-2 mt-2 md:mt-6">Pesan Tiket</p>
        <div className="flex flex-col mx-auto max-w-sm text-center">
          <div className="mx-auto mt-6">
            <Check />
          </div>
          <p className="text-xl font-bold mt-7">Pemesanan Tiket Berhasil!</p>
          <p className="text-sm mt-4">
            Tiket perjalanan anda berhasil diproses. Selamat menikmati
            perjalanan bersama BisKita!
          </p>
        </div>
        <div className="mt-3">
          <Button name="Check Out" type="button" link="/book/done" />
        </div>
      </div>
    </Layout>
  );
}
