# SEO do site

**Versão:** 1.0 — 03/10/2026 (Etapa 00)
**Fontes:** NORTE §16–17, §21 · SÍNTESE §23–25 · HANDOFF §1
**Status:** diretrizes. Nada foi implementado. Na stack escolhida (Astro static-first, DEC-026), sitemap, canonical, metatags e schema serão gerados a partir de componentes e da fonte factual centralizada. Qualquer ambiente de desenvolvimento deve ficar em **noindex** até a publicação definitiva, como na implementação anterior *(HANDOFF §1)*.

## Regra fundamental

> **Não criar páginas apenas por variação de keyword ou bairro.** Uma página só existe quando há intenção diferente + necessidade diferente + conteúdo diferente + função comercial própria. *(NORTE §9, §16, §21)*

Cobertura não é repetição. Doorway pages, páginas de bairro sem utilidade e keyword stuffing estão proibidos.

## 1. Clareza semântica (Google e mecanismos de IA)

O Divina deve ser **"extremamente fácil de compreender e extremamente difícil de interpretar errado"**. *(NORTE §17)*

O site precisa permitir que um usuário, o Google ou um assistente de IA responda sem ambiguidade: quem é o Divina, onde fica, que eventos realiza, qual a capacidade e a estrutura, se tem estacionamento, buffet, cozinha, área infantil, acessibilidade e Wi-Fi, como contratar e qual telefone usar. *(SÍNTESE §24)*

A base disso são fatos consistentes, páginas especializadas, conteúdo textual (não só em imagem), reputação, links e dados estruturados compatíveis com o conteúdo visível. **Sem técnicas especulativas de GEO.**

## 2. SEO on-page

### Titles
- Um por página, único, com cerca de 50–60 caracteres.
- Padrão sugerido: `[Assunto da página] em Curitiba | Divina Festa`. Na Home, entidade + categoria + local.
- Não repetir a mesma fórmula com a palavra-chave trocada.

### Descriptions
- Uma por página, única, com cerca de 140–160 caracteres, factual e com um próximo passo claro.
- Usar fatos (700 m², buffet próprio, Mercês) em vez de adjetivos.

### Headings
- **Um H1 por página**, descrevendo o assunto (Home aprovada: *"Um espaço completo para celebrar em Curitiba"*).
- H2 por seção, H3 dentro de seção. Hierarquia sem saltos.
- Eyebrows não são headings, a menos que tenham função semântica.

### Conteúdo
- Original e específico por página. As páginas de evento não reaproveitam texto entre si. *(NORTE §11)*
- Afirmação → prova → benefício. Fatos no lugar de superlativos. *(NORTE §7–8)*
- Informação importante em texto HTML, nunca só dentro de imagem (os folders são exemplo do que não fazer na web).

### Links internos
- A Home leva às páginas de evento, a Espaço e Estrutura, a Gastronomia, a Como Funciona e a Localização.
- Páginas de evento ligam a Gastronomia, Espaço, Como Funciona e aos Eventos Reais do mesmo tipo.
- Cada case de Eventos Reais liga à página do seu tipo de evento.
- Âncoras descritivas. Nada de "clique aqui".

## 3. SEO local

- **NAP idêntico** em todas as superfícies: *Divina Festa · Rua Marcelino Champagnat, 122 · Mercês · Curitiba/PR · (41) 99247-0605*. A forma exata do nome ainda precisa de confirmação (DIV-12).
- Consistência também de horários, capacidade, categoria e atributos entre site, Google Business Profile e demais perfis. *(SÍNTESE §23)*
- A página Localização e Contato concentra endereço normalizado, mapa, chegada, estacionamento e horários.
- Localização usada com naturalidade no texto (Mercês, Curitiba), sem forçar.
- A nota e o número de avaliações do Google são dinâmicos: **verificar perto do lançamento** antes de citar.

## 4. Google Business Profile

- [ ] Confirmar o acesso de proprietário/gestor ao perfil (L-13).
- [ ] Conferir nome, categoria principal ("Espaço para eventos" ou equivalente) e categorias secundárias (buffet etc.).
- [ ] Endereço, telefone, horário, site e atributos (acessibilidade, estacionamento, Wi-Fi) iguais aos do site.
- [ ] Fotos reais atualizadas (salão, área infantil, fachada, gastronomia).
- [ ] Rotina de resposta a avaliações.
- [ ] No lançamento, atualizar a URL do site e as UTMs (ver integrações).

