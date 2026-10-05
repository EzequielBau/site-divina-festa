# Home — estrutura

**Versão:** 1.1 — 03/10/2026 (Etapa 00, revisada após aprovação)
**Fontes:** NORTE §10 · SÍNTESE §19–20 · HANDOFF §3, §8, §9 · WIREFRAME (`Orientacóes para site`) · decisões DEC-016 a DEC-019
**Função da Home:** orientar, convencer e encaminhar. Não é um catálogo nem explica tudo em profundidade. *(NORTE §10)*

> Este documento registra **estrutura e intenção**, não implementação. Os textos marcados como **aprovados** vêm do HANDOFF de 09/09/2026, da implementação anterior em WordPress. Aqui eles valem como **conteúdo aprovado**. Neste projeto, **nenhuma seção está implementada**. A stack é Astro static-first (DEC-026), e a implementação aguarda autorização. Os demais textos estão *a definir* e serão escritos seção por seção.

## Sequência aprovada

| # | Seção | Status do conteúdo | Implementação neste projeto | Etapa do funil |
|---|---|---|---|---|
| 1 | Header | estrutura definida | **implementado e aprovado (DEC-035)** | navegação / conversão |
| 2 | Hero | **texto aprovado** | **implementado e aprovado** | descoberta → identificação |
| 3 | ~~Prova rápida (QuickFacts)~~ | **retirada da Home (05/10/2026)**: repetia fatos já presentes em Espaço / Estrutura; `QuickFacts.astro` fora da renderização | removida | interesse → adequação |
| 4 | Tipos de evento | revisada em 05/10/2026: navegador visual com foto real por tipo | **implementado e aprovado (foto de Familiares provisória)** | identificação / descoberta |
| 5 | Crianças + adultos | copy aprovada | **implementado e aprovado** | adequação → desejo |
| 6 | Gastronomia | copy aprovada | **implementado e aprovado** | desejo |
| 7 | Espaço e estrutura | copy aprovada | **implementado e aprovado (05/10/2026)** | adequação → confiança |
| 8 | Como funciona | copy aprovada | **implementado e aprovado (05/10/2026)** | redução de risco |
| 9 | ~~Eventos reais / avaliações~~ | **fora desta versão** (sem prova social validada) | componente `RealEvents.astro` fora da renderização | confiança |
| 10 | ~~Localização~~ | **deixou de ser seção da Home (DEC-040)**: endereço + Maps no Footer | removida | redução de atrito |
| 11 | CTA final | copy aprovada | **implementado e aprovado (05/10/2026)** | contato → proposta |
| 12 | Footer | estrutura definida; endereço + "Ver no Google Maps" (DEC-040) | **implementado e aprovado** | confiança / navegação |

**Narrativa vigente da Home (revisão estratégica, 05/10/2026; QuickFacts retirada no mesmo dia):** Hero (o que é) → Tipos de evento (fazem o meu evento?) → Crianças + adultos (como é a experiência?) → Gastronomia (serão bem servidos?) → Espaço / Estrutura (o espaço atende?) → Como funciona (é organizado?) → CTA final (quero conversar). Ritmo alternando imagem e informação. Fundos alternados (Hero e Crianças + adultos em creme `soft`; Tipos de evento, Gastronomia e Como funciona em branco; Espaço / Estrutura em `soft`; CTA final `warm`) para que nenhuma seção fique colada a outra do mesmo tom. Não usar "um evento por vez" como argumento recorrente de venda.

O NORTE lista 9 seções (Localização + CTA final juntos, sem Header/Footer). A sequência de 12 é um refinamento (DIV-06).

---

## 1. Header

