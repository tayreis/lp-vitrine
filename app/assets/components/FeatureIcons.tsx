import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Building2,
  Eye,
} from "lucide-react";
import config from "@/config.json";

const iconMap = {
  ShieldCheck: <ShieldCheck size={32} className="text-[#0a1f3c]" />,
  UserCheck: <UserCheck size={32} className="text-[#0a1f3c]" />,
  Building2: <Building2 size={32} className="text-[#0a1f3c]" />,
  Eye: <Eye size={32} className="text-[#0a1f3c]" />,
} as Record<string, React.ReactNode>;

export default function FeatureIcons() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {config.features.items.map((feat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{iconMap[feat.icon]}</div>
              <h3 className="font-bold text-lg mb-2 text-[#0a1f3c]">{feat.title}</h3>
              <p className="text-sm text-[#0a1f3c]/80">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
