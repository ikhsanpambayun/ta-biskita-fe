import React from "react";
import Layout from "../components/Layout";
import Arrow from "../components/Arrow";
import JadwalForm from "../components/JadwalForm";

export default function jadwal() {
  return (
    <div>
      <Layout>
        <Arrow />
        <h1>Jadwal</h1>
        <JadwalForm />
      </Layout>
    </div>
  );
}