- **Objetivo:** dar acesso rápido às jornadas, de forma leve e institucional.
- **Mensagem principal:** a identidade (logo) e o próximo passo.
- **Prova:** não se aplica.
- **CTA:** nenhum (DEC-035). A conversão fica no Hero, nas seções de decisão, no formulário e no botão flutuante de contato (futuro).
- **Estrutura:** desktop `Logo | Menu`; mobile com logo + menu lateral; sticky, com estado compacto. Menu: Eventos ▾ (Festas infantis, Eventos familiares, Festa de 15 anos, Eventos corporativos) · O Espaço · Gastronomia · **Contato** (`#contato`, DEC-040). "Como funciona" saiu do menu (continua na Home). Divina Essência fora do menu. Ver DIV-07 (resolvida).
- **Dependências de fotografia:** logo horizontal. Não há SVG confirmado (L-10, DEC-023); por enquanto vale o PNG `Logo Divina Festa H-03.png`.
- **SEO:** links internos para as páginas principais; o logo leva à Home.
- **Função no funil:** navegação.

## 2. Hero — ✅ texto aprovado

- **Objetivo:** deixar claros a categoria, a localização (Curitiba/Mercês), o benefício e o CTA na primeira dobra.
- **Mensagem principal (aprovada):**
  - Eyebrow: *BUFFET E ESPAÇO DE EVENTOS • MERCÊS, CURITIBA*
  - H1: *Um espaço completo para celebrar em Curitiba*
  - Texto: *Buffet, estrutura, gastronomia e organização para você aproveitar seu evento com mais tranquilidade.*
