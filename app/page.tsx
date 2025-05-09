"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Services from "./assets/components/Services";
import CTASection from "./assets/components/CTASection";
import Footer from "./assets/components/Footer";
import Testimonials from "./assets/components/Testimonials";
import FeatureIcons from "./assets/components/FeatureIcons";
import FaqSection from "./assets/components/FaqSection";
import AboutPerson from "./assets/components/AboutPerson";

interface FormData {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSending(true);
    try {
      const response = await fetch('/api/contatos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        setFormSuccess(true);
        reset();
      } else {
        const result = await response.json();
        alert(result.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar o formulário.');
    } finally {
      setIsSending(false);
    }
  };

  return (
<div className="bg-white text-gray-900 scroll-smooth">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-24">
        <Hero />
        <FeatureIcons />
        <AboutPerson />
        <Services />
        <Testimonials />
        {/* <ClientProfileSection /> */}
        <CTASection
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isSending={isSending}
          formSuccess={formSuccess}
        />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
