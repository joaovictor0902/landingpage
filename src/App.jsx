import { MotionConfig } from "framer-motion";
import useLenis from "./hooks/useLenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marcas from "./components/Marcas";
import Categorias from "./components/Categorias";
import Diferenciais from "./components/Diferenciais";
import Produtos from "./components/Produtos";
import ComoFunciona from "./components/ComoFunciona";
import Localizacao from "./components/Localizacao";
import Depoimentos from "./components/Depoimentos";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Cursor from "./components/Cursor";

export default function App() {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marcas />
        <Categorias />
        <Diferenciais />
        <Produtos />
        <ComoFunciona />
        <Localizacao />
        <Depoimentos />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}
