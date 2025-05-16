import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dayane Cunha Advocacia | Direito Imobiliário e Sucessório",
  description:
    "Atendimento jurídico estratégico e humanizado em Direito Imobiliário e Sucessório. Regularização de imóveis, inventários, testamentos e mais. Escritório com atuação nacional.",
  keywords: [
    "advogada",
    "advocacia imobiliária",
    "direito sucessório",
    "inventário",
    "testamento",
    "regularização de imóvel",
    "herança",
    "escritório jurídico",
    "advogado especializado",
    "Dayane Cunha"
  ],
  authors: [{ name: "Dayane Cunha Sociedade Individual de Advocacia" }],
  creator: "Dayane Cunha",
  metadataBase: new URL("https://dayanecunha.adv.br"),
  openGraph: {
    title: "Dayane Cunha Advocacia",
    description:
      "Especialista em Direito Imobiliário e Sucessório. Atendimento estratégico, seguro e humano.",
    url: "https://dayanecunha.adv.br",
    siteName: "Dayane Cunha Advocacia",
    images: [
      {
        url: "/banner-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dayane Cunha Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayane Cunha Advocacia",
    description:
      "Atuação jurídica especializada em Direito Imobiliário e Sucessório. Atendimento em todo o Brasil.",
    images: ["/banner-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
