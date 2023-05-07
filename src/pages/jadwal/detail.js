import React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";
import JadwalCard from "../../components/JadwalCard";

export default function Detail({ location }) {
  const { state = {} } = location;
  const [jadwals, setJadwals] = useState(0);

  const fetchJadwal = async () => {
    const response = await fetch(
      "https://35.198.234.2/api/v1/jadwal-koridor-timestamp/?koridor_id=" +
        state.id +
        "&waktu=2023-05-02T10:03:00"
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchJadwal()
      .then((res) => {
        setJadwals(res);
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
        <div className="mb-28">
          <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
            Jadwal Biskita
          </p>
          <p className="text-primary text-sm mb-2 md:mb-0">
            Jadwal Koridor {state.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {jadwals &&
              jadwals.map((jadwal) => (
                <JadwalCard
                  key={jadwal.id}
                  from={jadwal.halte_berangkat_id}
                  dest={jadwal.halte_tujuan_id}
                  timeFrom={jadwal.jam_berangkat}
                  timeDest={jadwal.jam_tujuan}
                  color={state.color}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
