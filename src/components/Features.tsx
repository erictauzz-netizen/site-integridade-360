import React from "react";
import {
  FileText,
  Search,
  Scale,
  ShieldCheck,
  Building2,
  FileCheck2,
  AlertTriangle,
  FolderLock
} from "lucide-react";

const modules = [
  {
    num: "01",
    tag: "AUDITORIA FISCAL & TRABALHISTA",
    title: "Emissão Automatizada de Dossiês de CNPJ",
    description:
      "Consulta em lote e monitoramento diário da situação cadastral na Receita Federal, CND Federal (Receita/PGFN), CNDT Trabalhista e Regularidade FGTS. Identificação imediata de divergências societárias ou pendências antes da publicação do edital.",
    specs: ["Atualização diária", "Exportação em PDF timbrado", "Histórico de certidões"],
  },
  {
    num: "02",
    tag: "INTEGRAÇÃO COM ÓRGÃOS DE CONTROLE",
    title: "Varredura em Cadastros Restritivos Federais",
    description:
      "Checagem contínua contra sanções e impedimentos nos cadastros CEIS (Empresas Inidôneas), CNEP (Empresas Punidas pela Lei Anticorrupção), CEPIM (Entidades Sem Fins Lucrativos) e no Cadastro de Inidôneos do Tribunal de Contas da União (TCU).",
    specs: ["Protocolo de Nada Consta", "Alerta preventivo por e-mail", "Varredura de filiais e sócios"],
  },
  {
    num: "03",
    tag: "GOVERNANÇA & CGU",
    title: "Gestão dos 17 Parâmetros do Decreto 12.304",
    description:
      "Mapeamento guiado de maturidade de compliance corporativo. Centralização de evidências: atas de reunião, Código de Conduta versionado, listas de presença de treinamentos e formalização do canal de denúncias independente.",
    specs: ["Cálculo de índice de maturidade", "Repositório de evidências", "Modelos editáveis de políticas"],
  },
  {
    num: "04",
    tag: "GESTÃO DE RISCO DE CADEIA",
    title: "Due Diligence de Fornecedores e Subcontratados",
    description:
      "Formulário digital de homologação de integridade para parceiros comerciais e subcontratados em obras públicas. Mapeamento de conflitos de interesse, verificação de Pessoas Expostas Politicamente (PEP) e sanções cruzadas.",
    specs: ["Questionário de integridade", "Matriz de risco de terceiros", "Triagem societária"],
  },
  {
    num: "05",
    tag: "INSTRUMENTALIZAÇÃO DE EDITAIS",
    title: "Gerador de Declarações Jurídicas Oficiais",
    description:
      "Emissão automática de minutas e declarações exigidas pela Lei 14.133/2021: declaração de inexistência de fato impeditivo, declaração de não emprego de menores, cumprimento de cotas de PCD e declaração formal de Programa de Integridade.",
    specs: ["Emissão em 1 clique", "Padrão aceito em licitações", "Assinatura digital ICP-Brasil"],
  },
  {
    num: "06",
    tag: "SEGURANÇA & AUDITORIA",
    title: "Repositório Criptografado de Evidências",
    description:
      "Armazenamento perene com hash SHA-256 e trilha de auditoria para fins de fiscalização pelo TCU, CGU e auditores externos de conformidade. Registro de data, hora e responsável por cada documento arquivado.",
    specs: ["Trilha de auditoria indelével", "Criptografia em repouso", "Conformidade LGPD"],
  },
];

export function Features() {
  return (
    <section id="dossie" className="py-20 bg-[#fbfbfd] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de Seção */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
            ESPECIFICAÇÕES DA PLATAFORMA
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Módulos de conformidade desenhados para{" "}
            <span className="font-editorial italic font-normal text-slate-800">
              departamentos jurídicos e licitantes
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Elimine processos manuais, checagens dispersas em múltiplos portais e o risco de desclassificação por documentos vencidos ou ausência de programa de compliance formalizado.
          </p>
        </div>

        {/* Grid Editorial Assimetrico de Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="border border-slate-300 rounded bg-white p-6 flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="font-mono text-xl font-bold text-slate-900">{m.num}</span>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {m.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 leading-snug">
                  {m.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <ul className="space-y-1.5">
                  {m.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
