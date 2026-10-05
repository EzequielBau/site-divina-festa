# Registro de decisões

Registro cronológico das decisões do projeto. Uma decisão só se sobrepõe a um documento de nível superior (ver a ordem de prevalência no [documento mestre](../00-governanca/00-documento-mestre-site.md)) quando estiver registrada aqui com status **Aprovada**. Mudanças de posicionamento, arquitetura, fonte factual ou conversão também devem ser registradas no NORTE §22.

**Status possíveis:** Aprovada · Aguardando confirmação · Substituída · Revogada

---

## DEC-001
Data: 03/10/2026
Decisão: O código e a documentação do site ficam em um repositório **GitHub privado**: `EzequielBau/site-divina-festa`.
Motivo: Controle de acesso, histórico e backup do projeto, sem exposição pública de documentos estratégicos e de imagens de clientes.
Impacto: Todo o material do projeto passa a ser versionado nesse repositório.
Status: Aprovada (declarada pelo gestor; a visibilidade "privado" não foi verificada tecnicamente nesta etapa)

## DEC-002
Data: 03/10/2026
Decisão: O acesso ao GitHub a partir desta máquina usa uma **Deploy Key exclusiva** do repositório, via o alias SSH `github-divina`.
Motivo: Isolamento. A chave só dá acesso a este repositório, e não à conta inteira.
Impacto: O único remote autorizado é `git@github-divina:EzequielBau/site-divina-festa.git`. Validado em 03/10/2026 (`ssh -T` autenticou com a deploy key; `git ls-remote` respondeu).
Status: Aprovada

## DEC-003
Data: 03/10/2026
Decisão: O workspace local oficial é `C:\Projetos\site-divina-festa`.
Motivo: Local fixo, fora de OneDrive e de pastas pessoais, sem sincronização concorrente.
Impacto: Toda ferramenta ou IA trabalha somente nessa pasta.
Status: Aprovada

## DEC-004
Data: 03/10/2026
Decisão: Assistentes de IA ficam **restritos a este projeto**: sem acesso a outros repositórios, pastas, credenciais globais ou documentos pessoais.
Motivo: Segurança e rastreabilidade.
Impacto: Regras operacionais em `AGENTS.md`.
Status: Aprovada

## DEC-005
Data: 03/10/2026 (reafirma o NORTE §23)
Decisão: O site é desenvolvido **página por página**.
Motivo: Validar cada página contra clareza, conversão, mobile, confiança, diferenciação, SEO local, compreensão semântica, velocidade e longevidade antes de avançar.
Impacto: A ordem segue as prioridades da arquitetura (P0 → P1 → P2).
Status: Aprovada

## DEC-006
Data: 03/10/2026 (reafirma o NORTE §23 e o HANDOFF §9)
Decisão: A Home é construída **seção por seção**, seguindo o padrão objetivo → wireframe → texto → desktop/tablet/celular → SEO → CTA → o que evitar.
Motivo: Evitar retrabalho e manter cada seção alinhada à estratégia.
Impacto: Ver [`home-estrutura.md`](../04-conteudo/home-estrutura.md).
Status: Aprovada

## DEC-007
Data: 03/10/2026
Decisão: **As fotos originais são preservadas**. Ficam em `assets/images/source/`, sem conversão, compressão, renomeação ou exclusão sem autorização. As versões web vão para `public/images/web/`.
Motivo: Não perder qualidade nem a rastreabilidade da origem.
Impacto: Na Etapa 00, as pastas foram movidas de `Imagens/` com nomes intactos e SHA256 conferido (43/43).
Status: Aprovada

## DEC-008
Data: 03/10/2026
Decisão: **Git** é o controle de versão, com commits pequenos e claros e push só com autorização.
Motivo: Histórico auditável e reversível.
Impacto: Fluxo descrito no README. O primeiro commit estrutural aguarda a revisão do gestor.
Status: Aprovada

## DEC-009
Data: 03/10/2026
Decisão: O projeto deve ficar **preparado** para GTM, GA4, Search Console, Google Ads, Meta Pixel, Meta CAPI, Bing Webmaster, formulários, Kommo CRM, webhooks, WhatsApp, APIs, UTMs e dashboards, **sem implementar nada agora**.
Motivo: Medir o funil comercial de ponta a ponta no futuro, sem acoplamento prematuro.
Impacto: Ver [`integracoes-futuras.md`](../06-integracoes/integracoes-futuras.md) e [`eventos-tracking.md`](../06-integracoes/eventos-tracking.md).
Status: Aprovada

## DEC-010
Data: 09/09/2026 (HANDOFF) · registrada em 03/10/2026
Decisão: **WordPress** (Kadence Theme + Kadence Blocks, Fluent Forms, Rank Math, LiteSpeed Cache, hospedagem Hostinger) como plataforma do site, com ambiente em No Index até o lançamento. O handoff diz "Não trocar tema".
Motivo: Consta no HANDOFF de 09/09/2026. Hero e Prova rápida já estão implementados nessa stack.
Impacto: Valeria para a implementação anterior em WordPress.
Status: **Substituída pela DEC-016** em 03/10/2026. WordPress/Kadence pertence à implementação anterior e não é a stack obrigatória deste projeto.

## DEC-011
Data: 09/09/2026 (HANDOFF) · registrada em 03/10/2026
Decisão: Paleta (9 cores) e tipografia (headings **Familjen Grotesk**, body Source Sans 3), com a escala H1/H2/H3/body por dispositivo.
Motivo: Identidade visual definida no HANDOFF §7.
Impacto: Ver [`design-system.md`](../03-design-system/design-system.md).
Status: Aprovada. A grafia da fonte foi corrigida pela DEC-021; o uso do dourado em texto e botões segue a DEC-022.

## DEC-012
Data: 09/09/2026 (HANDOFF) · registrada em 03/10/2026
Decisão: **Conteúdo** do Hero aprovado (eyebrow, H1, texto e CTAs). Copy criada para Prova rápida, Tipos de evento e Crianças + adultos.
Motivo: HANDOFF §3.
Impacto: Não reabrir esse conteúdo sem motivo concreto. A implementação neste projeto é nova (DEC-016). A capacidade da Prova rápida segue a DEC-017 ("até 150 convidados"), não o "Até 190" da implementação anterior. A próxima seção de conteúdo é Gastronomia.
Status: Aprovada

## DEC-013
Data: 09/09/2026 (HANDOFF) · registrada em 03/10/2026
Decisão: Correção do espaçamento editor × front-end no Kadence (CSS escopado à Home).
Motivo: HANDOFF §4.
Impacto: Específica da implementação anterior em WordPress. **Não se aplica a este projeto.** A lição técnica foi incorporada ao design system: o container controla o ritmo vertical e os filhos não carregam margens próprias.
Status: Referência histórica (implementação anterior)

