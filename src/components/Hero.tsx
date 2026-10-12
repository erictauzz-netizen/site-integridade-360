"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Scale,
  RefreshCw,
  Copy,
  Check,
  Fingerprint,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

interface CompanyPreset {
  name: string;
  cnpj: string;
  status: string;
  score: string;
  cndFederal: string;
  cndt: string;
  crfFgts: string;
}

const PRESETS: CompanyPreset[] = [
  {
    name: "ENGENHARIA E CONSTRUÇÕES CIVIS LTDA",
    cnpj: "33.000.167/0001-01",
    status: "HABILITADO E REGULAR",
    score: "94.2%",
    cndFederal: "4A89.912C.E882.F103",
    cndt: "18492049/2026",
    crfFgts: "202610110940301",
  },
  {
    name: "CONSÓRCIO INFRAESTRUTURA BRASIL S.A.",
    cnpj: "07.526.557/0001-00",
    status: "HABILITADO E REGULAR",
    score: "98.7%",
    cndFederal: "8F91.223A.C451.B892",
    cndt: "29481023/2026",
    crfFgts: "202609301120448",
  },
  {
    name: "LOGÍSTICA & SUPRIMENTOS GOVERNAMENTAIS",
    cnpj: "14.289.441/0001-89",
    status: "HABILITADO E REGULAR",
    score: "91.8%",
    cndFederal: "3C11.789F.B123.A990",
    cndt: "39201948/2026",
    crfFgts: "202610051830221",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<"certidoes" | "sancoes" | "decreto">("certidoes");
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const current = PRESETS[selectedPreset];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("Dossiê sincronizado com APIs da CGU, Receita e TST", {
        description: `Dados atualizados para ${current.cnpj}`,
      });
    }, 600);
  };

  const handleCopyCNPJ = () => {
    navigator.clipboard.writeText(current.cnpj);
    setHasCopied(true);
    toast.success("CNPJ copiado para a área de transferência");
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fbfbfd] bg-grid-editorial border-b border-slate-200 overflow-hidden">
      {/* Luz ambiente sutil no topo (anti-IA: nada de bolhas roxas gritantes) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-200/40 to-transparent" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Editorial */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-300 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-mono mb-6 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>EXIGÊNCIA NORMATIVA EM VIGOR: DECRETO 12.304/2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.12]"
          >
            Programa de Integridade para{" "}
            <span className="font-editorial italic font-normal text-slate-800">
              vencer licitações
            </span>{" "}
            e comprovar conformidade legal
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            A infraestrutura digital para atender aos 17 parâmetros obrigatórios do Decreto Federal nº 12.304/2026, emitir dossiês de CNPJ com certidões negativas em 1 clique e mitigar riscos de inabilitação em contratos públicos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded text-xs font-mono uppercase tracking-wider font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-slate-900"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              href="#matriz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
            >
              Consultar Matriz de Parâmetros
            </motion.a>
          </motion.div>

          <div className="mt-8 flex items-center justify-center flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              LEI 14.133/2021 ART. 25
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              INTEGRAÇÃO CEIS / CNEP / TCU
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              DOSSIÊ AUDITÁVEL EM PDF
            </span>
          </div>
        </div>

        {/* Artefato de Engenharia Real: Dossiê Interativo de CNPJ com Acabamento Tátil */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-5xl mx-auto rounded-lg border border-slate-300/90 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden"
        >
          {/* Barra de Seleção de Empresa / Cenário de Demonstração */}
          <div className="bg-slate-900 text-slate-300 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-semibold">TERMINAL DE AUDITORIA PREVENTIVA:</span>
              <span className="text-slate-400 hidden md:inline">Simule uma análise ao vivo:</span>
            </div>

            <div className="flex items-center gap-1.5">
              {PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPreset(idx)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-all ${
                    selectedPreset === idx
                      ? "bg-slate-700 text-white font-bold border border-slate-600 shadow-xs"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  Exemplo {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Topbar do Documento/Sistema */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-slate-700">
              <span className="font-bold text-slate-900">DOSSIÊ:</span>
              
              <div className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-900 font-semibold shadow-2xs">
                <span>{current.cnpj}</span>
                <button
                  type="button"
                  onClick={handleCopyCNPJ}
                  title="Copiar CNPJ"
                  aria-label="Copiar CNPJ para área de transferência"
                  className="text-slate-400 hover:text-slate-700 p-0.5 transition-colors"
                >
                  {hasCopied ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
                {current.status}
              </span>

              <button
                type="button"
                onClick={handleRefresh}
                disabled={isRefreshing}
                title="Sincronizar dados em tempo real"
                aria-label="Atualizar dados do dossiê"
                className="text-slate-500 hover:text-slate-900 p-1 rounded hover:bg-slate-200/60 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-slate-900" : ""}`} />
              </button>
            </div>

            {/* Abas com Transição Fluida via Motion */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-md border border-slate-200 shadow-2xs">
              {(
                [
                  { id: "certidoes", label: "Certidões Negativas" },
                  { id: "sancoes", label: "Varredura de Sanções" },
                  { id: "decreto", label: "Decreto 12.304 (CGU)" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 py-1 rounded text-xs transition-colors z-10 ${
                    activeTab === tab.id
                      ? "text-white font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-slate-900 rounded"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subheader com Razão Social */}
          <div className="bg-white px-6 py-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="truncate max-w-md">
              <strong className="text-slate-800">RAZÃO SOCIAL:</strong> {current.name}
            </span>
            <span className="hidden sm:inline text-slate-400">
              HASH CRIPTOGRÁFICO: 8a7f...2e09 (SHA-256)
            </span>
          </div>

          {/* Conteúdo com Transição Animada */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === "certidoes" && (
                <motion.div
                  key="certidoes"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all card-tactile">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                        <span>RECEITA FEDERAL / PGFN</span>
                        <span className="text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded text-[10px]">
                          VÁLIDA
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">CND Débitos Federais</h4>
                      <p className="text-xs font-mono text-slate-600 mt-1">Cód: {current.cndFederal}</p>
                      <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        Validade até 14/11/2026
                      </p>
                    </div>

                    <div className="p-4 rounded border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all card-tactile">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                        <span>JUSTIÇA DO TRABALHO (TST)</span>
                        <span className="text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded text-[10px]">
                          NEGATIVA
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">CNDT Débitos Trabalhistas</h4>
                      <p className="text-xs font-mono text-slate-600 mt-1">Nº: {current.cndt}</p>
                      <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        Validade até 08/12/2026
                      </p>
                    </div>

                    <div className="p-4 rounded border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all card-tactile">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                        <span>CAIXA ECONÔMICA FEDERAL</span>
                        <span className="text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded text-[10px]">
                          REGULAR
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Certificado Regularidade FGTS</h4>
                      <p className="text-xs font-mono text-slate-600 mt-1">CRF: {current.crfFgts}</p>
                      <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        Validade até 28/10/2026
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                    <span className="font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Varredura automática executada contra APIs governamentais sem interferência manual.
                    </span>
                    <span className="text-slate-900 font-bold bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      Relatório pronto para proposta de licitação
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === "sancoes" && (
                <motion.div
                  key="sancoes"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="divide-y divide-slate-200 border border-slate-200 rounded overflow-hidden">
                    <div className="p-3.5 flex items-center justify-between bg-slate-50 text-xs font-mono">
                      <span className="font-bold text-slate-900">BASE CONSULTADA</span>
                      <span className="font-bold text-slate-900">RESULTADO</span>
                      <span className="font-bold text-slate-900 hidden sm:inline">DATA DA CONSULTA</span>
                    </div>
                    <div className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50/50 transition-colors">
                      <div>
                        <span className="font-bold text-slate-900">CEIS</span> — Cadastro Nacional de Empresas Inidôneas e Suspensas
                      </div>
                      <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        NADA CONSTA
                      </span>
                      <span className="font-mono text-slate-500 hidden sm:inline">Hoje, 09:30</span>
                    </div>
                    <div className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50/50 transition-colors">
                      <div>
                        <span className="font-bold text-slate-900">CNEP</span> — Cadastro Nacional de Empresas Punidas (Lei Anticorrupção)
                      </div>
                      <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        NADA CONSTA
                      </span>
                      <span className="font-mono text-slate-500 hidden sm:inline">Hoje, 09:30</span>
                    </div>
                    <div className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50/50 transition-colors">
                      <div>
                        <span className="font-bold text-slate-900">TCU</span> — Cadastro de Inidôneos para Licitar (Tribunal de Contas da União)
                      </div>
                      <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        NADA CONSTA
                      </span>
                      <span className="font-mono text-slate-500 hidden sm:inline">Hoje, 09:30</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "decreto" && (
                <motion.div
                  key="decreto"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/3 p-5 rounded border border-slate-200 bg-slate-50 text-center card-tactile">
                      <span className="text-xs font-mono uppercase text-slate-500">ÍNDICE DE CONFORMIDADE CGU</span>
                      <div className="text-4xl font-black text-slate-950 mt-2 tracking-tight">
                        {current.score}
                      </div>
                      <span className="text-xs text-emerald-700 font-semibold mt-1 inline-block">
                        Maturidade Alta (Nível 4)
                      </span>
                      <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                        16 de 17 parâmetros atendidos plenamente com repositório documental auditável.
                      </p>
                    </div>

                    <div className="w-full md:w-2/3 space-y-2 text-xs">
                      <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between hover:border-slate-300 transition-colors">
                        <span className="font-medium text-slate-800">Comprometimento formal da alta direção</span>
                        <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                      </div>
                      <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between hover:border-slate-300 transition-colors">
                        <span className="font-medium text-slate-800">Código de Conduta e Políticas de Integridade</span>
                        <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                      </div>
                      <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between hover:border-slate-300 transition-colors">
                        <span className="font-medium text-slate-800">Canal de Denúncias externo com proteção ao denunciante</span>
                        <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                      </div>
                      <div className="p-2.5 rounded border border-slate-200 bg-white flex items-center justify-between hover:border-slate-300 transition-colors">
                        <span className="font-medium text-slate-800">Due Diligence documentada na contratação de terceiros</span>
                        <span className="font-mono text-emerald-700 font-bold">CONFORME</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
