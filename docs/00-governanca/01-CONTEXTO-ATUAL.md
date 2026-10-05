# CONTEXTO ATUAL — SITE DIVINA FESTA

**Projeto:** Novo site institucional do Divina Festa  
**Última atualização-base:** 05/10/2026  
**Função deste arquivo:** memória operacional viva e ponto de entrada do projeto, obrigatório para qualquer novo chat, agente de IA ou sessão de desenvolvimento (regra em [`AGENTS.md`](../../AGENTS.md)).

---

## 1. REGRA DE GOVERNANÇA

Este arquivo é o **estado operacional atual do projeto**.

Ele NÃO substitui:
- Documento Norte / documento mestre;
- decisões registradas em `decisoes.md`;
- Design System;
- arquitetura de conteúdo;
- inventário de imagens;
- código-fonte;
- histórico Git.

Ele funciona como uma **síntese viva** para que qualquer agente entenda rapidamente:
- onde o projeto está;
- o que já foi aprovado;
- o que não deve ser reaberto;
- qual é o próximo passo;
- quais pendências ainda existem.

### Regra-mãe

**Conversa decide → documento registra → código executa → Git versiona.**

Nenhuma decisão importante deve existir apenas em conversa.

---

## 2. LEITURA OBRIGATÓRIA AO INICIAR UMA NOVA SESSÃO

Antes de propor, alterar código ou reabrir decisões, o agente deve ler, nesta ordem:

1. este arquivo: `docs/00-governanca/01-CONTEXTO-ATUAL.md`;
2. `docs/00-governanca/00-documento-mestre-site.md` (índice central) e, quando preciso, o Documento Norte (`docs/01-estrategia/00_DOCUMENTO_NORTE_NOVO_SITE_DIVINA_FESTA.md`);
3. `docs/07-decisoes/decisoes.md`;
4. `docs/03-design-system/design-system.md`;
5. `docs/04-conteudo/home-estrutura.md`;
6. `docs/08-status/status.md`;
7. `docs/00-governanca/divergencias-e-lacunas.md`;
8. `docs/99-referencias/inventario-imagens.md`, quando houver trabalho com imagens.

Se uma informação deste arquivo conflitar com uma decisão ou documento canônico, prevalece o canônico (hierarquia DEC-025, no `AGENTS.md`). Corrija este arquivo e, se a contradição for entre fontes canônicas, registre em `divergencias-e-lacunas.md`.

---

## 3. ATUALIZAÇÃO OBRIGATÓRIA DESTE ARQUIVO

Este arquivo deve ser atualizado **sempre que houver aprovação de etapa, mudança de estado ou decisão relevante**.

Exemplos:
- seção aprovada;
- componente aprovado;
- nova DEC;
- mudança de arquitetura;
- imagem escolhida como definitiva;
- nova pendência;
- mudança do próximo passo;
- mudança de status de publicação;
- decisão que não deve ser reaberta.

### Regra operacional obrigatória

Ao final de qualquer tarefa aprovada pelo gestor, o agente deve (faz parte de "concluído"):

1. atualizar os documentos canônicos afetados;
2. atualizar este `01-CONTEXTO-ATUAL.md`;
3. atualizar `status.md`;
4. atualizar `home-estrutura.md`, se a Home for afetada;
5. atualizar `decisoes.md`, somente se houver decisão global nova;
6. atualizar `inventario-imagens.md`, se houver seleção, derivação, troca ou descarte de imagem;
7. executar testes técnicos;
8. apresentar diff/status;
9. fazer commit quando a tarefa tiver autorização para commit.

### Importante

Este arquivo deve registrar **estado e síntese**, não repetir documentos inteiros.

Evitar transformar este arquivo em histórico infinito.

Quando uma etapa for concluída:
- registrar como concluída;
- remover do bloco de “próximo passo”;
- manter apenas decisões que ainda sejam necessárias para continuidade.

---

