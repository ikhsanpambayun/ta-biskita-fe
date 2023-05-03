import React from "react";
import { Card } from "flowbite-react";

export default function KoridorCard(props) {
  const style = {
    background: props.color,
  };

  return (
    <div className="w-full md:max-w-[25%] md:p-2">
      <Card href="#">
        <h5 className="text-primary text-base font-semibold">{props.name}</h5>
        <div className="md:gap-1">
          <p className="text-sm text-primary">• {props.from}</p>
          <p className="text-sm text-primary mt-0 pt-0">• {props.dest}</p>
        </div>
        <div className="h-2 rounded" style={style}></div>
      </Card>
    </div>
  );
}
