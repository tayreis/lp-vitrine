"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import config from "@/config.json";
import Image from "next/image";

interface HeaderProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 flex items-center justify-between" >
            <Link href="#" className="text-xl font-bold" style={{ color: config.styles.colors.primary }}>
                <Image height={400} width={160} src={config.appLogo} alt="logo dayane cunha"/>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
                {config.navigation.menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="hover:underline"
                        style={{ color: config.styles.colors.primary }}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {
                menuOpen && (
                    <div className="absolute top-24 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
                        {config.navigation.menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="hover:underline"
                                onClick={() => setMenuOpen(false)}
                                style={{ color: config.styles.colors.primary }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )
            }
        </header>
    )
}