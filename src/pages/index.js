import React from "react";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Bell from "../components/Bell";

export default function index() {
  return (
    <Layout>
      <div className="flex flex-wrap h-48 bg-[#3A3270] z-[0]">
        <div className="absolute top-0 right-0 w-auto z-[1]">
          <svg
            width="367"
            height="94"
            viewBox="0 0 367 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M237.917 -403.687C299.33 -420.243 352.404 -363.29 405.826 -332.444C456.446 -303.216 525.809 -282.898 539.834 -229.359C553.852 -175.847 488.55 -132.24 472.29 -78.7304C457.52 -30.1229 488.721 31.1729 449.737 67.1397C410.845 103.021 345.252 93.9735 291.035 88.4961C246.089 83.9552 211.158 57.4538 170.963 38.9755C127.929 19.1915 76.3371 11.9629 47.652 -23.3919C15.3409 -63.2158 -10.5294 -116.206 6.1224 -164.194C22.6038 -211.69 92.7628 -220.375 128.997 -257.812C172.755 -303.023 174.928 -386.705 237.917 -403.687Z"
              fill="#F6B646"
            />
          </svg>
        </div>
        <div className="flex justify-between self-center w-screen z-[3] mx-5 mt-[50px]">
          <h1 className="basis-2/3 text-2xl font-semibold text-white">
            #Pilihan Cerdas Bermobilitas
          </h1>
          <Bell />
        </div>
        <div className="w-screen z-[3] mx-5">
          <SearchBar />
        </div>
      </div>
      <div className="mt-4 mx-5">
        <Button />
      </div>
      <div className="mt-2 mx-5">
        <p>Seputar BisKita</p>
        <Slider />
      </div>
      <div className="mt-2 mx-5">
        <p>Berita BisKita</p>
        <Slider />
      </div>
    </Layout>
  );
}
