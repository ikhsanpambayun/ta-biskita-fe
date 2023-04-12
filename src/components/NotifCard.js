import React from "react";
import { Card } from "flowbite-react";

export default function NotifCard() {
  return (
    <div>
      <Card href="#">
        <h5 className="text-lg font-semibold text-primary">Pengalihan Rute</h5>
        <p className="text-sm font-light text-primary">
          Terdapat pengalihan rute untuk koridor K1 dari Jl. Kapten Muslihat,
          RT.01/RW.01, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat.
        </p>
        <div className="flex gap-1">
          <p className="text-sm font-light text-primary">19.00</p>
          <p className="text-sm font-light text-primary">•</p>
          <p className="text-sm font-light text-primary">4 Mar 23</p>
        </div>
      </Card>
    </div>
  );
}
