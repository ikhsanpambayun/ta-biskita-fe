import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "gatsby";

export default function Slider(data) {
  const beritas = data.raw;
  const type = data.type;

  return (
    <div className="container h-56 sm:h-72 md:h-52 lg:h-64 xl:h-80">
      {type === "berita" && (
        <Carousel>
          {beritas.map((berita, idx) => (
            <Link to={"/berita/"} state={{ id: berita.id }} key={idx}>
              <img
                src={berita.cover}
                alt={berita.judul}
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </Link>
          ))}
        </Carousel>
      )}
      {type === "seputar" && (
        <Carousel>
          {beritas.map((berita, idx) => (
            <a
              href="https://bogor-kita.com/biskita-transpakuan-berbayar-rp4-000-mulai-awal-mei-2023/"
              key={idx}
            >
              <img
                src={berita.cover}
                alt={berita.judul}
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </a>
          ))}
        </Carousel>
      )}
    </div>
  );
}
