"use client";

import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import config from "@/config.json";

export default function Portfolio() {
  return (
    <section id="portifolio" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#0a1f3c]">{config.portfolio.title}</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Conheça os projetos que desenvolvemos com foco em identidade, impacto e resultado.
        </p>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={config.swiperBreakpoints}
        >
          {Array.from({ length: config.portfolio.projectsCount }, (_, i) => i + 1).map((i) => {
            const imgUrl = config.portfolio.projectImageUrl.replace("{projectNumber}", i.toString());

            return (
              <SwiperSlide key={i}>
                <motion.div
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all group"
                  whileHover={{ scale: 1.015 }}
                >
                  <div className="w-full h-64 relative">
                    <Image
                      src={imgUrl}
                      alt={`Projeto ${i}`}
                      fill
                      className="object-cover transition duration-300 group-hover:brightness-90"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold mb-1 text-[#0a1f3c]">Projeto {i}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {config.portfolio.projectDescription}
                    </p>
                    <a
                      href="#"
                      className="inline-block text-sm font-semibold text-[#d4af37] hover:underline transition"
                    >
                      Ver detalhes do projeto →
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
