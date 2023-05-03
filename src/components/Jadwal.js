import React from "react";
import KoridorCard from "../components/KoridorCard";

export default function Jadwal() {
  return (
    <div>
      <p className="text-2xl font-semibold text-primary my-2 md:my-0">
        Jadwal Biskita
      </p>
      <p className="text-primary text-sm mb-2 md:mb-0">Pilih Koridor</p>
      <div className="flex flex-wrap gap-2">
        <KoridorCard
          name="K1B"
          color="#C24B4B"
          from="Terminal Bubulak"
          dest="Cidangiang"
        />
        <KoridorCard
          name="K6B"
          color="#448CE0"
          from="Parung Banteng"
          dest="Air Mancur"
        />
        <KoridorCard
          name="K5B"
          color="#E08F44"
          from="Ciparigi"
          dest="Stasiun Bogor"
        />
        <KoridorCard
          name="K2B"
          color="#E19DD6"
          from="Terminal Bubulak via Cidangiang"
          dest="Ciawi"
        />
        <KoridorCard
          name="K7B"
          color="#CDEEB2"
          from="Cidangiang"
          dest="Sentul City"
        />
      </div>
    </div>
  );
}
