import { motion } from "framer-motion";
import SectionReveal, { fadeUp } from "./SectionReveal";
import { comoFunciona } from "../data/conteudo";

export default function ComoFunciona() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <span
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden="true"
      />
      <SectionReveal className="container-site relative">
        <motion.p variants={fadeUp} className="eyebrow text-brand-orange-light">
          Simples assim
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-white">
          Como comprar na ATOPY
        </motion.h2>
        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute left-0 top-10 hidden w-full lg:block"
            viewBox="0 0 1000 80"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M 130 40 C 300 -10, 380 90, 500 40 C 620 -10, 700 90, 870 40"
              stroke="#EF6C1A"
              strokeWidth="2.5"
              strokeDasharray="8 10"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
            />
          </svg>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative grid gap-12 md:grid-cols-3 md:gap-8"
          >
            {comoFunciona.map((passo) => (
              <motion.div
                key={passo.num}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center gap-4 md:justify-start">
                  <span className="stat-num font-display text-6xl font-extrabold text-brand-orange text-glow-orange">
                    {passo.num}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/5 text-brand-orange-light ring-1 ring-white/10">
                    <passo.icone size={26} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{passo.titulo}</h3>
                <p className="mt-2 text-white/60">{passo.descricao}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}
