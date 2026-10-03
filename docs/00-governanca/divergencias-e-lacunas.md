# Divergências e lacunas

**Versão:** 1.1 — 03/10/2026 (revisão pós-aprovação da Etapa 00)
**Histórico:** v1.0 (03/10/2026) levantamento inicial · v1.1 (03/10/2026) seis divergências resolvidas por decisão do gestor (DEC-016 a DEC-021), além das regras de contraste, logo e imagens (DEC-022 a DEC-024)

Este arquivo registra contradições entre fontes e informações ausentes. **Nenhuma divergência é resolvida silenciosamente.** Cada item fica `ABERTO` até haver decisão do gestor registrada em [`../07-decisoes/decisoes.md`](../07-decisoes/decisoes.md).

Fontes citadas:
- **NORTE** — `docs/01-estrategia/00_DOCUMENTO_NORTE_NOVO_SITE_DIVINA_FESTA.docx` (27/08/2026)
- **SÍNTESE** — `docs/01-estrategia/01_SINTESE_ESTRATEGICA_PESQUISA_DIVINA_FESTA.docx` (27/08/2026)
- **HANDOFF** — `docs/07-decisoes/06-handoff-home-09-09-2026.md` (09/09/2026), da implementação anterior em WordPress. Vale como referência de conteúdo, UX e decisões aprovadas, **não como obrigação tecnológica** (DEC-016)
- **WIREFRAME** — `docs/04-conteudo/Orientacóes para site.docx` (02/09/2026)
- **ETAPA 00** — instruções do gestor de 03/10/2026
- **FOLDERS** — materiais em `assets/images/source/Material Publicitário/`

> Os documentos-fonte (NORTE, SÍNTESE, HANDOFF, WIREFRAME) **não são editados**: são registros históricos. Quando uma decisão posterior altera o que eles dizem, a decisão fica aqui e em `decisoes.md`.

---

## Resolvidas

| ID | Tema | Resolução | Decisão |
|---|---|---|---|
| DIV-01 | Stack: WordPress × stack não escolhida | Este repositório é o **projeto paralelo programado** do novo site. A stack está **a definir antes da implementação**. WordPress/Kadence pertence à implementação anterior | DEC-016 (substitui DEC-010) |
| DIV-02 | Capacidade na Home | **Home: "até 150 convidados".** **Espaço e Estrutura: "até 150 pessoas sentadas ou até 190 em configuração predominantemente em pé, conforme layout e formato do evento".** O "Até 190" da Prova rápida da implementação anterior não vale para este projeto | DEC-017 |
| DIV-03 | Telefones nos materiais | Telefones oficiais do site principal: **comercial geral (41) 99247-0605** e **Royal/corporativo (41) 99262-0604**. O (41) 9 8535-0605 fica registrado **apenas como dado da linha Divina Essência**, fora da fonte factual principal | DEC-018 |
| DIV-09 | Estacionamento privativo | **Confirmado: estacionamento privativo** | DEC-019 |
| DIV-10 | Divina Essência fora da arquitetura | **Linha/produto separado, a avaliar no futuro.** Não entra na arquitetura principal da primeira versão | DEC-020 |
| DIV-13 | "Familien" × "Familjen" Grotesk | A família pretendida é **Familjen Grotesk** (Google Fonts). As citações "Familien" no HANDOFF são erro de grafia histórico | DEC-021 |

Observação sobre DIV-03: o **Folder Divina V2** traz só o número Royal como contato geral. Corrigir os materiais impressos está fora do escopo do site, mas fica a recomendação de revisá-los na próxima reimpressão.

---

## Abertas

### DIV-04 — Ordem de prevalência dos documentos · ABERTO · baixa
- **NORTE §1:** Documento Norte > Síntese Estratégica > Rodadas de pesquisa > materiais antigos.
- **HANDOFF §2:** Documento Norte > arquitetura vigente > identidade visual > status atual da Home > problemas técnicos > instrução mais recente do gestor.
- **ETAPA 00:** Norte > Síntese > handoffs/decisões recentes > arquitetura > identidade visual > materiais comerciais > pesquisas > antigos.
- Situação: o repositório adota a ordem da ETAPA 00 (DEC-015). Com a DEC-016, o HANDOFF virou referência e não dita mais a ordem. **Falta ratificação explícita** da DEC-015.

### DIV-05 — Documentos citados no HANDOFF que não existem no repositório · ABERTO · baixa
O HANDOFF cita `01-documento-norte.md`, `02-arquitetura-site.md`, `03-identidade-visual.md`, `04-home-status-atual.md` e `05-problemas-tecnicos.md`, que não foram entregues. Os documentos desta etapa os substituem. Como o `05-problemas-tecnicos.md` é da implementação WordPress, perdeu relevância. **Ação:** se os outros quatro existirem, fornecer para conferência de conteúdo.

### DIV-06 — Sequência da Home: 9 × 12 itens · ABERTO · baixa
O NORTE §10 lista 9 seções; a ETAPA 00 lista 12 (Header e Footer explícitos; Localização e CTA final separados). É um refinamento compatível. Falta ratificação.

