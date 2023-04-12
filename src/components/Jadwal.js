import React from "react";
import KoridorCard from "../components/KoridorCard";

export default function Jadwal() {
  return (
    <div>
      <p className="text-2xl font-semibold text-primary">Jadwal Biskita</p>
      <p className="text-primary text-sm">Pilih Koridor</p>
      <div className="flex">
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
        <KoridorCard />
      </div>
    </div>
  );
}
