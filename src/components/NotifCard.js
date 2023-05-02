import React from "react";
import { Card } from "flowbite-react";

export default function NotifCard(props) {
  return (
    <div>
      <Card href="#">
        <h5 className="text-lg font-semibold text-primary">{props.title}</h5>
        <p className="text-sm font-light text-primary">{props.desc}</p>
        <div className="flex gap-1">
          <p className="text-sm font-light text-primary">
            {new Date(props.timestamp).getHours()}:
            {new Date(props.timestamp).getMinutes()}
          </p>
          <p className="text-sm font-light text-primary">•</p>
          <p className="text-sm font-light text-primary">
            {new Date(props.timestamp)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}
          </p>
        </div>
      </Card>
    </div>
  );
}
