import React from "react";
import { Card } from "flowbite-react";
import { Link } from "gatsby";

export default function KoridorCard(props) {
  const style = {
    background: props.color,
  };

  return (
    <div className="w-full xl:max-w-[25%] lg:max-w-[30%] md:max-w-[40%] md:p-2">
      <Link
        to={"/jadwal/detail/"}
        state={{ name: props.name, color: props.color, id: props.id }}
      >
        <Card>
          <h5 className="text-primary text-base font-semibold">{props.name}</h5>
          <div className="md:gap-1">
            <p className="text-sm text-primary">• {props.from}</p>
            <p className="text-sm text-primary mt-0 pt-0">• {props.dest}</p>
          </div>
          <div className="h-2 rounded" style={style}></div>
        </Card>
      </Link>
    </div>
  );
}
