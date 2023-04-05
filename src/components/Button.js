import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      className="w-full py-3 text-white bg-primary hover:bg-primary-dark active:bg-primary-light focus:outline-none focus:ring focus:ring-primary-light rounded-lg focus:outline-none"
    >
      <p className="text-sm font-semibold tracking-wider">{props.name}</p>
    </button>
  );
}
