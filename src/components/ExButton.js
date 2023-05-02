import React from "react";

export default function ExButton(props) {
  return (
    <a href={props.link}>
      <button
        type={props.type}
        className="w-full py-3 text-white bg-primary hover:bg-primary-dark active:bg-primary-light focus:outline-none focus:ring focus:ring-primary-light rounded-lg focus:outline-none"
      >
        <p className="text-sm font-semibold tracking-wider">{props.name}</p>
      </button>
    </a>
  );
}
