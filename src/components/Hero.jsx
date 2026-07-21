import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Rocket, MessageCircle, ShieldCheck, Package, Star, ArrowRight } from "lucide-react";
import { contato } from "../data/conteudo";
import { easeOutQuint } from "./SectionReveal";

function Particulas() {
  const reduced = useReducedMotion();
  const particulas = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        id: i,
        size: 4 + Math.random() * 6,
        left: 15 + Math.random() * 70,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 4,
        color: ["bg-brand-orange/40", "bg-brand-blue/30", "bg-white/50"][i % 3],
      })),
    []
  );
  if (reduced) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particulas.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{ width: p.size, height: p.size, left: `${p.left}%`, bottom: "-4%" }}
          animate={{ y: [0, -520], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function FogueteSVG() {
  const reduced = useReducedMotion();
  const chamas = [
    { d: "M86 214 C80 236 80 250 90 268 C95 252 94 234 86 214 Z", fill: "#EF6C1A", delay: 0 },
    { d: "M100 212 C90 244 90 264 100 290 C110 264 110 244 100 212 Z", fill: "#F2BD1D", delay: 0.15 },
    { d: "M114 214 C106 234 105 252 110 268 C120 250 120 236 114 214 Z", fill: "#FF8A3D", delay: 0.3 },
  ];
  return (
    <svg
      viewBox="0 0 200 300"
      className="h-full w-full"
      role="img"
      aria-label="Foguete ATOPY decolando"
    >
      <defs>
        <linearGradient id="atopy-rocket-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EF6C1A" />
          <stop offset="100%" stopColor="#FF8A3D" />
        </linearGradient>
      </defs>
      {chamas.map((chama) => (
        <motion.path
          key={chama.d}
          d={chama.d}
          fill={chama.fill}
          style={{ transformBox: "fill-box", transformOrigin: "top center" }}
          animate={reduced ? undefined : { scaleY: [0.8, 1.2, 0.8] }}
          transition={{ duration: 0.9, delay: chama.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <path d="M68 96 L38 178 L68 158 Z" fill="#3BA4F0" />
      <path d="M132 96 L162 178 L132 158 Z" fill="#3BA4F0" />
      <rect x="68" y="72" width="64" height="144" rx="32" fill="url(#atopy-rocket-body)" />
      <path d="M100 8 C118 32 130 54 132 82 L68 82 C70 54 82 32 100 8 Z" fill="#EF6C1A" />
      <circle cx="100" cy="120" r="17" fill="#EAF6FF" stroke="#3BA4F0" strokeWidth="7" />
      <rect x="84" y="164" width="32" height="8" rx="4" fill="#C9550E" opacity="0.5" />
    </svg>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const provas = [
    { icone: ShieldCheck, texto: "Compra segura" },
    { icone: Package, texto: "+2000 produtos" },
    { icone: Star, texto: "Nota 4.9" },
  ];

  return (
    <section id="inicio" className="hero-radial relative overflow-hidden">
      <Particulas />
      <div className="container-site relative grid min-h-[80vh] items-center gap-12 py-16 md:min-h-[88vh] md:grid-cols-2 md:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOutQuint } },
            }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-orange/25 bg-brand-orange-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-dark"
          >
            <motion.span
              animate={reduced ? undefined : { scale: [1, 1.25, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              🚀
            </motion.span>
            A ferramenta certa pra você ir além
          </motion.span>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutQuint } },
            }}
            className="mt-6 text-ink"
          >
            Ferramentas e materiais,{" "}
            <span className="relative inline-block text-brand-orange text-glow-orange">
              tudo em um só lugar
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: easeOutQuint }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light"
                aria-hidden="true"
              />
            </span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: easeOutQuint } },
            }}
            className="mt-6 max-w-xl text-xl text-ink-muted"
          >
            O melhor preço, a melhor qualidade. Atendimento ágil pelo WhatsApp.
          </motion.p>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutQuint } },
              }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-semibold text-white shadow-primary-lg transition-colors hover:bg-brand-orange-dark"
            >
              Ver catálogo
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutQuint } },
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href={contato.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-orange px-7 py-[14px] font-semibold text-brand-orange transition-colors hover:bg-brand-orange-soft"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </motion.a>
          </motion.div>
          <motion.ul
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {provas.map((prova) => (
              <motion.li
                key={prova.texto}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutQuint } },
                }}
                className="stat-num flex items-center gap-2 text-sm font-semibold text-ink-soft"
              >
                <prova.icone size={17} className="text-brand-orange" aria-hidden="true" />
                {prova.texto}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none">
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl md:h-96 md:w-96"
            animate={reduced ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeOutQuint }}
            className="relative w-full"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto h-[340px] w-[240px] md:h-[440px] md:w-[300px]"
            >
              <FogueteSVG />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: easeOutQuint }}
              className="glass absolute right-0 top-10 hidden items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 shadow-card md:flex"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-orange-soft text-brand-orange">
                <Package size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Estoque completo</p>
                <p className="text-xs text-ink-muted">+2000 produtos</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: easeOutQuint }}
              className="glass absolute bottom-16 left-0 hidden items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 shadow-card md:flex"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-orange-soft text-brand-orange">
                <Rocket size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Decole com a ATOPY</p>
                <p className="text-xs text-ink-muted">preço de distribuidora</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
