import React from "react";
import Layout from "../components/Layout";
import Arrow from "../components/Arrow";
import NotifCard from "../components/NotifCard";

export default function notif() {
  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
          Notifikasi
        </p>
        <div className="flex flex-col gap-2">
          <NotifCard />
          <NotifCard />
          <NotifCard />
        </div>
      </div>
    </Layout>
  );
}
