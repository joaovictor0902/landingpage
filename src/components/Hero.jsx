import { useMemo, useState, useEffect } from "react";
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

function AnimacaoVideo() {
  const [frameIndex, setFrameIndex] = useState(0);

  // Smooth thruster flame flicker interval
  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev === 0 ? 1 : 0));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-full w-full flex items-center justify-center pointer-events-none select-none"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
      }}
    >
      {/* Dynamic Thruster Flame Glow */}
      <div className="absolute bottom-12 h-36 w-36 rounded-full bg-brand-orange/35 blur-3xl animate-pulse pointer-events-none" />

      {/* 100% Transparent Perfectly Aligned Rocket Animation */}
      <picture className="h-full w-full flex items-center justify-center relative z-10">
        <source
          type="image/webp"
          srcSet={frameIndex === 0 ? "/animacao-video/foguete_opt_a.webp" : "/animacao-video/foguete_opt_b.webp"}
        />
        <img
          src={frameIndex === 0 ? "/animacao-video/foguete_transparente_opt_a.png" : "/animacao-video/foguete_transparente_opt_b.png"}
          alt="Foguete ATOPY Transparente"
          className="h-full w-full object-contain filter drop-shadow-[0_15px_30px_rgba(235,94,40,0.22)]"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
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
              className="mx-auto h-[420px] w-[340px] md:h-[540px] md:w-[440px]"
            >
              <AnimacaoVideo />
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