### DIV-07 — Menu do Header × arquitetura P0 · ABERTO · média
O menu do HANDOFF (Início · Eventos · O Divina · Contato · Solicitar proposta) não inclui Espaço e Estrutura, Gastronomia e Como Funciona, que são P0 ou P0/P1, mas inclui O Divina (P2). Decidir na etapa do Header.

### DIV-08 — CTA do Hero: primário único × dois CTAs · ABERTO · baixa
A SÍNTESE §20 pede um CTA primário único. O Hero aprovado tem "Solicitar Proposta" + "Conhecer o Espaço". É compatível se o segundo for visualmente secundário. Validar na etapa do Hero.

### DIV-11 — Nome "Divina Social" · ABERTO · baixa
Os arquivos `Salão Divina Social*.png` e `Folder Divina Social.png` usam um nome que não aparece em nenhum documento estratégico. Pode ser um salão, uma linha ou um material. A esclarecer.

### DIV-12 — "Divina Festa" × "Divina Festa Buffet" · ABERTO · média
O NORTE usa "Divina Festa". Instagram `@divinafestabuffet`, logo legado e tapete da área infantil usam "Divina Festa Buffet". Isso afeta a consistência de nome entre site, Google Business Profile e schema. Confirmar o nome exato no GBP.

### DIV-14 — Paleta dourada + escuro × alerta da pesquisa · ABERTO · baixa
A SÍNTESE §15 e §27 alertam contra "preto/dourado como atalho para premium". A paleta usa dourado como acento e footer `#282120`. Mitigação parcial: a DEC-022 restringe o dourado claro a acento. Acompanhar na validação visual do design system.

### DIV-15 — Prioridades de Corporativo e Como Funciona · ABERTO · baixa
O NORTE dá P0/P1 a ambas; a SÍNTESE dá P1/P0. O NORTE prevalece. Fica registrado para não reaparecer.

### DIV-16 — Linguagem dos folders × regra de conteúdo do NORTE · ABERTO · baixa
Os folders usam adjetivos ("elegante", "deliciosos", "sofisticação"). O NORTE §7 prefere fatos. **Não copiar** os folders literalmente para o site.

---

## Lacunas de informação

Os códigos L-xx são estáveis. Itens resolvidos ficam riscados para manter a rastreabilidade.

| # | Informação ausente | Onde é necessária | Fonte esperada |
|---|---|---|---|
| L-01 | Metragem da área infantil | Espaço e Estrutura | Gestor (o NORTE diz "a confirmar") |
| L-02 | Número de eventos realizados (o NORTE diz "em torno de 200 — confirmar"). Para uma operação desde 2005, o número parece baixo | Prova / O Divina | Gestor |
| L-03 | Nota e volume atuais de avaliações no Google | Prova social | GBP (validar no lançamento) |
| ~~L-04~~ | ~~Estacionamento~~ — **resolvida**: privativo, confirmado (DEC-019) | — | — |
| L-05 | Processo comercial real (etapas do Como Funciona) | Como Funciona | Gestor/comercial |
| L-06 | Cardápios e formatos de serviço oficiais do espaço (os folders só cobrem a Essência) | Gastronomia | Gestor/cozinha |
| L-07 | Fotos de equipe, cozinha, estacionamento, corporativo, salão ocupado e mini wedding | Várias seções | Sessão fotográfica |
| L-08 | Autorização de uso de imagem (crianças, convidados) e licença ou arquivo sem marca d'água do fotógrafo (`@lucylimafotografia`) | Todas as fotos com pessoas ou marca d'água | Gestor / fotógrafo |
| L-09 | Origem das fotos Bistrô, café colonial, capas Essência e 15 anos (reais × banco/editadas) | Gastronomia; 15 Anos | Gestor |
| L-10 | **Não há logo em SVG confirmado** (nem favicon). Não vetorizar nem redesenhar agora (DEC-023) | Header, Footer, favicon | Designer / arquivos da marca |
| L-11 | Domínio definitivo, hospedagem e ambiente de desenvolvimento | Implantação, SEO | Gestor (depende da stack) |
| L-12 | E-mail de contato, CNPJ/razão social e política de privacidade (LGPD) | Footer, formulários | Gestor / jurídico |
| L-13 | URL e categoria do Google Business Profile; demais perfis sociais | SEO local, schema | Gestor |
| L-14 | Existência e plano do Kommo CRM; contas de GA4/GTM/Ads/Meta já existentes | Integrações | Gestor |
| L-15 | Horário de funcionamento dos eventos (o NORTE só traz o atendimento comercial, 9h–19h) | Localização, schema | Gestor |
| L-16 | Destino do QR code da Essência | Materiais da linha Essência | Verificação |
| L-17 | Os documentos citados no HANDOFF (DIV-05) | Conferência de conteúdo | Gestor |
| L-18 | Qual foto foi usada no Hero da implementação anterior (referência) | Inventário / Home | Implementação WordPress |
| L-19 | **Stack técnica** do novo site: a definir antes da implementação (DEC-016) | Toda a implementação; `src/`, `public/` | Gestor + avaliação técnica |
