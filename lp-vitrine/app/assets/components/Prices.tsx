import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import config from "@/config.json";

export default function PricingSection() {
  return (
    <section id="pacotes" className="bg-gray-50 py-20 px-6 text-[#0a1f3c]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
        <p className="text-gray-600 mb-12 text-lg">Escolha a solução ideal para o momento do seu negócio</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.packagesPrices.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl border p-8 shadow-md hover:shadow-lg transition flex flex-col justify-between text-left ${
                plan.highlight ? "border-[#d4af37] bg-[#fefbf3]" : "border-gray-200 bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                <p className="text-2xl font-extrabold mb-4">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <Check className="text-green-600 w-4 h-4 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={config.whatsappUrls.package.replace("{packageName}", plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto text-center py-3 px-6 rounded-xl font-semibold transition text-sm no-underline ${
                  plan.highlight
                    ? "bg-[#d4af37] text-[#0a1f3c] hover:brightness-110"
                    : "bg-[#0a1f3c] text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
