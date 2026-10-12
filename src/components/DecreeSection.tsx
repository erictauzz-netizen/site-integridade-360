import React from "react";
import { Scale, CheckCircle2, AlertCircle, FileCheck, Shield, ExternalLink } from "lucide-react";

const matrixParameters = [
  {
    code: "PAR-01",
    title: "Comprometimento da Alta Administração",
    legalBase: "Art. 4º, I do Decreto 12.304",
    requirement: "Apoio visível, inequívoco e documentado da diretoria às políticas de ética.",
    evidence: "Atas de diretoria, declaração de tom do topo e alocação orçamentária para compliance.",
  },
  {
    code: "PAR-02",
    title: "Código de Ética e Conduta Aplicável",
    legalBase: "Art. 4º, II do Decreto 12.304",
    requirement: "Regras claras de conduta formalizadas e assinadas por 100% do corpo societário e colaboradores.",
    evidence: "Código publicado com versionamento e protocolo de ciência assinado.",
  },
  {
    code: "PAR-03",
    title: "Treinamentos Periódicos e Sensibilização",
    legalBase: "Art. 4º, III do Decreto 12.304",
    requirement: "Capacitação comprovada contra atos de corrupção, fraudes e favorecimentos.",
    evidence: "Listas de presença digitais, cronograma anual e relatórios de aproveitamento.",
  },
  {
    code: "PAR-04",
    title: "Gestão e Matriz de Riscos de Integridade",
    legalBase: "Art. 4º, IV do Decreto 12.304",
    requirement: "Mapeamento documentado de riscos em licitações e contratações governamentais.",
    evidence: "Matriz de risco residual atualizada anualmente com plano de contingência.",
  },
  {
    code: "PAR-05",
    title: "Controles Internos & Registros Contábeis",
    legalBase: "Art. 4º, V do Decreto 12.304",
    requirement: "Controles contábeis rigorosos que assegurem a precisão de transações e pagamentos.",
    evidence: "Demonstrativos financeiros auditados e trilha de auditoria contábil.",
  },
  {
    code: "PAR-06",
    title: "Canal de Denúncias com Proteção ao Denunciante",
    legalBase: "Art. 4º, VII do Decreto 12.304",
    requirement: "Mecanismo acessível para denúncias anônimas e garantia expressa contra retaliação.",
    evidence: "Protocolos criptografados de recebimento e relatório estatístico de apurações.",
  },
  {
    code: "PAR-07",
    title: "Due Diligence de Fornecedores e Terceiros",
    legalBase: "Art. 4º, IX do Decreto 12.304",
    requirement: "Verificação prévia de reputação e antecedentes de subcontratados e parceiros.",
    evidence: "Dossiê CNPJ com varredura CEIS/CNEP/TCU arquivado antes da contratação.",
  },
];

export function DecreeSection() {
  return (
    <section id="decreto" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
            <span>REGULAMENTAÇÃO DA LEI Nº 14.133/2021</span>
            <span>•</span>
            <span className="text-amber-800 font-bold">EXIGÊNCIA DE HABILITAÇÃO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
            O Decreto Federal nº 12.304/2026 e a exigência de{" "}
            <span className="font-editorial italic font-normal text-slate-800">
              Programa de Integridade
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Nas contratações públicas de obras, serviços e fornecimentos de grande vulto (Art. 25, § 4º da Nova Lei de Licitações), a comprovação documental do Programa de Integridade passou a ser requisito de execução contratual. O descumprimento sujeita a contratada a multa diária de 0,08% sobre o valor do contrato e rescisão por culpa exclusiva.
          </p>
        </div>

        {/* Tabela Técnica de Matriz de Parâmetros */}
        <div id="matriz" className="border border-slate-300 rounded-lg overflow-hidden bg-[#fbfbfd]">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-amber-300" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                MATRIZ DE AVALIAÇÃO DE PARÂMETROS OBRIGATÓRIOS (CGU / DECRETO 12.304)
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              AUDITADO PELO SISTEMA INTEGRIDADE 360
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 font-mono text-slate-700">
                  <th className="py-3 px-4 font-bold">CÓDIGO</th>
                  <th className="py-3 px-4 font-bold">PARÂMETRO LEGAL</th>
                  <th className="py-3 px-4 font-bold">BASE NORMATIVA</th>
                  <th className="py-3 px-4 font-bold">EVIDÊNCIA AUDITÁVEL EXIGIDA</th>
                  <th className="py-3 px-4 font-bold text-right">CONFORMIDADE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {matrixParameters.map((p, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                      {p.code}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-900 block">{p.title}</span>
                      <span className="text-slate-500 text-[11px] mt-0.5 block">{p.requirement}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {p.legalBase}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {p.evidence}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        AUTOMATIZADO
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono">
            <span>TOTAL: 17 PARÂMETROS MONITORADOS COM RELATÓRIO TÉCNICO GERADO EM FORMATO OFICIAL</span>
            <a href="#contato" className="text-slate-900 font-bold hover:underline">
              Baixar relatório de exemplo em PDF →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
