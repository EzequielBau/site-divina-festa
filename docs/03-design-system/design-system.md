# Design system

**Versão:** 2.0 — 04/10/2026 — **fundação visual implementada e aprovada** (DEC-034). Substitui a v1.1 (Etapa 00, documental).
**Fontes:** HANDOFF §3, §7, §8 · NORTE §19 · SÍNTESE §13, §27 · DEC-021, DEC-022, DEC-023, **DEC-034**
**Stack:** Astro static-first (DEC-026), CSS próprio, **zero JavaScript no cliente** nesta etapa, sem biblioteca de UI e sem framework JS.
**Implementação:** tokens em `src/styles/tokens.css`; estilos globais em `src/styles/global.css`; componentes-base em `src/components/ui/`; página temporária de validação em `src/pages/index.astro` (será substituída pela Home).
**Legenda:** **[vigente]** = implementado e aprovado (DEC-034) · **[aprovado]** = consta nas fontes · **[proposta]** = ainda sem decisão

---
## 1. Princípios

- **Atemporalidade:** os elementos devem envelhecer bem por anos, não apenas parecer atuais no lançamento. *(NORTE §19)*
- Elegância vem de **fotografia real, tipografia, proporção, espaço em branco e consistência**, não de luxo artificial. *(SÍNTESE §13)*
- **Clareza e velocidade** prevalecem sobre efeitos.
- **Evitar:** parallax excessivo, vídeo em autoplay, animação gratuita, neon, luxo artificial, preto/dourado como atalho para "premium" (SÍNTESE §27, ver DIV-14), cards pesados, sombras e excesso de ícones (HANDOFF §3.2).
- O visual infantil não pode dominar a marca, e o espaço infantil também não pode desaparecer.

## 2. Cores e superfícies [vigente — DEC-034]

| Token | Hex | Papel |
|---|---|---|
| `--color-gold` | `#B88917` | dourado principal: **fundo do CTA principal**, acento, ícones, filetes, títulos grandes |
| `--color-brown` | `#6F5426` | marrom institucional; cor do eyebrow sobre fundo claro |
| `--color-ink-strong` | `#282120` | texto forte, títulos, texto do CTA, superfície escura |
| `--color-text` | `#2F2F2F` | texto |
| `--color-text-muted` | `#6B6B6B` | texto secundário (não usar sobre `#282120`) |
| `--color-sand` | `#DED5C8` | borda neutra |
| `--color-white` | `#FFFFFF` | superfície `default` |
| `--color-cream` | `#FFF9F2` | superfície `soft` |
| `--color-cream-alt` | `#F8F3E8` | superfície `warm` |

**Superfícies (`Section tone`):** `default` `#FFFFFF` · `soft` `#FFF9F2` · `warm` `#F8F3E8` · `dark` `#282120`. O fundo base do site é branco (antes, a v1.1 indicava o creme).

**Papéis semânticos:** os componentes usam papéis (`--color-bg`, `--color-fg`, `--color-heading`, `--color-eyebrow`, `--color-link`, `--color-border`, `--color-focus`, `--color-action-*`), não os hex. `Section tone="dark"` redefine esses papéis localmente.

**CTA principal:** fundo `#B88917`, texto `#282120` (contraste 4,99:1). Hover clareia o fundo (mistura com branco), preservando o contraste do texto.

**`#8F6B16` não é mais cor vigente** de texto nem de CTA. Estava prevista na DEC-022 como "inicialmente" e foi substituída pelo conjunto acima (DEC-034). Não reintroduzir.

### Contraste (WCAG 2.x)

| Texto \ Fundo | `#FFFFFF` | `#FFF9F2` | `#F8F3E8` | `#282120` |
|---|---|---|---|---|
| `#2F2F2F` texto | 13,39 ✅ | 12,80 ✅ | 12,10 ✅ | — |
| `#6B6B6B` secundário | 5,33 ✅ | 5,10 ✅ | 4,82 ✅ | 2,97 ❌ |
| `#282120` forte | 15,81 ✅ | 15,12 ✅ | 14,28 ✅ | — |
| `#6F5426` marrom | 7,07 ✅ | 6,76 ✅ | 6,39 ✅ | 2,24 ❌ |
| `#B88917` dourado | **3,17 ⚠️** | **3,03 ⚠️** | **2,86 ❌** | 4,99 ✅ |
| `#FFFFFF` branco | — | — | — | 15,81 ✅ |

AA exige 4,5:1 para texto normal e 3:1 para texto grande (≥ 24 px regular ou ≥ 18,66 px bold) e para componentes de interface.

**Regras de uso do dourado:**
1. `#B88917` **não** é usado em texto pequeno ou corrido sobre fundo claro (≈ 3:1; sobre `#F8F3E8` nem 3:1).
2. Pode ser usado como fundo do CTA (com texto `#282120`), em detalhes e ícones, e como texto/eyebrow sobre a superfície escura `#282120` (4,99:1).
3. Texto pequeno sobre fundo claro usa `#282120`, `#2F2F2F`, `#6F5426` (eyebrow) ou `#6B6B6B` (secundário).
4. Na superfície escura, o texto usa creme/branco.

## 3. Tipografia [vigente — DEC-034]

