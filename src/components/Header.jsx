import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { contato } from "../data/conteudo";
import logoImg from "../assets/logo.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

function Logo({ className = "" }) {
  return (
    <a href="#inicio" aria-label="ATOPY — voltar ao início" className={`inline-flex items-center ${className}`}>
      <img src={logoImg} alt="ATOPY" className="h-14 md:h-16 w-auto max-h-16 object-contain" />
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-orange to-brand-orange-light"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-card" : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-20 md:h-24 items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[15px] font-medium text-ink-soft transition-colors hover:text-brand-orange"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <motion.a
              href={contato.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a ATOPY no WhatsApp"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-wa/40 px-4 py-2 text-sm font-semibold text-wa-dark transition-colors hover:bg-wa/10"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </motion.a>
            <motion.a
              href="#catalogo"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-primary transition-colors hover:bg-brand-orange-dark"
            >
              Ver catálogo
            </motion.a>
          </div>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-bg-alt lg:hidden"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink px-8 py-6 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex items-center justify-between">
              <a href="#inicio" onClick={() => setOpen(false)} aria-label="ATOPY — voltar ao início" className="inline-flex items-center">
                <img src={logoImg} alt="ATOPY" className="h-14 w-auto max-h-16 object-contain" />
              </a>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X size={26} aria-hidden="true" />
              </button>
            </div>
            <motion.nav
              aria-label="Navegação móvel"
              className="mt-14 flex flex-col gap-2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: 32 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="rounded-2xl px-4 py-4 font-display text-3xl font-bold text-white transition-colors hover:bg-white/5 hover:text-brand-orange"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
            <motion.a
              href={contato.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.45 } }}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-wa px-6 py-4 text-lg font-semibold text-white"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
