import React from "react";
import "../styles/global.css";
import BlobMobile from "../assets/blobMobile.svg";
import BlobDesktop from "../assets/blobDesktop.svg";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Bell from "../components/Bell";

export default function index() {
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
      <div className="h-1/3 bg-primary hidden md:block">
        <div className="container mx-auto px-4 flex flex-row">
          <div className="flex flex-col basis-1/3">
            <h1 className="text-5xl font-black text-white tracking-wider">
              #Pilihan Cerdas Bermobilitas
            </h1>
            <div className="z-[3]">
              <SearchBar name="Mau kemana hari ini?" />
            </div>
          </div>
          <div className="flex flex-col">
            <BlobDesktop />
          </div>
        </div>
      </div>
      <div className="md:container md:mx-auto md:px-4 ">
        <div className="mt-3 mx-5 md:mx-0">
          <Button name="Pesan Tiket" />
        </div>
        <div className="mt-2 mx-5 md:mx-0">
          <p className="text-primary text-sm">Seputar Biskita</p>
          <Slider />
        </div>
        <div className="mt-2 mx-5 md:mx-0">
          <p className="text-primary text-sm">Berita Biskita</p>
          <Slider />
        </div>
        <div className="h-20"></div>
      </div>
    </Layout>
  );
}
