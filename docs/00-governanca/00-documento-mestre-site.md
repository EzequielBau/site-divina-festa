# Documento mestre — novo site Divina Festa

**Versão:** 1.4 — 03/10/2026 (DEC-025 a DEC-028)
**Função:** índice central do projeto. Resume e organiza o que já está decidido nos documentos-fonte e nas decisões registradas. **Não cria estratégia nova.** Só diverge do Documento Norte quando cita a decisão aprovada que fundamenta a divergência (DEC-025).

## 0. Natureza deste repositório

Este repositório é o **projeto paralelo programado** do novo site (DEC-016). A implementação anterior em WordPress/Kadence, descrita no handoff de 09/09/2026, **não é obrigação tecnológica** deste projeto. O handoff continua valendo como referência de conteúdo, UX e decisões já aprovadas.

**Stack (DEC-026):** **Astro em arquitetura static-first**, com TypeScript, componentes reutilizáveis e fonte factual centralizada. O frontend é estático. Formulários, Kommo, Meta CAPI, webhooks, WhatsApp e integrações rodam em um **serviço backend independente na VPS**, desacoplado: uma falha de integração não derruba o site. Tracking (GTM, GA4, Pixel, Consent Mode) fica para etapa própria. Nenhum CMS adicional por enquanto.

**Execução (DEC-027, refinada pela DEC-028):**
- **Frontend:** build estático do Astro em **hospedagem desacoplada da VPS** (serviço estático/CDN ou hospedagem web adequada). **Provedor a definir em etapa própria.** Nginx e VPS **não** são requisitos do frontend, e o site deve poder migrar de provedor sem ser refeito.
- **Backend:** serviço separado em **Node.js + TypeScript + Fastify**, na **VPS**, no futuro em `api.divinafesta.com.br`. A VPS fica só para formulários, Kommo, Meta CAPI, webhooks, roteamento de WhatsApp e integrações futuras.
- **Resiliência:** o site institucional **não depende da VPS**. Se ela cair, páginas, imagens, SEO e conteúdo continuam no ar; só as funções da API podem ficar temporariamente indisponíveis.
- **Desenvolvimento:** antes da troca, o novo site fica em **`dev.divinafesta.com.br`**, fora da indexação dos buscadores. O **WordPress atual segue em produção até a aprovação final**.
- **HTTPS** em todo ambiente publicado.
- **Deploy:** inicialmente simples e controlado. CI/CD (GitHub → build → testes → deploy) só no futuro; GitHub Actions não é configurado agora.

