import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkflowSection } from "@/components/WorkflowSection";
import { DecreeSection } from "@/components/DecreeSection";
import { Features } from "@/components/Features";
import { FaqSection } from "@/components/FaqSection";
import { FAQ_DATA } from "@/data/faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Dados estruturados Schema.org para o Google (Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Integridade 360",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "LegalTech / RegTech Compliance",
        "softwareVersion": "2026.1",
        "description":
          "Plataforma de gestão de Programa de Integridade e Compliance para contratações públicas e privadas, em conformidade com o Decreto Federal 12.304/2026 e a Lei 14.133/2021.",
        "featureList": [
          "Emissão automatizada de Dossiês de CNPJ e Certidões Negativas",
          "Varredura em tempo real em CEIS, CNEP, CEPIM e Cadastro de Inidôneos do TCU",
          "Mapeamento e comprovação dos 17 parâmetros do Decreto Federal nº 12.304/2026",
          "Due Diligence e homologação de risco de fornecedores e terceiros",
          "Gerador de declarações jurídicas oficiais para editais de licitação",
        ],
        "isBasedOn": [
          "Lei Federal nº 14.133/2021 (Art. 25, § 4º)",
          "Decreto Federal nº 12.304/2026",
          "Diretrizes Normativas da Controladoria-Geral da União (CGU)",
        ],
        "knowsAbout": [
          "Decreto Federal nº 12.304/2026",
          "Lei Federal nº 14.133/2021 (Nova Lei de Licitações)",
          "Programa de Integridade Corporativa",
          "Compliance em Licitações Públicas",
          "Cadastro Nacional de Empresas Inidôneas e Suspensas (CEIS)",
          "Cadastro Nacional de Empresas Punidas (CNEP)",
          "Tribunal de Contas da União (TCU)",
          "Controladoria-Geral da União (CGU)",
          "Due Diligence de Terceiros e Fornecedores",
          "Dossiê CNPJ e Certidões Negativas",
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock",
        },
      },
      {
        "@type": "Organization",
        "name": "Integridade 360 Tecnologia e Compliance Ltda.",
        "alternateName": "Integridade 360",
        "url": "https://www.integridade360.com.br",
        "logo": "https://www.integridade360.com.br/favicon.ico",
        "knowsAbout": [
          "Compliance Governamental",
          "Programas de Integridade",
          "Licitações Públicas de Grande Vulto",
          "Prevenção à Corrupção Empresarial",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "comercial",
          "email": "contato@integridade360.com.br",
          "areaServed": "BR",
          "availableLanguage": "Portuguese",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Injeção de Dados Estruturados Schema.org para o Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <WorkflowSection />
        <DecreeSection />
        <Features />
        <FaqSection />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
