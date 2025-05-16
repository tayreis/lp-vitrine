"use client";

import React from "react";
import config from "@/config.json";
import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

// Gera cor de fundo aleatória suave baseada em paleta
const colors = ["#fbe9e3", "#d4af37", "#012b1d"];

function getInitial(name: string) {
  const cleanedName = name.replace("— ", "").trim();
  return cleanedName.charAt(0).toUpperCase();
}

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 text-center overflow-hidden bg-[#012b1d] text-white"
    >

      {/* Gradiente dourado no fundo */}
      <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tr from-[#d4af37]/25 via-transparent to-[#d4af37]/50 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Depoimentos</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto bg-[white] bg-clip-text text-transparent">
          Reconhecida pela excelência no atendimento jurídico, temos orgulho em apresentar os depoimentos de clientes que confiaram em nosso trabalho e vivenciaram nossa atuação ética, humana e segura.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-10"
        >
          {config.testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white text-[#0a1f3c] rounded-xl p-6 shadow-md text-left max-w-xl mx-auto h-full flex flex-col min-h-[280px]">
                <Image
                  src="/google-icon.svg"
                  alt="Google Logo"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />

                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 mb-6 leading-relaxed flex-grow">
                  {testimonial.text}
                </p>

                {/* Nome e imagem de perfil */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    {getInitial(testimonial.name)}
                  </div>
                  <p className="text-sm font-semibold text-[#0a1f3c]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="mt-4 text-lg max-w-2xl mx-auto bg-[white] bg-clip-text text-transparent">
          Aqui, cada cliente é ouvido com atenção e cuidado. Nosso compromisso vai além da técnica jurídica: entregamos um atendimento ético, humano e estratégico, para que você se sinta seguro e amparado em todas as etapas do seu processo.
        </p>
      </div>
    </section>
  );
}
