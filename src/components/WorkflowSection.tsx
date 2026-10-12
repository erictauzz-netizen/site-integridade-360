import React from "react";
import { ArrowRight, FileCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    phase: "FASE 1",
    title: "Diagnóstico Inicial do CNPJ e Certidões",
    details:
      "A plataforma executa a triagem cadastral completa da empresa licitante: situação na Receita Federal, emissão da CND Federal, CNDT e regularidade no FGTS, gerando o relatório inicial de regularidade fiscal e trabalhista.",
  },
  {
    phase: "FASE 2",
    title: "Varredura de Sanções e Inidoneidade",
    details:
      "Checagem automatizada nas bases restritivas do CEIS, CNEP e TCU. O sistema emite certidões de nada consta para a matriz, filiais e quadro societário (QSA), prevenindo surpresas na fase de habilitação.",
  },
  {
    phase: "FASE 3",
    title: "Estruturação dos 17 Parâmetros (Decreto 12.304)",
    details:
      "Parametrização do Programa de Integridade da organização: Código de Conduta, Canal de Denúncias, Treinamentos corporativos com listas de presença e protocolos de interação com agentes públicos.",
  },
  {
    phase: "FASE 4",
    title: "Emissão do Dossiê Consolidado de Edital",
    details:
      "Exportação em PDF do dossiê comprobatório completo pronto para ser anexado à documentação de habilitação ou de cumprimento de exigência contratual com validade jurídica.",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
            METODOLOGIA DE HABILITAÇÃO JURÍDICA
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Do diagnóstico cadastral à emissão do{" "}
            <span className="font-editorial italic font-normal text-slate-800">
              dossiê comprobatório
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Como o Integridade 360 estrutura o fluxo operacional para assegurar que a empresa atenda a todos os requisitos da Lei nº 14.133/2021 antes da assinatura de contratos com a Administração Pública.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded p-6 bg-slate-50/60 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {s.phase}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900 leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {s.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rastreabilidade total</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
