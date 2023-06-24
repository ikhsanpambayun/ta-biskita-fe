import React from "react";
import Layout from "../components/Layout";
import Arrow from "../components/Arrow";
import ExButton from "../components/ExButton";
import Figure from "../assets/figure.svg";

export default function bantuan() {
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
          Bantuan
        </p>
        <div className="flex flex-col gap-3 mt-10">
          <Figure />
          <p className="text-sm text-center mt-4">
            Butuh bantuan lebih lanjut? Silahkan menghubungi kontak kami di
            bawah ini
          </p>
          <ExButton
            name="Kontak Melalui WhatsApp"
            link="https://api.whatsapp.com/send?phone=6287870621004"
          />
        </div>
      </div>
    </Layout>
  );
}
