import { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import SectionReveal, { fadeUp } from "./SectionReveal";
import { depoimentos } from "../data/conteudo";

function CartaoDepoimento({ dep }) {
  return (
    <figure className="w-[320px] shrink-0 rounded-3xl border border-border-soft bg-surface p-7 shadow-card sm:w-[380px]">
      <div className="flex gap-1 text-brand-yellow" aria-label="Avaliação de 5 estrelas">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-soft">“{dep.texto}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light text-sm font-bold text-white">
          {dep.iniciais}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{dep.nome}</p>
          <p className="text-xs text-ink-muted">{dep.cidade}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Depoimentos() {
  const reduced = useReducedMotion();
  const trackRef = useRef(null);
  const [pausado, setPausado] = useState(false);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (pausado || reduced || !trackRef.current) return;
    const largura = trackRef.current.scrollWidth / 2;
    if (!largura) return;
    let proximo = x.get() - delta * 0.045;
    if (proximo <= -largura) proximo += largura;
    x.set(proximo);
  });

  const lista = [...depoimentos, ...depoimentos, ...depoimentos];

  return (
    <section className="overflow-hidden bg-bg-alt py-20 md:py-28">
      <SectionReveal className="container-site">
        <motion.p variants={fadeUp} className="eyebrow text-brand-orange">
          Prova social
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-ink">
          Quem compra, recomenda
        </motion.h2>
      </SectionReveal>
      <SectionReveal className="mt-12">
        <motion.div variants={fadeUp}>
          <div
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            className="overflow-hidden"
          >
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 px-6">
              {lista.map((dep, i) => (
                <CartaoDepoimento key={`${dep.nome}-${i}`} dep={dep} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </SectionReveal>
    </section>
  );
}