## DEC-014
Data: 03/10/2026
Decisão: Estrutura de pastas `docs/` (00–08, 99), `assets/`, `public/` e `src/`. Os documentos `.docx` ganham transcrições `.md` ao lado, e **o `.docx` prevalece**.
Motivo: Clareza, manutenção, rastreabilidade e leitura fácil por humanos e IA.
Impacto: Ver o README e o [inventário de documentos](../99-referencias/inventario-documentos.md).
Status: Aprovada (03/10/2026, aprovação da organização da Etapa 00)

## DEC-015
Data: 03/10/2026
Decisão: Ordem de prevalência: Norte > Síntese > handoffs/decisões recentes > arquitetura > identidade visual > materiais comerciais > pesquisas > antigos.
Motivo: Instrução da Etapa 00. Diverge da ordem do HANDOFF (DIV-04).
Impacto: Ver o [documento mestre §4](../00-governanca/00-documento-mestre-site.md).
Status: **Substituída pela DEC-025** em 03/10/2026.

## DEC-016
Data: 03/10/2026
Decisão: Este repositório é o **projeto paralelo programado** do novo site. A stack técnica está **a definir antes da implementação**. WordPress/Kadence pertence à implementação anterior e **não** é a stack obrigatória deste projeto.
Motivo: Instrução do gestor ao aprovar a Etapa 00.
Impacto: Substitui a DEC-010. O handoff de 09/09/2026 continua como **referência de conteúdo, UX e decisões aprovadas**, mas não como obrigação tecnológica. Resolve a DIV-01.
Status: Aprovada. A pendência de stack foi resolvida pela **DEC-026** (Astro static-first).

## DEC-017
Data: 03/10/2026
Decisão: Capacidade, com texto canônico por contexto:
- **Home:** "até 150 convidados".
- **Espaço e Estrutura:** "até 150 pessoas sentadas ou até 190 em configuração predominantemente em pé, conforme layout e formato do evento".
Motivo: Clareza na Home sem negar a flexibilidade real do espaço. Oficializa o critério sentadas/em pé.
Impacto: Atualiza a fonte factual de trabalho (documento mestre §3). Deve ser incorporada ao NORTE §22 na próxima revisão do Documento Norte. Resolve a DIV-02.
Status: Aprovada. **Complementada pela DEC-039** (05/10/2026): a redação "predominantemente em pé" foi substituída por "conforme a montagem e o formato", com a informação de uso conjunto do salão e da área infantil. O texto original acima é mantido como histórico.

## DEC-018
Data: 03/10/2026
Decisão: Telefones oficiais do site principal: **comercial geral (41) 99247-0605** e **Royal/corporativo (41) 99262-0604**. O número **(41) 9 8535-0605**, encontrado no folder da Divina Essência, fica registrado **apenas como dado daquela linha específica**: não substitui os oficiais nem entra na fonte factual principal.
Motivo: Consistência de NAP (blacklist do NORTE §21) e separação entre o site principal e a linha Essência.
Impacto: Resolve a DIV-03.
Status: Aprovada

## DEC-019
Data: 03/10/2026
Decisão: O estacionamento é **privativo**, confirmado.
Motivo: Confirmação do gestor.
Impacto: "Estacionamento privativo" pode ser usado como fato. Resolve a DIV-09 e a lacuna L-04. Detalhes como número de vagas, se surgirem, entram como complemento e não bloqueiam.
Status: Aprovada

## DEC-020
Data: 03/10/2026
Decisão: A **Divina Essência** (buffet no local do cliente) é uma linha/produto **separado, a avaliar no futuro**. **Não entra na arquitetura principal da primeira versão.**
Motivo: Preservar o posicionamento de "espaço completo" e o foco da v1.
Impacto: Nenhuma página nem roteamento para a Essência na v1. Seus dados (telefone, cardápios, QR code) ficam registrados à parte. Resolve a DIV-10.
Status: Aprovada

## DEC-021
Data: 03/10/2026
Decisão: A família tipográfica dos headings é **Familjen Grotesk** (Google Fonts). "Familien Grotesk", no handoff e na instrução inicial da Etapa 00, era erro de grafia.
Motivo: Correção solicitada pelo gestor, condicionada a ser a família pretendida. Familjen Grotesk é a família publicada no Google Fonts com esse nome.
Impacto: Body continua em Source Sans 3. Resolve a DIV-13.
Status: Aprovada

## DEC-022
Data: 03/10/2026
Decisão: `#B88917` continua sendo a **cor institucional/acento**. Em **texto pequeno, botões e elementos que exijam contraste WCAG**, usar uma versão validada mais escura, **inicialmente `#8F6B16`**, sujeita à validação no design system.
Motivo: `#B88917` tem contraste 3,03:1 sobre `#FFF9F2` e 3,17:1 com texto branco, abaixo do AA (4,5:1) para texto normal.
Impacto: Ver [`design-system.md`](../03-design-system/design-system.md) §2. Observação: `#8F6B16` sobre `#F8F3E8` dá 4,43:1, ainda abaixo de 4,5:1 para texto pequeno, o que deve ser tratado na validação.
Status: Aprovada. **Valor final de #8F6B16 superado pela DEC-034** (a regra de que #B88917 não serve para texto pequeno sobre fundo claro continua valendo)

## DEC-023
Data: 03/10/2026
Decisão: **Não há logo em SVG confirmado.** Não vetorizar nem redesenhar o logo nesta fase.
Motivo: Instrução do gestor.
Impacto: Lacuna L-10 permanece. Até chegar um arquivo vetorial oficial, os PNGs de `assets/brand/logos/` são a referência.
Status: Aprovada

## DEC-024
Data: 03/10/2026
Decisão: Regras de uso de imagens do inventário:
- Fotos com **crianças** identificáveis: uso **condicionado à confirmação de autorização de imagem**.
- Fotos com **marca d'água**: **não usar no site final** sem autorização e arquivo adequado (sem marca d'água).
- Imagens **aparentemente de banco ou de origem incerta**: **origem a confirmar**; **não usar como prova real**.
Motivo: Proteção legal (direito de imagem, LGPD, direitos autorais) e regra de prova do NORTE §8 e §21.
Impacto: Ver [`inventario-imagens.md`](../99-referencias/inventario-imagens.md).
Status: Aprovada

## DEC-025
Data: 03/10/2026
Decisão: **Ordem de prevalência documental.**

**Regra prévia, aplicada antes da hierarquia:** uma decisão posterior, explicitamente aprovada, registrada com ID e que trate diretamente do ponto em conflito prevalece sobre documentos anteriores.

**Hierarquia** (quando não houver decisão que atenda à regra prévia):
1. Documento Mestre / Governança atual
2. Documento Norte
3. Síntese Estratégica
4. Decisões registradas
5. Handoffs
6. Referências e materiais anteriores