| Uso | Família |
|---|---|
| Headings | **Familjen Grotesk** (DEC-021) |
| Corpo e interface | **Source Sans 3** |

Fontes pela API nativa do Astro (baixadas no build e servidas pelo próprio site, arquivo variável 400–700, subset latin, `font-display: swap`). Pesos de uso: 400 texto, 500 interface, 600 headings, botões e labels, 700 pontual.

### Escala fluida (`clamp()`, mobile → desktop)

| Nível | Token | Tamanho |
|---|---|---|
| H1 | `--font-size-display` | 38 → 56 px |
| H2 | `--font-size-h2` | 30 → 40 px |
| H3 | `--font-size-h3` | 24 → 30 px |
| H4 | `--font-size-h4` | 20 → 22 px |
| Lead | `--font-size-lead` | 18 → 20 px |
| Body large | `--font-size-large` | 17 → 18 px |
| Body | `--font-size-body` | 16 → 17 px |
| Small | `--font-size-small` | 14 → 15 px |
| Eyebrow | `--font-size-eyebrow` | 12 → 13 px |

Interpolação entre 360 px e 1280 px de viewport; a parte em `rem` preserva o zoom do navegador. A escala por faixa (56/46/38) da v1.1 foi substituída pela escala fluida.

Entrelinhas: headings 1,05–1,2; lead 1,55; corpo 1,6; small 1,5. Largura de leitura de 60–75 caracteres. Eyebrow em caixa alta com tracking 0,12 em.

## 4. Breakpoints de referência [vigente]

| Referência | Largura | Uso |
|---|---|---|
| tablet | `48rem` / 768 px | `@media (min-width: 48rem)` |
| desktop | `64rem` / 1024 px | `@media (min-width: 64rem)` |
| wide | `80rem` / 1280 px | **só se um componente real exigir** |

CSS não aceita variáveis em media queries; os valores são documentados em `tokens.css`. Abordagem mobile-first. A grade de colunas por faixa (1 / 2 / até 4) segue como orientação de composição das seções, definida em cada seção.

## 5. Containers [vigente]

- `default`: **1200 px** de área útil. `narrow`: **768 px**.
- Gutter fluido de **20 → 40 px** (`clamp()`); a largura máxima considera o gutter fora da área útil.
- Faixas full-width só para fundos de seção, nunca para linhas de texto.

## 6. Espaçamento [vigente]

- Escala: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 120 px** (`--space-4` a `--space-120`).
- Ritmo vertical de `Section` (fluido): `compact` 48 → 64 px · `default` 64 → 96 px · `spacious` 80 → 120 px.
- O container e a seção controlam o ritmo. Os filhos não carregam margens próprias. *(lição da implementação anterior, HANDOFF §4/§6)*
- `Section` não embute `Container`: usar `<Section><Container>…</Container></Section>`.

## 7. Componentes-base [vigente — DEC-034]

Cinco componentes em `src/components/ui/`, em Astro, com CSS escopado e sem JavaScript:

| Componente | Função |
|---|---|
| `Container` | largura máxima e gutter (`size`: `default` · `narrow`) |
| `Section` | ritmo vertical e superfície (`spacing`: `compact` · `default` · `spacious`; `tone`: `default` · `soft` · `warm` · `dark`) |
| `Button` | `<a>` com `href`, senão `<button type="button">`; `variant`: `primary` · `secondary` |
| `TextLink` | link editorial, sublinhado e seta em CSS |
| `Eyebrow` | rótulo curto acima do título (marrom no claro, dourado no escuro) |

- [aprovado] CTA principal: **"Solicitar proposta"**. Secundário: "Conhecer o espaço".
- **Primário:** fundo `#B88917`, texto `#282120`, altura mínima de 48 px.
- **Secundário:** transparente, contorno de 1 px e texto em `#282120` (papel `--color-heading`).
- **TextLink:** sublinhado, seta decorativa, área de toque mínima de 44 px.
- Área de toque mínima de 44×44 px.
- Novos componentes (Header, Footer, Hero, cards etc.) dependem de etapa própria.

## 8. Bordas, radius e sombras [vigente]

- Radius: `--radius-sm` **6 px** · `--radius-md` **10 px** (padrão do site) · `--radius-lg` **16 px**. Evitar pílulas.
- Borda neutra de 1 px em `#DED5C8`.
- **Sombras:** evitar por padrão ([aprovado] HANDOFF: "sem sombras"). Única prevista: `--shadow-float`, muito suave, para elementos flutuantes (header sticky, drawer). Cards não recebem sombra.

## 9. Hover, focus e movimento [vigente]

- Transição discreta de 180 ms (`--motion-duration`). Hover do CTA clareia o fundo; imagens com zoom ≤ 1,03 ([aprovado] HANDOFF §3.3) quando houver.
- `prefers-reduced-motion` respeitado em `global.css`.
- **Foco visível obrigatório:** `:focus-visible` com contorno de 2 px e offset de 3 px, em `#282120` sobre claro e creme sobre a superfície escura. Nunca `outline: none` sem substituto.
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
- Fontes: carregadas pela API nativa do Astro e servidas pelo próprio site (Etapa 01, aprovada).
