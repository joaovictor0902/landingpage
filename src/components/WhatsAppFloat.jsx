import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contato } from "../data/conteudo";

export default function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.25 }}
            className="absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-card"
          >
            Fale conosco
          </motion.span>
        )}
      </AnimatePresence>
      <motion.a
        href={contato.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a ATOPY pelo WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pulse-ring relative grid h-16 w-16 place-items-center rounded-full bg-wa text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-colors hover:bg-wa-dark"
      >
        <MessageCircle size={28} aria-hidden="true" />
      </motion.a>
    </div>
  );
}
