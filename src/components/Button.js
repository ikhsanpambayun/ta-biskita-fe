import React from "react";
import { Link } from "gatsby";

export default function Button(props) {
  return (
    <Link to={props.link}>
      <button
        type={props.type}
        className="w-full py-3 text-white bg-primary hover:bg-primary-dark active:bg-primary-light focus:outline-none focus:ring focus:ring-primary-light rounded-lg focus:outline-none"
      >
        <p className="text-sm font-semibold tracking-wider">{props.name}</p>
      </button>
    </Link>
  );
}
