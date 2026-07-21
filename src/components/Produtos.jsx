import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import SectionReveal, { fadeUp } from "./SectionReveal";
import { produtos, contato, linkProdutoWhatsApp, formatarPreco } from "../data/conteudo";

export default function Produtos() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [limite, setLimite] = useState(0);

  useEffect(() => {
    const medir = () => {
      if (!viewportRef.current || !trackRef.current) return;
      setLimite(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.offsetWidth));
    };
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, []);

  const deslizar = (direcao) => {
    const passo = 316 * direcao;
    const destino = Math.min(0, Math.max(-limite, x.get() - passo));
    animate(x, destino, { type: "spring", stiffness: 260, damping: 30 });
  };

  return (
    <section id="catalogo" className="overflow-hidden bg-surface py-20 md:py-28">
      <SectionReveal className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p variants={fadeUp} className="eyebrow text-brand-orange">
              Ofertas da semana
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-ink">
              Destaques da ATOPY
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex gap-3">
            <motion.button
              type="button"
              aria-label="Produtos anteriores"
              onClick={() => deslizar(-1)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-12 w-12 place-items-center rounded-full border border-border-soft bg-surface text-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              aria-label="Próximos produtos"
              onClick={() => deslizar(1)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-12 w-12 place-items-center rounded-full border border-border-soft bg-surface text-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </motion.button>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} ref={viewportRef} className="mt-12">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -limite, right: 0 }}
            style={{ x }}
            className="flex cursor-grab gap-5 active:cursor-grabbing"
          >
            {produtos.map((produto) => (
              <motion.article
                key={produto.id}
                className="group w-[280px] shrink-0 overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-card transition-shadow duration-300 hover:shadow-primary"
              >
                <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${produto.gradiente}`}>
                  <motion.span
                    initial={{ y: "-140%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-primary"
                  >
                    Top
                  </motion.span>
                  <span className="grid h-full w-full place-items-center text-white/90 transition-transform duration-500 group-hover:scale-105">
                    <produto.icone size={88} strokeWidth={1.25} aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="stat-num text-xs font-medium text-ink-muted">{produto.codigo}</p>
                  <h3 className="mt-1 line-clamp-2 min-h-[3.2rem] text-base font-bold leading-snug text-ink">
                    {produto.nome}
                  </h3>
                  <p className="stat-num mt-3 text-lg font-bold text-brand-orange">
                    {formatarPreco(produto.precoPix)}{" "}
                    <span className="text-xs font-semibold text-ink-muted">à vista no Pix</span>
                  </p>
                  <p className="stat-num text-sm text-ink-muted line-through">{formatarPreco(produto.precoNormal)}</p>
                  <motion.a
                    href={linkProdutoWhatsApp(produto.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                  >
                    Comprar
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 text-center">
          <a
            href={contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
          >
            Ver catálogo completo
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </motion.div>
      </SectionReveal>
    </section>
  );
}
