import React from "react";
import Layout from "../components/Layout";
import Arrow from "../components/Arrow";
import KoridorCard from "../components/KoridorCard";

export default function jadwalKoridor() {
  return (
    <div>
      <Layout>
        <Arrow />
        <h1>Jadwal Biskita</h1>
        <p>Pilih Koridor</p>
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
      </Layout>
    </div>
  );
}
