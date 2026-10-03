# Design system

**Versão:** 1.1 — 03/10/2026 (Etapa 00, revisada após aprovação) — **documentação, não implementação**
**Fontes:** HANDOFF §3, §7, §8 · NORTE §19 · SÍNTESE §13, §27 · ETAPA 00 · DEC-021, DEC-022, DEC-023
**Stack:** Astro static-first (DEC-026). Os valores abaixo serão implementados como tokens (variáveis CSS) quando a implementação for autorizada.
**Legenda:** **[aprovado]** = consta nas fontes · **[proposta]** = sugestão técnica desta etapa, aguardando aprovação

---

## 1. Princípios

- **Atemporalidade:** os elementos devem envelhecer bem por anos, não apenas parecer atuais no lançamento. *(NORTE §19)*
- Elegância vem de **fotografia real, tipografia, proporção, espaço em branco e consistência**, não de luxo artificial. *(SÍNTESE §13)*
- **Clareza e velocidade** prevalecem sobre efeitos.
- **Evitar:** parallax excessivo, vídeo em autoplay, animação gratuita, neon, luxo artificial, preto/dourado como atalho para "premium" (SÍNTESE §27, ver DIV-14), cards pesados, sombras e excesso de ícones (HANDOFF §3.2).
- O visual infantil não pode dominar a marca, e o espaço infantil também não pode desaparecer.

## 2. Paleta [aprovado]

| Token sugerido | Hex | Papel |
|---|---|---|
| `--color-gold` | `#B88917` | **cor institucional / acento** (detalhes, ícones, títulos grandes) |
| `--color-gold-dark` | `#8F6B16` | dourado escuro: **texto pequeno, botões e elementos que exigem contraste WCAG**; hover (DEC-022) |
| `--color-brown` | `#6F5426` | marrom institucional |
| `--color-ink-strong` | `#282120` | contraste forte (footer, superfícies escuras) |
| `--color-text` | `#2F2F2F` | texto principal |
| `--color-text-muted` | `#6B6B6B` | texto secundário |
| `--color-cream` | `#FFF9F2` | creme principal (fundo base) |
| `--color-cream-alt` | `#F8F3E8` | creme secundário (seções alternadas) |
| `--color-white` | `#FFFFFF` | branco |

### Contraste (WCAG 2.x), calculado nesta etapa

| Texto \ Fundo | `#FFFFFF` | `#FFF9F2` | `#F8F3E8` | `#282120` |
|---|---|---|---|---|
| `#2F2F2F` texto | 13,39 ✅ | 12,80 ✅ | 12,10 ✅ | — |
| `#6B6B6B` secundário | 5,33 ✅ | 5,10 ✅ | 4,82 ✅ | 2,97 ❌ |
| `#282120` forte | 15,81 ✅ | 15,12 ✅ | 14,28 ✅ | — |
| `#6F5426` marrom | 7,07 ✅ | 6,76 ✅ | 6,39 ✅ | 2,24 ❌ |
| `#8F6B16` dourado escuro | 4,90 ✅ | 4,69 ✅ | **4,43 ⚠️** | 3,22 ⚠️ |
| `#B88917` dourado | **3,17 ⚠️** | **3,03 ⚠️** | **2,86 ❌** | 4,99 ✅ |
| `#FFFFFF` branco | — | — | — | 15,81 ✅ |

Referência: AA exige 4,5:1 para texto normal e 3:1 para texto grande (≥ 24 px regular ou ≥ 18,66 px bold) e para componentes de interface.

**Regra de uso do dourado [aprovado — DEC-022]:**
1. **`#B88917` continua sendo a cor institucional/acento.** Serve para ícones, detalhes, filetes, títulos grandes (≥ 24 px) sobre branco ou creme principal, e texto sobre o footer `#282120` (4,99). **Não usar** em texto pequeno ou corrido sobre fundos claros. Sobre `#F8F3E8` não atinge nem 3:1.
2. **Texto pequeno, botões e elementos que exigem contraste WCAG** usam a versão escura, **inicialmente `#8F6B16`**: botão primário com fundo `#8F6B16` e texto branco (≈ 4,9:1); eyebrows em `#8F6B16` ou `#6F5426`.
3. **Pendente de validação no design system:** `#8F6B16` sobre `#F8F3E8` dá **4,43:1**, abaixo de 4,5:1 para texto pequeno. Opções: usar `#6F5426` nas seções em creme secundário, ou escurecer levemente o dourado escuro. O valor final será validado antes da implementação.
4. No footer `#282120`, usar branco ou creme para o texto.

## 3. Tipografia [aprovado]

| Uso | Família | Observação |
|---|---|---|
| Headings | **Familjen Grotesk** | Google Fonts. A grafia "Familien", no handoff, foi corrigida (DEC-021) |
| Body | **Source Sans 3** | Google Fonts |

**[proposta]** Hospedar as fontes localmente (self-host, WOFF2, `font-display: swap`) e carregar só os pesos usados (ex.: 400/600/700), por performance e LGPD.

### Escala [aprovado — HANDOFF §7]

