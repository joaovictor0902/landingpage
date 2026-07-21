import {
  Wrench,
  HardHat,
  CarFront,
  PlugZap,
  Truck,
  Package,
  MessageCircle,
  ShieldCheck,
  CreditCard,
  Rocket,
  Search,
  Drill,
  Disc3,
  Layers,
  LifeBuoy,
  Droplets,
  Zap,
} from "lucide-react";

export const marcas = ["ATOPY"];

export const categorias = [
  {
    id: "ferramentas",
    titulo: "Ferramentas Profissionais",
    descricao: "Parafusadeiras, serras e furadeiras para o trabalho pesado.",
    icone: Wrench,
    gradiente: "from-brand-orange to-brand-orange-light",
  },
  {
    id: "construcao",
    titulo: "Construção",
    descricao: "Brocas diamantadas, corte e acabamento de alta precisão.",
    icone: HardHat,
    gradiente: "from-ink to-ink-soft",
  },
  {
    id: "pneus",
    titulo: "Pneus e Borracharia",
    descricao: "PneuMax: linha completa para o setor automotivo.",
    icone: CarFront,
    gradiente: "from-brand-blue-dark to-brand-blue",
  },
  {
    id: "hidraulica-eletrica",
    titulo: "Hidráulica e Elétrica",
    descricao: "Conexões, fitas e materiais elétricos certificados.",
    icone: PlugZap,
    gradiente: "from-brand-orange-dark to-brand-yellow",
  },
];

export const diferenciais = [
  {
    icone: Package,
    titulo: "Produtos selecionados",
    descricao: "Qualidade garantida em cada item.",
  },
  {
    icone: MessageCircle,
    titulo: "Atendimento WhatsApp",
    descricao: "Tire dúvidas e compre rápido.",
  },
  {
    icone: ShieldCheck,
    titulo: "Compra segura",
    descricao: "Seus dados protegidos.",
  },
  {
    icone: CreditCard,
    titulo: "Pix · Cartão · Boleto",
    descricao: "Várias formas de pagamento.",
  },
];

export const diferencialBonus = {
  icone: Rocket,
  titulo: "Você decola com a gente",
  descricao: "Mais de 20 anos de experiência distribuindo ferramentas de qualidade.",
};

export const produtos = [
  {
    id: 1,
    codigo: "ATP-2071",
    nome: "Parafusadeira Brushless 20V · 70 N.m",
    precoPix: 389.9,
    precoNormal: 459.9,
    icone: Drill,
    gradiente: "from-brand-orange to-brand-orange-light",
  },
  {
    id: 2,
    codigo: "DTP-0550",
    nome: "Serra Copo Diamantada 50mm DiamantTop",
    precoPix: 79.9,
    precoNormal: 94.9,
    icone: Disc3,
    gradiente: "from-ink to-ink-soft",
  },
  {
    id: 3,
    codigo: "DTP-0650",
    nome: "Kit Brocas Porcelanato 6-50mm",
    precoPix: 149.9,
    precoNormal: 179.9,
    icone: Layers,
    gradiente: "from-brand-orange-dark to-brand-orange",
  },
  {
    id: 4,
    codigo: "PMX-1565",
    nome: "Pneu Aro 15 195/65 R15 PneuMax",
    precoPix: 329.9,
    precoNormal: 389.9,
    icone: LifeBuoy,
    gradiente: "from-brand-blue-dark to-brand-blue",
  },
  {
    id: 5,
    codigo: "HFX-2506",
    nome: "Tubo PVC Soldável 25mm 6m HidroFlex",
    precoPix: 24.9,
    precoNormal: 29.9,
    icone: Droplets,
    gradiente: "from-brand-blue to-brand-blue-dark",
  },
  {
    id: 6,
    codigo: "EFC-2501",
    nome: "Disjuntor DIN 25A EletroForce",
    precoPix: 18.9,
    precoNormal: 23.9,
    icone: Zap,
    gradiente: "from-brand-yellow to-brand-orange",
  },
];

export const comoFunciona = [
  {
    num: "01",
    titulo: "Escolha seus produtos",
    descricao: "Navegue pelo catálogo e monte seu pedido.",
    icone: Search,
  },
  {
    num: "02",
    titulo: "Fale pelo WhatsApp",
    descricao: "Nosso time confirma estoque, valores e frete.",
    icone: MessageCircle,
  },
  {
    num: "03",
    titulo: "Receba seu pedido",
    descricao: "Despachamos e você acompanha até a porta.",
    icone: Truck,
  },
];

export const localizacao = {
  endereco: "Rua Nilton da Cruz Leite, 922 — Jardim Novo Ouro Branco, Paranavaí — PR, 87704-475",
  telefone: "(44) 3421-4500",
  email: "contato@atopy.com",
  horario: "Seg a Sex: 9h às 18h · Sáb: 9h às 13h",
  lat: -23.06845,
  lng: -52.44962,
  mapsLink: "https://www.google.com/maps/dir/?api=1&destination=-23.06845,-52.44962",
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-52.46462%2C-23.07845%2C-52.43462%2C-23.05845&layer=mapnik&marker=-23.06845%2C-52.44962",
};

export const depoimentos = [
  {
    nome: "Carlos Menezes",
    cidade: "Maringá — PR",
    texto: "Pedi parafusadeiras pro time todo e chegou em dois dias. Atendimento rápido no WhatsApp, sem enrolação.",
    iniciais: "CM",
  },
  {
    nome: "Fernanda Ribeiro",
    cidade: "Campo Grande — MS",
    texto: "Preço de distribuidora de verdade. As brocas diamantadas da DiamantTop viraram padrão na nossa obra.",
    iniciais: "FR",
  },
  {
    nome: "João Batista",
    cidade: "Presidente Prudente — SP",
    texto: "Compro pneus PneuMax pra borracharia há mais de um ano. Nunca atrasou e o frete sempre fecha bem.",
    iniciais: "JB",
  },
];

export const contato = {
  whatsapp: "5511999998888",
  whatsappLink:
    "https://wa.me/5511999998888?text=" +
    encodeURIComponent("Olá! Vim pelo site da ATOPY e gostaria de mais informações."),
  cnpj: "00.000.000/0001-00",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export function linkProdutoWhatsApp(nome) {
  return (
    "https://wa.me/" +
    contato.whatsapp +
    "?text=" +
    encodeURIComponent(`Olá! Tenho interesse no produto "${nome}". Pode me ajudar?`)
  );
}

export function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
