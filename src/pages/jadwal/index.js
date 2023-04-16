import React from "react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import Jadwal from "../../components/Jadwal";

export default function index() {
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <div className="mb-28">
          <Jadwal />
        </div>
      </div>
    </Layout>
  );
}
