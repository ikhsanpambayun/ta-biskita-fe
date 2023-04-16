import React from "react";
import QRTicket from "../../assets/qrTicket.svg";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

export default function checkin() {
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5 text-primary">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold mb-2 mt-2 md:mt-6">Pesan Tiket</p>
        <div className="flex flex-col mx-auto max-w-sm text-center">
          <QRTicket />
          <p className="text-sm font-semibold mt-4">
            Pindai QR Code ini pada mesin TOB BisKita
          </p>
          <p className="text-sm">
            Tiket hanya berlaku pada pilihan perjalanan yang sudah dipesan
          </p>
        </div>
        <div className="mt-3">
          <Button name="Check In" type="button" link="/book/check-out" />
        </div>
      </div>
    </Layout>
  );
}