**Salvaguarda:** o Documento Mestre só pode divergir do Documento Norte quando indicar explicitamente qual decisão posterior aprovada fundamenta a divergência. Caso contrário, prevalece o Documento Norte.
Motivo: Proposta em [`proposta-ordem-prevalencia.md`](../00-governanca/proposta-ordem-prevalencia.md), aprovada pelo gestor.
Impacto: Substitui a DEC-015. Resolve a DIV-04. Os documentos derivados do Mestre (arquitetura, Home, design system, SEO, integrações, em `docs/02`–`06`) integram a "Governança atual" (nível 1), conforme a proposta. Na próxima revisão do Documento Norte, registrar no NORTE §22 as decisões que alteram posicionamento, arquitetura, fonte factual ou conversão.
Status: Aprovada

## DEC-026
Data: 03/10/2026
Decisão: **Stack do novo site: Astro em arquitetura static-first**, com TypeScript, componentes reutilizáveis e uma fonte factual centralizada.

O frontend deverá:
- gerar páginas estáticas sempre que possível;
- entregar HTML semântico;
- usar JavaScript apenas quando houver necessidade funcional;
- priorizar Core Web Vitals, SEO, acessibilidade e mobile;
- centralizar os dados factuais do negócio, para evitar inconsistências entre páginas e schema;
- manter conteúdo e código versionados no Git;
- permitir expansão futura sem dependência estrutural de WordPress.

Arquitetura:

```text
Astro static-first ──► frontend / páginas (HTML estático)

VPS / serviço backend independente
  ├── formulários
  ├── Kommo
  ├── Meta CAPI
  ├── webhooks
  ├── WhatsApp
  └── integrações futuras
```

- **O site inteiro não depende de um servidor Node permanente.** O frontend é estático.
- O **backend é desacoplado** do frontend: falhas de integração não podem impedir o funcionamento do site institucional.
- **GTM, GA4, Meta Pixel, Consent Mode** e demais ferramentas serão definidos e implementados em **etapa própria**.
- **Nenhum CMS adicional** agora. Se no futuro for necessário que uma equipe não técnica edite, um CMS poderá ser adicionado sem reconstruir o frontend.

Motivo: Comparativo em [`proposta-comparativo-stack.md`](../02-arquitetura/proposta-comparativo-stack.md) e respostas do gestor (edição pelo próprio gestor, VPS operacional, Hostinger com Node/SSH, prioridade em robustez, velocidade e escalabilidade). A tecnologia fica subordinada ao projeto: geração estática e JS mínimo atendem ao NORTE ("velocidade prevalece sobre efeitos").
Impacto: Resolve a pendência de stack (DEC-016 / L-19) e remove a stack dos bloqueios. Refina a recomendação do comparativo: os endpoints **não** ficam no projeto Astro (adapter Node), mas em um serviço backend independente na VPS. Nada será instalado nem codificado sem nova autorização. Ficam para etapas próprias: a tecnologia do backend, onde o frontend estático será servido, a pipeline de deploy e a ferramenta de tracking.
Status: Aprovada. Detalhes de execução definidos pela **DEC-027**, refinada pela **DEC-028** (hospedagem do frontend).

## DEC-027
Data: 03/10/2026
Decisão: **Arquitetura de execução** (detalha a DEC-026).

> **Parcialmente substituída pela DEC-028** (03/10/2026). Deixam de valer os pontos sobre **hospedagem do frontend** (Nginx na VPS), **servidor** (Nginx servindo o frontend), **ambiente de staging** (`staging.divinafesta.com.br`), o destino do deploy do frontend ("deploy na VPS") e o diagrama "Astro / Nginx → site público". Esses trechos, marcados abaixo com *[substituído pela DEC-028]*, ficam só como registro histórico. Continuam valendo: frontend Astro static-first, backend Node.js + TypeScript + Fastify em `api.divinafesta.com.br`, WordPress em produção até a aprovação final, deploy inicial simples, GitHub Actions não configurado agora e HTTPS.

**Frontend**
- Astro static-first, com TypeScript.
- Geração estática sempre que possível.
- HTML semântico; JavaScript mínimo.
- Componentes reutilizáveis; dados factuais centralizados.

**Hospedagem do frontend** *[substituído pela DEC-028]*
- Produção prevista em **Nginx na VPS**.
- O build do Astro é servido como **arquivos estáticos**.
- O frontend **não depende de um processo Node permanente** para funcionar.

**Backend**
- Serviço separado, em **Node.js + TypeScript**, com **Fastify** como framework inicial previsto.
- Subdomínio futuro: **`api.divinafesta.com.br`**.
- Responsabilidades futuras: formulários, Kommo, Meta Conversions API, webhooks, roteamento de WhatsApp e integrações adicionais.
- **O backend não é requisito para o funcionamento normal das páginas institucionais.**

**Ambiente de staging** *[subdomínio substituído pela DEC-028: `dev.divinafesta.com.br`]*
- Antes de substituir o WordPress atual, o novo site fica disponível em subdomínio de staging, preferencialmente **`staging.divinafesta.com.br`** (ou equivalente aprovado depois).
- **O WordPress atual permanece em produção até a aprovação final do novo site.**

**Deploy**
- No início, processo **simples e controlado**.
- No futuro, CI/CD: **GitHub → build → testes → deploy na VPS**. *[destino do frontend substituído pela DEC-028]*
- **GitHub Actions não será configurado agora.**

**Servidor** *[substituído pela DEC-028]*
- **Nginx** serve o frontend estático e, no futuro, poderá atuar como **reverse proxy** do backend.

**HTTPS**
- Todo ambiente publicado (staging e produção) usa **HTTPS**.

**Separação de responsabilidades** *[substituído pela DEC-028]*

```text
Astro / Nginx   → site público
Node / Fastify  → lógica de servidor e integrações
```

Motivo: Resolver a L-20 com uma arquitetura simples, robusta e desacoplada, coerente com a DEC-026 e com a infraestrutura existente (VPS operacional).
Impacto: Resolve a L-20. Domínio de produção e subdomínios ficam sob `divinafesta.com.br`. A virada do WordPress para o novo site só acontece com aprovação final, e nesse momento entram no checklist de lançamento os redirecionamentos 301, o Search Console e a remoção do noindex. **Nada será instalado, configurado ou programado sem nova autorização.**
Status: Aprovada. **Parcialmente substituída pela DEC-028** em 03/10/2026 (hospedagem do frontend, papel do Nginx, subdomínio de desenvolvimento e destino do deploy do frontend).

## DEC-028
Data: 03/10/2026
Decisão: **Frontend estático desacoplado da VPS.** Refina a DEC-026 e substitui parcialmente a DEC-027 nos pontos sobre hospedagem do frontend.