## 5. Google Search Console

- Verificar a propriedade (preferencialmente por domínio, via DNS) **antes** do lançamento.
- Enviar o sitemap e acompanhar indexação, cobertura, Core Web Vitals e consultas.
- Se houver site antigo: mapear URLs antigas → novas e configurar **redirecionamentos 301** antes de trocar.

## 6. Bing Webmaster Tools

- Verificar o site (é possível importar do Search Console) e enviar o sitemap.
- Relevante também porque o índice do Bing alimenta alguns assistentes de IA.

## 7. Dados estruturados (schema.org, JSON-LD)

Só marcar o que está **visível e verdadeiro** na página.

| Página | Tipo sugerido |
|---|---|
| Global / Home | `LocalBusiness` (subtipo adequado, ex.: `EventVenue`) com `name`, `address`, `geo`, `telephone`, `openingHoursSpecification`, `url`, `logo`, `image`, `sameAs` (redes sociais e GBP) |
| Todas | `WebSite`; `BreadcrumbList` nas páginas internas |
| FAQ | `FAQPage` só se as perguntas estiverem visíveis. O Google restringiu os rich results de FAQ, então o valor está mais na clareza do que no snippet |
| Eventos Reais | `Article` ou nenhum. **Não usar `Event`** para eventos privados passados |
| Avaliações | **Não marcar autoavaliações** (`Review`/`AggregateRating` sobre o próprio negócio não gera rich result e viola as diretrizes) |

Validar com o Rich Results Test e o Schema Markup Validator.

## 8. Sitemap

- `sitemap.xml` gerado automaticamente, só com URLs canônicas e indexáveis (sem páginas de agradecimento, busca interna, tags vazias ou anexos de mídia).
- Referenciado no `robots.txt` e enviado ao Search Console e ao Bing.

## 9. Canonical

- Toda página indexável tem um canonical autorreferente absoluto.
- Uma única versão do domínio (https, com ou sem `www`) e uma única convenção de barra final. As outras redirecionam com 301.
- Parâmetros de UTM não geram páginas próprias (o canonical aponta para a URL limpa).

## 10. Robots

- **Desenvolvimento (`dev.divinafesta.com.br`, DEC-030, DEC-033):** no mínimo `<meta name="robots" content="noindex, nofollow">` e o cabeçalho `X-Robots-Tag: noindex, nofollow`. **Não depender só do `robots.txt`**, e não bloquear o rastreamento nele, para que o buscador consiga ler o `noindex`. O `dev` nunca é usado como canonical. O noindex não impede o acesso humano; se for decidido restringi-lo, o mecanismo será definido por nova decisão. Detalhes em [`infraestrutura.md`](../02-arquitetura/infraestrutura.md).
- **Produção:** remover o noindex no lançamento. É o item nº 1 do checklist. A produção é ambiente separado (DEC-033): build próprio com `PUBLIC_ALLOW_INDEXING=true` e sem o `X-Robots-Tag` de bloqueio, que fica só no `dev` (L-22).
- `robots.txt` enxuto. Não bloquear CSS/JS. Bloquear só áreas administrativas e resultados de busca interna.
- Decidir conscientemente a política para crawlers de IA (permitir/bloquear) e registrar a escolha em decisões.

## 11. Eventos Reais como conteúdo

- **Case, não mosaico:** tipo de evento, objetivo, convidados aproximados (se autorizado), configuração, gastronomia, necessidade, solução, fotos e depoimento. *(NORTE §14)*
- Cada case é prova, inspiração, conteúdo comercial e long-tail natural ao mesmo tempo.
- Exige autorização do cliente para fotos e dados.

## 12. FAQ

- Perguntas **reais** (do comercial, do WhatsApp e das avaliações), respondidas de forma objetiva e factual.
- As perguntas específicas de cada evento ficam na página do evento. O FAQ geral cobre o transversal (contratação, pagamento, estacionamento, acessibilidade, horários).
- Não criar FAQ para encaixar keywords.

## 13. Checklist pré-lançamento (resumo)

- [ ] noindex removido em produção · [ ] robots.txt revisado · [ ] sitemap enviado (Google e Bing)
- [ ] titles/descriptions únicos · [ ] um H1 por página · [ ] canonical em todas
- [ ] NAP igual ao GBP · [ ] schema validado · [ ] 301 do site antigo
- [ ] Core Web Vitals "bom" no mobile · [ ] alt text revisado · [ ] nota do Google conferida