## 4. OBJETIVO DO SITE

Construir um site:

- atemporal;
- elegante;
- acolhedor;
- comercial;
- rápido;
- responsivo;
- mobile-first;
- orientado à conversão;
- claro para pessoas, Google e sistemas de IA.

O site deve comunicar que o **Divina Festa é um espaço completo para eventos em Curitiba**, reunindo:

- espaço;
- buffet;
- gastronomia;
- decoração;
- equipe;
- área infantil;
- organização;
- atendimento.

Principais formatos:
- festas infantis;
- eventos familiares;
- festa de 15 anos;
- eventos corporativos;
- outros formatos compatíveis.

O posicionamento NÃO é preço baixo.

Prioridades de percepção:
- tranquilidade;
- confiança;
- organização;
- boa experiência;
- qualidade percebida;
- excelente relação entre valor entregue e investimento.

---

## 5. REGRAS PERMANENTES DE DECISÃO

Em qualquer decisão de conteúdo, layout, SEO, imagem ou tecnologia, avaliar simultaneamente:

- clareza para o visitante;
- força comercial;
- experiência mobile;
- confiança;
- redução de risco;
- diferenciação;
- SEO;
- SEO local;
- interpretação por mecanismos de IA;
- velocidade;
- simplicidade técnica;
- coerência visual;
- longevidade estética.

### Ordem de preferência

- clareza > beleza;
- velocidade > efeito visual;
- informação que ajuda a decidir > quantidade de conteúdo;
- fotografia real > imagem genérica;
- fato concreto > adjetivo promocional;
- simplicidade técnica > complexidade sem benefício.

---

## 6. ESTADO TÉCNICO

### Repositório

`EzequielBau/site-divina-festa`

### Local

`C:\Projetos\site-divina-festa`

### Stack

- Astro static-first;
- TypeScript;
- CSS próprio;
- JavaScript mínimo;
- sem React;
- sem Vue;
- sem Tailwind;
- sem biblioteca de UI.

### Hospedagem

Frontend:
- Hostinger Web Hosting.

Ambientes (DEC-033):
- DEV: `dev.divinafesta.com.br`, noindex, HTTPS. **Ainda não criado na Hostinger** (L-11); nada publicado. Deploy manual, só do `dist/`; push em `main` não publica;
- produção (`divinafesta.com.br`): ambiente separado, no lançamento; WordPress atual segue no ar até a aprovação final.

Backend futuro:
- Node.js + TypeScript + Fastify em VPS separada.

### Formulário futuro

Arquitetura aprovada:
- frontend estático;
- API futura no VPS;
- se API falhar, preservar dados;
- fallback para WhatsApp com dados preenchidos;
- nenhuma credencial Kommo/Meta no frontend.

---

## 7. DESIGN SYSTEM — ESTADO VIGENTE

### Tipografia

Títulos:
- Familjen Grotesk.

Texto/interface:
- Source Sans 3.

### Paleta principal

- dourado: `#B88917`;
- marrom: `#6F5426`;
- escuro: `#282120`;
- texto: `#2F2F2F`;
- texto secundário: `#6B6B6B`;
- creme: `#FFF9F2`;
- creme secundário: `#F8F3E8`;
- branco: `#FFFFFF`.

### Direção visual

- fotografia real;
- bastante respiro;
- boa tipografia;
- hierarquia forte;
- poucos efeitos;
- sem aparência de template;
- sem visual infantilizado na Home;
- sem luxo artificial;
- sem animações gratuitas.

### Header

Aprovado:
- logo horizontal;
- sem CTA comercial;
- menu: Eventos, O Espaço, Gastronomia, Como funciona;
- dropdown em Eventos;
- sticky;
- compacto após scroll;
- breakpoint desktop: 64rem;
- menu lateral no mobile;
- hover adaptado para mouse/touch.

### Footer

