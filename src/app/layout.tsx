import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integridade360.com.br"),
  title: {
    default: "Integridade 360 | Programa de Integridade e Compliance para Licitações",
    template: "%s | Integridade 360",
  },
  description:
    "Plataforma completa de Programa de Integridade em conformidade com o Decreto Federal nº 12.304/2026 e Lei 14.133/2021. Emita dossiês de CNPJ, audite fornecedores, mitigue riscos de inabilitação e vença licitações públicas.",
  keywords: [
    "programa de integridade",
    "decreto 12304",
    "decreto federal 12.304/2026",
    "compliance licitações",
    "lei 14133 integridade",
    "dossiê cnpj",
    "auditoria de fornecedores",
    "due diligence fornecedores",
    "certidão negativa licitação",
    "consulta ceis cnep tcu",
    "gestão de compliance",
  ],
  authors: [{ name: "Integridade 360" }],
  creator: "Integridade 360",
  publisher: "Integridade 360 Tecnologia e Compliance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.integridade360.com.br",
    title: "Integridade 360 | Compliance e Integridade para Vencer Licitações",
    description:
      "Atenda aos 17 parâmetros do Decreto 12.304/2026. Emita dossiês de CNPJ automáticos, varredura em CEIS/CNEP/TCU e due diligence de fornecedores.",
    siteName: "Integridade 360",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integridade 360 | Programa de Integridade e Compliance",
    description:
      "Plataforma para empresas vencerem licitações com conformidade comprovada com o Decreto 12.304/2026.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
