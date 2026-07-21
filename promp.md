# PROMPT DE BRIEFING — LANDING PAGE ATOPY

> **Instrução para o Claude Code**: construa uma landing page única, premium e altamente animada para a marca ATOPY (distribuidora de ferramentas e materiais). NÃO use templates genéricos. Todo o design, microinterações e identidade visual devem ser customizados conforme este briefing. Leia este arquivo completo antes de codar.

---

## 0. EXECUÇÃO E ENTREGÁVEL

**Stack obrigatória**:
- **Vite 8** + **React 19** + **JavaScript (JSX)** — não usar TypeScript.
- **Tailwind CSS 4** (via `@tailwindcss/vite`) com tokens de marca definidos via `@theme` no CSS global.
- **Framer Motion** (`framer-motion`) para TODAS as animações de scroll/entrada/hover.
- **Lenis** (`@studio-freight/lenis` ou `lenis`) para smooth scroll premium.
- **lucide-react** para ícones svg.
- Google Fonts **Poppins** (700/800 para títulos) + **Inter** (400–700 para corpo) via `<link>` no `index.html` com preconnect.
- Sem backend (estática). Dados mockados em arquivo `src/data/conteudo.js`.
- Build estático em `dist/` para deploy via SFTP.

**Estrutura de pastas**:
```
src/
  components/
    Header.jsx
    Hero.jsx
    Marcas.jsx
    Categorias.jsx
    Diferenciais.jsx
    Produtos.jsx
    ComoFunciona.jsx
    Localizacao.jsx
    Depoimentos.jsx
    Newsletter.jsx
    Footer.jsx
    WhatsAppFloat.jsx
    SectionReveal.jsx   (wrapper de animação reutilizável)
  data/
    conteudo.js
  hooks/
    useLenis.js
  App.jsx
  main.jsx
  index.css
```

**Checklist final antes de entregar**:
- [ ] `npm run dev` sobe sem erros.
- [ ] `npm run build` gera `dist/` sem警告.
- [ ] Responsivo: breakpoints 360px, 768px, 1024px, 1440px.
- [ ] `prefers-reduced-motion` desativa animações pesadas.
- [ ] Performance: imagens com `loading="lazy"`, fontes com `display=swap`, `dist/` leve.
- [ ] Acessibilidade: `aria-label` em ícones/links, contraste AA, alt em imagens.
- [ ] SEO: `<title>ATOPY — Ferramentas e materiais para você ir além</title>`, meta description OG completo no `index.html`.

---

## 1. IDENTIDADE DA MARCA

**Razão social/grupo**: FIOMAR (detentora). Marca pública: **ATOPY**.
**Natureza**: distribuidora de ferramentas e materiais para construção e indústria, com entrega para todo o Brasil e atendimento humano via WhatsApp.
**Logotipo**: o nome ATOPY forma um **foguete** — a letra **A** (em laranja vibrante) é o bico do foguete, **TOP** em carvão profundo é o corpo, e o **Y** adiciona um ponto/janela em azul elegante. Tema central: **decolar/ir além**.
**Tom de voz**: confiante, ágil, próximo. Sem jargão técnico excessivo. Frases curtas eImpacto.

**Taglines oficiais (use literalmente)**:
- `"A ferramenta certa pra você ir além."` (hero — eyebrow)
- `"O melhor preço, a melhor qualidade. Atendimento ágil pelo WhatsApp."` (hero sub)
- `"Distribuição de produtos selecionados com agilidade e o melhor atendimento. Decole com a ATOPY."` (footer)
- `"Produtos selecionados, atendimento ágil e entrega para todo o Brasil."` (meta)

**Contato real (use em todo lugar, não inventar)**:
- Endereço: **Rua Nilton da Cruz Leite, 922 — Jardim Novo Ouro Branco, Paranavaí — PR, 87704-475**
- Telefone: **(44) 3421-4500**
- E-mail: **contato@atopy.com**
- Horário: **Seg a Sex: 9h às 18h · Sáb: 9h às 13h**
- Geo: lat `-23.06845`, lng `-52.44962` (Paranavaí — PR)
- WhatsApp (placeholder até cliente informar real): `5511999998888` — usar `https://wa.me/5511999998888?text=Olá! Vim pelo site da ATOPY e gostaria de mais informações.`
- CNPJ (placeholder): `00.000.000/0001-00`

