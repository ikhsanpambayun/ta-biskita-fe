import React from "react";
import { TextInput, Label, Button } from "flowbite-react";

export default function JadwalForm() {
  return (
    <div>
      <form>
        <div className="mb-2 block">
          <Label htmlFor="koridor" value="Koridor" />
        </div>
        <TextInput
          id="koridor"
          type="text"
          placeholder="Pilih Koridor"
          sizing="md"
        />
        <div className="mb-2 block">
          <Label htmlFor="halte" value="Halte" />
        </div>
        <TextInput
          id="halte"
          type="text"
          placeholder="Pilih Koridor"
          sizing="md"
        />
        <div className="flex">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="jam_awal" value="Jam Awal" />
            </div>
            <input id="jam_awal" type="time"></input>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="jam_akhir" value="Jam Akhir" />
            </div>
            <input id="jam_akhir" type="time"></input>
          </div>
        </div>
        <Button type="submit">Cari Jadwal</Button>
      </form>
    </div>
  );
}
