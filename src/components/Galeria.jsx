import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import FOTO1 from "../img/FOTO1.jpeg";
import FOTO2 from "../img/FOTO2.jpeg";
import FOTO3 from "../img/FOTO3.jpeg";
import FOTO4 from "../img/FOTO4.jpeg";
import FOTO5 from "../img/FOTO5.jpeg";
import FOTO6 from "../img/FOTO6.jpeg";
import FOTO7 from "../img/FOTO7.jpeg";
import FOTO8 from "../img/FOTO8.jpeg";
import FOTO9 from "../img/FOTO9.jpeg";
import FOTO10 from "../img/FOTO10.jpeg";

export default function Galeria() {
  const fotos = [
    {
      imagen: FOTO1,
      titulo: "Experiencias inmersivas de aprendizaje",
    },
    {
      imagen: FOTO2,
      titulo: "Entrenamiento conductual con simulación",
    },
    {
      imagen: FOTO3,
      titulo: "Simulaciones de respuesta y liderazgo",
    },
    {
      imagen: FOTO4,
      titulo: "Análisis estratégico con drones",
    },
    {
      imagen: FOTO5,
      titulo: "Formación experiencial en seguridad vial",
    },
    {
      imagen: FOTO6,
      titulo: "Capacitaciones de alto impacto",
    },
    {
      imagen: FOTO7,
      titulo: "Inspección operacional con drones",
    },
    {
      imagen: FOTO8,
      titulo: "Fortalecimiento de brigadas empresariales",
    },
    {
      imagen: FOTO9,
      titulo: "Intervención en seguridad vial operacional",
    },
    {
      imagen: FOTO10,
      titulo: "Simulación inmersiva con realidad virtual",
    },
  ];

  return (
    <section className="py-28 bg-light px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TITULOS */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-bold uppercase tracking-wide">
            Experiencias SSTrategic
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mt-3">
            Vivimos la prevención en campo
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Más que capacitaciones, desarrollamos experiencias de alto impacto
            orientadas a fortalecer la cultura preventiva y la respuesta
            operacional.
          </p>
        </div>

        {/* CARRUSEL */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {fotos.map((foto, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl">

                {/* Imagen */}
                <img
                  src={foto.imagen}
                  alt={foto.titulo}
                  className="h-[490px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Texto */}
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white text-2xl font-bold">
                    {foto.titulo}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}