**Frontend**
- Astro static-first, com TypeScript e build estático.
- **Hospedagem desacoplada da VPS.** O frontend poderá ficar em serviço estático/CDN ou em hospedagem web adequada.
- **A escolha do provedor fica para etapa própria.** Exemplos possíveis, sem escolha nesta etapa: Hostinger, Cloudflare Pages, Netlify, Vercel ou outra hospedagem estática/CDN.
- **Nginx e VPS não são requisitos do frontend.**

**Backend / integrações (VPS)**
- A VPS fica **apenas** para o que exige processamento de servidor: formulários, Kommo, Meta Conversions API, webhooks, roteamento de WhatsApp e integrações futuras.
- Serviço separado em **Node.js + TypeScript**, com **Fastify** como framework previsto.
- Subdomínio futuro: **`api.divinafesta.com.br`**.

**Regra de resiliência**
- O funcionamento normal do site institucional **não pode depender da VPS**.
- Se a VPS ficar indisponível, a Home e as demais páginas continuam carregando, as imagens continuam disponíveis, o SEO continua acessível e o conteúdo institucional continua online.
- Só as funcionalidades que dependem da API podem ficar temporariamente indisponíveis.

**Portabilidade**
- O frontend deve poder migrar entre provedores **sem refazer o site**: a saída do build é um conjunto de arquivos estáticos, sem recursos exclusivos de um provedor como requisito.

**Ambiente de desenvolvimento**
- Subdomínio aprovado: **`dev.divinafesta.com.br`** (substitui `staging.divinafesta.com.br`, da DEC-027).
- Fica **fora da indexação** dos mecanismos de busca até o lançamento.
- O WordPress atual continua em produção até a aprovação final (mantido da DEC-027).

**Nginx**
- Deixa de ser requisito do frontend. Pode ser usado no futuro na VPS, como reverse proxy do backend, ou para servir o frontend se algum dia o site estático for hospedado na própria VPS. **Não é dependência estrutural do site.**

**Deploy**
- Mantido da DEC-027: início simples e controlado; GitHub Actions não configurado agora.
- Futuro: CI/CD **GitHub → build → testes → deploy**, com o frontend publicado no provedor escolhido e o backend na VPS, em pipelines independentes.

**Separação de responsabilidades**

```text
Astro (build estático) → hospedagem estática/CDN → site público
Node / Fastify (VPS)   → api.divinafesta.com.br  → formulários e integrações
```

Motivo: Com o frontend servido pela VPS, uma queda da VPS derrubaria o site inteiro, o que contraria a premissa da DEC-026 de que falhas de servidor e integração não podem afetar o site institucional. Separar a hospedagem elimina esse ponto único de falha e mantém o frontend portável.
Impacto: Resolve a DIV-17. Atualiza a L-11 (subdomínio confirmado: `dev.divinafesta.com.br`; falta o acesso ao DNS) e abre a L-21 (escolha do provedor de hospedagem do frontend). **Nada será instalado, configurado ou programado sem nova autorização.**
Status: Aprovada. Provedor do frontend definido pela **DEC-029**. Comportamento do formulário em falha do backend detalhado pela **DEC-032**.

## DEC-029
Data: 03/10/2026
Decisão: **Hospedagem do frontend em Cloudflare Pages** (detalha a DEC-028).

> **Parcialmente substituída pela DEC-033** (03/10/2026). Deixa de valer o **Cloudflare Pages como provedor do frontend** (e, com ele, o CNAME para o projeto Cloudflare). O texto abaixo fica como registro histórico. Continuam valendo: build `npm run build` → `dist`, `dev.divinafesta.com.br` fora da indexação, frontend independente da VPS e portabilidade.

- O frontend Astro static-first será hospedado **inicialmente em Cloudflare Pages**.
- **Fonte do deploy:** o repositório GitHub `EzequielBau/site-divina-festa`.
- **Comando de build esperado:** `npm run build`.
- **Diretório de saída estática:** `dist`.
- **Ambiente de desenvolvimento público:** `dev.divinafesta.com.br`, apontando para o projeto Cloudflare Pages por **CNAME**.
- O ambiente `dev` permanece **fora da indexação** até o lançamento.
- O frontend continua **independente da VPS**. A VPS fica reservada ao backend e às integrações (DEC-028).
- **Portabilidade:** o site continua sendo um build estático comum e pode mudar de provedor no futuro sem reconstrução estrutural. Recursos exclusivos do Cloudflare não podem virar requisito do frontend sem nova decisão.

Motivo: Resolver a L-21 com um provedor de hospedagem estática/CDN que publica a partir do GitHub e mantém o site independente da VPS, conforme a DEC-028.
Impacto: Resolve a L-21. Continuam para a etapa de infraestrutura, com autorização: criação e configuração do projeto no Cloudflare Pages, conexão com o GitHub, registro CNAME de `dev` (depende do acesso ao DNS, L-11), mecanismo de bloqueio de indexação do `dev` e estratégia do domínio principal no lançamento (L-22). **Astro não será instalado e o Cloudflare não será configurado sem nova autorização.**
Status: Aprovada. Operação do ambiente `dev` detalhada pela **DEC-030**. **Parcialmente substituída pela DEC-033** em 03/10/2026: o provedor do frontend passa a ser a Hostinger Web Hosting. Continuam valendo build `npm run build` → `dist`, `dev` fora da indexação, independência da VPS e portabilidade.

## DEC-030
Data: 03/10/2026
Decisão: **Operação do ambiente de desenvolvimento no Cloudflare Pages** (detalha a DEC-029).

> **Parcialmente substituída pela DEC-033** (03/10/2026). Deixam de valer a operação e o deploy do `dev` pelo Cloudflare Pages: projeto no Cloudflare, Production branch, publicação automática a cada push em `main`, Custom domains e CNAME para `*.pages.dev`. Esses trechos ficam só como registro histórico. Continuam valendo: acesso ao DNS na Hostinger confirmado, proteção contra indexação do `dev` (meta robots + `X-Robots-Tag`, sem depender só do `robots.txt`) e a possibilidade de restringir o acesso humano com mecanismo a decidir.

**DNS**
- O acesso ao DNS de `divinafesta.com.br`, gerenciado na **Hostinger**, está confirmado.

**Branch e fluxo**
- Durante a fase de desenvolvimento, **`main` é a branch de publicação do ambiente `dev`**.
- Fluxo: **commit → push `main` → Cloudflare Pages → `dev.divinafesta.com.br`**.
- Pode ser alterado antes do lançamento da produção, mediante nova decisão.