**Linhas/marcas distribuídas** (mostrar como selos): `ATOPY`, `Linha Profissional`, `DiamantTop`, `PneuMax`, `EletroForce`, `HidroFlex`.

---

## 2. PALETA DE CORES (TAILWIND @theme)

Definir em `index.css` dentro de `@theme { ... }`:

```css
@theme {
  --color-brand-orange:      #EF6C1A;  /* primária — foguete/CTA */
  --color-brand-orange-dark: #C9550E;  /* hover */
  --color-brand-orange-light:#FF8A3D;  /* gradiente/soft */
  --color-brand-orange-soft: #FFF4EC;  /* wash background */
  --color-brand-yellow:      #F2BD1D;  /* portal/destaque secundário */
  --color-brand-blue:        #3BA4F0;  /* janela do foguete/accent */
  --color-brand-blue-dark:   #2384CF;
  --color-ink:               #1C1C1E;  /* carvão profundo headlines */
  --color-ink-soft:          #3A3A3C;
  --color-ink-muted:         #636366;
  --color-surface:           #FFFFFF;
  --color-bg:               #FAFAFA;
  --color-bg-alt:           #F2F2F7;
  --color-border-soft:      #E5E5EA;
  --color-wa:               #25D366;
  --color-wa-dark:          #1EBE57;
  --color-success:          #30B566;
  --color-danger:           #E04040;
  --color-warning:          #E5A100;

  --font-display: "Poppins", system-ui, sans-serif;
  --font-body:    "Inter", system-ui, sans-serif;

  --shadow-primary:   0 10px 30px -10px rgba(239,108,26,0.45);
  --shadow-primary-lg:0 24px 60px -12px rgba(239,108,26,0.55);
  --shadow-card:      0 1px 2px rgba(28,28,30,.06), 0 8px 24px -8px rgba(28,28,30,.12);
}
```

**Regras de uso cromático**:
- Background geral: `--color-bg` (`#FAFAFA`) com seções alternando para `--color-surface` e `--color-ink` (dark sections para drama).
- Headlines em `--color-ink`; subtítulos em `--color-ink-muted`.
- CTAs primários: laranja sólido `--color-brand-orange` com hover subindo para gradiente `orange→orange-light`. CTAs secundários: outline laranja.
- WhatsApp em cor `--color-wa` única (não misturar com laranja no mesmo botão).
- Use glow laranja (`box-shadow: var(--shadow-primary)`) para destacar elementos hero.
- Pelo menos **uma seção dark** (hero ou "Como funciona") em `--color-ink` com texto branco e acentos laranja — cria contraste cinematográfico.
- Gradientes permitidos: `linear-gradient(135deg, #EF6C1A, #FF8A3D)` e `linear-gradient(135deg, #1C1C1E, #2C2C2E, #1C1C1E)`. Não usar outras combinações que não essas duas.

---

## 3. TIPOGRAFIA

- **Display (h1, h2, h3, números grandes)**: Poppins 700/800. Tamanhos fluidos via `clamp()`: h1 `clamp(2.5rem, 6vw, 5rem)`, h2 `clamp(2rem, 4vw, 3.25rem)`, h3 `clamp(1.25rem, 2.4vw, 1.75rem)`.
- **Corpo**: Inter 400–600. Base 18px (1.125rem), line-height 1.6. Lead paragraph 20px.
-..** Detalhes**: tracking levemente negativo em h1 (`letter-spacing: -0.02em`), uppercase com tracking positivo em eyebrows (`text-xs uppercase tracking-[0.2em]`).
- Use `font-variant-numeric: tabular-nums` só em números de estatísticas.

---

## 4. ANIMAÇÕES (FRAMER MOTION) — OBRIGATÓRIO E PROTAGONISTA

