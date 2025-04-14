"use client";

import React from "react";
import { motion } from "framer-motion";
import config from "@/config.json";
import {
  Briefcase,
  FileText,
  Home,
  ClipboardCheck,
  Building,
  ShieldCheck,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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

const iconMap = {
  Briefcase: <Briefcase className="w-6 h-6 text-[#d4af37]" />,
  FileText: <FileText className="w-6 h-6 text-[#d4af37]" />,
  Home: <Home className="w-6 h-6 text-[#d4af37]" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6 text-[#d4af37]" />,
  Building: <Building className="w-6 h-6 text-[#d4af37]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
};

export default function Services() {
  const isMobile = useIsMobile();

  const ServiceCard = ({ servico, index }: any) => (
    <motion.div
      key={index}
      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-start h-auto"
      initial={config.animations.serviceItem.initial}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * config.animations.serviceItem.delayFactor,
        duration: config.animations.serviceItem.transitionDuration,
      }}
      viewport={{ once: true }}
    >
      <div className="mb-4">{iconMap[servico.icon as keyof typeof iconMap]}</div>
      <h3 className="text-lg font-bold text-[#0a1f3c] mb-2">
        {servico.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{servico.description}</p>
      <ul className="text-sm text-gray-800 space-y-2">
        {servico.bullets.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="servicos" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1f3c]">
          Nossos Serviços
        </h2>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pb-8"
          >
            {config.servicesDetails.map((servico, index) => (
              <SwiperSlide key={index}>
                <ServiceCard servico={servico} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {config.servicesDetails.map((servico, index) => (
              <ServiceCard servico={servico} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
