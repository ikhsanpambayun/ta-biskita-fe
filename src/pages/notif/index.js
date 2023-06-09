import React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import NotifCard from "../../components/NotifCard";

export default function Index() {
  const [notifs, setNotifs] = useState(0);
  const fetchNotif = async () => {
    const response = await fetch(
      "https://34.142.210.188/api/v1/notifikasi-all/"
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchNotif()
      .then((res) => {
        setNotifs(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <Layout>
      <div className="md:container md:mx-auto mx-5">
        <div className="md:hidden mt-5">
          <Arrow />
        </div>
        <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
          Notifikasi
        </p>
        <div className="flex flex-col gap-2 mb-28">
          {notifs &&
            notifs.map((notif) => (
              <NotifCard
                key={notif.id}
                title={notif.judul}
                desc={notif.keterangan}
                timestamp={notif.timestamp}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}
