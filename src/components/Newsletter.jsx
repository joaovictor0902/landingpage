import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import SectionReveal, { fadeUp } from "./SectionReveal";

function Confetti() {
  const reduced = useReducedMotion();
  const particulas = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 260,
        y: -60 - Math.random() * 140,
        rotate: Math.random() * 360,
        delay: Math.random() * 0.15,
        color: ["bg-white", "bg-brand-yellow", "bg-brand-orange-light"][i % 3],
      })),
    []
  );
  if (reduced) return null;
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      {particulas.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute h-2 w-2 rounded-sm ${p.color}`}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.rotate }}
          transition={{ duration: 1.1, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </span>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviar = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEnviado(true);
  };

  return (
    <section className="bg-ink py-20 md:py-24">
      <SectionReveal className="container-site text-center">
        <motion.h2 variants={fadeUp} className="text-white">
          Receba ofertas e novidades
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Cadastre seu e-mail e fique por dentro dos lançamentos da ATOPY.
        </motion.p>
        <motion.div variants={fadeUp} className="relative mx-auto mt-9 max-w-lg">
          <AnimatePresence mode="wait">
            {enviado ? (
              <motion.div
                key="sucesso"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center gap-3 rounded-full bg-white/10 px-8 py-5 font-semibold text-white ring-1 ring-white/20 backdrop-blur"
                role="status"
              >
                <Confetti />
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
                  <motion.path
                    d="M4 12.5 L9.5 18 L20 6.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  />
                </svg>
                E-mail cadastrado! Fique de olho na caixa de entrada.
              </motion.div>
            ) : (
              <motion.form
                key="formulario"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onSubmit={enviar}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Seu melhor e-mail
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full flex-1 rounded-full border-0 bg-white/10 px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-4 focus:ring-brand-orange/40"
                />
                <motion.button
                  type="submit"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Cadastrar
                  <Send size={16} aria-hidden="true" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </SectionReveal>
    </section>
  );
}
