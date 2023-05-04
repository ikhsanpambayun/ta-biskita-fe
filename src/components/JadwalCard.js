import React from "react";
import Bus from "../assets/bus.svg";
import { Card } from "flowbite-react";

export default function JadwalCard(props) {
  const style = {
    background: props.color,
  };

  return (
    <div className="w-full md:max-w-[25%] md:p-2">
      <Card>
        <div className="flex">
          <Bus />
          <h5 className="text-primary text-base font-semibold ml-2">Bus 001</h5>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-sm text-primary">&#x25cf; Terminal Bubulak</p>
            <p className="text-sm text-primary">
              {new Date(props.timeFrom).toTimeString().slice(0, 5)}
            </p>
          </div>
          <div className="h-3 bg-primary w-[1px] ml-[3px] -mb-1"></div>
          <div className="flex justify-between">
            <p className="text-sm text-primary">&#x25cf; Terminal Bubulak</p>
            <p className="text-sm text-primary">
              {new Date(props.timeDest).toTimeString().slice(0, 5)}
            </p>
          </div>
        </div>
        <div className="h-2 rounded" style={style}></div>
      </Card>
    </div>
  );
}