**Princípio**: a landing deve parecer "viva" desde o scroll #1. Nada de elementos estáticos aparecendo sem transição.

Implementar `SectionReveal.jsx` — um wrapper que ao entrar na viewport (use `whileInView` com `viewport={{ once: true, margin: "-80px" }}`) anima os filhos:

1. **Entrada padrão**: `opacity: 0 → 1`, `y: 24 → 0`, `duration: 0.7`, `ease: [0.16, 1, 0.3, 1]` (out-quint suave).
2. **Stagger**: passar `staggerChildren` ao container (cards de lista entram em cascata 80ms entre eles).
3. **Variantes alternadas**: alguns cards com `x: -20 → 0`, outros `x: 20 → 0`, outros `scale: 0.95 → 1`, para evitar repetição monótona.

**Animações específicas requeridas**:

- **Hero**:
  - Eyebrow pill entra com `scale: 0.8 → 1` + um pequeno "ping" no ícone 🚀 (loop infinito `pulse`).
  - h1: clímax da entrada — `y: 30 → 0`, `duration: 0.9`, com a palavra `"ir além"` em `<span class="text-brand-orange">` que recebe um underline gerado por `motion.span` (`scaleX: 0 → 1` com `transformOrigin: left` como se desenhado depois do texto entrar).
  - Par lead entra 100ms depois do h1.
  - Botões entram com `staggerChildren: 0.1` subindo `y: 16 → 0`.
  - Imagem/ilustração do foguete: float contínuo (`y: [0, -12, 0]`, duration 6s, repeat Infinity, ease "easeInOut") DENTRO de um container com glow pulsante (`boxShadow` animando opacidade).
  - Background: gradiente sutil com um `radial-gradient` laranja que se move lentamente via keyframes CSS (`background-position`).
  - Partículas: 6 a 10 `<motion.div>` circulares pequenas (4–10px, laranja/blue/white com baixa opacidade) flutuando aleatoriamente usando valores random por mount — efeito "ciclado de combustão" do foguete.

- **Marcas/Linhas**: chips entram com `stagger` horizontal; em hover cada chip sobe `y: -4` e ganha borda laranja.

- **Categorias (cards grandes)**: cada card tem `whileHover={{ y: -8, scale: 1.02 }}` + borda que acende laranja via `boxShadow` transition. A imagem do card tem `scale: 1.1` em hover (overflow hidden no card).

- **Diferenciais (4 colunas)**: ícone "+ grande" entra com `rotate: -10 → 0` + `scale: 0.8 → 1`; número/título e texto seguem em stagger. Em hover do card, o ícone tremelicar (`x: [0, -2, 2, 0]` rápido 0.3s).

- **Produtos em destaque (rail horizontal)**: implementar carrossel com `framer-motion` drag OU setas laterais. Cards de produto: imagem com hover `scale: 1.05`, preço pix em laranja, badge "Top" rolando do topo `-y: 100% → 0` ao montar. Transição ao trocar slide: `x` swipe com spring.

- **Como funciona (seção dark)**: os 3 passos entram um após o outro; uma linha SVG conectora é desenhada com `pathLength: 0 → 1` (`motion.path`) entre os passos enquanto entram na viewport.

- **Localização**: mapa estático (pode usar `<iframe>` do OpenStreetMap embed com coords) que entra com `scale: 0.95 → 1`; info card entra pela esquerda com `x: -30 → 0`.

- **Depoimentos**: carrossel infinito horizontal automático (a cada 5s) com pausa em hover, feito com `useAnimationFrame` + transform motion.

- **Newsletter**: input e botão; clicar cadastrar → estado de sucesso com check animado (`pathLength` no SVG de check) + confetti discreto de 12 partículas laranja dispersas.

- **Footer**: links entram em stagger ao montar; logo ATOPY no topo do footer com hover `scale: 1.04`.

- **WhatsApp float button** (canto inferior direito, fixo): `pulse-ring` perpétuo (anéis laranja expandindo e fade), tooltip "Fale conosco" aparece em hover (`opacity` + `x`).

