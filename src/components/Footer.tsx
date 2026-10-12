import React from "react";
import Link from "next/link";
import { Scale, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Identidade Institucional */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-slate-800 bg-slate-900 flex items-center justify-center text-white">
                <Scale className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                Integridade <span className="text-amber-400 italic font-normal">360</span>
              </span>
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Plataforma digital para gestão de Programas de Integridade Corporativa, auditoria documental e conformidade estrita com o Decreto Federal nº 12.304/2026 e a Lei Federal nº 14.133/2021.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                PADRÃO CGU & TCU
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                LGPD (LEI 13.709/2018)
              </span>
            </div>
          </div>

          {/* Âncoras do Sistema */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Módulos Técnicos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#decreto" className="hover:text-white transition-colors">
                  Decreto Federal 12.304
                </a>
              </li>
              <li>
                <a href="#matriz" className="hover:text-white transition-colors">
                  Matriz de 17 Parâmetros
                </a>
              </li>
              <li>
                <a href="#dossie" className="hover:text-white transition-colors">
                  Varredura CEIS / CNEP / TCU
                </a>
              </li>
              <li>
                <a href="#dossie" className="hover:text-white transition-colors">
                  Dossiê CNPJ e Certidões
                </a>
              </li>
            </ul>
          </div>

          {/* Legislação e Referências */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Bases Normativas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <span className="text-slate-500 block">Lei Federal nº 14.133/2021</span>
                <span className="text-[11px]">Nova Lei de Licitações</span>
              </li>
              <li className="pt-1">
                <span className="text-slate-500 block">Decreto Federal nº 12.304/2026</span>
                <span className="text-[11px]">Integridade em Grande Vulto</span>
              </li>
              <li className="pt-1">
                <span className="text-slate-500 block">Lei Federal nº 12.846/2013</span>
                <span className="text-[11px]">Lei Anticorrupção</span>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Contato Institucional
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono">contato@integridade360.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; 2026 Integridade 360 Tecnologia e Compliance Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">
              Termos de Uso
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Política de Privacidade
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Segurança da Informação
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
