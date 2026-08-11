import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, ShieldCheck, Lock, CreditCard, MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionReveal, { fadeUp } from "./SectionReveal";
import { localizacao, contato } from "../data/conteudo";
import logoImg from "../assets/logo.png";

const institucional = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const departamentos = [
  "Ferramentas Profissionais",
  "Construção",
  "Pneus",
  "Hidráulica",
  "Elétrica",
];

const selos = [
  { icone: Lock, texto: "Site seguro (HTTPS)" },
  { icone: CreditCard, texto: "Pix • Cartão • Boleto" },
  { icone: ShieldCheck, texto: "Dados protegidos" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white">
      <SectionReveal className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 md:py-20" stagger={0.1}>
        <motion.div variants={fadeUp}>
          <motion.a
            href="#inicio"
            aria-label="ATOPY — voltar ao início"
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center"
          >
            <img src={logoImg} alt="ATOPY" className="h-16 sm:h-20 md:h-24 w-auto max-h-24 object-contain" />
          </motion.a>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Distribuição de produtos selecionados com agilidade e o melhor atendimento. Decole com a ATOPY.
          </p>
          <div className="mt-6 flex gap-3">
            <motion.a
              href={contato.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da ATOPY"
              whileHover={{ y: -3 }}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-colors hover:bg-ink"
            >
              <Instagram size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              href={contato.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da ATOPY"
              whileHover={{ y: -3 }}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-colors hover:bg-ink"
            >
              <Facebook size={18} aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
        <motion.nav variants={fadeUp} aria-label="Links institucionais">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Institucional</h3>
          <ul className="mt-5 space-y-3">
            {institucional.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/80 transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
        <motion.nav variants={fadeUp} aria-label="Departamentos">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Departamentos</h3>
          <ul className="mt-5 space-y-3">
            {departamentos.map((dep) => (
              <li key={dep}>
                <a href="#catalogo" className="text-sm text-white/80 transition-colors hover:text-ink">
                  {dep}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
        <motion.div variants={fadeUp}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Atendimento</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-ink" aria-hidden="true" />
              {localizacao.endereco}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-ink" aria-hidden="true" />
              {localizacao.telefone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-ink" aria-hidden="true" />
              {localizacao.email}
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-ink" aria-hidden="true" />
              {localizacao.horario}
            </li>
          </ul>
          <motion.a
            href={contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-wa-dark"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </SectionReveal>
      <div className="border-t border-white/20">
        <div className="container-site flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row md:text-left">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {selos.map((selo) => (
              <li key={selo.texto} className="flex items-center gap-2 text-xs font-medium text-white/80">
                <selo.icone size={14} className="text-ink" aria-hidden="true" />
                {selo.texto}
              </li>
            ))}
          </ul>
          <p className="stat-num text-xs text-white/70">
            © 2026 ATOPY. CNPJ {contato.cnpj} · Paranavaí — PR
          </p>
        </div>
      </div>
    </footer>
  );
}
