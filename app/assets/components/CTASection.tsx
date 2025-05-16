"use client";

import React from "react";
import config from "@/config.json";
import { Mail, Phone, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="py-20 px-6"
      style={{ backgroundColor: config.styles.colors.primary, color: config.styles.colors.white }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Info + WhatsApp */}
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{config.ctaFinal.title}</h2>
            <p className="text-gray-200">{config.emailForm.formDescription}</p>

            <div className="space-y-4 text-left text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#d4af37]" />
                <span>{config.contactInfo.emailValue}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4af37]" />
                <span>{config.contactInfo.phoneValue}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#d4af37]" />
                <span>{config.contactInfo.addressValue}</span>
              </div>
            </div>

            <a
              href={config.whatsappUrls.ctaFinal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold py-3 px-6 rounded-xl shadow-md animate-pulse-slow bg-gradient-to-r from-[#fbe9e3] via-[#d4af37] to-[#fbe9e3] text-[#012b1d] transition-all duration-300 hover:scale-105"
            >
              {config.ctaFinal.buttonText}
            </a>
          </div>

          <div className="mt-10 w-full h-64 rounded-xl overflow-hidden shadow-lg border-4 border-[#d4af37]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8993456258845!2d-48.26675522512749!3d-18.891546006812945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445944b9ff9f9%3A0xc59853c25ece42f2!2sDra.%20Dayane%20Cunha%20-%20Advocacia%20Imobili%C3%A1ria%20e%20Direito%20Sucess%C3%B3rio!5e0!3m2!1spt-BR!2sbr!4v1744590731375!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white text-[#0a1f3c] rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-left">{config.emailForm.formTitle}</h3>

          <form
            name="contato"
            method="POST"
            data-netlify="true"
            action="/contato-sucesso"
            className="grid gap-6 text-left"
          >
            <input type="hidden" name="form-name" value="contato" />

            <div> 
              <label className="block mb-1 text-sm font-medium">{config.emailForm.labels.name}</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full rounded-lg p-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">{config.emailForm.labels.email}</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg p-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">{config.emailForm.labels.phone}</label>
              <input
                type="tel"
                name="telefone"
                className="w-full rounded-lg p-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">{config.emailForm.labels.message}</label>
              <textarea
                name="mensagem"
                required
                rows={4}
                className="w-full rounded-lg p-3 bg-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#d4af37] text-[#0a1f3c] font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition"
            >
              {config.emailForm.submitButtonText}
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            background-position: 0% 50%;
          }
          50% {
            transform: scale(1.05);
            background-position: 100% 50%;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}