Aprovado:
- compacto;
- fundo escuro;
- sem CTA comercial;
- sem telefone;
- sem WhatsApp;
- sem horário;
- logo pequena;
- descrição institucional;
- navegação discreta;
- endereço;
- copyright.

Redes sociais e Google Maps:
- adicionar somente quando URLs oficiais estiverem validadas.

---

## 8. POLÍTICA DE IMAGENS

Princípios:

- fotografias reais;
- preservar detalhes;
- não alterar estrutura;
- não alterar rostos;
- não ampliar além do original;
- priorizar a fonte de maior resolução;
- preservar qualidade visual perceptível;
- peso do arquivo não justifica degradação visível;
- otimização deve ser responsiva.

A política detalhada está na DEC-037 (alta definição), na DEC-038 (fotos de tom quente preferenciais) e no Design System. Originais em `assets/images/source/` são somente leitura; derivados em `public/images/web/` ou processados pelo `astro:assets`; tudo registrado em `inventario-imagens.md`.

### Regra de seleção

Se o acervo atual não sustentar uma seção visualmente ou comercialmente:
- NÃO improvisar;
- NÃO gerar substituto artificial;
- avisar o gestor que faltam fotos;
- descrever exatamente que tipo de foto deve ser procurado.

### Pessoas identificáveis

Antes de publicação em produção:
- confirmar autorização de uso de imagem de pessoas identificáveis (L-08);
- especialmente crianças.

Essa confirmação vale antes da produção das imagens. O ambiente DEV pode continuar com conteúdo em análise porque está noindex, mas isso não substitui a autorização.

---

## 9. HOME — ORDEM E ESTADO ATUAL

### 1. Header
**Status:** concluído e aprovado.

### 2. Hero
**Status:** concluído e aprovado.

Conteúdo:
- eyebrow: “Buffet e espaço de eventos · Mercês, Curitiba”;
- H1: “Um espaço completo para celebrar em Curitiba”;
- texto: “Buffet, estrutura, gastronomia e organização para você aproveitar seu evento com mais tranquilidade.”;
- CTA principal: “Solicitar proposta”;
- CTA secundário: “Conhecer o espaço”.

Imagem:
- salão real;
- imagem responsiva;
- alta qualidade;
- política DEC-037.

### 3. Provas rápidas / QuickFacts
**Status:** concluído e aprovado.

Fatos:
- ~700 m²;
- até 150 convidados;
- área infantil integrada;
- estacionamento no local;
- buffet e cozinha próprios;
- um evento por vez.

Regras:
- sem CTA;
- sem ícones;
- 3 colunas desktop;
- 2 tablet;
- 1 mobile;
- zero JS.

### 4. Tipos de evento
**Status:** concluído e aprovado.

Sem fotos.

Tipos:
- Festas infantis;
- Eventos familiares;
- Festa de 15 anos;
- Eventos corporativos.

Função:
- identificação rápida;
- futura navegação para páginas próprias.

### 5. Crianças + Adultos
**Status:** concluída e aprovada (05/10/2026, `src/components/home/KidsAndAdults.astro`).

Eyebrow:
“Para crianças e adultos”

H2:
“Crianças se divertem. Adultos aproveitam a celebração.”

Mensagem:
- área infantil integrada ao salão;
- crianças aproveitam atrações;
- adultos permanecem próximos;
- benefício: tranquilidade e experiência para diferentes gerações.

CTA editorial:
“Conhecer o espaço”

Imagem:
- #44 `Vista Área kids para o salão.jpg` (tom quente, DEC-038), substitui a versão azulada;
- `quality={90}` (DEC-037);
- sem edição de rostos/estrutura;
- pendência: autorização de imagem das pessoas identificáveis antes da produção (L-08).

### 6. Gastronomia
**Status:** concluída e aprovada (05/10/2026, `src/components/home/Gastronomy.astro`), logo após Crianças + Adultos. Função no funil: desejo.

