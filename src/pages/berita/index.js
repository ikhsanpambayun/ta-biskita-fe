import React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Arrow from "../../components/Arrow";

export default function Index({ location }) {
  const { state = {} } = location;
  const [berita, setBerita] = useState(0);
  const fetchBerita = async () => {
    const response = await fetch(
      "https://34.142.210.188/api/v1/berita/" + state.id
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchBerita()
      .then((res) => {
        setBerita(res);
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
          Berita Biskita
        </p>
        <div className="flex flex-col gap-2 mb-28">
          {berita && (
            <div>
              <img src={berita.cover} alt="gambar" className="rounded-lg"></img>
              <p className="text-primary text-xl font-medium mt-4">
                {berita.judul}
              </p>
              <p className="text-primary text-sm font-normal mt-2">
                {berita.author} -{" "}
                {new Date(berita.timestamp)
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}{" "}
                | {new Date(berita.timestamp).toTimeString().slice(0, 5)}
              </p>
              <p className="text-primary text-sm font-normal mt-2">
                {berita.isi}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
