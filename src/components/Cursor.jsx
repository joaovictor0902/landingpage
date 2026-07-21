import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [ativo, setAtivo] = useState(false);
  const [interativo, setInterativo] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 36, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 420, damping: 36, mass: 0.6 });

  useEffect(() => {
    const fino = window.matchMedia("(pointer: fine)").matches;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fino || reduzido) return;
    setAtivo(true);
    const mover = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const sobre = (e) => setInterativo(Boolean(e.target.closest("a, button, input")));
    window.addEventListener("pointermove", mover, { passive: true });
    window.addEventListener("pointerover", sobre, { passive: true });
    return () => {
      window.removeEventListener("pointermove", mover);
      window.removeEventListener("pointerover", sobre);
    };
  }, [x, y]);

  if (!ativo) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] rounded-full border-2 border-brand-orange bg-brand-orange/10"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: interativo ? 52 : 22,
        height: interativo ? 52 : 22,
        opacity: interativo ? 0.9 : 0.6,
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
