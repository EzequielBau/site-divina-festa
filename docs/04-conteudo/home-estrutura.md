# Home — estrutura

**Versão:** 1.1 — 03/10/2026 (Etapa 00, revisada após aprovação)
**Fontes:** NORTE §10 · SÍNTESE §19–20 · HANDOFF §3, §8, §9 · WIREFRAME (`Orientacóes para site`) · decisões DEC-016 a DEC-019
**Função da Home:** orientar, convencer e encaminhar. Não é um catálogo nem explica tudo em profundidade. *(NORTE §10)*

> Este documento registra **estrutura e intenção**, não implementação. Os textos marcados como **aprovados** vêm do HANDOFF de 09/09/2026, da implementação anterior em WordPress. Aqui eles valem como **conteúdo aprovado**. Neste projeto, **nenhuma seção está implementada**. A stack é Astro static-first (DEC-026), e a implementação aguarda autorização. Os demais textos estão *a definir* e serão escritos seção por seção.

## Sequência aprovada

| # | Seção | Status do conteúdo | Implementação neste projeto | Etapa do funil |
|---|---|---|---|---|
| 1 | Header | estrutura definida | a fazer | navegação / conversão |
| 2 | Hero | **texto aprovado** | a fazer | descoberta → identificação |
| 3 | Prova rápida | copy definida; capacidade conforme DEC-017 | a fazer | interesse → adequação |
| 4 | Tipos de evento | textos criados; **fotos pendentes** | a fazer | identificação |
| 5 | Crianças + adultos | estrutura e copy criadas | a fazer | adequação → desejo |
| 6 | Gastronomia | **próxima seção de conteúdo** | a fazer | desejo |
| 7 | Espaço e estrutura | a definir | a fazer | adequação → confiança |
| 8 | Como funciona | a definir | a fazer | redução de risco |
| 9 | Eventos reais / avaliações | a definir | a fazer | confiança |
| 10 | Localização | a definir | a fazer | redução de atrito → contato |
| 11 | CTA final | a definir | a fazer | contato → proposta |
| 12 | Footer | estrutura definida | a fazer | confiança / navegação |

O NORTE lista 9 seções (Localização + CTA final juntos, sem Header/Footer). A sequência de 12 é um refinamento (DIV-06).

---

## 1. Header

- **Objetivo:** dar acesso rápido às jornadas e manter o CTA sempre visível.
- **Mensagem principal:** a identidade (logo) e o próximo passo.
- **Prova:** não se aplica.
- **CTA:** "Solicitar proposta" (destacado).
- **Estrutura:** desktop `Logo | Menu | Solicitar proposta`; mobile com logo + hamburger e CTA dentro do drawer; sticky. Menu: Início · Eventos · O Divina · Contato. Ver DIV-07.
- **Dependências de fotografia:** logo horizontal. Não há SVG confirmado (L-10, DEC-023); por enquanto vale o PNG `Logo Divina Festa H-03.png`.
- **SEO:** links internos para as páginas principais; o logo leva à Home.
- **Função no funil:** navegação e conversão permanente.

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

## 3. Prova rápida — copy definida

- **Objetivo:** apresentar fatos essenciais que reduzem dúvida imediata.
- **Mensagem principal:** seis provas, com base no HANDOFF §3.2 e ajustadas pelas decisões: **700 m² para diferentes formatos** · **Até 150 convidados** (DEC-017) · **Espaço kids** · **Estacionamento privativo no Mercês** (DEC-019) · **Equipe preparada** · **Seu evento resolvido**.
- **Prova:** os próprios fatos da fonte factual.
- **CTA:** nenhum (seção de apoio).
- **Notas:**
  - Na Home, a capacidade é **sempre "até 150 convidados"**. O detalhamento sentadas/em pé (até 190) fica só na página Espaço e Estrutura (DEC-017). O "Até 190 convidados" da implementação anterior **não deve ser reproduzido**.
  - O NORTE sugere incluir "um evento por vez" como prova. Hoje não está na lista; avaliar na redação final.
- **Dependências de fotografia:** nenhuma.
- **SEO:** atributos factuais em texto (metragem, capacidade, estacionamento, bairro).
- **Visual:** editorial, sem cards pesados, sombras ou excesso de ícones; alinhamento à esquerda.
- **Função no funil:** interesse → adequação.

## 4. Tipos de evento — textos criados, fotos pendentes