**Reduced motion**: `useReducedMotion()` do framer-motion — se ativo, trocar todas as variantes por `opacity`-only e desabilitar float/pulse.

---

## 5. ESTRUTURA DA PÁGINA (SEÇÕES, TOP→BOTTOM)

### 5.0 Header (sticky, glassmorphism)
- Topbar ultrafina (height 32px) em `--color-ink` com texto branco: `"Entrega para todo o Brasil · Seg a Sex 9h-18h · Sáb 9h-13h"`.
- Header principal sticky: ao rolar > 60px, ativa `backdrop-blur(20px)` + bg `bg-white/80` + shadow sutil (state animado). Logo ATOPY esquerda (placeholder: texto estilizado com `font-display 800` + `🚀` ou SVG simples). Centro: nav `Início · Catálogo · Diferenciais · Contato`. Direita: botão WhatsApp pill + botão laranja `"Ver catálogo"`.
- Mobile: hamburger abre drawer full-screen com `motion.div` vindo da direita (`x: "100%" → 0`); links stagger; fecha com X.

### 5.1 Hero
Layout 2 colunas (desktop), 1 coluna (mobile) — altura `min-h-[88vh]`.
- **Esquerda**: eyebrow pill `🚀 A ferramenta certa pra você ir além`, h1 `Ferramentas e materiais, tudo em um só lugar` (`tudo em um só lugar` em laranja), sub `"O melhor preço, a melhor qualidade. Atendimento ágil pelo WhatsApp."`, 2 CTAs: primário laranja `"Ver catálogo"`, secundário outline `"Falar no WhatsApp"`. Abaixo: badgets de prova social inline (entrega nacional, +2000 produtos, nota 4.9).
- **Direita**: ilustração/em visual do foguete ATOPY (use placeholder `<div>` em gradiente laranja com `🚀` gigante 8rem centralizado flutuando, OU_svg custom desenhado em React representando foguete abstrato em laranja/blue/ink). Glow pulsante atrás. Partículas ascendentes.

### 5.2 Linhas e marcas
Seção clara. Título "Nossas linhas e marcas". Chips horizontais das 6 marcas com microscópico underlay (logo placeholder = nome em `font-display 700` dentro de pill cinza claro que escurece em hover). Stagger reveal.

### 5.3 Categorias (4 cards grandes)
Título "Tudo o que você precisa, por categoria". Grid 4 colunas (desktop) / 2 (tablet) / 1 (mobile). Cards:
1. **Ferramentas Profissionais** — Parafusadeiras, serras, furadeiras.
2. **Construção** — Brocas diamantadas, cortes e acabamento.
3. **Pneus e Borracharia** — PneuMax: linha completa automotiva.
4. **Hidráulica e Elétrica** — conexões, fitas, materiais elétricos.
Cada card: imagem placeholder (`picsum.photos` semântica ou div gradiente com ícone lucide), título bold, microcopy, link "Ver →" com seta que desloca `x: 4` em hover.

### 5.4 Diferenciais (4 colunas, seção bg-alt)
Título "Por que a ATOPY?". Cada item com ícone lucide grande em laranja:
- 🚚 **Entrega para todo Brasil** — "Agilidade do pedido à porta."
- 💬 **Atendimento WhatsApp** — "Tire dúvidas e compre rápido."
- 🔒 **Compra segura** — "Seus dados protegidos."
- 💳 **Pix · Cartão · Boleto** — "Várias formas de pagamento."
Adicione card extra bônus (5ª ou 6ª col sexta) com ícone 🚀 em destaque: **"Você decola com a gente"** — sub: "Mais de 10 anos experi-ência distribuindo ferramentas em todo o Brasil." (número mockado ajustável).