**Cloudflare Pages (quando a infraestrutura for autorizada)**
- Conectar **somente** o repositório GitHub `EzequielBau/site-divina-festa`.
- Production branch: `main`.
- Build command previsto: `npm run build`.
- Build output directory previsto: `dist`.
- Domínio temporário oficial: `dev.divinafesta.com.br`.

**Indexação do ambiente dev**
- O `dev` deve ter proteção contra indexação, com **no mínimo**: `<meta name="robots" content="noindex, nofollow">` e o cabeçalho `X-Robots-Tag: noindex, nofollow`.
- **Não depender apenas do `robots.txt`** para impedir indexação.
- Se for decidido restringir também o acesso humano, poderá ser usado o **Cloudflare Access** ou mecanismo equivalente.

**DNS do dev (ordem obrigatória)**
1. Criar o projeto no Cloudflare Pages.
2. Fazer o primeiro deploy.
3. Associar `dev.divinafesta.com.br` em **Custom domains**.
4. Só então criar no DNS da Hostinger o CNAME solicitado pelo Cloudflare, normalmente `dev → <nome-do-projeto>.pages.dev`.
- **Não criar o CNAME antecipadamente.**

Motivo: Fixar a operação do `dev` antes da etapa de infraestrutura, com uma ordem de configuração que evita apontar o DNS para um projeto inexistente e uma proteção contra indexação que não depende só do `robots.txt`.
Impacto: Atualiza a L-11 (o acesso ao DNS deixa de ser pendência). Roteiro em [`infraestrutura.md`](../02-arquitetura/infraestrutura.md). Como `main` publica o `dev`, a retirada do `noindex` em produção precisa ser planejada antes do lançamento (L-22). **Cloudflare não configurado, CNAME não criado e Astro não instalado: tudo depende de nova autorização.**
Status: Aprovada. **Parcialmente substituída pela DEC-033** em 03/10/2026 (operação e deploy do `dev` pelo Cloudflare Pages).

> **Numeração:** não há DEC-031 registrada. O ID DEC-032 foi atribuído pelo gestor; o salto fica registrado aqui para rastreabilidade.

## DEC-032
Data: 03/10/2026
Decisão: **Arquitetura resiliente de formulários e fallback de contato.** Complementa a DEC-026, a DEC-027 (backend Fastify em `api.divinafesta.com.br`) e a DEC-028 (regra de resiliência), sem substituir nenhuma delas.

Objetivo: o cliente envia seus dados normalmente pelo formulário do site, mas uma falha temporária da VPS, da API, do Kommo ou de outra integração **não interrompe o caminho de conversão**.

**1. Localização do formulário**
- O formulário fica no **frontend estático (Astro)**: campos, labels, validação básica de interface, estados de carregamento, mensagens ao usuário, preservação temporária dos dados e fallback para WhatsApp.
- O formulário **não depende da VPS para aparecer nem para funcionar visualmente**.

**2. Envio normal**

```text
Frontend Astro → HTTPS → api.divinafesta.com.br → VPS / Fastify
```

O backend deverá:
- validar novamente todos os dados no servidor;
- normalizar os campos;
- aplicar proteção antiabuso e rate limit;
- registrar origem e UTMs, quando disponíveis;
- criar ou atualizar o lead no Kommo;
- disparar eventos server-side futuros (ex.: Meta CAPI), quando essa etapa for autorizada;
- registrar logs técnicos sem expor dados desnecessários;
- retornar resposta clara de sucesso ou falha ao frontend.

**3. Segurança**
- Nenhuma credencial (Kommo, Meta, API, webhook, banco ou serviço externo) no frontend.
- O navegador **nunca** fala diretamente com Kommo, Meta CAPI ou outro serviço que exija segredo. Toda integração autenticada ocorre no backend.

**4. Validação em duas camadas**
- O frontend pode validar para melhorar a experiência (campo obrigatório, formato de telefone, data, quantidade de convidados, tipo de evento).
- Essa validação **nunca é considerada suficiente**: o backend valida novamente todos os campos.

**5. Fallback obrigatório em caso de falha**
Se o backend não responder, retornar erro, exceder o timeout ou estiver indisponível, o cliente **não pode** perder os dados preenchidos, receber só uma mensagem genérica de erro ou ficar sem caminho de contato.

```text
usuário envia o formulário
        ↓
API responde?
   ├── SIM → lead processado normalmente → confirmação ao usuário
   └── NÃO → manter os dados preenchidos
             → informar de forma simples que o envio não foi concluído
             → oferecer o WhatsApp imediatamente
             → abrir o WhatsApp com os dados do formulário já na mensagem
```

**6. WhatsApp como fallback**
- Usa os mesmos dados preenchidos pelo cliente. Exemplo conceitual:

  ```text
  Olá! Gostaria de solicitar uma proposta para meu evento.

  Tipo de evento: Festa infantil
  Data prevista: 18/11/2026
  Convidados: 80 pessoas

  Tentei enviar pelo site do Divina Festa e estou entrando em contato pelo WhatsApp.
  ```

- O **texto definitivo** será definido na etapa de UX/CRO do formulário.
- A escolha entre o WhatsApp geral e o Royal segue a regra comercial aprovada para o tipo de evento (DEC-018; roteamento em [`integracoes-futuras.md`](../06-integracoes/integracoes-futuras.md)).

**7. Preservação temporária dos dados**
- Manter os valores em memória enquanto o usuário estiver na página.
- **Não limpar** o formulário antes da confirmação real de sucesso.
- Em erro de rede, preservar os campos.
- Armazenamento temporário no navegador só se for realmente necessário, e sem guardar dados por tempo excessivo.
- **Sem persistência permanente** nesta etapa. Não armazenar dados pessoais no navegador sem necessidade.

**8. Timeout e experiência de falha**
- O frontend não fica carregando indefinidamente: chamadas à API têm **timeout controlado**.
- Excedido o tempo: cancelar ou abandonar a tentativa, preservar os dados e oferecer o fallback de WhatsApp.
- O tempo exato será definido na implementação.

**9. Proteção anti-spam e abuso (backend)**
- Rate limit por origem/IP, quando apropriado.
- Limites de tamanho dos campos e tipos de dados esperados.
- Proteção contra payloads inválidos e rejeição de campos inesperados.
- Logs de tentativas anormais.
- **CORS restrito** aos domínios autorizados.
- Timeout nas chamadas externas.
- **CAPTCHA ou Cloudflare Turnstile não são obrigatórios desde o início.** Só entram se houver evidência real de abuso ou spam, para evitar atrito desnecessário na conversão.

**10. Falha parcial de integrações**
- O backend **não trata todas as integrações como uma operação única e inseparável** (ex.: formulário recebido → validação OK → Kommo → Meta CAPI).
- Se o lead foi recebido corretamente e uma integração secundária falhar, isso não resulta necessariamente em erro para o cliente.
- **Prioridade comercial: capturar o contato do cliente primeiro.**
- Integrações secundárias têm tratamento separado, logs e possibilidade de reprocessamento quando necessário.

