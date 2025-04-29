"use client";

import React from "react";
import { motion } from "framer-motion";
import config from "@/config.json";

export default function ClientProfileSection() {
  return (
    <section className="py-20 px-6 bg-[#fdfcfa] text-[#0a1f3c]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Atuação jurídica para situações reais</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A Dra. Dayane Cunha oferece apoio jurídico completo e humanizado em questões
          patrimoniais, imobiliárias e sucessórias. Veja algumas situações em que sua atuação pode ser essencial:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {config.peopleHelped.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[#0a1f3c] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
