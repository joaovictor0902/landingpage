import { motion } from "framer-motion";
import SectionReveal, { fadeUp } from "./SectionReveal";
import { marcas } from "../data/conteudo";

export default function Marcas() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <SectionReveal className="container-site text-center" stagger={0.06}>
        <motion.p variants={fadeUp} className="eyebrow text-brand-orange">
          Selos de confiança
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-ink">
          Nossas linhas e marcas
        </motion.h2>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {marcas.map((marca) => (
            <motion.span
              key={marca}
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -4 }}
              className="cursor-default rounded-full border border-border-soft bg-bg px-6 py-3 font-display text-sm font-bold tracking-wide text-ink-soft transition-colors duration-300 hover:border-brand-orange hover:bg-brand-orange-soft hover:text-brand-orange-dark md:text-base"
            >
              {marca}
            </motion.span>
          ))}
        </motion.div>
      </SectionReveal>
    </section>
  );
}