**11. Logs**
- Suficientes para diagnosticar problemas, sem registrar dados pessoais de forma excessiva.
- **Nunca registrar:** tokens, senhas, segredos, credenciais completas, payloads sensíveis sem necessidade.
- Devem permitir identificar: horário, rota, resultado, erro técnico, integração que falhou e identificador técnico da operação, quando existir.

**12. Monitoramento (etapa de operação futura)**
- Verificações independentes para: site público, endpoint de saúde da API, falhas recorrentes do formulário, erros de integração com o Kommo, expiração de SSL e indisponibilidade do backend.
- O site público continua disponível mesmo se esses serviços falharem.

**13. Princípio de conversão**
- **Nenhuma falha técnica do backend deve eliminar o caminho de contato do cliente.**
- O visitante sempre tem pelo menos um caminho funcional para enviar seus dados, falar pelo WhatsApp e continuar o processo comercial.

**14. Não implementar ainda**
Nesta etapa documental **não** se implementa: formulário definitivo, Fastify, Kommo, Meta CAPI, CAPTCHA, Turnstile, banco de dados, filas, analytics nem webhook.

Motivo: A DEC-028 garante que o site continua no ar se a VPS cair, mas o formulário é o principal ponto de conversão e depende da API. Sem um comportamento de falha definido, uma queda do backend ou de uma integração faria o cliente perder os dados ou o caminho de contato. Esta decisão fixa os requisitos antes da etapa do formulário e do backend.
Impacto: Detalha o "princípio de degradação" já previsto na arquitetura (que deixava o mecanismo para a etapa do backend) e o fallback citado em [`integracoes-futuras.md`](../06-integracoes/integracoes-futuras.md). Ajusta a menção a Turnstile nesse documento: deixa de ser item previsto de saída e passa a ser condicionado a evidência de abuso. `form_submit` só deve contar envio confirmado pelo backend; o rastreamento do fallback fica para a etapa de tracking. Abre a L-23 (texto do fallback e timeout). **Nada será implementado sem nova autorização.**
Status: Aprovada

## DEC-033
Data: 03/10/2026
Decisão: **Hospedagem do frontend na Hostinger Web Hosting.** O ID DEC-031 continua sem uso e não será preenchido retroativamente.

**Arquitetura definitiva**

```text
DESENVOLVIMENTO
  PC local → Git → GitHub privado → Astro build

FRONTEND
  Hostinger Web Hosting
    → somente o conteúdo de dist/
    → dev.divinafesta.com.br durante o desenvolvimento
    → divinafesta.com.br na produção futura

BACKEND
  Hostinger VPS
    → api.divinafesta.com.br
    → Node.js + TypeScript + Fastify
    → formulários / Kommo / Meta CAPI / webhooks / integrações

CLOUDFLARE (opcional, futuro)
  → CDN / WAF / proteção / cache
  → não é requisito estrutural do frontend
```

**Relação com decisões anteriores**
- **Substitui parcialmente a DEC-029**, só onde define o Cloudflare Pages como provedor do frontend.
- **Substitui parcialmente a DEC-030**, só onde define a operação e o deploy do ambiente `dev` pelo Cloudflare Pages (projeto no Cloudflare, Production branch, publicação automática a cada push em `main`, Custom domains e CNAME para `*.pages.dev`).
- Continuam válidos dessas decisões: separação DEV/PROD; `dev.divinafesta.com.br`; `dev` fora da indexação (meta robots e `X-Robots-Tag`, sem depender só do `robots.txt`); frontend desacoplado da VPS; portabilidade; HTTPS; build `npm run build` com saída `dist`; acesso ao DNS na Hostinger confirmado; princípios de segurança e resiliência.
- A **DEC-028** continua válida. A **DEC-032** continua válida integralmente.

**Regra de publicação**
- A Hostinger Web Hosting recebe **somente o build estático `dist/`**.
- **Nunca** publicar no diretório público: `.git`, `docs`, `src`, `node_modules`, `.env`, arquivos de pacote desnecessários, credenciais, chaves ou documentação interna.
- O código-fonte fica **no PC local e no GitHub privado**.

**DEV — `dev.divinafesta.com.br`**
Ambiente oficial de desenvolvimento e validação. Deve:
- usar HTTPS;
- permanecer `noindex, nofollow`;
- enviar o cabeçalho `X-Robots-Tag: noindex, nofollow`;
- não ser usado como canonical das páginas;
- não compartilhar configuração de indexação com a produção.

**Produção — `divinafesta.com.br`**
- Ambiente separado no lançamento. **Não reutiliza cegamente a configuração do DEV.**
- Antes da virada serão revisados: indexação, canonical, sitemap, robots, redirects, analytics, Search Console, headers, cache e domínio raiz e `www`.

**Segurança operacional (requisitos)**
- HTTPS obrigatório.
- Nenhuma credencial no frontend.
- Publicação somente do `dist`.
- Menor privilégio para a futura credencial de deploy.
- Nenhuma edição manual da produção como processo normal.
- Git como fonte de verdade.
- Rollback por versão.
- Atualização controlada de dependências.
- Monitoramento futuro do site e da API.
- Headers de segurança.
- CSP definitiva só quando todas as origens realmente necessárias forem conhecidas.
- Cache longo para assets versionados e política apropriada para HTML.

**Deploy**
- Nesta primeira fase, **manual e controlado**.
- Depois de validado o processo, poderá ser automatizado: **GitHub → build → validação → deploy Hostinger**. **Não automatizar ainda.**
- Consequência: push em `main` **não** publica nada automaticamente. A publicação é um ato separado.

**Cloudflare**
- **Não configurar agora.** Poderá ser adicionado no futuro na frente da Hostinger (CDN, WAF, proteção, cache) sem exigir reconstrução do site.

Motivo: Concentrar frontend e backend no mesmo fornecedor já usado (Hostinger, com DNS e VPS), mantendo o frontend como build estático portável e desacoplado da VPS, conforme a DEC-028. O Cloudflare passa a ser camada opcional, não requisito.
Impacto: Atualiza a L-11 (subdomínio `dev` agora na Hostinger) e a L-22 (domínio principal na Hostinger; a separação DEV/PROD com builds distintos substitui o problema de "`main` publica o `dev`"). Corrige os textos operacionais que tratavam o Cloudflare Pages como destino ativo. O código não muda: a meta robots já é `noindex` por padrão e só a produção define `PUBLIC_ALLOW_INDEXING=true`. **Hostinger e Cloudflare não configurados, DNS não alterado, deploy não automatizado: tudo depende de nova autorização.**
Status: Aprovada

