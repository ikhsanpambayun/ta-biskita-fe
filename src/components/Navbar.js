import React from "react";
import { Link } from "gatsby";

const activeStyle = {
  color: "#F6B646",
  stroke: "#F6B646",
  background: "#F2F2F2",
};

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? {
        className:
          "flex flex-col items-center px-4 py-2 rounded-lg text-secondary stroke-secondary bg-[#F2F2F2]",
      }
    : {};
};

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 bg-white w-full flex space-x-5 justify-center rounded-t-xl shadow-2lg md:hidden">
      <div className="basis-1/5 p-2">
        <Link
          to="/"
          getProps={isActive}
          className="flex flex-col items-center px-4 py-2 rounded-lg text-primary"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs mt-1">Beranda</span>
        </Link>
      </div>
      <div className="basis-1/5 p-2">
        <Link
          to="/jadwal"
          activeStyle={activeStyle}
          partiallyActive={true}
          className="flex flex-col items-center px-4 py-2 rounded-lg text-primary"
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            {" "}
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
            <line x1="16" y1="2" x2="16" y2="6" />{" "}
            <line x1="8" y1="2" x2="8" y2="6" />{" "}
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-xs mt-1">Jadwal</span>
        </Link>
      </div>
      <div className="basis-1/5 p-2">
        <Link
          to="/bantuan"
          activeStyle={activeStyle}
          partiallyActive={true}
          className="flex flex-col items-center px-4 py-2 rounded-lg text-primary"
        >
          <svg
            className="h-8 w-8"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <rect x="4" y="13" rx="2" width="4" height="6" />{" "}
            <rect x="16" y="13" rx="2" width="4" height="6" />{" "}
            <path d="M4 15v-3a8 8 0 0 1 16 0v3" />{" "}
            <path d="M18 19a6 3 0 0 1 -6 3" />
          </svg>
          <span className="text-xs mt-1">Bantuan</span>
        </Link>
      </div>
    </nav>
  );
}
