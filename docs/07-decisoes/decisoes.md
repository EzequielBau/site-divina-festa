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
Status: Aprovada

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
Status: Aprovada (valor final sujeito à validação no design system)

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
Status: Aprovada. Provedor do frontend definido pela **DEC-029**.

## DEC-029
Data: 03/10/2026
Decisão: **Hospedagem do frontend em Cloudflare Pages** (detalha a DEC-028).

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
Status: Aprovada. Operação do ambiente `dev` detalhada pela **DEC-030**.

## DEC-030
Data: 03/10/2026
Decisão: **Operação do ambiente de desenvolvimento no Cloudflare Pages** (detalha a DEC-029).

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
Status: Aprovada
