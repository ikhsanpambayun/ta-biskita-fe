import React from "react";
import { useEffect, useState } from "react";
import BlobMobile from "../assets/blobMobile.svg";
import BlobDesktop from "../assets/blobDesktop.svg";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Bell from "../components/Bell";
import ExButton from "../components/ExButton";
import Jadwal from "../components/Jadwal";
import Figure from "../assets/figure.svg";

export default function Index() {
  const [berita, setBerita] = useState(0);
  const fetchBerita = async () => {
    const response = await fetch("https://35.198.234.2/api/v1/berita-all/");
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

  const seputar = [
    {
      cover: "https://i.ibb.co/cDn3Szh/biskita.jpg",
      judul: "judul",
      id: 1,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-wrap h-48 bg-primary z-[0] md:hidden">
        <div className="absolute top-0 right-0 w-auto z-[1]">
          <BlobMobile />
        </div>
        <div className="flex justify-between self-center w-screen z-[3] mx-5 mt-[50px]">
          <h1 className="basis-2/3 text-2xl font-semibold text-white tracking-wider">
            #Pilihan Cerdas Bermobilitas
          </h1>
          <Bell />
        </div>
        <div className="w-screen z-[3] mx-5">
          <SearchBar name="Mau kemana hari ini?" />
        </div>
      </div>
      <div className="bg-primary hidden md:block py-14 lg:py-24">
        <div className="container flex flex-row mx-auto justify-between">
          <div className="flex flex-col basis-2/3 lg:basis-1/3 my-auto">
            <h1 className="text-5xl font-extrabold text-white mb-5">
              #Pilihan Cerdas Bermobilitas
            </h1>
            <div className="z-[3]">
              <SearchBar name="Mau kemana hari ini?" />
            </div>
          </div>
          <div dir="rtl" className="sm:max-lg:hidden">
            <div className="absolute top-20 start-0 xl:top-7">
              <BlobDesktop />
            </div>
          </div>
        </div>
      </div>
      <div className="md:container md:mx-auto mb-25">
        <div className="mt-3 md:mt-14 mx-5 md:mx-0">
          <Button name="Pesan Tiket" type="button" link="/book" />
        </div>
        <div className="hidden md:block mt-3 md:mt-10">
          <Jadwal />
        </div>
        <div className="flex flex-wrap m-auto md:justify-between mt-1 md:mt-10 mx-5 md:mx-0">
          <div className="md:w-2/5 w-full">
            <p className="text-primary text-sm">Seputar Biskita</p>
            {seputar && <Slider raw={seputar} type="seputar" />}
          </div>
          <div className="md:w-2/5 w-full mt-1">
            <p className="text-primary text-sm">Berita Biskita</p>
            {berita && <Slider raw={berita} type="berita" />}
          </div>
        </div>
      </div>
      <div className="hidden md:block h-72 bg-primary mb-28">
        <div className="container flex mx-auto justify-between mt-10">
          <div className="w-2/5 mt-20">
            <p className="text-white text-xl text-right mb-2">
              Butuh bantuan lebih lanjut? Silahkan menghubungi kontak kami di
              bawah ini
            </p>
            <ExButton
              name="Kontak Melalui WhatsApp"
              link="https://www.instagram.com/rheznandyae/"
            />
          </div>
          <div className="w-2/5 mt-10">
            <Figure />
          </div>
        </div>
      </div>
    </Layout>
  );
}
