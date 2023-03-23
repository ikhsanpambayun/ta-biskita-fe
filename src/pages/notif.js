import React from "react";
import Layout from "../components/Layout";
import Arrow from "../components/Arrow";
import NotifCard from "../components/NotifCard";

export default function notif() {
  return (
    <Layout>
      <Arrow />
      <h1>Notifikasi</h1>
      <NotifCard />
    </Layout>
  );
}