Eyebrow: “Gastronomia no Divina”

H2: “Buffet e cozinha próprios para servir bem o seu evento”

Mensagem:
- gastronomia faz parte da experiência; alimentos preparados no próprio espaço, com opções adaptáveis ao formato do evento;
- três provas editoriais (filete, sem cards/ícones): Cozinha própria · Diferentes formatos · Serviço integrado.

CTA editorial: `TextLink` “Conhecer a gastronomia” (destino temporário `#gastronomia`). Sem CTA comercial.

Layout:
- a partir de 56rem: foto à esquerda, conteúdo à direita (~55/45); abaixo disso, uma coluna;
- mobile: eyebrow → H2 → texto → provas → link → foto;
- breakpoint de 56rem é decisão local desta seção (a 768px o texto ficava apertado em duas colunas); foto não é centralizada a 768px;
- zero JavaScript.

Imagem:
- #45 `Mesa feijoada com salão e area kids ao fundo.jpg` (derivado `buffet-feijoada-salao.jpg`), cópia sem edição, crop CSS 4:5 com `object-position: 50% 60%`, `quality={90}` (DEC-037);
- #46 fica reservada (apoio / futura página Gastronomia), não usada na Home;
- pendência: autorização de imagem das pessoas identificáveis antes da produção (L-08).

### 7. Espaço / Estrutura
**Status:** ✅ **CONCLUÍDA E APROVADA — 05/10/2026.** Implementada em `src/components/home/SpaceAndStructure.astro`, logo após Gastronomia (detalhes em `home-estrutura.md` §7). Foto principal #49 `Fotos Salão quente.png` (versão quente fornecida pelo gestor, da mesma cena da #26, que fica preservada no acervo) e apoio #48 (oculta e não baixada no mobile). Capacidade detalhada conforme DEC-039. Sem pendências.

### 8. Como funciona
**Status:** ✅ **CONCLUÍDA E APROVADA — 05/10/2026.** `src/components/home/HowItWorks.astro`, logo após Espaço / Estrutura, `id="como-funciona"`, fundo soft. Função no funil: redução de risco / previsibilidade. H2 "Do planejamento ao dia do evento"; quatro etapas em `<ol>`: 01 Conte sobre seu evento · 02 Escolha a melhor opção · 03 Definimos os detalhes · 04 Aproveite seu evento. Layout: mobile 1 coluna compacta; 2×2 a partir de 40rem; 4 colunas a partir de 72rem. Sem CTA, sem fotografia, zero JavaScript. Sem pendências.

### 9. Eventos reais / avaliações
**Status:** pendente.

### 10. Localização / fechamento
**Status:** pendente.

### 11. Footer
**Status:** concluído e aprovado.

---

## 10. FATOS CANÔNICOS IMPORTANTES

Nome:
Divina Festa

Categoria:
Espaço de eventos + buffet

Endereço:
Rua Marcelino Champagnat, 122

Bairro:
Mercês

Cidade:
Curitiba/PR

Área:
aproximadamente 700 m²

Capacidade:
- Home: até 150 convidados;
- página Espaço/Estrutura: até 150 sentados;
- até 190 pessoas conforme a montagem e o formato, considerando o uso conjunto do salão e da área infantil (DEC-039); nunca "190 sentadas" e sem proporção em pé/sentadas.

Estrutura:
- estacionamento;
- climatização;
- acessibilidade;
- Wi-Fi;
- segurança;
- área infantil;
- buffet próprio;
- cozinha própria;
- decoração;
- coordenação;
- equipe.

Operação:
- apenas um evento por vez.

Estacionamento: privativo (DEC-019).

Contatos (DEC-018):
- WhatsApp geral: (41) 99247-0605;
- WhatsApp Royal/corporativo: (41) 99262-0604;
- nunca usar o telefone da linha Divina Essência como contato do site principal.

