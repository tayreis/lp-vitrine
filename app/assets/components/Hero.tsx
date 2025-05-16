"use client";

import React from "react";
import { motion } from "framer-motion";
import config from "@/config.json";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative py-24 px-6 text-center overflow-hidden"
      style={{ backgroundColor: config.styles.colors.primary }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Banner institucional do escritório Dayane Cunha Advocacia com foco em Direito Imobiliário e Sucessório"
          layout="fill"
          priority
          className="opacity-60 object-cover"
        />
      </div>

      {/* Gradiente dourado e verde sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#012b1d]/80 via-transparent to-[#d4af37]/30 z-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#fbe9e3] via-white to-[#d4af37] bg-clip-text text-transparent"
          initial={config.animations.heroTitle.initial}
          animate={config.animations.heroTitle.animate}
          transition={config.animations.heroTitle.transition}
        >
          {config.hero.title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 bg-gradient-to-r from-[#fbe9e3] via-[#fff] to-[#fbe9e3] bg-clip-text text-transparent"
          initial={config.animations.heroSubtitle.initial}
          animate={config.animations.heroSubtitle.animate}
          transition={config.animations.heroSubtitle.transition}
        >
          {config.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={config.animations.heroButtons.initial}
          animate={config.animations.heroButtons.animate}
          transition={config.animations.heroButtons.transition}
        >
          <a
            href={config.whatsappUrls.heroProposal}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold py-2 px-6 rounded-2xl shadow-md inline-block transition-transform duration-200 transform hover:scale-105 active:scale-98 bg-[#fbe9e3] text-[#012b1d] border border-[#fbe9e3] hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37]"
          >
            {config.heroButtons.proposalText}
          </a>
          <a
            href="#servicos"
            className="py-2 px-6 rounded-2xl border text-white border-[#fbe9e3] hover:border-[#d4af37] hover:text-[#d4af37] transition duration-300"
          >
            {config.heroButtons.portfolioText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
