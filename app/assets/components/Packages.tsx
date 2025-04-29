"use client";

import React from "react";
import { motion } from "framer-motion";
import config from "@/config.json";

export default function Packages() {
    return (
        <section id="pacotes" className="py-16 px-6 bg-white text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Pacotes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {config.packages.map((pacote, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
                            initial={config.animations.packageItem.initial}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * config.animations.packageItem.delayFactor,
                                duration: config.animations.packageItem.transitionDuration
                            }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold mb-2">Pacote {pacote.name}</h3>
                            <p className="font-semibold mb-4" style={{ color: config.styles.colors.primary }}>
                                {pacote.price}
                            </p>
                            <p className="text-gray-700 mb-4">{pacote.description}</p>
                            <a
                                href={config.whatsappUrls.package.replace("{packageName}", pacote.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto py-2 px-4 rounded-xl inline-block"
                                style={{ backgroundColor: config.styles.colors.primary, color: config.styles.colors.white }}
                            >
                                Solicitar este plano
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}