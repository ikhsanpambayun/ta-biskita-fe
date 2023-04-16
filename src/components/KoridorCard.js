import React from "react";
import { Card } from "flowbite-react";

export default function KoridorCard() {
  return (
    <div className="w-full md:max-w-[25%] md:p-2">
      <Card href="#">
        <h5 className="text-primary text-base font-semibold">K1B</h5>
        <div className="md:gap-1">
          <p className="text-sm text-primary">• Terminal Bubulak</p>
          <p className="text-sm text-primary mt-0 pt-0">• Bantarjati</p>
        </div>
        <div className="bg-primary h-2 rounded"></div>
      </Card>
    </div>
  );
}
