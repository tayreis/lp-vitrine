"use client";

import React from "react";
import Image from "next/image";

export default function AboutPerson() {
  return (
    <section id="aboutPerson" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-[#0a1f3c]">
          <h2 className="text-3xl font-bold mb-4">Sobre a Dra. Dayane Cunha</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Advogada inscrita na OAB/MG 227.691 e sócia-proprietária do escritório Dayane Cunha Sociedade Individual de Advocacia, com forte atuação nas áreas de Direito Imobiliário e Sucessório.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ao longo da sua formação e experiência, a Dra. Dayane acompanhou de perto as dificuldades enfrentadas por famílias e proprietários de imóveis. Isso a motivou a oferecer um atendimento técnico, claro e empático, focado na segurança jurídica e prevenção de litígios.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Atua em todo o Brasil, com atendimento humanizado, consultivo e contencioso, prestando assessoria personalizada em inventários, testamentos, regularização de imóveis e negociações patrimoniais.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#012b1d] to-[#014d34] rounded-full overflow-hidden flex items-center justify-center shadow-[inset_0_6px_12px_rgba(0,0,0,0.4),0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300">
            <Image
              src="/foto.png"
              alt="Dra. Dayane Cunha"
              width={500}
              height={500}
              className="object-contain w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
