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
Status: Aguardando ratificação explícita (DIV-04). Em uso provisoriamente.

## DEC-016
Data: 03/10/2026
Decisão: Este repositório é o **projeto paralelo programado** do novo site. A stack técnica está **a definir antes da implementação**. WordPress/Kadence pertence à implementação anterior e **não** é a stack obrigatória deste projeto.
Motivo: Instrução do gestor ao aprovar a Etapa 00.
Impacto: Substitui a DEC-010. O handoff de 09/09/2026 continua como **referência de conteúdo, UX e decisões aprovadas**, mas não como obrigação tecnológica. Nada de framework ou dependência até a stack ser decidida e registrada. Resolve a DIV-01.
Status: Aprovada

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
