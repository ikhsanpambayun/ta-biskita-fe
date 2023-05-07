import React from "react";
import { useEffect, useState } from "react";
import Bus from "../assets/bus.svg";
import { Card } from "flowbite-react";

export default function JadwalCard(props) {
  const style = {
    background: props.color,
  };

  const [halteFrom, setHalteFrom] = useState(0);
  const fetchHalteFrom = async () => {
    const response = await fetch(
      "https://35.198.234.2/api/v1/halte/" + props.from
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchHalteFrom()
      .then((res) => {
        const str = res.nama;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setHalteFrom(str2);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const [halteDest, setHalteDest] = useState(0);
  const fetchHalteDest = async () => {
    const response = await fetch(
      "https://35.198.234.2/api/v1/halte/" + props.dest
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchHalteDest()
      .then((res) => {
        const str = res.nama;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setHalteDest(str2);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="w-full md:max-w-[25%] md:p-2">
      <Card>
        <div className="flex">
          <Bus />
          <h5 className="text-primary text-base font-semibold ml-2">Bus 001</h5>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-sm text-primary">&#x25cf; {halteFrom}</p>
            <p className="text-sm text-primary">
              {new Date(props.timeFrom).toTimeString().slice(0, 5)}
            </p>
          </div>
          <div className="h-3 bg-primary w-[1px] ml-[3px] -mb-1"></div>
          <div className="flex justify-between">
            <p className="text-sm text-primary">&#x25cf; {halteDest}</p>
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
