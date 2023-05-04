import React from "react";
import KoridorCard from "../components/KoridorCard";

export default function Jadwal() {
  return (
    <div>
      <p className="text-2xl font-semibold text-primary mb-2 mt-2 md:mt-6">
        Jadwal Biskita
      </p>
      <p className="text-primary text-sm mb-2 md:mb-0">Pilih Koridor</p>
      <div className="flex flex-wrap gap-2">
        <KoridorCard
          name="K1B"
          color="#C24B4B"
          from="Terminal Bubulak"
          dest="Cidangiang"
          id="1"
        />
        <KoridorCard
          name="K2B"
          color="#E19DD6"
          from="Terminal Bubulak via Cidangiang"
          dest="Ciawi"
          id="2"
        />
        <KoridorCard
          name="K5B"
          color="#E08F44"
          from="Ciparigi"
          dest="Stasiun Bogor"
          id="3"
        />
        <KoridorCard
          name="K6B"
          color="#448CE0"
          from="Parung Banteng"
          dest="Air Mancur"
          id="4"
        />
      </div>
    </div>
  );
}