### 5.5 Produtos em destaque (rail horizontal)
Título "Destaques da ATOPY". 6 produtos mockados em `conteudo.js` (códigos, nomes, preço pix, preço, imagem). Layout: carrossel horizontal com setas laterais (lucide ChevronLeft/Right) e arrastar framer-motion drag. Cada card: imagem quadrada aspect `1/1`, badge "Top" laranja, código pequeno, nome truncate 2 linhas, preço pix em laranja (`R$ X,XX à vista no Pix`), preço normal riscado, botão "Comprar" laranja que abre WhatsApp com mensagem `Olá! Tenho interesse no produto "[nome]". Pode me ajudar?`. Link "Ver catálogo completo →" abaixo.

### 5.6 Como funciona (seção DARK — `--color-ink` bg)
Título branco "Como comprar na ATOPY", eyebrow laranja "Simples assim". 3 passos numerados (01, 02, 03) em laranja grande `font-display 800`:
1. **Escolha seus produtos** — "Navegue pelo catálogo e monte seu pedido." (ícone Search)
2. **Fale pelo WhatsApp** — "Nosso time confirma estoque, valores e frete." (ícone MessageCircle)
3. **Receba em todo Brasil** — "Despachamos e você acompanha até a porta." (ícone Truck)
Linha SVG conectiva animada entre passos (pathLength).

### 5.7 Localização
2 colunas: esququerda card info (endereço, telefone, e-mail, horário, botão "Como chegar" → Google Maps dir), direita mapa (`<iframe>` OpenStreetMap embed `bbox` em torno das coords). Reveal com info slide-in da esquerda e mapa scale-in.

### 5.8 Depoimentos (carrossel infinito automático)
3 depoimentos mockados (nome, cidade, texto curto, 5 estrelas, initiais avatar). Carrossel automático 5s com pausa em hover.

### 5.9 Newsletter
Bg gradiente laranja. Título branco "Receba ofertas e novidades". Sub: "Cadastre seu e-mail e fique por dentro dos lançamentos da ATOPY." Input + botão. Estado de sucesso com check svg animado + confetti discreto.

### 5.10 Footer
Bg `--color-ink`. 4 colunas:
- Col 1: logo ATOPY (texto estilizado) + texto brand `Distribuição de produtos selecionados com agilidade e o melhor atendimento. Decole com a ATOPY.` + ícones sociais (lucide).
- Col 2 "Institucional": Início, Catálogo, Diferenciais, Contato.
- Col 3 "Departamentos": Ferramentas Profissionais, Construção, Pneus, Hidráulica, Elétrica.
- Col 4 "Atendimento": endereço, telefone, e-mail, horário, botão WhatsApp.
Rodapé inferior: seals "Site seguro (HTTPS)", "Pix • Cartão • Boleto", "Dados protegidos" + copyright `© 2026 ATOPY. CNPJ 00.000.000/0001-00 · Paranavaí — PR`.

### 5.11 WhatsApp Float
Botão circular verde WhatsApp (lucide MessageCircle ou svg) fixo bottom-right com `pulse-ring` animado laranja atrás (toque de marca) e tooltip "Fale conosco" em hover.

---

## 6. RESPONSIVIDADE

- **Mobile-first**; breakpoints Tailwind default.
- Container `max-w-[1200px] mx-auto px-6 md:px-8`.
- Hero: 2 colunas em `md+`, 1 coluna mobile (texto primeiro, foguete depois, com altura reduzida `min-h-[80vh]`).
- Categorias: 1 / 2 / 4 colunas.
- Diferenciais: 1 / 2 / 4.
- Header: nav se esconde abaixo de `lg`, vira hamburger.
- Produtos rail: arrastável em touchPOR setas em desktop.
- Footer: 1col mobile, 2 col em `sm`, 4 col `lg`.
- Fontes: usar `clamp()` para fluid type — nada de tamanho fixo em telas pequenas.

---

## 7. DADOS MOCKADOS (`src/data/conteudo.js`)

