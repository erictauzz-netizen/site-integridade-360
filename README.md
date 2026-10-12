# Integridade 360 — Portal Institucional & Landing Page

> Plataforma web corporativa de apresentação e atração orgânica para o **Integridade 360**, solução de conformidade e auditoria de Programas de Integridade em contratações públicas regidas pela Lei nº 14.133/2021 e pelo Decreto Federal nº 12.304/2026.

---

## 🚀 Tecnologias e Arquitetura

- **Framework**: [Next.js](https://nextjs.org/) (App Router, SSR nativo, Static Site Generation)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) com design editorial e tipografia de autoridade jurídica
- **Tipografia**: [Newsreader](https://fonts.google.com/specimen/Newsreader) (Google Fonts) + Geist / Geist Mono
- **Componentes & UI**: [Radix UI](https://www.radix-ui.com/) + [Lucide Icons](https://lucide.dev/) + [Sonner](https://sonner.emilkowal.ski/)
- **Validação de Formulários**: [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **SEO & GEO Nativo**:
  - Dados Estruturados Schema.org (`SoftwareApplication`, `Organization`, `FAQPage`)
  - Protocolo oficial de IA: `/llms.txt` e `/llms-full.txt`
  - Geração dinâmica de `sitemap.xml` e `robots.txt`

---

## 🛠️ Comandos de Execução

### Desenvolvimento local
```bash
npm run dev
# Servidor disponível em http://localhost:3000 (ou porta alternativa)
```

### Verificação de Tipos
```bash
npx tsc --noEmit
```

### Build de Produção
```bash
npm run build
```

---

## 🌐 Publicação & Deploy

O projeto é 100% compatível com deploy contínuo na [Vercel](https://vercel.com) com 1 clique a partir deste repositório GitHub.
- **Root Directory**: `./`
- **Build Command**: `next build`
- **Output Directory**: `.next`
