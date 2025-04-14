"use client";

import React from "react";
import config from "@/config.json";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Hook para detectar mobile
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

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 text-center overflow-hidden bg-[#012b1d] text-white"
    >
      {/* Faixa rosa decorativa */}
      <div className="absolute top-0 left-0 w-[50%] h-full bg-[#fbe9e3] -skew-x-12 -translate-x-[20%] z-0 shadow-xl" />

      {/* Gradiente dourado no fundo */}
      <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-[#d4af37]/10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Depoimentos</h2>
        <p className="mb-12 text-lg max-w-2xl mx-auto bg-gradient-to-r from-[#0a1f3c] via-[#d4afaa] to-[#fbe9e3] bg-clip-text text-transparent">
          Nosso compromisso é oferecer atendimento jurídico com excelência, ética e empatia. Veja o que dizem alguns dos nossos clientes.
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
              <div className="bg-white text-[#0a1f3c] rounded-xl p-6 shadow-md text-left max-w-xl mx-auto h-full flex flex-col min-h-[260px]">
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed flex-grow">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <p className="text-sm font-semibold text-[#0a1f3c]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