Exportar:
- `marcas`: `["ATOPY", "Linha Profissional", "DiamantTop", "PneuMax", "EletroForce", "HidroFlex"]`
- `categorias`: array de 4 com `{ id, titulo, descricao, icone }`.
- `diferenciais`: array de 5/6 com `{ icone, titulo, descricao }`.
- `produtos`: array de 6 `{ id, codigo, nome, precoPix, precoNormal, imagem }` — nomes realistas (ex: "Parafusadeira Brushless 20V · 70 N.m", "Serra Copo Diamantada 50mm", "Kit Brocas Porcelanato 6-50mm", "Pneu Aro 15 195/65 R15 PneuMax", "Tubo PVC Soldável 25mm 6m", "Disjuntor DIN 25A EletroForce"). Preços em reais plausíveis.
- `comoFunciona`: array 3 `{ num, titulo, descricao, icone }`.
- `localizacao`: `{ endereco, telefone, email, horario, lat, lng, mapsLink }`.
- `depoimentos`: array 3 `{ nome, cidade, texto, iniciais }`.
- `contato`: `{ whatsapp, whatsappLink, cnpj, instagram, facebook }`.

---

## 8. DETALHES PREMIUM EXIGIDOS

- **Glassmorphism** no header sticky e em 2 cards específicos (complementar laranja/heroi).
- **Cursor reativo**: em desktop (`pointer: fine`), um cursor customizado laranja seguindo o mouse com `framer-motion` `useMotionValue` + `useSpring` (suavizado); cresce ao hover de elementos interáveis. (**Opcional, mas dar alta prioridade** — garante unicidade.)
- **Hover states ricos**: todo CTA/ícone/link tem microinteração (scale, cor, sombra, ou translateY).
- **Scroll progress bar** no topo (1px) animada com `useScroll` + `scaleX`.
- **Acento typo**: palavras-chave dentro de títulos (`"ir além"`, `"tudo em um só lugar"`, `"decolar"`) em `span` laranja + pequeno glow.
- **Texto não genérico**: nada de "Lorem ipsum". Todos os copies derivam deste briefing — adaptar quando necessário mantendo o tom.
- **Não copiar** o site-teste na íntegra. Reinterprete em landing única, mais cinematográfica, com mais animação e seções menos "e-commerce" e mais "conversão institucional".

---

## 9. PROIBIÇÕES

- ❌ Templates/clones (Bootstrap default, Tailwind UI, ShadCN default sem customização profunda).
- ❌ Site excessivamente estático sem animação de scroll.
- ❌ Azuis/púrpuras/verdes fora da paleta oficial (ex: Tailwind `blue-500`).
- ❌ Fonts não-Poppins/Inter.
- ❌ Botões retos (border-radius 0). Sempre `rounded-full` ou `rounded-2xl` ou mais generosos.
- ❌ Copy em inglês. Todo texto em **português brasileiro**.
- ❌ Comentários em código (CLS.md de estilo: zero comentários).
- ❌ Imagens sem `alt` ou sem `loading="lazy"` quando fora do viewport.

---

## 10. DEMO VISUAL DO FOGUETE (PLACEHOLDER HERO)

Como fallback sem arquivo de logo, desenhar um **foguete abstrato SVG inline** (React) consisting de:
- Corpo retangular alto em gradiente `orange→orange-light` (`linearGradient` id="atopy-rocket-body").
- Bico triangular laranja (`#EF6C1A`).
- 2 aletas laterais em azul `--color-brand-blue`.
- 1 janela circular branca/azul-claro.
- Chama na base composta de três `<path>` outdoor laranja/amarelo animadas (`scaleY` cíclico entre 0.8 e 1.2, alternado entre os três).
- Partículas ascendentes (`circle` aleatórias) saindo da base.
Aplicar `animate` ao container de foguete (float 6s).

---

## 11. CRITÉRIOS DE ACEITAÇÃO

A entrega será considerada pronta quando:
1. `npm install && npm run dev` abrir http://localhost:5173 sem erros.
2. Scrollar produza animações visíveis em todas as seções.
3. Hover em todos os botões/cartes scorra/scale.
4. Resolução 360px não quebra layout (textos legíveis, sem scroll horizontal acidental).
5. Lighthouse Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95 (verificar mentalmente mas configurar para alcançar).
6. Visual transmite "marca premium nacional, fintech vibe, mas quente por causa laranja/rocket".

---

**FIM DO BRIEFING. Construa agora.**