- **Objetivo:** permitir identificação sem virar catálogo.
- **Mensagem principal (criada):** Eyebrow *EVENTOS NO DIVINA FESTA* · H2 *O formato ideal para o seu evento* · introdução e 4 cards: **Festas Infantis**, **Eventos Familiares**, **Festa de 15 Anos** e **Eventos Corporativos** (textos completos no HANDOFF §3.3).
- **Prova:** uma foto real por tipo de evento.
- **CTA:** imagem e título clicáveis, levando à página de cada evento; sem link "Conhecer…" redundante.
- **Dependências de fotografia:** infantil (#4, #8, #17), familiar (#11), 15 anos (#10, #21/#22 com origem a confirmar). Todas sujeitas às regras da DEC-024: #4, #11, #17, #21 e #22 têm crianças identificáveis e dependem de autorização; #17 também tem marca d'água. **Corporativo: nenhuma foto disponível** (L-07).
- **SEO:** links internos para as páginas de evento, com âncoras descritivas.
- **Responsivo:** 4 colunas no desktop, 2×2 no tablet, 1 coluna no celular.
- **Função no funil:** identificação → encaminhamento para a jornada própria.

## 5. Crianças + adultos — copy criada

- **Objetivo:** materializar o território multigeracional.
- **Mensagem principal (criada):** Eyebrow *PARA CRIANÇAS E ADULTOS* · H2 *Crianças se divertem. Adultos aproveitam.* · texto sobre o salão integrado à área infantil · complemento *Mais tranquilidade para quem organiza e uma experiência melhor para todos os convidados.*
- **Prova:** foto real de adultos e crianças no mesmo evento.
- **CTA:** "Conhecer o espaço".
- **Dependências de fotografia:** a única candidata clara é a #11 (exige autorização de imagem). Esta é uma **lacuna crítica de acervo**.
- **SEO:** "espaço infantil integrado", "festa para crianças e adultos".
- **Visual:** cerca de 55% foto / 45% texto no desktop; fundo `#F8F3E8`; no mobile, texto → CTA → foto.
- **Função no funil:** adequação → desejo.

## 6. Gastronomia — próxima seção

- **Objetivo:** tratar a gastronomia como produto, gerar desejo, provar qualidade com comida real, mostrar formatos de serviço e encaminhar para a página Gastronomia. *(HANDOFF §9)*
- **Mensagem principal:** buffet e cozinha próprios demonstrados por pratos, formatos e serviço *(texto a definir)*.
- **Prova:** pratos reais, formatos de serviço, cozinha e avaliações.
- **CTA:** "Conhecer a gastronomia" (WIREFRAME).
- **Dependências de fotografia:** #32–#35 (reais, de celular, verticais). #30/#31 têm origem incerta: não usar como prova real enquanto a origem não for confirmada (L-09, DEC-024). **Faltam fotos de cozinha e equipe.**
- **SEO:** "buffet próprio", "cozinha própria", formatos de serviço.
- **Evitar:** catálogo gigante, tabela de preços, "alta gastronomia" sem prova, frases genéricas, excesso de fotos decorativas.
- **Função no funil:** desejo.

## 7. Espaço e estrutura

- **Objetivo:** apresentar fatos físicos com imagens funcionais.
- **Mensagem principal:** climatização, estacionamento, acessibilidade, espaço infantil, Wi-Fi e ~700 m² *(texto a definir)*.
- **Prova:** fotos do salão, da área infantil e da chegada; capacidade.
- **CTA:** "Conhecer a estrutura" → Espaço e Estrutura.
- **Dependências de fotografia:** salão (#26, #28), área infantil (#8, #17, #25 se atual), salão ocupado (#6, fraca). **Estacionamento: nenhuma foto.**
- **SEO:** atributos físicos em texto.
- **Função no funil:** adequação → confiança.

## 8. Como funciona

- **Objetivo:** transformar organização em tranquilidade.
- **Mensagem principal:** contato → entendimento → proposta/visita → reserva → (definições) → preparação → evento. *"Organização que reduz preocupação."* (WIREFRAME). **As etapas precisam ser ajustadas à operação real antes de publicar** (L-05).
- **Prova:** processo, responsável por etapa e "um evento por vez".
- **CTA:** "Entender como funciona" ou "Solicitar proposta" *(a definir)*.
- **Dependências de fotografia:** equipe e coordenação (**nenhuma foto disponível**).
- **SEO:** perguntas de contratação.
- **Função no funil:** redução de risco.

## 9. Eventos reais / avaliações

- **Objetivo:** prova social e repertório.
- **Mensagem principal:** "prova de que aquilo tudo acontece de verdade" (WIREFRAME).
- **Prova:** cases reais com contexto, depoimentos e nota do Google (validar no lançamento, L-03).
- **CTA:** "Ver eventos reais" → Eventos Reais.
- **Dependências de fotografia:** fotos por case, com autorização.
- **SEO:** links para os cases. Schema de review só conforme as diretrizes do Google (ver SEO).
- **Função no funil:** confiança.

## 10. Localização

- **Objetivo:** mostrar Mercês, Curitiba, a chegada e o estacionamento.
- **Mensagem principal:** endereço normalizado e facilidade de acesso.
- **Prova:** mapa, fachada (#27) e estacionamento.
- **CTA:** "Como chegar" (mapa).
- **Dependências de fotografia:** fachada (#27). **Estacionamento: falta.**
- **SEO:** NAP idêntico ao GBP, bairro e cidade.
- **Função no funil:** redução de atrito → contato.

## 11. CTA final

- **Objetivo:** converter.
- **Mensagem principal:** *"Conte-nos sobre seu evento"* (WIREFRAME).
- **Prova:** pode retomar os fatos-chave em uma linha.
- **CTA:** "Solicitar proposta", abrindo o fluxo curto tipo → data → convidados → nome → WhatsApp.
- **Dependências de fotografia:** opcional.
- **SEO:** não se aplica.
- **Função no funil:** contato → proposta.

## 12. Footer

- **Objetivo:** fechar com confiança e informações de contato.
- **Mensagem principal (HANDOFF §8):** logo · *"Seu evento nas mãos certas."* · *"Buffet, estrutura e organização para celebrar com tranquilidade."* · redes sociais (se mantidas) · copyright.
- **Prova:** NAP completo, telefones e horário.
- **CTA:** WhatsApp / Solicitar proposta.
- **Visual:** fundo `#282120`. Não ajustar o espaço antes do footer até a Home estar completa.
- **SEO:** NAP consistente com o GBP; links para as páginas principais e para a política de privacidade (L-12).
- **Função no funil:** confiança e navegação.
