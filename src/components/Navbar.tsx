"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowUpRight, Scale } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbfbfd]/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-bar institucional */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-mono py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>PADRÃO NORMATIVO: DECRETO FEDERAL Nº 12.304/2026</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">LEI Nº 14.133/2021 (ART. 25, § 4º)</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span>PORTAL DA TRANSPARÊNCIA INTEGRADO</span>
            <span>CONSULTA TCU / CGU ATIVA</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo Editorial */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-slate-900 rounded bg-slate-950 flex items-center justify-center text-white">
              <Scale className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl font-bold tracking-tight text-slate-950 leading-none">
                Integridade <span className="text-amber-700 italic font-normal">360</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-0.5">
                SISTEMA DE AUDITORIA & COMPLIANCE
              </span>
            </div>
          </Link>

          {/* Navegação Principal */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#decreto" className="hover:text-slate-950 transition-colors">
              O Decreto 12.304
            </a>
            <a href="#matriz" className="hover:text-slate-950 transition-colors">
              Matriz de Parâmetros
            </a>
            <a href="#dossie" className="hover:text-slate-950 transition-colors">
              Dossiê & Certidões
            </a>
            <a href="#faq" className="hover:text-slate-950 transition-colors">
              Legislação & FAQ
            </a>
          </nav>

          {/* CTA Comercial */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono uppercase tracking-wider font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-900 shadow-sm"
            >
              Solicitar Dossiê de Exemplo
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-700 hover:text-slate-950"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3 font-medium text-sm">
          <a
            href="#decreto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 border-b border-slate-100"
          >
            O Decreto 12.304
          </a>
          <a
            href="#matriz"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 border-b border-slate-100"
          >
            Matriz de Parâmetros
          </a>
          <a
            href="#dossie"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 border-b border-slate-100"
          >
            Dossiê & Certidões
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 border-b border-slate-100"
          >
            Legislação & FAQ
          </a>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded text-xs font-mono uppercase tracking-wider font-semibold text-white bg-slate-900"
            >
              Solicitar Dossiê de Exemplo
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
