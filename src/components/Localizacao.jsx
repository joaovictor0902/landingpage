import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import SectionReveal, { fadeUp, fadeLeft, zoomIn } from "./SectionReveal";
import { localizacao } from "../data/conteudo";

const itens = [
  { icone: MapPin, rotulo: "Endereço", valor: localizacao.endereco },
  { icone: Phone, rotulo: "Telefone", valor: localizacao.telefone },
  { icone: Mail, rotulo: "E-mail", valor: localizacao.email },
  { icone: Clock, rotulo: "Horário", valor: localizacao.horario },
];

export default function Localizacao() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <SectionReveal className="container-site">
        <motion.p variants={fadeUp} className="eyebrow text-brand-orange">
          Onde estamos
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-ink">
          Visite a ATOPY em Paranavaí
        </motion.h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-[420px_1fr]">
          <motion.div
            variants={fadeLeft}
            className="rounded-3xl border border-border-soft bg-surface p-8 shadow-card"
          >
            <ul className="space-y-6">
              {itens.map((item) => (
                <li key={item.rotulo} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-orange-soft text-brand-orange">
                    <item.icone size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{item.rotulo}</p>
                    <p className="mt-1 text-[15px] font-medium leading-relaxed text-ink">{item.valor}</p>
                  </div>
                </li>
              ))}
            </ul>
            <motion.a
              href={localizacao.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 font-semibold text-white shadow-primary transition-colors hover:bg-brand-orange-dark"
            >
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </motion.a>
          </motion.div>
          <motion.div variants={zoomIn} className="overflow-hidden rounded-3xl border border-border-soft shadow-card">
            <iframe
              src={localizacao.embedUrl}
              title="Mapa da localização da ATOPY em Paranavaí — PR"
              loading="lazy"
              className="h-full min-h-[380px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}