## DEC-034
Data: 04/10/2026
Decisão: **Fundação visual do Design System implementada e aprovada** (Astro static-first, CSS próprio, zero JavaScript no cliente, sem biblioteca de UI nem framework JS). O ID DEC-031 continua sem uso.

- **Cores e superfícies:** `default` `#FFFFFF` · `soft` `#FFF9F2` · `warm` `#F8F3E8` · `dark` `#282120`; dourado principal `#B88917`; marrom `#6F5426`; texto forte `#282120`; texto `#2F2F2F`; texto secundário `#6B6B6B`; borda neutra `#DED5C8`. **`#8F6B16` deixa de ser cor vigente** de texto e de CTA.
- **CTA principal:** fundo `#B88917`, texto `#282120`.
- **Tipografia:** Familjen Grotesk (headings) e Source Sans 3 (corpo e interface). Escala fluida com `clamp()`: H1 38→56 · H2 30→40 · H3 24→30 · H4 20→22 · Lead 18→20 · Body large 17→18 · Body 16→17 · Small 14→15 · Eyebrow 12→13 px.
- **Espaçamento:** 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120 px. **Section:** compact 48→64 · default 64→96 · spacious 80→120 px.
- **Containers:** default 1200 px, narrow 768 px, gutter fluido de 20→40 px.
- **Radius:** sm 6 px · md 10 px · lg 16 px.
- **Breakpoints de referência:** 48rem (768 px), 64rem (1024 px) e 80rem (1280 px) só se necessário.
- **Componentes-base aprovados:** Container, Section, Button, TextLink, Eyebrow. Header, Footer, Hero e Home não fazem parte desta decisão.

Motivo: A validação visual da fundação foi aprovada pelo gestor. Fecha a pendência da DEC-022 (dourado escuro para texto pequeno): o CTA usa `#B88917` com texto `#282120` (4,99:1) e o texto pequeno sobre fundo claro usa `#282120`, `#2F2F2F`, `#6F5426` ou `#6B6B6B`.
Impacto: Atualiza [`design-system.md`](../03-design-system/design-system.md) (v2.0), que passa a ser a referência detalhada dos valores; os tokens ficam em `src/styles/tokens.css` e os componentes em `src/components/ui/`. Substitui, no design system, a paleta com `#8F6B16`, a escala por faixa (56/46/38), o fundo base creme, o radius de 4–8 px e a escala de espaçamento com 128. A página `src/pages/index.astro` é **temporária** (validação visual) e será substituída pela Home.
Status: Aprovada

## DEC-035
Data: 04/10/2026
Decisão: **Header e Footer implementados e aprovados, sem CTA comercial.**

- **Header:** logo · Eventos ▾ (Festas infantis, Eventos familiares, Festa de 15 anos, Eventos corporativos) · O Espaço · Gastronomia · Como funciona. **Sem o botão "Solicitar proposta"**, no desktop e no mobile. Sticky, estado compacto após scroll, dropdown acessível, menu lateral mobile abaixo de 64rem. Divina Essência fora do menu nesta fase (DEC-020).
- **Footer:** institucional e discreto, sem CTA comercial, telefone, WhatsApp ou horário. Logo pequena, linha institucional, navegação, endereço uma única vez e copyright. Altura aproximada de 133 px no desktop.
- **Conversão concentrada em:** Hero, seções de decisão, formulário e botão flutuante de contato (futuro).
- **Redes sociais e Google Maps:** fora do Footer por enquanto. Instagram, Facebook, LinkedIn e link do Google Maps só entram quando URLs oficiais forem fornecidas e validadas (L-13). Nenhuma URL deve ser inventada.

Motivo: O site terá botão flutuante de contato e CTAs dentro das páginas; Header e Footer ficam mais leves e institucionais.
Impacto: Substitui o menu e o CTA do Header previstos no HANDOFF (resolve a DIV-07) e o CTA e os dados de contato do Footer previstos no HANDOFF §8. Atualiza [`home-estrutura.md`](../04-conteudo/home-estrutura.md) (seções 1 e 12). Mantém o Footer sem rota paralela de contato direto, fora do botão flutuante futuro.
Status: Aprovada. **Complementada pela DEC-040** (05/10/2026): o item "Como funciona" saiu do menu e do Footer, entrou "Contato" e o Footer passou a exibir o link do Google Maps. O texto acima é mantido como histórico.

## DEC-036
Data: 04/10/2026
Decisão: **Botões no padrão da referência do site anterior, adaptados ao contraste AA.**

- **Base comum:** formato pílula (`--radius-button` 24 px), Familjen Grotesk 600, 16 px, borda de 1 px, altura mínima de 48 px, sem sombra.
- **Principal:** fundo `#B88917` com texto `#282120` (4,99:1). Mouse por cima: fundo `#8E6B1F` com texto branco (4,92:1). Clicado: um tom mais escuro. Texto branco sobre `#B88917` (3,17:1) não é permitido.
- **Secundário:** fundo branco, borda `#D7C39C`, texto `#6F5426`. Mouse por cima: fundo `#F8F3E8`, borda `#B88917`, texto `#282120`.
- **Outline:** sem fundo, borda `#B88917`, texto `#6F5426`, 15 px. Mouse por cima: fundo `#B88917` com texto `#282120`. Só para fundos claros.
- **Estados:** hover só com mouse (`hover: hover` e `pointer: fine`); clicado (desce 1 px) e foco visível valem em qualquer dispositivo.
- **Hero:** "Solicitar proposta" (principal) + "Conhecer o espaço" (secundário).

Motivo: Aparência mais suave, elegante e atemporal, aprovada pelo gestor a partir das configurações de botão do site anterior (Kadence). O texto branco do estado normal da referência foi trocado por texto escuro porque não atinge o contraste AA; a fonte de 18 px da referência foi mantida em 16 px por decisão do gestor.
Impacto: Substitui parcialmente a DEC-034 em três pontos: formato dos botões (pílula, antes 10 px), fonte dos botões (Familjen Grotesk, antes Source Sans 3) e hover do CTA principal (dourado escuro `#8E6B1F` com texto branco, antes clareamento do dourado). Fora dos botões, `#8F6B16`/`#8E6B1F` continuam fora de uso e o radius padrão segue 10 px. Atualiza [`design-system.md`](../03-design-system/design-system.md) (v2.1), `src/styles/tokens.css` e `src/components/ui/Button.astro`. As imagens de referência ficam em `Referências para design/`, fora do Git.
Status: Aprovada

## DEC-037
Data: 04/10/2026
Decisão: **Imagens em alta definição.** As fotos do site devem ser exibidas nítidas e bonitas. Regra permanente:

