# Landing Page ATOPY

Landing page única e animada da marca ATOPY (grupo FIOMAR), construída conforme o briefing em `promp.md`.

## Stack

- Vite 8 + React 19 (JSX)
- Tailwind CSS 4 via `@tailwindcss/vite` (tokens de marca em `@theme` no `src/index.css`)
- Framer Motion (animações de scroll, hover, carrosséis, cursor customizado)
- Lenis (smooth scroll)
- lucide-react (ícones)

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ para deploy via SFTP
npm run preview
```

## Nota sobre a pasta `vendor/`

O firewall corporativo (FortiGate) bloqueia o download de alguns tarballs do registro npm
(`postcss`, `tapable`, `@jridgewell/*`) e das versões mais recentes do `framer-motion`.
Por isso:

- Os pacotes bloqueados foram empacotados localmente em `vendor/*.tgz` e referenciados em
  `package.json` via `file:` + `overrides`.
- `framer-motion` está fixado em `12.1.0` (última versão que o firewall permite baixar),
  com `motion-dom`/`motion-utils` fixados em `12.0.0` para compatibilidade.

Se o bloqueio do firewall for removido, essas entradas podem voltar para versões normais do registro.

## Conteúdo

Dados mockados (produtos, depoimentos, contato, localização) em `src/data/conteudo.js`.
O número de WhatsApp (`5511999998888`) e o CNPJ são placeholders até o cliente informar os reais.
