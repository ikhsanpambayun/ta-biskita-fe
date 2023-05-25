import * as React from "react";
import NotFound from "../assets/notFound.svg";

export default function Index() {
  return (
    <div className="flex flex-col items-center mt-36">
      <NotFound />
      <p className="text-primary text-center">
        Halaman yang anda tuju tidak ditemukan.
      </p>
      <p className="text-primary text-center">
        Silakan periksa URL atau kembali halaman sebelumnya.
      </p>
    </div>
  );
}
