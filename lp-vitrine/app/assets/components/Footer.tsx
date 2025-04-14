"use client";

import React from "react";
import config from "@/config.json";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center text-sm py-6 text-gray-600">
            © {config.year} {config.appName} · {config.contactEmail} · CNPJ: {config.cnpj}
        </footer>
    )
}