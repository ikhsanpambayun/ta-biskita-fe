import React from "react";
import { Carousel } from "flowbite-react";

export default function Slider(data) {
  const beritas = data.raw;

  return (
    <div className="container h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {beritas.map((berita) => (
          <img key={berita.id} src={berita.cover} alt={berita.judul} />
        ))}
      </Carousel>
    </div>
  );
}
