import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionReveal, { fadeUp, zoomIn } from "./SectionReveal";
import { categorias, contato } from "../data/conteudo";

export default function Categorias() {
  return (
    <section className="py-20 md:py-28">
      <SectionReveal className="container-site">
        <motion.p variants={fadeUp} className="eyebrow text-brand-orange">
          Catálogo por departamento
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 max-w-2xl text-ink">
          Tudo o que você precisa, por categoria
        </motion.h2>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {categorias.map((cat) => (
            <motion.a
              key={cat.id}
              href={contato.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver produtos de ${cat.titulo} no WhatsApp`}
              variants={zoomIn}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-card transition-shadow duration-300 hover:shadow-primary"
            >
              <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${cat.gradiente}`}>
                <motion.span
                  className="text-white/90"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <cat.icone size={64} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover:scale-110" />
                </motion.span>
                <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{cat.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{cat.descricao}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                  Ver
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </SectionReveal>
    </section>
  );
}
