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
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
      </div>
    </div>
  );
}
