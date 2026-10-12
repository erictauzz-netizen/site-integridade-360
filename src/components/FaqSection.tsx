"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
            ESCLARECIMENTOS JURÍDICOS & OPERACIONAIS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Perguntas frequentes sobre a{" "}
            <span className="font-editorial italic font-normal text-slate-800">
              legislação de integridade
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Orientações objetivas sobre a aplicação do Decreto Federal nº 12.304/2026, exigências de editais e a operacionalização técnica do Integridade 360.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-amber-800 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg tracking-tight">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-slate-900" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pt-3 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <span>Possui dúvidas sobre um edital específico em andamento?</span>
          <a href="#contato" className="text-slate-900 font-bold underline">
            Consultar equipe jurídica →
          </a>
        </div>

      </div>
    </section>
  );
}
