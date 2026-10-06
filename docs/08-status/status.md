# Status do projeto

**Atualizado em:** 06/10/2026 (**DEV criado e publicado; L-11 resolvida; Home publicada no DEV para revisão**) · 05/10/2026 (revisão estratégica da Home, Tipos de evento visual, DEC-040 de navegação e localização, DEC-041 de botões de proposta e botão flutuante, e foto corporativa real aprovadas) — governança, stack e arquitetura de execução decididas (DEC-025 a DEC-030); arquitetura resiliente de formulários registrada (DEC-032); hospedagem do frontend na Hostinger Web Hosting (DEC-033); fundação visual do Design System implementada e aprovada (DEC-034); Header e Footer finalizados (DEC-035); botões no padrão da referência (DEC-036); imagens em alta definição (DEC-037); Hero, provas rápidas e tipos de evento aprovados.

## Concluído

- Repositório GitHub criado (`EzequielBau/site-divina-festa`)
- Chave SSH criada
- Deploy Key configurada (alias `github-divina`)
- Remote isolado validado (`git@github-divina:EzequielBau/site-divina-festa.git`, `ssh -T` e `git ls-remote` OK em 03/10/2026)
- Auditoria de documentos ([inventário](../99-referencias/inventario-documentos.md))
- Auditoria de imagens: 43 arquivos, dimensões, SHA256 e 3 duplicatas confirmadas ([inventário](../99-referencias/inventario-imagens.md))
- Estrutura de pastas criada e arquivos movidos com integridade conferida (47/47 hashes idênticos)
- Documentação-base completa e **organização aprovada pelo gestor** (DEC-014)
- Commits documentais enviados ao GitHub: `1ddd9e3` (estrutura), `67381de` (DEC-025/026), `348386d` (DEC-027), `16c3e36` (DEC-028), `79b353a` (DEC-029), `5c3e3d3` (DEC-030) e `948ef08` (DEC-032)
- Decisões canônicas: natureza do projeto (DEC-016), capacidade (DEC-017), telefones (DEC-018), estacionamento privativo (DEC-019), Divina Essência fora da v1 (DEC-020), Familjen Grotesk (DEC-021), contraste do dourado (DEC-022), logo (DEC-023), regras de imagem (DEC-024)
- **Ordem de prevalência documental aprovada** (DEC-025)
- **Stack decidida: Astro static-first + backend independente na VPS** (DEC-026)
- **Arquitetura de execução decidida** (DEC-027): backend Node.js + TypeScript + Fastify na VPS (`api.divinafesta.com.br`, futuro); WordPress atual em produção até a aprovação final; HTTPS; deploy inicial simples, CI/CD no futuro
- **Frontend estático desacoplado da VPS** (DEC-028, substitui parcialmente a DEC-027): build estático em hospedagem estática/CDN (provedor definido depois pela DEC-029); Nginx e VPS não são requisitos do frontend; o site continua no ar se a VPS cair; desenvolvimento em `dev.divinafesta.com.br`, fora da indexação
- ~~Hospedagem do frontend em Cloudflare Pages~~ (DEC-029) e ~~operação do dev no Cloudflare Pages~~ (DEC-030): **substituídas parcialmente pela DEC-033**. Seguem valendo o build `npm run build` → `dist`, o acesso ao DNS na Hostinger e a proteção contra indexação do `dev`
- **Hospedagem do frontend decidida: Hostinger Web Hosting** (DEC-033): só o `dist/` é publicado; `dev.divinafesta.com.br` (noindex, HTTPS) e, no lançamento, `divinafesta.com.br` como ambiente separado; backend na Hostinger VPS; deploy manual e controlado nesta fase; Cloudflare opcional e futuro. Nada configurado ainda. Roteiro em [`infraestrutura.md`](../02-arquitetura/infraestrutura.md)
- **Arquitetura resiliente de formulários decidida** (DEC-032, só documental): formulário no frontend estático; envio por HTTPS a `api.divinafesta.com.br` com revalidação no backend; credenciais só no backend; em falha ou timeout, dados preservados e WhatsApp com mensagem pré-preenchida; integrações secundárias tratadas à parte; CAPTCHA/Turnstile só com evidência de abuso. Nada implementado
- Revisões de consistência interna da documentação
- **Etapa 01: base técnica do projeto Astro** (Astro 7.3.5, Node 24): TypeScript `strictest`; fonte factual em `src/data/site.ts`; tokens em `src/styles/tokens.css`; `BaseLayout.astro` com meta robots `noindex, nofollow` por padrão; página técnica provisória. Build sem erros e sem JavaScript no cliente. **Aprovada pelo gestor**, incluindo as escolhas técnicas: fontes pela API nativa do Astro (baixadas no build e servidas pelo próprio site, arquivo variável 400–700, subset latin, `font-display: swap`), chave `PUBLIC_ALLOW_INDEXING` e `astro check` dentro do `npm run build`. Texto com destaque provisoriamente em `#2F2F2F` até a etapa de Design System. Finais de linha padronizados em LF via `.gitattributes`
- **Etapa 02: fundação visual do Design System** (DEC-034, aprovada pelo gestor): tokens de cor, tipografia fluida, espaçamento, containers e radius; componentes-base Container, Section, Button, TextLink e Eyebrow em src/components/ui/; CSS próprio, zero JavaScript no cliente. CTA em #B88917 com texto #282120; #8F6B16 descartado. src/pages/index.astro é página temporária de validação, não a Home. Detalhes em [design-system.md](../03-design-system/design-system.md) v2.0. Header, Footer, Hero e Home não iniciados como referência: texto do Hero; copy de Prova rápida, Tipos de evento e Crianças + adultos
- **Header e Footer finalizados e aprovados** (04/10/2026, DEC-035): `Header.astro` (logo, Eventos ▾ com 4 tipos, O Espaço, Gastronomia, Como funciona; sticky, compacto, menu lateral abaixo de 64rem) e `Footer.astro` (institucional, ~133 px no desktop, endereço uma única vez). Nenhum dos dois tem CTA comercial, telefone, WhatsApp ou horário. Redes sociais e Google Maps aguardam URLs oficiais (L-13)
- **Hero da Home** implementado e aprovado (04/10/2026, `src/components/home/Hero.astro`): foto #29 `Salão Divina Social2.png` processada pelo `astro:assets` (AVIF/WebP/JPEG, 480–1306 px, qualidade 90 — DEC-037), 2 colunas a partir de 64rem, sem JavaScript.
- **Provas rápidas (QuickFacts) da Home** implementadas e aprovadas (04/10/2026, `src/components/home/QuickFacts.astro`): seção logo após o Hero, seis fatos (~700 m², até 150 convidados, área infantil integrada, estacionamento no local, buffet e cozinha próprios, um evento por vez), sem CTA e sem ícones, 3 colunas no desktop, 2 no tablet e 1 no mobile, zero JavaScript.
- **Tipos de evento da Home** implementados e aprovados (04/10/2026, `src/components/home/EventTypes.astro`): seção após as provas rápidas, fundo soft, sem fotos nem cards, quatro blocos (festas infantis, eventos familiares, festa de 15 anos, eventos corporativos) com H3 e `TextLink` para destinos temporários (`#festas-infantis`, `#eventos-familiares`, `#15-anos`, `#corporativo`), 4 colunas a partir de 1280px, 2 no tablet e 1 no mobile, zero JavaScript.
- **Crianças + adultos da Home** implementada e aprovada (05/10/2026, `src/components/home/KidsAndAdults.astro`): texto à esquerda e foto vertical à direita, link editorial "Conhecer o espaço" sem CTA comercial, zero JavaScript. Foto #44 `Vista Área kids para o salão.jpg` (direção visual quente, DEC-038), processada pelo `astro:assets` com `quality={90}` (DEC-037). **Pendência:** confirmar autorização de uso de imagem das pessoas identificáveis antes da publicação em produção (L-08).
- **Gastronomia da Home** implementada e aprovada (05/10/2026, `src/components/home/Gastronomy.astro`): logo após Crianças + Adultos; foto à esquerda e texto à direita a partir de 56rem (uma coluna abaixo disso; no mobile, a foto vem por último), três provas editoriais, link "Conhecer a gastronomia" (`#gastronomia`) sem CTA comercial, zero JavaScript. Foto #45 `Mesa feijoada com salão e area kids ao fundo.jpg` (derivado `buffet-feijoada-salao.jpg`), `astro:assets` com `quality={90}` (DEC-037). #46 reservada. **Pendência:** L-08 (pessoas identificáveis). Nenhuma pendência nova.
- **Espaço / Estrutura da Home implementado e aprovado** (05/10/2026, `src/components/home/SpaceAndStructure.astro`): logo após Gastronomia; texto no topo, foto principal #49 (`Fotos Salão quente.png`, versão quente do gestor; a #26 fica preservada) e apoio #48 (só a partir de 48rem, não baixada no mobile), seis fatos em filete (3 colunas desktop, 2 tablet, 1 mobile), `TextLink` "Conhecer o espaço" (`#espaco`), zero JavaScript. Capacidade detalhada pela **DEC-039** (150 sentadas; até 190 conforme montagem e uso conjunto de salão e área infantil). **Pendências:** nenhuma (L-08 não se aplica: sem pessoas).
- **Como funciona da Home implementado e aprovado** (05/10/2026, `src/components/home/HowItWorks.astro`): logo após Espaço / Estrutura, `id="como-funciona"`, fundo soft; quatro etapas numeradas (01 Conte sobre seu evento · 02 Escolha a melhor opção · 03 Definimos os detalhes · 04 Aproveite seu evento) em `<ol>`; mobile 1 coluna compacta, 2×2 a partir de 40rem e 4 colunas a partir de 72rem; sem CTA, sem fotografia, zero JavaScript. Função no funil: redução de risco / previsibilidade. Nenhuma pendência nova.
- **Revisão estratégica da Home aprovada** (05/10/2026): a Home passa a seguir o roteiro comercial Hero → QuickFacts → Tipos de evento → Crianças + adultos → Gastronomia → Espaço / Estrutura → Como funciona → CTA final. **Gastronomia** (H2 "Gastronomia para servir bem cada celebração"; cozinha própria como prova), **Espaço / Estrutura** (H2 "Estrutura para receber seu evento com conforto e tranquilidade"; foto de apoio #48 retirada e reservada à futura página O Espaço) e **QuickFacts** ("Um evento por vez" substituído por Climatização) reescritos; **CTA final** (`FinalCta.astro`, `id="contato"`) implementado, sem linha de fatos repetidos. **Eventos reais** retirada da Home (sem prova social validada; `RealEvents.astro` fora da renderização). `index.astro` agora é a Home; a página de validação do Design System foi movida para `/design-system` (noindex)
- **Tipos de evento da Home reprojetada como navegador visual** (05/10/2026, `EventTypes.astro`): foto real por tipo, título, descrição curta e link editorial; item inteiro clicável por um único link, sem JavaScript; mobile em miniatura + texto, 2×2 no tablet, 4 colunas a partir de 64rem. H2 "Encontre o formato para o seu evento". **Fotos provisórias:** Eventos corporativos usa a #50 (não é do Divina, confirmado pelo gestor) e Eventos familiares usa a melhor foto disponível (bolo com a família); trocar quando chegarem fotos reais (L-07). Infantil #1, 15 anos #21 (L-08, L-09)
- **Navegação e localização** (05/10/2026, **DEC-040**): Header Eventos ▾ · O Espaço · Gastronomia · Contato; "Como funciona" permanece na Home mas saiu do menu e do Footer; Localização deixou de ser seção da Home; Footer exibe endereço + "Ver no Google Maps" (`site.address.mapsUrl`, busca por nome + endereço, validado manualmente como o perfil correto; provisório até a URL oficial, L-13). Mapa embutido em Contato, futuro e não implementado. **L-05 encerrada** (etapas do Como funciona aprovadas pelo gestor)
- **Ajustes finais da Home aprovados** (05/10/2026, **DEC-041**): **QuickFacts retirada da Home** (repetia Espaço / Estrutura; componente fora da renderização); Tipos de evento sem o "Conhecer…" repetido (o título é o link, cards alinhados; corporativo: "Confraternizações, encontros e eventos empresariais para celebrar seu negócio."); Crianças + adultos com foto menor e menos respiro (~791 px no mobile, ~476 no desktop); Gastronomia com foto menor e horizontal no tablet; fundos alternados entre seções; **"Solicitar proposta" agora leva ao formulário (a criar), não ao WhatsApp** (`site.links.proposal`, provisório `#contato`); **botão flutuante de contato** (`FloatingContact.astro`, canto inferior direito em todos os formatos, também para o formulário). Home com 7 seções: Hero → Tipos de evento → Crianças + adultos → Gastronomia → Espaço / Estrutura → Como funciona → CTA final
- **Foto de Eventos corporativos agora é real** (05/10/2026): #51 `Evento corporativo Popper_305.jpg` (6000×4000), evento corporativo realizado no Divina, confirmado pelo gestor; substitui a #50 (banco de imagem, descartada). Derivado `evento-corporativo-confraternizacao.jpg`. **Pendências:** L-08 (dezenas de pessoas identificáveis) e logo de terceiro ao fundo. Em Eventos familiares a foto segue provisória
- **Ambiente DEV criado, publicado e operacional** (06/10/2026, informado pelo gestor e validado tecnicamente): https://dev.divinafesta.com.br na Hostinger Web Hosting, SSL e CDN ativos, publicação manual do conteúdo de `dist/`, Home acessível. HTTPS 200; HTML idêntico (SHA256) ao build do commit `e650a68`; meta robots e `X-Robots-Tag: noindex, nofollow` presentes; fontes e imagens carregam; sem overflow em 390, 768 e 1440 px; `/.git/config` e `/.env` retornam 403, `/docs/` e `/src/` 404. **L-11 resolvida.** Produção (`divinafesta.com.br`) **não** foi substituída. O DEV é o ambiente oficial de revisão antes da produção. Detalhes e itens não validados em [`infraestrutura.md`](../02-arquitetura/infraestrutura.md)
- **Home: concluída e publicada no DEV para revisão** (06/10/2026). Não significa lançamento em produção nem fim de ajustes futuros: a Home só muda por correção concreta, bug ou decisão explícita do gestor e não é reaberta durante as páginas internas
- **Botões no padrão da referência do site anterior** (DEC-036): pílula, Familjen Grotesk, variantes `primary` · `secondary` · `outline`, adaptados ao contraste AA.

## Em andamento

- Nada em execução. **Próxima página oficial: Festa Infantil (P0), aprovada pelo gestor em 06/10/2026**; não iniciada, começa em sessão própria.

## Próximo (cada item depende de autorização)

1. ~~Inicialização do projeto Astro~~ (feita na Etapa 01)
2. ~~Design system: validar tokens e o contraste final do dourado escuro (DEC-022)~~ (feito na Etapa 02, DEC-034)
3. ~~Header~~ (feito em 04/10/2026, DEC-035; menu ajustado na DEC-040)
4. ~~Footer~~ (feito em 04/10/2026, DEC-035)
5. ~~Hero~~ (feito em 04/10/2026)
5a. ~~Provas rápidas~~ (feito em 04/10/2026)
5b. ~~Tipos de evento~~ (feito em 04/10/2026)
5c. ~~Crianças + adultos~~ (feito em 05/10/2026) e ~~Gastronomia~~ (feito em 05/10/2026)
5d. ~~Espaço / Estrutura~~ (feito em 05/10/2026) e ~~Como funciona~~ (feito em 05/10/2026)
6. Revisar o conteúdo e a navegação das demais páginas (Eventos, O Espaço, Gastronomia, Contato) e substituir as fotos provisórias (L-07). Eventos reais / avaliações ficam fora da Home até haver prova social validada
7. ~~Infraestrutura de desenvolvimento (DEC-033)~~ (feito em 06/10/2026: DEV criado, HTTPS, `X-Robots-Tag`, primeira publicação manual do `dist/`; L-11 resolvida)
7a. Primeira página interna P0: **Festa Infantil (aprovada em 06/10/2026)**, conforme a arquitetura e a ordem de implementação da SÍNTESE §29, depois Eventos Familiares, Espaço e Estrutura, Gastronomia, Localização e Contato
8. Etapas próprias e posteriores: formulário (UX/CRO, com o fallback da DEC-032), backend Fastify (formulários, Kommo, Meta CAPI, webhooks, WhatsApp), tracking (GTM, GA4, Pixel, Consent Mode), monitoramento e CI/CD

## Pendências

- Formulário de proposta (destino de "Solicitar proposta" e do botão flutuante, DEC-041): a criar, em etapa própria; hoje o destino é provisório (`#contato`)
- Footer: Instagram, Facebook, LinkedIn e a URL oficial do perfil no Google Maps só com URLs oficiais fornecidas e validadas (L-13); o link atual do Maps é provisório, validado manualmente (DEC-040)
- Confirmar os dados da fonte factual: eventos realizados, avaliações e metragem da área infantil (L-01 a L-03)
- Autorizações de imagem (crianças, convidados) e licença ou arquivos sem marca d'água do fotógrafo `@lucylimafotografia` (L-08)
- Origem das fotos Bistrô, café colonial, capas Essência e 15 anos (L-09)
- Logo em SVG: não há arquivo confirmado. Não vetorizar agora (L-10, DEC-023)
- Fotos faltantes: equipe, cozinha, estacionamento, corporativo (resolvido na Home pela #51, real), familiar multigeracional (a atual na Home é provisória), salão ocupado, mini wedding (L-07). Adultos + crianças agora coberto por #44, sujeito à L-08. `Festa no Átrio com Fotógrafa e Convidados.png` não está no repositório
- ~~Criar e configurar `dev.divinafesta.com.br` (L-11)~~ resolvida em 06/10/2026. Ajustes não bloqueantes de hospedagem do DEV (L-24); domínio principal e configuração própria da produção no lançamento (L-22); GBP, CNPJ, política de privacidade, contas de marketing (L-12 a L-15)
- Produção oficial ainda não realizada; `divinafesta.com.br` ainda não foi substituído
- Texto do fallback no WhatsApp, timeout da API e eventual armazenamento temporário no navegador (L-23, DEC-032)
- Remover manualmente as pastas vazias `Imagens\` e `Documentos norteadores para montar site\` (o Windows negou a exclusão; o Git ignora pastas vazias)
- Decidir sobre as duplicatas (3 pares). Nada foi apagado

## Dependências e segurança

- **Advisory em `http-cache-semantics`** (severidade alta, [GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp)), registrado em 03/10/2026 pelo `npm audit`.
  - É **dependência transitiva** do ecossistema de build (vem pelo `astro`). Roda na máquina que gera o site, não no site publicado.
  - **Não há correção direta** a aplicar: o `npm audit fix --force` rebaixaria o Astro para a 2.x, o que alteraria a stack de forma inadequada. **Não executar.**
  - **Não é tratado como vulnerabilidade comprovadamente explorável** no frontend estático publicado, que é só HTML, CSS e fontes, sem servidor nem cache HTTP próprios.
  - **Estratégia:** manter o Astro e as dependências atualizados e revisar o advisory periodicamente (a cada atualização de dependências ou antes de cada etapa técnica).
  - Nenhuma versão foi alterada por causa desse alerta.

## Bloqueios

- **Nenhum bloqueio técnico.** Stack, hospedagem e arquitetura de execução resolvidas (DEC-026 a DEC-030, DEC-032 e DEC-033). A L-23 (detalhes do fallback do formulário) não bloqueia o desenvolvimento.
- A implementação aguarda **autorização expressa do gestor**. Isso é uma regra de processo, não um impedimento técnico.
- Pontos que, se não forem resolvidos, vão travar etapas específicas mais adiante:
  - **publicação** de fotos com pessoas ou marca d'água, sem L-08 resolvida;
  - **publicação** de números como eventos realizados e avaliações, sem L-02/L-03 confirmadas;
  - **publicação** com a foto provisória de Eventos familiares sem substituição (L-07), e com as fotos com pessoas (incl. #51) sem L-08 resolvida.

## Decisões aguardando aprovação

| ID | Assunto |
|---|---|
| DIV-06 | Sequência da Home em 12 itens |
| DIV-07 | Menu do Header × páginas P0 |
| DIV-12 | Nome "Divina Festa" × "Divina Festa Buffet" (NAP/GBP) |
| L-22 | Domínio principal (raiz e `www`) na Hostinger e checklist de produção, no lançamento |
| — | Tratamento das duplicatas de imagem |