Fundação: 2005. Eventos realizados (~200) e avaliações Google (~4,7/5, ~500) só com confirmação antes de publicar (L-02, L-03).

Fonte factual: tabela do Documento Mestre §3 (vira um único arquivo de dados, `src/data/site.ts`). Não usar números divergentes sem validação.

---

## 11. REGRAS DE CONTEÚDO

Evitar como comunicação central:
- inesquecível;
- mágico;
- exclusivo;
- premium;
- sofisticado;
- melhor;
- maior;
- mais completo;
- barato;
- menor preço.

Preferir:
- fatos;
- estrutura;
- funcionamento;
- benefício;
- tranquilidade;
- organização;
- localização;
- prova;
- experiência real.

### Regra de prova

Sempre que possível:

**afirmação → prova → benefício para o cliente**

---

## 12. SEO / IA

Priorizar:

- semântica clara;
- entidades;
- páginas por intenção real;
- SEO local;
- fatos consistentes;
- NAP consistente;
- páginas específicas para tipos de evento;
- fotografias reais;
- conteúdo factual;
- autoridade;
- links internos;
- dados estruturados coerentes com a realidade.

Não criar:
- doorway pages;
- páginas artificiais por bairro;
- texto cheio de palavras-chave;
- técnicas especulativas de “SEO para IA”.

---

## 13. CONVERSÃO

O site faz parte do funil:

**descoberta → interesse → confiança → comparação → desejo → contato → proposta**

Conversão deve se concentrar em:
- Hero;
- seções de decisão;
- formulário;
- futuro botão flutuante de contato.

Header e Footer NÃO usam CTA comercial forte.

---

## 14. COMPONENTES BASE APROVADOS

Em `src/components/ui/`:

- Container;
- Section;
- Button;
- TextLink;
- Eyebrow.

Não criar componentes abstratos sem repetição real.

Componentização deve surgir de:
- repetição;
- semântica;
- comportamento;
- consistência.

---

## 15. FLUXO OBRIGATÓRIO DE TRABALHO

### Antes de executar

1. ler este arquivo;
2. ler documentos canônicos afetados;
3. verificar decisões existentes e status;
4. não reabrir decisões aprovadas sem evidência ou contradição real;
5. não instalar nada nem criar código sem autorização expressa (`AGENTS.md`).

### Durante

1. trabalhar uma página e uma seção por vez;
2. validar visualmente em mobile, tablet e desktop;
3. preservar performance e simplicidade.

### Após aprovação

Seguir a "Regra operacional obrigatória" do §3, mais, em tarefas de código:
- `npm run check`, `npm run build` e `git diff --check`;
- commit só com autorização;
- nunca push sem autorização; antes de qualquer push, `git remote -v` deve mostrar só `git@github-divina:EzequielBau/site-divina-festa.git`.

---

## 16. REGRA PARA NOVOS CHATS / AGENTES

Ao iniciar um novo chat ou agente:

> Leia primeiro `01-CONTEXTO-ATUAL.md` e os documentos canônicos que ele indicar. Continue a partir do “Estado atual” e “Próxima seção”. Não reabra decisões concluídas sem motivo concreto.

Se houver dúvida:
- consultar documentos;
- não pedir ao gestor para repetir algo que já está registrado.

---

## 17. PRÓXIMO PASSO ATUAL

1. **Eventos reais / avaliações** (próxima seção canônica da Home; Como funciona concluída e aprovada);
2. seguir a Home seção por seção: Localização/fechamento;
4. pendências abertas relevantes: L-08 (autorização de imagem), L-11 (criar o DEV), L-13 (URLs de redes e Maps).

---

## 18. PRINCÍPIO FINAL

O projeto não deve depender da memória de uma conversa.

A memória operacional deve existir em:
- documentos;
- decisões;
- status;
- contexto atual;
- inventário;
- código;
- Git.

**Este arquivo é o ponto de entrada obrigatório para manter continuidade entre pessoas, chats e agentes.**
