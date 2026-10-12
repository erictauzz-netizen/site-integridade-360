"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send, CheckCircle2, ShieldCheck, Loader2, Mail, Building2, Phone } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("Informe um e-mail corporativo válido"),
  phone: z.string().min(10, "Informe telefone ou WhatsApp com DDD"),
  company: z.string().min(2, "Informe o nome ou CNPJ da sua empresa"),
  category: z.string().min(1, "Selecione o perfil da sua empresa"),
  message: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      category: "licitante-grande-vulto",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      toast.success("Solicitação recebida com sucesso", {
        description: "Nossa equipe jurídica entrará em contato para agendar o diagnóstico.",
      });
      reset();
    } catch {
      toast.error("Não foi possível enviar sua solicitação", {
        description: "Por favor, verifique sua conexão e tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informações Institucionais */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
              ATENDIMENTO TÉCNICO & DEMONSTRAÇÃO
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Agende um diagnóstico com nossos{" "}
              <span className="font-editorial italic font-normal text-amber-200">
                especialistas em compliance
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              Analisamos a situação do seu CNPJ, o histórico de participação em licitações e apresentamos a aderência da sua organização aos 17 parâmetros do Decreto Federal nº 12.304/2026.
            </p>

            <div className="mt-8 space-y-4 text-xs text-slate-300 font-mono">
              <div className="p-4 rounded border border-slate-800 bg-slate-950/70 flex items-start gap-3">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Diagnóstico de CNPJ de Exemplo</span>
                  <span className="text-slate-400 mt-0.5 block">
                    Demonstração em tempo real com emissão de certidões e varredura de sanções.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded border border-slate-800 bg-slate-950/70 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Sigilo das Informações & LGPD</span>
                  <span className="text-slate-400 mt-0.5 block">
                    Dados tratados sob termo estrito de confidencialidade e segurança técnica.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded border border-slate-800 bg-slate-950/70 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Atendimento Dedicado</span>
                  <span className="text-slate-400 mt-0.5 block">
                    Retorno técnico em até 1 dia útil por especialistas em conformidade.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Corporativo */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center font-mono">
                  <div className="w-12 h-12 rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Solicitação Registrada
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Nossa equipe técnica entrará em contato em até 1 dia útil para agendar a demonstração guiada do Integridade 360.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-4 py-2 rounded text-xs font-mono text-slate-300 border border-slate-700 hover:bg-slate-900 transition-colors"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        NOME COMPLETO *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Dr(a). Carlos Mendes"
                        className={`w-full px-3 py-2.5 rounded bg-slate-900 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors ${
                          errors.name ? "border-rose-500" : "border-slate-800"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        E-MAIL CORPORATIVO *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="carlos@empresa.com.br"
                        className={`w-full px-3 py-2.5 rounded bg-slate-900 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors ${
                          errors.email ? "border-rose-500" : "border-slate-800"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        TELEFONE / WHATSAPP *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className={`w-full px-3 py-2.5 rounded bg-slate-900 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors ${
                          errors.phone ? "border-rose-500" : "border-slate-800"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        RAZÃO SOCIAL OU CNPJ *
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        placeholder="Nome da sua organização"
                        className={`w-full px-3 py-2.5 rounded bg-slate-900 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors ${
                          errors.company ? "border-rose-500" : "border-slate-800"
                        }`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.company.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      PERFIL DE CONTRATAÇÃO / OBJETIVO *
                    </label>
                    <select
                      {...register("category")}
                      className="w-full px-3 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="licitante-grande-vulto">
                        Participante de Licitações de Grande Vulto (Acima de R$ 200M / Decreto 12.304)
                      </option>
                      <option value="licitante-medio-porte">
                        Empresa Licitante Regular da Lei 14.133/2021 (Obras, Serviços ou TI)
                      </option>
                      <option value="auditoria-fornecedores">
                        Due Diligence e Homologação de Fornecedores e Subcontratados
                      </option>
                      <option value="escritorio-advocacia">
                        Escritório de Advocacia ou Consultoria de Compliance
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      OBSERVAÇÕES ADICIONAIS (OPCIONAL)
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Indique órgãos licitantes habituais ou prazos de editais em andamento..."
                      className="w-full px-3 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded text-xs font-mono uppercase tracking-wider font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                          Transmitindo dados...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-slate-950" />
                          Solicitar Diagnóstico Técnico
                        </>
                      )}
                    </button>
                    <p className="text-[10px] font-mono text-center text-slate-500 mt-3">
                      Ao enviar, você autoriza o contato exclusivo para apresentação técnica do sistema Integridade 360.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
