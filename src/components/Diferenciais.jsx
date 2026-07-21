import { motion } from "framer-motion";
import SectionReveal, { fadeUp } from "./SectionReveal";
import { diferenciais, diferencialBonus } from "../data/conteudo";

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const iconVariant = {
  hidden: { opacity: 0, rotate: -10, scale: 0.8 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-bg-alt py-20 md:py-28">
      <SectionReveal className="container-site">
        <motion.p variants={fadeUp} className="eyebrow text-brand-orange">
          Diferenciais
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-ink">
          Por que a ATOPY?
        </motion.h2>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {diferenciais.map((dif) => (
            <motion.div
              key={dif.titulo}
              variants={cardVariant}
              whileHover="tremor"
              className="rounded-3xl border border-border-soft bg-surface p-7 shadow-card transition-shadow duration-300 hover:shadow-primary"
            >
              <motion.span
                variants={{ ...iconVariant, tremor: { x: [0, -2, 2, 0], transition: { duration: 0.3 } } }}
                className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand-orange-soft text-brand-orange"
              >
                <dif.icone size={28} strokeWidth={2} aria-hidden="true" />
              </motion.span>
              <motion.h3 variants={fadeUp} className="mt-5 text-lg font-bold text-ink">
                {dif.titulo}
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-2 text-sm text-ink-muted">
                {dif.descricao}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink-soft to-ink p-8 text-white shadow-card md:p-10"
        >
          <span
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-light shadow-primary"
            >
              <diferencialBonus.icone size={32} strokeWidth={2} aria-hidden="true" />
            </motion.span>
            <div>
              <h3 className="font-display text-2xl font-bold">
                Você <span className="text-brand-orange-light text-glow-orange">decola</span> com a gente
              </h3>
              <p className="mt-2 max-w-2xl text-white/70">{diferencialBonus.descricao}</p>
            </div>
          </div>
        </motion.div>
      </SectionReveal>
    </section>
  );
}
