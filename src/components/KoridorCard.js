import React from "react";
import { Card } from "flowbite-react";

export default function KoridorCard() {
  return (
    <div>
      <Card href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          K1B
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Terminal Bubulak
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Bantarjati
        </p>
      </Card>
    </div>
  );
}