- **Prova:** uma fotografia real que não infantilize a marca.
- **CTA:** "Solicitar Proposta" (primário) + "Conhecer o Espaço" (secundário). Ver DIV-08.
- **Dependências de fotografia:** foto real do salão (candidatas: #26, #28 do inventário). Como referência, falta confirmar qual foto foi usada na implementação anterior (L-18).
- **SEO:** H1 com a entidade + Curitiba; eyebrow com Mercês.
- **Visual:** fundo creme; 2 colunas no desktop, 1 no mobile.
- **Evitar:** slogan abstrato antes de explicar o que é o Divina; sobrecarregar a dobra com todos os números e tipos de evento.
- **Função no funil:** descoberta → identificação.

## 3. Prova rápida — ⏸ retirada da Home (05/10/2026)

- **Decisão do gestor:** a faixa de seis fatos logo após o Hero sai da Home, porque os mesmos fatos (metragem, capacidade, área infantil, estacionamento, climatização) já aparecem em Espaço / Estrutura. O componente `QuickFacts.astro` fica no repositório, sem uso. O texto abaixo é o histórico da implementação.


- **Objetivo:** apresentar fatos essenciais que reduzem dúvida imediata.
- **Mensagem principal:** seis provas, com base no HANDOFF §3.2 e ajustadas pelas decisões: **700 m² para diferentes formatos** · **Até 150 convidados** (DEC-017) · **Espaço kids** · **Estacionamento privativo no Mercês** (DEC-019) · **Equipe preparada** · **Seu evento resolvido**.
- **Prova:** os próprios fatos da fonte factual.
- **CTA:** nenhum (seção de apoio).
- **Notas:**
  - Na Home, a capacidade é **sempre "até 150 convidados"**. O detalhamento 150 sentadas / até 190 conforme a montagem (DEC-017, DEC-039) fica só na seção Espaço e Estrutura da Home (§7) e na página Espaço e Estrutura; nunca nas Provas rápidas. O "Até 190 convidados" da implementação anterior **não deve ser reproduzido**.
  - O NORTE sugere incluir "um evento por vez" como prova. Hoje não está na lista; avaliar na redação final.
- **Implementação aprovada (04/10/2026, `src/components/home/QuickFacts.astro`):** seção imediatamente após o Hero, com seis fatos: **~700 m²** · **Até 150 convidados** · **Área infantil integrada** · **Estacionamento no local** · **Buffet e cozinha próprios** · **Um evento por vez**. "~700 m²" é copy local baseada no fato canônico de aproximadamente 700 m². A Home comunica "Até 150 convidados" (DEC-017). Sem CTA, sem ícones, zero JavaScript. Grid de 3 colunas no desktop, 2 no tablet e 1 no mobile, com filete superior em cada fato. Os fatos condicionais leem `site.ts`. Esta lista substitui, na implementação, os itens "Equipe preparada" e "Seu evento resolvido" da copy inicial e incorpora "um evento por vez" (nota acima); não gerou nova DEC.
- **Revisão estratégica (05/10/2026):** "Um evento por vez" saiu da lista e entrou **Climatização** ("Conforto para os convidados durante o evento"); "~700 m²" passou a "Salão, área infantil e ambientes de apoio" (a promessa "diferentes formatos" não era demonstrada pelas fotos). Seis fatos vigentes: ~700 m² · Até 150 convidados · Área infantil integrada · Estacionamento no local · Buffet e cozinha próprios · Climatização. O fato `simultaneousEvents` continua em `site.ts`, mas não é argumento recorrente de venda.
- **Dependências de fotografia:** nenhuma.
- **SEO:** atributos factuais em texto (metragem, capacidade, estacionamento, bairro).
- **Visual:** editorial, sem cards pesados, sombras ou excesso de ícones; alinhamento à esquerda.
- **Função no funil:** interesse → adequação.

## 4. Tipos de evento — ✅ implementada e aprovada (revisada em 05/10/2026: navegador visual com fotos)

- **Versão vigente (05/10/2026, `src/components/home/EventTypes.astro`):** navegador visual compacto das quatro jornadas, com **foto real por tipo**, título, descrição curta e link editorial. Eyebrow *Eventos no Divina Festa* · H2 *Encontre o formato para o seu evento* · introdução *Festas infantis, encontros em família, 15 anos e eventos corporativos. Conheça cada possibilidade.*
  - **Fotos:** infantil = #1 (decoração Sininho, sem pessoas); familiar = "soprar bolo com personagem" (família no bolo; **provisória**, lê também como infantil; L-08); 15 anos = #21 `15 anos b.png` (L-08, L-09); corporativo = **#51 `Evento corporativo Popper_305.jpg`, evento corporativo real realizado no Divina** (confirmado pelo gestor em 05/10/2026; L-08, logo de terceiro ao fundo). A #50 (banco de imagem) foi descartada. Detalhes e hashes no [inventário](../99-referencias/inventario-imagens.md). Trocar a foto provisória de Familiares quando chegar foto real multigeracional (L-07).
  - **Layout:** mobile = miniatura quadrada à esquerda e texto à direita (~820 px de seção em 390); 2×2 com foto 16:9 a partir de 40rem; 4 colunas com foto 4:3 a partir de 64rem.
  - **Interação:** **o título é o link** e cobre o item inteiro (`::before` esticado, sem links aninhados); não há mais o texto "Conhecer…" repetido. Hover discreto (sublinha o título em dourado e desloca a seta), sem JavaScript e sem zoom. Descrição de Corporativos: *Confraternizações, encontros e eventos empresariais para celebrar seu negócio.* Destinos temporários: `#festas-infantis`, `#eventos-familiares`, `#15-anos`, `#corporativo`.
  - Alturas da seção: ~822 px (390), ~942 (768), ~597 (1024), ~662 (1440).
- **Implementação anterior (04/10/2026, sem fotos), mantida como histórico (links "Conhecer…" abaixo foram removidos na versão vigente):** (04/10/2026, `src/components/home/EventTypes.astro`):** seção imediatamente após as provas rápidas, fundo `soft` (cream), sem fotos, sem cards, sem sombras e zero JavaScript. Eyebrow *Eventos no Divina Festa* · H2 *Um espaço preparado para diferentes tipos de evento* · introdução (menciona Curitiba uma vez) · quatro blocos com H3, texto curto e `TextLink` editorial, separados por filete superior: **Festas infantis**, **Eventos familiares**, **Festa de 15 anos** e **Eventos corporativos**. Layout: 4 colunas a partir de 80rem (1280px), 2 colunas em tablet e intermediário, 1 coluna no mobile.
- **Links (destinos temporários):** `#festas-infantis`, `#eventos-familiares`, `#15-anos` e `#corporativo`; trocar pelas rotas reais quando as páginas de evento existirem. Sem "Solicitar proposta" nesta seção.
- **Divergência consciente com o texto abaixo:** a versão implementada usa links "Conhecer…" e não tem fotos nem cards; o H2 e as descrições substituem o texto do HANDOFF §3.3. Não gerou nova DEC. As fotos continuam pendentes (regras da DEC-024) e podem ser reavaliadas em etapa própria.
- **Texto original planejado (referência):**

- **Objetivo:** permitir identificação sem virar catálogo.
- **Mensagem principal (criada):** Eyebrow *EVENTOS NO DIVINA FESTA* · H2 *O formato ideal para o seu evento* · introdução e 4 cards: **Festas Infantis**, **Eventos Familiares**, **Festa de 15 Anos** e **Eventos Corporativos** (textos completos no HANDOFF §3.3).
- **Prova:** uma foto real por tipo de evento.
- **CTA:** imagem e título clicáveis, levando à página de cada evento; sem link "Conhecer…" redundante.
- **Dependências de fotografia:** infantil (#4, #8, #17), familiar (#11), 15 anos (#10, #21/#22 com origem a confirmar). Todas sujeitas às regras da DEC-024: #4, #11, #17, #21 e #22 têm crianças identificáveis e dependem de autorização; #17 também tem marca d'água. **Corporativo: nenhuma foto disponível** (L-07).
- **SEO:** links internos para as páginas de evento, com âncoras descritivas.
- **Responsivo:** 4 colunas no desktop, 2×2 no tablet, 1 coluna no celular.
- **Função no funil:** identificação → encaminhamento para a jornada própria.

## 5. Crianças + adultos — ✅ implementada e aprovada

- **Objetivo:** materializar o território multigeracional.
- **Mensagem implementada (aprovada, `src/components/home/KidsAndAdults.astro`):** Eyebrow *Para crianças e adultos* · H2 *Crianças se divertem. Adultos aproveitam a celebração.* · texto: área infantil integrada ao salão, crianças aproveitam as atrações e adultos permanecem próximos · complemento *Mais tranquilidade para quem organiza e uma experiência melhor para diferentes gerações.* O H2 e o complemento diferem da copy criada anteriormente; não geraram nova DEC.
- **Prova:** foto real de adultos e crianças no mesmo evento.
- **CTA:** link editorial "Conhecer o espaço" (`TextLink`, destino temporário `#espaco`). **Sem CTA comercial** nesta seção.
- **Foto:** #44 `Vista Área kids para o salão.jpg` (ver [inventário](../99-referencias/inventario-imagens.md)). **Pendência de autorização (L-08):** confirmar autorização de uso de imagem das pessoas identificáveis antes da publicação em produção. O ambiente DEV é `noindex`, então não bloqueia o desenvolvimento.
- **SEO:** "espaço infantil integrado", "festa para crianças e adultos".
- **Visual vigente (revisão de 05/10/2026):** texto à esquerda e foto vertical (4:5) menor à direita a partir de 48rem (máx. ~19 rem de largura; 16 rem no mobile); abaixo disso, texto → CTA → foto em uma coluna. Padding vertical e gaps reduzidos (a seção tinha respiro demais): ~791 px no mobile e ~476 px no desktop. Fundo `soft`. Sem JavaScript.
- **Função no funil:** adequação → desejo.

## 6. Gastronomia — ✅ implementada e aprovada

- **Objetivo:** mostrar que buffet e cozinha são próprios e que a gastronomia faz parte da solução integrada do evento (espaço, buffet, equipe e serviço funcionando juntos). Não é catálogo, restaurante, galeria de comida, pacotes nem preços.
- **Revisão estratégica (05/10/2026), texto vigente:** eyebrow *Gastronomia* · H2 *Gastronomia para servir bem cada celebração* · texto *O buffet faz parte da experiência no Divina Festa, com opções preparadas no próprio espaço e pensadas de acordo com o formato de cada evento.* · provas: **Preparo no próprio espaço** (*A cozinha própria permite integrar preparo, serviço e operação do evento.*) · **Opções para diferentes ocasiões** (*Cardápios e formatos para festas, encontros familiares e eventos corporativos.*) · **Serviço integrado** (*Gastronomia, equipe e estrutura trabalhando juntas durante a celebração.*). A cozinha própria é prova, não promessa do H2. Foto e CTA mantidos. O texto abaixo é o da implementação anterior, mantido como histórico.
- **Implementação anterior (05/10/2026, `src/components/home/Gastronomy.astro`):** logo após Crianças + Adultos, fundo `soft`.
  - Eyebrow *Gastronomia no Divina* · H2 *Buffet e cozinha próprios para servir bem o seu evento* · texto: *A gastronomia faz parte da experiência no Divina Festa. Os alimentos são preparados no próprio espaço, com opções que se adaptam ao formato e ao momento de cada celebração.*
  - Três provas editoriais (H3 + texto, filete superior, sem cards, ícones ou sombras): **Cozinha própria** (*Preparo realizado no próprio espaço.*) · **Diferentes formatos** (*Opções para festas, encontros e outros tipos de evento.*) · **Serviço integrado** (*Buffet, equipe e estrutura funcionando juntos durante a celebração.*).
- **CTA:** link editorial `TextLink` "Conhecer a gastronomia" (destino temporário `#gastronomia`). **Sem CTA comercial.**
- **Foto:** #45 `Mesa feijoada com salão e area kids ao fundo.jpg` (ver [inventário](../99-referencias/inventario-imagens.md)), pela prova simultânea de buffet real, salão em uso e contexto do evento. #46 fica reservada, não usada na Home. **Pendência de autorização (L-08):** pessoas identificáveis; confirmar antes da produção (DEV é `noindex`).
- **Visual:** a partir de 56rem, foto à esquerda (4:5, `object-position: 50% 60%`) e conteúdo à direita (~55/45); abaixo disso, uma coluna na ordem eyebrow → H2 → texto → provas → link → foto. O breakpoint de 56rem é decisão local desta seção. Zero JavaScript. **Ajuste de 05/10/2026:** foto menor (máx. 20 rem) e, no tablet em uma coluna (40rem a 56rem), horizontal 3:2 na largura do texto, para não alongar a seção; fundo da seção passou a branco.
- **SEO:** "gastronomia", "buffet", "cozinha própria", "evento", sem repetir Curitiba; alt descreve o que a foto mostra.
- **Função no funil:** desejo.

## 7. Espaço e estrutura — ✅ implementada e aprovada (05/10/2026)

- **Objetivo:** apresentar fatos físicos com imagens funcionais.
- **Mensagem principal:** climatização, estacionamento, acessibilidade, espaço infantil, Wi-Fi e ~700 m² *(texto a definir)*.
- **Prova:** fotos do salão, da área infantil e da chegada; capacidade.
- **CTA:** "Conhecer a estrutura" → Espaço e Estrutura.
- **Dependências de fotografia:** salão (#26, #28), área infantil (#8, #17, #25 se atual), salão ocupado (#6, fraca). **Estacionamento: nenhuma foto.**
- **SEO:** atributos físicos em texto.
- **Função no funil:** adequação → confiança.
- **Revisão estratégica (05/10/2026), versão vigente:** H2 *Estrutura para receber seu evento com conforto e tranquilidade* · introdução *São aproximadamente 700 m² com salão, área infantil e ambientes de apoio integrados para receber diferentes tipos de celebração.* · seis fatos: ~700 m² · Até 150 pessoas sentadas (*Para eventos com mesas e lugares definidos.*) · Até 190 pessoas conforme a montagem (*A capacidade varia conforme o formato do evento e o uso dos ambientes.*, DEC-039) · Climatização · Estacionamento privativo (*No próprio local.*) · Acessibilidade (*Estrutura preparada para facilitar a circulação.*). **A foto de apoio #48 saiu da Home** (fica reservada para a futura página O Espaço); a foto principal do salão basta, em 3:2 (2:1 no tablet, 16:7 no desktop largo). CTA "Conhecer o espaço" mantido. O texto abaixo é o da implementação anterior, mantido como histórico.
- **Implementação anterior (05/10/2026, `src/components/home/SpaceAndStructure.astro`) — aprovada pelo gestor em 05/10/2026:**
  - eyebrow "O Espaço"; H2 "Estrutura para diferentes formatos de evento"; introdução com salão, área infantil e ambientes de apoio em aproximadamente 700 m²;
  - seis fatos em filete (sem cards, sem ícones): ~700 m² · Até 150 pessoas sentadas · Até 190 pessoas conforme o formato (com uso conjunto do salão e da área infantil, DEC-039) · Climatização · Estacionamento privativo · Acessibilidade;
  - `TextLink` "Conhecer o espaço" (`#espaco`, temporário; a seção também tem `id="espaco"`, destino do menu "O Espaço");
  - fotos: principal #49 `Fotos Salão quente.png` (versão quente fornecida pelo gestor, mesma cena da #26; sem edição do projeto; a #26 `Fotos Salão.png` segue preservada, sem uso na Home) e apoio #48 `Visão da Recepção.jpg`; #29, #44, #47 e #25 não são usadas;
  - desktop: texto no topo, fotos ~65/35 de mesma altura, fatos em 3 colunas; tablet: fatos em 2 colunas; mobile: foto principal e fatos, sem a foto de apoio (nem baixada);
  - zero JavaScript.

## 8. Como funciona — ✅ implementada e aprovada (05/10/2026)

- **Objetivo:** transformar organização em tranquilidade; faixa informativa, secundária e compacta.
- **Mensagem principal:** existe um processo organizado e o cliente é acompanhado do planejamento ao dia do evento, sem explicar processos internos.
- **Prova:** processo em quatro etapas curtas.
- **CTA:** nenhum (a conversão fica em outros pontos da Home e no fechamento).
- **Dependências de fotografia:** nenhuma (sem fotografia).
- **SEO:** H2 e H3 semânticos em lista ordenada, sem repetir "Curitiba" artificialmente.
- **Função no funil:** redução de risco / previsibilidade.
- **Implementação (05/10/2026, `src/components/home/HowItWorks.astro`) — aprovada pelo gestor em 05/10/2026:**
  - logo após Espaço / Estrutura; `id="como-funciona"` (não é mais item do menu nem do Footer, DEC-040; a seção permanece na Home); fundo `soft` (creme);
  - eyebrow "Como funciona"; H2 "Do planejamento ao dia do evento"; introdução "Um processo simples para organizar cada etapa com mais tranquilidade.";
  - quatro etapas em `<ol>` com H3: 01 Conte sobre seu evento · 02 Escolha a melhor opção · 03 Definimos os detalhes · 04 Aproveite seu evento (cada uma com uma frase curta); números como elemento gráfico (Familjen Grotesk, marrom, sem animação);
  - mobile: 1 coluna compacta (número ao lado do texto); a partir de 40rem: 2×2; a partir de 72rem: 4 colunas; filetes finos, sem cards, sem ícones;
  - altura aproximada: ~536 px (390), ~401 px (768), ~386 px (1024), ~367 px (1440); padding vertical local compacto;
  - sem CTA, sem fotografia, zero JavaScript.

## 9. Eventos reais / avaliações — ⏸ fora da Home nesta versão (05/10/2026)

- **Decisão do gestor:** a seção sai da Home por falta de prova social validada (sem avaliações validadas, depoimentos aprovados, número validado de eventos, cases estruturados nem fotografia ideal). A foto #6 era inferior às demais (dominante magenta, pessoas identificáveis, logo de terceiro). O componente `RealEvents.astro` não é renderizado e não faz parte deste fechamento; a limpeza fica para depois. Reabrir quando houver prova social validada (L-02, L-03).
- **Objetivo:** prova social e repertório.
- **Mensagem principal:** "prova de que aquilo tudo acontece de verdade" (WIREFRAME).
- **Prova:** cases reais com contexto, depoimentos e nota do Google (validar no lançamento, L-03).
- **CTA:** "Ver eventos reais" → Eventos Reais.
- **Dependências de fotografia:** fotos por case, com autorização.
- **SEO:** links para os cases. Schema de review só conforme as diretrizes do Google (ver SEO).
- **Função no funil:** confiança.

## 10. Localização — ❌ deixou de ser seção da Home (DEC-040)

- **Decisão (05/10/2026):** a localização é funcional, não publicitária. Não há mais seção própria na Home: o **Footer** exibe o endereço com o link **"Ver no Google Maps"** (`site.address.mapsUrl`, busca por nome + endereço, validada manualmente e provisória até a URL oficial, L-13). Mercês e Curitiba aparecem no eyebrow do Hero e no Footer; o estacionamento privativo, nos fatos de Espaço / Estrutura. A futura página ou bloco de Contato poderá ter **mapa embutido** (carregado sob demanda); **não implementado**.
- Texto abaixo é o planejamento original, mantido como histórico.
- **Objetivo:** mostrar Mercês, Curitiba, a chegada e o estacionamento.
- **Mensagem principal:** endereço normalizado e facilidade de acesso.
- **Prova:** mapa, fachada (#27) e estacionamento.
- **CTA:** "Como chegar" (mapa).
- **Dependências de fotografia:** fachada (#27). **Estacionamento: falta.**
- **SEO:** NAP idêntico ao GBP, bairro e cidade.
- **Função no funil:** redução de atrito → contato.

## 11. CTA final — ✅ implementado e aprovado (05/10/2026)

- **Implementação (`src/components/home/FinalCta.astro`, `id="contato"`, fundo `warm`):** eyebrow *Planeje seu evento com o Divina* · H2 *Conte-nos o que você está planejando* · texto *Informe o tipo de evento, a data e o número aproximado de convidados. A partir dessas informações, podemos entender melhor o que você precisa e apresentar as opções mais adequadas.* · botão "Solicitar proposta" que leva ao **formulário de proposta (a criar, DEC-041)**, não ao WhatsApp. O destino vem de `site.links.proposal` e é provisório (`#contato`) até a página do formulário existir. O WhatsApp só entra como fallback do formulário (DEC-032). Sem linha de fatos repetidos. O `id="contato"` é o destino do CTA do Hero e do item "Contato" do menu e do Footer (DEC-040). Zero JavaScript.
- **Objetivo:** converter.
- **Mensagem principal:** *"Conte-nos sobre seu evento"* (WIREFRAME).
- **Prova:** pode retomar os fatos-chave em uma linha.
- **CTA:** "Solicitar proposta", abrindo o fluxo curto tipo → data → convidados → nome → WhatsApp.
- **Dependências de fotografia:** opcional.
- **SEO:** não se aplica.
- **Função no funil:** contato → proposta.

## 12. Footer

- **Objetivo:** encerrar de forma institucional e discreta. **Implementado e aprovado (DEC-035).**
- **Mensagem principal:** logo pequena · *"Espaço de eventos e buffet em Curitiba."* · *"Estrutura, gastronomia e organização para diferentes momentos de celebração."* · navegação · endereço · copyright.
- **Prova:** endereço (NAP), uma única vez. Sem telefone, WhatsApp nem horário.
- **CTA:** nenhum. **DEC-040:** navegação Eventos · O Espaço · Gastronomia · Contato; o endereço vem com o link "Ver no Google Maps" (provisório até a URL oficial, L-13). Redes sociais só com URLs oficiais validadas (L-13).
- **Visual:** fundo `#282120`. Não ajustar o espaço antes do footer até a Home estar completa.
- **SEO:** NAP consistente com o GBP; links para as páginas principais e para a política de privacidade (L-12).
- **Função no funil:** navegação e confiança.

## 13. Botão flutuante de contato — ✅ implementado (05/10/2026, DEC-041)

- **Componente:** `src/components/site/FloatingContact.astro`, incluído por `BaseLayout.astro` (todas as páginas).
- **Função:** acesso discreto e constante ao contato; leva ao formulário de proposta por `site.links.proposal` (provisório até o formulário existir). Não abre WhatsApp.
- **Visual:** canto inferior direito em todos os tamanhos; dourado `#B88917` com ícone de balão em `#282120` (contraste AA); mobile = círculo de 56 px só com o ícone; a partir de 48rem = pílula com o rótulo *Fale conosco*; sombra suave; hover só com mouse (`#8E6B1F` com texto branco); foco visível; respeita áreas seguras; oculto na impressão. Zero JavaScript. O Footer reserva espaço para o botão não cobrir endereço e copyright.
