"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import config from "@/config.json";
import {
  Briefcase,
  FileText,
  Home,
  ClipboardCheck,
  Building,
  ShieldCheck
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
};

export default function Services() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("imobiliario");

  const filteredServices = (config.servicesDetails as { icon: keyof typeof iconMap; title: string; description: string; bullets: string[] }[]).filter((service) =>
    activeTab === "imobiliario"
      ? service.title !== "Inventário e Partilha de Bens" &&
        service.title !== "Testamentos e Planejamento Sucessório" &&
        service.title !== "Defesa dos Herdeiros e Legatários"
      : service.title === "Inventário e Partilha de Bens" ||
        service.title === "Testamentos e Planejamento Sucessório" ||
        service.title === "Defesa dos Herdeiros e Legatários"
  );

  const ServiceCard = ({ servico, index }: { servico: { icon: keyof typeof iconMap; title: string; description: string; bullets: string[] }; index: number }) => (
    <motion.div
      key={index}
      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-start h-auto"
      initial={config.animations.serviceItem.initial}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * config.animations.serviceItem.delayFactor,
        duration: config.animations.serviceItem.transitionDuration
      }}
      viewport={{ once: true }}
    >
      <div className="mb-4">{iconMap[servico.icon]}</div>
      <h3 className="text-lg font-bold text-[#0a1f3c] mb-2">{servico.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{servico.description}</p>
      <ul className="text-sm text-gray-800 space-y-2">
        {servico.bullets.map((item, i) => (
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
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0a1f3c]">
          Áreas de Atuação
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {["imobiliario", "sucessorio"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              animate={{
                scale: activeTab === tab ? 1 : [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className={`relative px-6 py-3 rounded-full font-semibold border overflow-hidden transition-all ${
                activeTab === tab
                  ? "bg-[#d4af37] text-white border-[#d4af37]"
                  : "bg-white text-[#0a1f3c] border-gray-300 hover:border-[#d4af37] animate-gradient-move"
              }`}
            >
              <span className="relative z-10">
                {tab === "imobiliario" ? "Direito Imobiliário" : "Direito Sucessório"}
              </span>
              {activeTab !== tab && (
                <div className="absolute inset-0 opacity-10 animate-gradient-move z-0 rounded-full" />
              )}
            </motion.button>
          ))}
        </div>

        <style jsx global>{`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }

          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradientMove 2s linear infinite;
          }
        `}</style>
        
        {isMobile ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            className="pb-8"
          >
            {filteredServices.map((servico, index) => (
              <SwiperSlide key={index}>
                <ServiceCard servico={servico} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((servico, index) => (
              <ServiceCard servico={servico} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
