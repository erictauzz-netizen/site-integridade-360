"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Search,
  Building2,
  Calendar,
  ExternalLink,
  Lock,
  Scale
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"certidoes" | "sancoes" | "decreto">("certidoes");

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fbfbfd] bg-grid-editorial border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Editorial */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-300 bg-white text-slate-800 text-xs font-mono mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            <span>EXIGÊNCIA NORMATIVA EM VIGOR: DECRETO 12.304/2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.12]">
            Programa de Integridade para{" "}
            <span className="font-editorial italic font-normal text-slate-800">
              vencer licitações
            </span>{" "}
            e comprovar conformidade legal
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            A infraestrutura digital para atender aos 17 parâmetros obrigatórios do Decreto Federal nº 12.304/2026, emitir dossiês de CNPJ com certidões negativas em 1 clique e mitigar riscos de inabilitação em contratos públicos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded text-xs font-mono uppercase tracking-wider font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-colors shadow-sm"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>

            <a
              href="#matriz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Consultar Matriz de Parâmetros
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              LEI 14.133/2021 ART. 25
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              INTEGRAÇÃO CEIS / CNEP / TCU
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              DOSSIÊ AUDITÁVEL EM PDF
            </span>
          </div>
        </div>

        {/* Artefato de Engenharia Real: Dossiê Interativo de CNPJ */}
        <div className="mt-14 max-w-5xl mx-auto rounded-lg border border-slate-300 bg-white shadow-sm overflow-hidden">
          {/* Topbar do Documento/Sistema */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3 font-mono text-slate-700">
              <span className="font-bold text-slate-900">DOSSIÊ TÉCNICO DE HABILITAÇÃO:</span>
              <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-800">
                CNPJ 33.000.167/0001-01
              </span>
              <span className="hidden md:inline text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                SITUAÇÃO: REGULAR E HABILITADO
              </span>
            </div>

            <div className="flex items-center gap-1 bg-white p-1 rounded border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab("certidoes")}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeTab === "certidoes"
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Certidões Negativas
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sancoes")}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeTab === "sancoes"
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Varredura de Sanções
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("decreto")}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeTab === "decreto"
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Decreto 12.304 (CGU)
              </button>
            </div>
          </div>

          {/* Conteúdo da Aba 1: Certidões */}
          {activeTab === "certidoes" && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span>RECEITA FEDERAL / PGFN</span>
                    <span className="text-emerald-700 font-bold bg-emerald-100/60 px-1.5 py-0.5 rounded">VÁLIDA</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">CND Débitos Federais</h4>
                  <p className="text-xs font-mono text-slate-600 mt-1">Cód: 4A89.912C.E882.F103</p>
                  <p className="text-xs text-slate-500 mt-2">Validade até 14/11/2026</p>
                </div>

                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span>JUSTIÇA DO TRABALHO (TST)</span>
                    <span className="text-emerald-700 font-bold bg-emerald-100/60 px-1.5 py-0.5 rounded">NEGATIVA</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">CNDT Débitos Trabalhistas</h4>
                  <p className="text-xs font-mono text-slate-600 mt-1">Nº: 18492049/2026</p>
                  <p className="text-xs text-slate-500 mt-2">Validade até 08/12/2026</p>
                </div>

                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span>CAIXA ECONÔMICA FEDERAL</span>
                    <span className="text-emerald-700 font-bold bg-emerald-100/60 px-1.5 py-0.5 rounded">REGULAR</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Certificado de Regularidade FGTS</h4>
                  <p className="text-xs font-mono text-slate-600 mt-1">CRF: 202610110940301</p>
                  <p className="text-xs text-slate-500 mt-2">Validade até 28/10/2026</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600">
                <span className="font-mono">Varredura automática executada contra APIs governamentais sem interferência manual.</span>
                <span className="text-slate-900 font-bold">Relatório pronto para inclusão em proposta de edital</span>
              </div>
            </div>
          )}

          {/* Conteúdo da Aba 2: Sanções */}
          {activeTab === "sancoes" && (
            <div className="p-6">
              <div className="divide-y divide-slate-200 border border-slate-200 rounded">
                <div className="p-3.5 flex items-center justify-between bg-slate-50 text-xs font-mono">
                  <span className="font-bold text-slate-900">BASE CONSULTADA</span>
                  <span className="font-bold text-slate-900">RESULTADO</span>
                  <span className="font-bold text-slate-900 hidden sm:inline">DATA DA CONSULTA</span>
                </div>
                <div className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900">CEIS</span> — Cadastro Nacional de Empresas Inidôneas e Suspensas
                  </div>
                  <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">NADA CONSTA</span>
                  <span className="font-mono text-slate-500 hidden sm:inline">Hoje, 09:30</span>
                </div>
                <div className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900">CNEP</span> — Cadastro Nacional de Empresas Punidas (Lei Anticorrupção)
                  </div>
                  <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">NADA CONSTA</span>
                  <span className="font-mono text-slate-500 hidden sm:inline">Hoje, 09:30</span>
                </div>
                <div className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900">TCU</span> — Cadastro de Inidôneos para Licitar (Tribunal de Contas da União)
                  </div>
                  <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">NADA CONSTA</span>
                  <span className="font-mono text-slate-500 hidden sm:inline">Hoje, 09:30</span>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo da Aba 3: Decreto 12.304 */}
          {activeTab === "decreto" && (
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 p-4 rounded border border-slate-200 bg-slate-50 text-center">
                  <span className="text-xs font-mono uppercase text-slate-500">ÍNDICE DE CONFORMIDADE CGU</span>
                  <div className="text-4xl font-black text-slate-950 mt-2">94.2%</div>
                  <span className="text-xs text-emerald-700 font-semibold mt-1 inline-block">Maturidade Alta (Nível 4)</span>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    16 de 17 parâmetros atendidos plenamente com repositório documental auditável.
                  </p>
                </div>

                <div className="w-full md:w-2/3 space-y-2 text-xs">
                  <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between">
                    <span className="font-medium text-slate-800">Comprometimento formal da alta direção</span>
                    <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                  </div>
                  <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between">
                    <span className="font-medium text-slate-800">Código de Conduta e Políticas de Integridade</span>
                    <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                  </div>
                  <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between">
                    <span className="font-medium text-slate-800">Canal de Denúncias externo com proteção ao denunciante</span>
                    <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                  </div>
                  <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between">
                    <span className="font-medium text-slate-800">Due Diligence documentada na contratação de terceiros</span>
                    <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