- preservar a qualidade visual perceptível: nenhuma perda de nitidez ou definição visível;
- não ampliar além da resolução original;
- preferir a fonte de maior resolução disponível da mesma cena;
- o peso do arquivo não justifica degradação visual perceptível;
- a otimização continua responsiva e eficiente (formatos modernos, `srcset`/`sizes`, larguras adequadas a cada tela, considerando a densidade de pixels).

**Valor validado no Hero atual:** `quality={90}` no `astro:assets`. O padrão do Astro (AVIF 50, WebP/JPEG 80) suavizava detalhes nesta foto. O valor 90 não é obrigatório para todo asset futuro: cada imagem deve ser conferida visualmente, e a qualidade definida pelo resultado.

Motivo: Determinação do gestor: a fotografia real é a principal prova visual do site e precisa ser exibida com a melhor definição possível.
Impacto: Atualiza o §10 de [`design-system.md`](../03-design-system/design-system.md). Substitui a meta de peso orientativo (~200 KB no Hero, ~120 KB em cards), que deixa de ser limite.
Status: Aprovada

## DEC-038
Data: 05/10/2026
Decisão: **Fotos melhoradas (tom quente) passam a ser as preferenciais; versões antigas de dominante azulada saem das seções principais.**

- **Hero:** mantido `Salão Divina Social2.png` (#29). Quente, sem pessoas e institucional; as novas fotos são verticais e quase todas têm pessoas.
- **Crianças + adultos:** `Vista Área kids para o salão.jpg` (#44) substitui `area-infantil-tirolesa-salao.jpg`, que tinha tom azulado/roxo e o rodapé "Conteúdo gerado por IA". Mesma cena, com enquadramento melhor e luz âmbar.
- **Quick facts e Tipos de evento:** sem foto, como definido.
- **Reservadas para as próximas seções** (ainda não existem na Home): #45 feijoada + salão (Gastronomia), #46 comida e decoração (apoio), #47 árvore iluminada e #48 recepção (O Espaço).
- Sem edição, geração ou alteração estrutural das fotos; só substituição, reorganização e registro.

Motivo: Manter a identidade atemporal, quente, clara e comercial (madeira, dourado, luz âmbar), coerente entre Hero e seções seguintes.
Impacto: Atualiza [`inventario-imagens.md`](../99-referencias/inventario-imagens.md) e `KidsAndAdults.astro`. `Festa no Átrio com Fotógrafa e Convidados.png` foi citada mas não existe no repositório. Pessoas identificáveis em #44 e #45 seguem sujeitas à L-08.
Status: Aprovada

## DEC-039
Data: 05/10/2026
Decisão: **Capacidade no contexto Espaço e Estrutura (complementa a DEC-017).** Atualização factual explícita do gestor:

- até **150 pessoas sentadas**;
- até **190 pessoas**, dependendo do formato e da montagem;
- a capacidade máxima considera o **uso conjunto do salão e da área infantil**.

Regras de comunicação:
- **QuickFacts e mensagem geral da Home:** continuam "Até 150 convidados" (DEC-017).
- **Seção Home › Espaço / Estrutura e página Espaço e Estrutura:** podem detalhar 150 sentadas e até 190 conforme montagem e formato, sempre explicando a dependência de layout. A seção da Home é um contexto de Espaço e Estrutura; não há conflito com a DEC-017 nem com o QuickFacts.
- **Nunca** comunicar "190 pessoas sentadas" nem "capacidade para 190 pessoas" isoladamente.
- **Não afirmar proporção** entre pessoas em pé e sentadas: ela não está documentada. A expressão "predominantemente em pé" (DEC-017) deixa de ser usada.

Motivo: Esclarecer a capacidade real sem prometer 190 lugares sentados e sem inventar proporções.
Impacto: Atualiza `src/data/site.ts` (`capacity.detailed`), o documento mestre §3, a DIV-02, `arquitetura-site.md`, `home-estrutura.md` e o CONTEXTO-ATUAL. Documento Norte (§5, §22) e Síntese Estratégica ficam como estão, com a redação anterior ("conforme layout e tipo de evento"), por hierarquia (DEC-025): a redação vigente é a deste registro e deve ser incorporada ao Norte na próxima revisão. O HANDOFF de 09/09/2026 ("predominantemente em pé") é referência histórica.
Status: Aprovada

## DEC-040
Data: 05/10/2026
Decisão: **Navegação e localização (complementa a DEC-035).**

- **Header:** logo · Eventos ▾ (Festas infantis, Eventos familiares, Festa de 15 anos, Eventos corporativos) · O Espaço · Gastronomia · **Contato**. "Contato" aponta para o bloco final da Home (`#contato`) até existir a página de Contato.
- **Como funciona:** permanece na Home (`#como-funciona`), mas **não fica mais no menu nem no Footer**.
- **Footer:** Eventos · O Espaço · Gastronomia · Contato; o endereço passa a vir acompanhado do link **"Ver no Google Maps"** (nova aba). Continua sem CTA comercial, telefone, WhatsApp e horário.
- **Localização:** **deixa de ser uma seção própria da Home.** A informação fica no Footer (endereço + Maps), no Hero (eyebrow com Mercês, Curitiba) e nos fatos de estacionamento (Espaço / Estrutura). A Home termina em Como funciona → CTA final.
- **Link do Google Maps:** o link anterior fazia busca só pelo endereço e mostrava outro imóvel. O novo busca por **nome + endereço** ("Divina Festa Buffet, Rua Marcelino Champagnat, 122, Mercês, Curitiba - PR") e foi **validado manualmente em 05/10/2026**: abre o perfil correto do Divina Festa, no endereço certo. Fica em um único lugar, `site.address.mapsUrl` (`src/data/site.ts`). **Continua provisório** até a URL oficial do perfil resolver a L-13 (que segue aberta); nenhuma nota, número de avaliações ou outro dado do perfil é usado no site.
- **Mapa embutido:** a futura página ou bloco de Contato poderá ter mapa embutido do Google Maps apontando para o Divina Festa, preferencialmente carregado sob demanda para não pesar. **Não está implementado** e depende de aprovação própria.

Motivo: A seção Localização repetia informação que o Footer e o Hero já cobrem e usava um link de Maps que apontava para o lugar errado. "Como funciona" é conteúdo de decisão da Home, não item de navegação; "Contato" é o destino que o visitante procura no menu.
Impacto: Atualiza `Header.astro`, `Footer.astro`, `src/data/site.ts` (`address.mapsUrl`), `src/pages/index.astro`, [`home-estrutura.md`](../04-conteudo/home-estrutura.md), o CONTEXTO-ATUAL, o status e a DIV-07. Substitui, na DEC-035, o item "Como funciona" do menu e a exclusão do Google Maps no Footer (que agora usa o link provisório validado). Redes sociais continuam fora até a L-13.
Status: Aprovada