| Nível | Desktop | Tablet | Mobile |
|---|---|---|---|
| H1 | 56 px | 46 px | 38 px |
| H2 | 40 px | 34 px | 30 px |
| H3 | 30 px | 27 px | 24 px |
| Body | 18 px | 17 px | 16 px |

**[proposta]** complementos: eyebrow 14 px caixa alta com tracking ~0,08 em; texto pequeno/legenda 14–15 px; line-height de 1,1–1,2 nos headings e 1,5–1,6 no body; largura de leitura de 60–75 caracteres.

Regra [aprovado]: só configurar valores responsivos quando o controle realmente suportar valores por dispositivo.

## 4. Breakpoints e grid [proposta]

| Faixa | Largura | Grid |
|---|---|---|
| Mobile | < 768 px | 1 coluna (4 colunas de base para alinhamento) |
| Tablet | 768–1024 px | 2 colunas (8 colunas de base) |
| Desktop | > 1024 px | até 4 colunas (12 colunas de base) |

Coerente com o HANDOFF: Tipos de evento em 4 / 2×2 / 1; Hero em 2 colunas / 1; Crianças + adultos em ~55/45 / empilhado. Os breakpoints exatos serão confirmados na implementação. Com Astro e CSS próprio, não há breakpoints impostos por tema.

## 5. Containers [proposta]

- Conteúdo: largura máxima de **1200 px** (área útil), com padding lateral de 20 px no mobile, 32 px no tablet e 40 px no desktop.
- Texto longo: no máximo **720 px**.
- Faixas full-width só para fundos de seção, nunca para linhas de texto.

## 6. Espaçamento [proposta]

- Escala base de 4 px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.
- Ritmo vertical entre seções: 96–128 px no desktop, 64–80 px no tablet e 48–64 px no mobile.
- O container controla o ritmo. Os filhos não carregam margens próprias. *(lição da implementação anterior, HANDOFF §4/§6: margens do tema somadas ao gap causaram discrepância editor × front-end)*

## 7. Botões

- [aprovado] CTA principal: **"Solicitar proposta"**. Secundário: "Conhecer o espaço".
- **Primário:** fundo `#8F6B16` [aprovado, DEC-022 — sujeito à validação], texto branco; [proposta] altura mínima de 48 px, padding horizontal de 24–32 px.
- [proposta] **Secundário:** contorno de 1,5–2 px em dourado escuro e texto em dourado escuro/marrom, com a mesma altura.
- [proposta] **Link de texto:** sublinhado no hover/focus.
- Área de toque mínima de 44×44 px (WCAG 2.5.5 / diretrizes mobile).

## 8. Bordas, radius e sombras [proposta]

- Bordas finas de 1 px em tom de creme mais escuro ou dourado com baixa opacidade, para divisões.
- Radius discreto: **4–8 px** em botões e imagens. Evitar pílulas e cantos muito arredondados (envelhecem rápido).
- **Sombras:** evitar por padrão ([aprovado] HANDOFF: "sem sombras"). No máximo uma sombra muito suave para elementos flutuantes (header sticky, drawer).

## 9. Hover e focus [proposta]

- Hover discreto ([aprovado] HANDOFF §3.3): troca de cor para `#8F6B16`, leve zoom de imagem (≤ 1,03) com transição de 150–250 ms.
- Respeitar `prefers-reduced-motion`.
- **Focus visível obrigatório:** contorno de 2 px em cor de alto contraste (`#282120` sobre claro, branco sobre escuro), com offset de 2 px. Nunca `outline: none` sem substituto.
- Imagem e título dos cards clicáveis; descrição não clicável ([aprovado]).

## 10. Regras de imagem

- Foto real sempre. Banco de imagem só se não houver alternativa real (blacklist do NORTE).
- Regras de uso [aprovado — DEC-024]: fotos com crianças, só com autorização de imagem confirmada; fotos com marca d'água, não usar no site final sem autorização e arquivo adequado; imagens de banco ou origem incerta, não usar como prova real.
- **[proposta] Proporções padrão:** Hero 4:5 ou 3:2 (desktop em 2 colunas) e 4:5 no mobile; cards 4:3 ou 3:2; galerias 3:2.
- Formato WebP/AVIF com fallback, `srcset`/`sizes`, `width`/`height` explícitos (evita CLS) e lazy load fora da primeira dobra. A imagem do Hero carrega com prioridade.
- `alt` descritivo e factual. Não usar o alt para despejar palavras-chave.
- Peso orientativo: até ~200 KB no Hero e até ~120 KB em cards (WebP).
- Os originais nunca são editados. Ver o [inventário](../99-referencias/inventario-imagens.md).

## 11. Ícones [proposta]

Uso mínimo ([aprovado]: "sem excesso de ícones"). Quando necessário, um único conjunto em traço fino, monocromático, em SVG inline.

## 12. Dependências

- Logo: **não há SVG confirmado** (L-10). Não vetorizar nem redesenhar agora (DEC-023); usar os PNGs de `assets/brand/logos/` como referência.
- Validação final do dourado escuro para texto pequeno sobre `#F8F3E8` (DEC-022).
- Na implementação (Astro, DEC-026): confirmar os breakpoints e carregar as fontes por self-hosting (WOFF2, só os pesos usados).