Detalhes em [`arquitetura-site.md`](../02-arquitetura/arquitetura-site.md#arquitetura-técnica-dec-026-dec-027-e-dec-028).

**Ainda não há código.** A implementação só começa com autorização expressa.

---

## 1. Objetivo do projeto

O site deve funcionar como **parte do funil comercial** do Divina Festa, não só como apresentação institucional. Cada página e cada seção precisam ajudar o visitante a avançar da descoberta até o contato e a proposta, reduzindo dúvidas, aumentando a confiança e mostrando valor de forma concreta. *(NORTE §2)*

Jornada-base: **descoberta → identificação → interesse → adequação → desejo → confiança → redução de risco → contato → proposta.**

## 2. Posicionamento

> Um espaço completo e acolhedor para celebrações em Curitiba, capaz de receber bem diferentes gerações no mesmo evento, integrando gastronomia, estrutura infantil, organização, equipe e atendimento para que o anfitrião também possa aproveitar a celebração. *(NORTE §3)*

- **Benefício emocional central:** tranquilidade. **Mecanismo:** organização. **Experiência:** hospitalidade multigeracional. *(SÍNTESE §10)*
- **Não é:** buffet infantil que também aceita outros eventos; espaço de luxo genérico; operação de preço baixo. *(NORTE §3; SÍNTESE §15)*
- **Cinco pilares:** hospitalidade multigeracional · gastronomia demonstrável · organização e tranquilidade · estrutura e conveniência · prova e confiança. *(NORTE §6)*

## 3. Fonte factual vigente

A fonte factual é a tabela do **Documento Norte §5**, **atualizada pelas decisões registradas** (DEC-017 a DEC-019). Nenhum dado pode ser publicado se divergir da tabela abaixo. Na implementação, esta tabela vira **um único arquivo de dados** no código, usado por todas as páginas e pelo schema (DEC-026).

| Informação | Valor vigente | Observação |
|---|---|---|
| Nome | Divina Festa | ver DIV-12 (uso de "Buffet") |
| Categoria | Espaço de eventos + buffet | |
| Endereço | Rua Marcelino Champagnat, 122 — Mercês — Curitiba/PR | |
| Área | Aproximadamente 700 m² | |
| Capacidade — **Home** | "até 150 convidados" | DEC-017 |
| Capacidade — **Espaço e Estrutura** | "até 150 pessoas sentadas ou até 190 em configuração predominantemente em pé, conforme layout e formato do evento" | DEC-017 |
| Estacionamento | **Privativo** | DEC-019 |
| Climatização, espaço infantil, acessibilidade, Wi-Fi, segurança, emergência médica | Sim | |
| Buffet próprio, cozinha própria, decoração, coordenação, equipe incluída | Sim | |
| Eventos simultâneos | Não — um evento por vez | |
| Fundação | 2005 | |
| Eventos realizados | ~200 — **confirmar antes de publicar** | L-02 |
| Avaliações Google | ~4,7/5, ~500 avaliações — **validar no lançamento** | L-03 |
| WhatsApp comercial geral | **(41) 99247-0605** | DEC-018 |
| WhatsApp Royal / corporativo | **(41) 99262-0604** | DEC-018 |
| Atendimento comercial | 9h às 19h | |

Fora da fonte factual principal: o número **(41) 9 8535-0605** pertence só à linha **Divina Essência** (DEC-018, DEC-020) e não pode aparecer como contato do site principal.

## 4. Ordem de prevalência

Aprovada pela **DEC-025** (03/10/2026).

**Regra prévia, aplicada antes da hierarquia:** uma decisão posterior, explicitamente aprovada, registrada com ID e que trate diretamente do ponto em conflito prevalece sobre documentos anteriores.

**Hierarquia:**

1. **Documento Mestre / Governança atual** — `docs/00-governanca/` e os documentos derivados em `docs/02`–`06` (arquitetura, Home, design system, SEO, integrações)
2. **Documento Norte** — `docs/01-estrategia/00_DOCUMENTO_NORTE_…docx`
3. **Síntese Estratégica** — `docs/01-estrategia/01_SINTESE_…docx`
4. **Decisões registradas** — [`docs/07-decisoes/decisoes.md`](../07-decisoes/decisoes.md)
5. **Handoffs** — `docs/07-decisoes/06-handoff-…md` e futuros
6. **Referências e materiais anteriores** — `docs/99-referencias/`, folders, wireframe original, pesquisas

**Salvaguarda:** este Documento Mestre só pode divergir do Documento Norte quando indicar explicitamente qual decisão posterior aprovada fundamenta a divergência. Caso contrário, prevalece o Documento Norte.

Regras operacionais:
- Se houver contradição, ela vai para [`divergencias-e-lacunas.md`](divergencias-e-lacunas.md). **Nunca resolver em silêncio.**
- Uma decisão conta como "explicitamente aprovada e registrada" quando está em `decisoes.md` com ID, data, texto, motivo, impacto e status **Aprovada** dado pelo gestor, e foi commitada.
- Mudanças de posicionamento, arquitetura, fonte factual ou conversão também devem ser registradas no NORTE §22 na próxima revisão do Documento Norte.

## 5. Arquitetura geral

Páginas só existem quando há **intenção diferente + necessidade diferente + conteúdo diferente + função comercial própria**. *(NORTE §9)*

Home (P0) · Eventos: Festa Infantil (P0), Aniversários e Eventos Familiares (P0), 15 Anos (P1), Corporativo e Confraternizações (P0/P1), Mini Wedding (P2), Almoços, Jantares e Recepções (P2) · Espaço e Estrutura (P0) · Gastronomia (P0) · Como Funciona (P0/P1) · Eventos Reais (P1) · O Divina (P2) · FAQ (P2/P3) · Localização e Contato (P0).

**Fora da v1:** a linha Divina Essência (buffet no local do cliente) é um produto separado, a avaliar no futuro (DEC-020).

Detalhes em [`../02-arquitetura/arquitetura-site.md`](../02-arquitetura/arquitetura-site.md). A Home está em [`../04-conteudo/home-estrutura.md`](../04-conteudo/home-estrutura.md).

## 6. Princípios de UX

- A Home **orienta, convence e encaminha**. Não é um catálogo. As páginas internas aprofundam. *(NORTE §10)*
- Cada evento tem jornada própria. **Não reutilizar texto trocando só o nome do evento.** *(NORTE §11)*
- Menu curto, agrupado por Eventos. *(SÍNTESE §27)*
- Galerias precisam ter função comercial e contexto. Nada de carrosséis infinitos.
- Em caso de conflito: clareza > beleza; entendimento > texto criativo; decisão > quantidade; arquitetura simples > mais páginas. *(NORTE §20)*

## 7. Princípios de SEO

- Páginas por **intenção real**, não por variação de palavra-chave ou bairro.
- Títulos e headings claros, conteúdo original, links internos e localização usada com naturalidade.
- NAP, horários, capacidade e atributos idênticos entre site e Google Business Profile.
- Eventos Reais e dúvidas reais como base de conteúdo orgânico. Nada de blog genérico por obrigação.
- IA/buscadores: ser "extremamente fácil de compreender e extremamente difícil de interpretar errado". Sem técnicas especulativas de GEO. *(NORTE §16–17)*

Detalhes em [`../05-seo/seo-site.md`](../05-seo/seo-site.md).

## 8. Princípios de conversão

- O CTA é **o início do atendimento**, não só um botão. *(NORTE §15)*
- Fluxo curto e contextual: **tipo de evento → data → convidados → nome → WhatsApp**.
- Roteamento: comercial geral (41) 99247-0605; Royal/corporativo (41) 99262-0604. São os únicos telefones do site principal (DEC-018).
- A microcopy deve mostrar que o atendimento começa informado. Nada de formulário longo no primeiro contato. *(SÍNTESE §22; NORTE §21)*
- Regra de prova: **afirmação → prova → benefício**. Toda afirmação estratégica precisa responder "como provamos isso?". *(NORTE §8)*

## 9. Princípios mobile

- **Mobile-first:** não comprimir o desktop. Repensar hierarquia, CTA, texto, galerias e formulários para a tela pequena. *(NORTE §19)*
- Botões grandes e claros, sem vários CTAs competindo na mesma dobra. Textos curtos e escaneáveis.
- Ordem mobile definida seção a seção (ex.: em "Crianças + adultos", texto → CTA → foto). *(HANDOFF §3.4)*

## 10. Princípios de performance

- Velocidade prevalece sobre efeitos (NORTE §20).
- Sem parallax excessivo, vídeo em autoplay ou animação gratuita.
- Imagens otimizadas (WebP/AVIF), dimensionadas para o uso e com lazy load fora da primeira dobra. Nunca usar PNG pesado de foto direto no site.
- Geração estática e JavaScript só quando houver necessidade funcional (DEC-026).
- Metas: LCP < 2,5 s, CLS < 0,1 e INP < 200 ms no mobile (Core Web Vitals, faixa "bom"). Serão validadas na implementação.

## 11. Regras para uso de imagens

- **Cada imagem deve provar algo.** Fotografia é argumento comercial. *(NORTE §18)*
- Fotografia real acima de banco de imagem ou ilustração. Banco de imagem está na blacklist quando houver alternativa real.
- A Home não pode ficar infantilizada a ponto de afastar adultos, 15 anos e corporativo, nem esconder a vantagem do espaço infantil.
- Os originais ficam em `assets/images/source/` e não são alterados. As versões web vão para `public/images/web/`.
- Regras de uso (DEC-024):
  - fotos com **crianças**: uso condicionado à confirmação de autorização de imagem;
  - fotos com **marca d'água**: não usar no site final sem autorização e arquivo adequado;
  - imagens de **banco ou origem incerta**: origem a confirmar; não usar como prova real.
- Logo: não há SVG confirmado. Não vetorizar nem redesenhar agora (DEC-023).
- Inventário: [`../99-referencias/inventario-imagens.md`](../99-referencias/inventario-imagens.md).

## 12. Regras para IA

As regras operacionais completas estão em [`/AGENTS.md`](../../AGENTS.md). Em resumo:
- Trabalhar só neste repositório. Remote único: `git@github-divina:EzequielBau/site-divina-festa.git`.
- Consultar este documento e a fonte factual antes de qualquer decisão. **Não inventar dados nem claims sem prova.**
- Trabalhar página por página e seção por seção. Não reabrir decisões já aprovadas sem evidência concreta. *(HANDOFF §11)*
- Stack: Astro static-first em hospedagem estática desacoplada da VPS + backend Node/Fastify independente na VPS (DEC-026, DEC-027, DEC-028). O site não pode depender da VPS para funcionar. **Não instalar, configurar servidor nem criar código sem autorização expressa** para cada etapa.
- Registrar divergências em vez de resolvê-las em silêncio.
- Não apagar, mover ou sobrescrever originais sem autorização.

## 13. Critérios de aprovação

Toda seção ou página só é aprovada se passar nas duas listas:

**Validação do NORTE §23:** clareza · conversão · mobile · confiança · diferenciação · SEO local · compreensão semântica · velocidade · longevidade estética.

**Filtro da SÍNTESE (apêndice):**
1. Ajuda o visitante a entender melhor o Divina?
2. Reduz uma dúvida ou um risco real?
3. Aumenta o desejo de forma coerente com a realidade?
4. Facilita o contato ou a proposta?
5. Funciona bem no celular?
6. Melhora ou preserva a velocidade?
7. Cria informação útil para o Google e para mecanismos de IA?
8. Se sustenta esteticamente por anos?
9. Acrescenta algo que outra seção ainda não resolve?
10. Se for removido, o cliente perde informação importante?

**Padrão de entrega por seção** *(HANDOFF §9)*: objetivo → estrutura/wireframe → texto → configuração desktop/tablet/celular → SEO → CTA e função comercial → o que evitar.

**Blacklist permanente** *(NORTE §21)*: claims de "melhor/maior/mais completo/premium/luxo" sem prova · posicionamento por preço · Home infantilizada · Home adulta genérica · páginas duplicadas por keyword/bairro · formulário longo · fotos de banco · galerias sem contexto · vídeo/animação pesada sem função · inconsistência factual · cópia de concorrentes.

> **Regra-mãe:** o site não deve tentar parecer melhor com mais efeitos, mais palavras ou mais páginas. Deve parecer melhor porque explica melhor, prova melhor, recebe melhor e torna mais fácil decidir e entrar em contato. *(NORTE §23)*

## 14. Mapa da documentação

| Pasta | Conteúdo |
|---|---|
| `docs/00-governanca/` | este documento · [divergências e lacunas](divergencias-e-lacunas.md) · [proposta de prevalência](proposta-ordem-prevalencia.md) (aprovada como DEC-025) |
| `docs/01-estrategia/` | Documento Norte e Síntese Estratégica (`.docx` originais + transcrições `.md`) |
| `docs/02-arquitetura/` | [arquitetura do site](../02-arquitetura/arquitetura-site.md) (páginas e arquitetura técnica) · [comparativo de stack](../02-arquitetura/proposta-comparativo-stack.md) (base da DEC-026) |
| `docs/03-design-system/` | [design system](../03-design-system/design-system.md) |
| `docs/04-conteudo/` | [estrutura da Home](../04-conteudo/home-estrutura.md) · wireframe original `Orientacóes para site` |
| `docs/05-seo/` | [SEO](../05-seo/seo-site.md) |
| `docs/06-integracoes/` | [integrações futuras](../06-integracoes/integracoes-futuras.md) · [eventos de tracking](../06-integracoes/eventos-tracking.md) |
| `docs/07-decisoes/` | [registro de decisões](../07-decisoes/decisoes.md) · handoff 09/09/2026 |
| `docs/08-status/` | [status do projeto](../08-status/status.md) |
| `docs/99-referencias/` | [inventário de imagens](../99-referencias/inventario-imagens.md) · [inventário de documentos](../99-referencias/inventario-documentos.md) |
