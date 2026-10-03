# DIVINA FESTA — HANDOFF DA CONVERSA / CONTINUIDADE DA HOME

**Data de consolidação:** 09/09/2026  
**Objetivo:** permitir continuar o trabalho em uma nova conversa sem perder decisões, estado atual, problemas resolvidos e próximos passos.

---

# 1. CONTEXTO DO PROJETO

Estamos construindo o novo site institucional/comercial do **Divina Festa**, em WordPress, com foco em:

- clareza;
- conversão;
- mobile-first;
- SEO e SEO local;
- boa compreensão por mecanismos de IA;
- velocidade;
- estética atemporal;
- fotografia real;
- confiança;
- redução de risco;
- facilidade de decisão.

Stack atual:

- WordPress
- Kadence Theme
- Kadence Blocks
- Fluent Forms
- Rank Math
- LiteSpeed Cache
- Hostinger

O site em desenvolvimento permanece **No Index** até a publicação definitiva.

---

# 2. DOCUMENTOS PRINCIPAIS DO PROJETO

A pasta `docs/` deve conter:

1. `01-documento-norte.md`
2. `02-arquitetura-site.md`
3. `03-identidade-visual.md`
4. `04-home-status-atual.md`
5. `05-problemas-tecnicos.md`
6. `06-handoff-home-09-09-2026.md` ← este arquivo

Ordem de prevalência:

1. Documento Norte
2. arquitetura vigente
3. identidade visual
4. status atual da Home
5. problemas técnicos documentados
6. instrução mais recente do gestor

---

# 3. ESTADO ATUAL DA HOME

## 3.1 Hero
**Concluído e aprovado.**

Eyebrow:
> BUFFET E ESPAÇO DE EVENTOS • MERCÊS, CURITIBA

H1:
> Um espaço completo para celebrar em Curitiba

Texto:
> Buffet, estrutura, gastronomia e organização para você aproveitar seu evento com mais tranquilidade.

CTAs:
- Solicitar Proposta
- Conhecer o Espaço

Direção visual:
- fundo creme;
- 2 colunas desktop;
- 1 coluna mobile;
- fotografia real;
- botões já ajustados;
- mobile já revisado.

---

## 3.2 Prova rápida
**Implementada.**

Conteúdos atuais:

1. **700m² para diferentes formatos**  
   Salão, área infantil e estrutura de apoio no mesmo espaço.

2. **Até 190 convidados**  
   Atualmente publicado com texto amplo.  
   Regra factual vigente para próximos ajustes: **até 150 pessoas sentadas ou até 190 em eventos predominantemente em pé, conforme layout e formato**.

3. **Espaço kids**  
   O salão principal fica integrado à área infantil, facilitando acompanhar as crianças sem sair da celebração.

4. **Estacionamento privativo no Mercês**  
   Mais facilidade para chegar, receber convidados e aproveitar o evento.

5. **Equipe preparada**  
   Cozinha, garçons, recepção, monitores e coordenação trabalhando para o evento acontecer como planejado.

6. **Seu evento resolvido**  
   Espaço, buffet, decoração, equipe e organização funcionando juntos para deixar a celebração bonita, simples e tranquila.

Visual:
- editorial;
- sem cards pesados;
- sem sombras;
- sem excesso de ícones;
- títulos fortes;
- descrições leves;
- alinhamento à esquerda.

---

## 3.3 Tipos de evento
**Estrutura e textos criados. Fotos ainda pendentes/precisam ser fechadas.**

Eyebrow:
> EVENTOS NO DIVINA FESTA

H2:
> O formato ideal para o seu evento

Introdução:
> Recebemos festas infantis, eventos familiares, 15 anos e eventos corporativos em Curitiba, com estrutura, gastronomia e organização adaptadas a cada celebração.

Cards:

### Festas Infantis
> Espaço infantil integrado, buffet, equipe e organização para as crianças se divertirem e os adultos também aproveitarem a celebração.

### Eventos Familiares
> Aniversários, batizados, chás e encontros para reunir diferentes gerações com conforto, gastronomia e organização.

### Festa de 15 Anos
> Uma celebração com ambientação, gastronomia e estrutura para transformar o espaço de acordo com o estilo da debutante.

### Eventos Corporativos
> Confraternizações e encontros empresariais com estrutura, gastronomia e atendimento para receber equipes e convidados.

Interação definida:
- imagem clicável;
- título clicável;
- descrição não clicável;
- sem link textual “Conhecer...” redundante;
- hover discreto.

Responsividade desejada:
- desktop: 4 colunas;
- tablet: 2x2;
- celular: 1 coluna.

---

## 3.4 Adultos + crianças
**Estrutura e copy criadas.**

Eyebrow:
> PARA CRIANÇAS E ADULTOS

H2:
> Crianças se divertem. Adultos aproveitam.

Texto:
> O salão principal fica integrado à área infantil, facilitando acompanhar as crianças sem deixar de participar da celebração. Enquanto elas aproveitam as atrações, os adultos permanecem próximos, com conforto, gastronomia e espaço para viver o evento.

Complemento:
> Mais tranquilidade para quem organiza e uma experiência melhor para todos os convidados.

CTA:
> Conhecer o espaço

Direção:
- foto real;
- desktop aproximadamente 55% foto / 45% texto;
- fundo sugerido `#F8F3E8`;
- mobile: texto + CTA + foto.

---

# 4. PROBLEMA TÉCNICO DE ESPAÇAMENTO — RESOLVIDO

Havia discrepância entre Gutenberg/Kadence no editor e o front-end publicado.

## Causa confirmada pelo Codex/Astra

O CSS do Kadence Theme aplicava margens em headings e parágrafos dentro de `.single-content`, vencendo a neutralização de margens dos filhos de layouts flex do Gutenberg.

Isso somava:
- margem do tema;
- + gap das Pilhas/layouts flex;

e criava espaços maiores no front-end.

Origem identificada:
`/wp-content/themes/kadence/assets/css/content.min.css`

## CSS final publicado

Local:
**Aparência → Personalizar → CSS adicional**

```css
:where(.home) .single-content .is-layout-flex >
:where(.wp-block-heading, .wp-block-paragraph) {
  margin-block: 0;
}
```

Escopo:
- apenas Home;
- apenas área de conteúdo;
- apenas filhos diretos de layouts flex;
- apenas headings/parágrafos nativos;
- não atinge Text (Adv), Section, Row Layout ou Buttons (Adv) do Kadence.

## Validação

Validado por Astra/Codex em:
- desktop;
- tablet;
- celular.

Pontos validados:
- Prova rápida → Eventos;
- cabeçalho “O formato ideal para o seu evento”;
- Eventos → Crianças/Adultos.

## Limpeza feita

A cópia duplicada do mesmo CSS que havia ficado no Custom CSS do Row Layout “Tipo Evento” foi removida.

A regra deve permanecer apenas em:
**Aparência → Personalizar → CSS adicional**

---

# 5. CONFIGURAÇÕES IMPORTANTES DO KADENCE

## Layout da página

Manter:
- **Estilo do Conteúdo:** Desencaixado
- **Content Vertical Spacing:** Desabilitado

## Enable Optimized Group Block

Foi ativado apenas para diagnóstico.
Não revelou o controle de `Block spacing`.

A recomendação é manter no estado original/desativado, salvo nova necessidade técnica.

---

# 6. PADRÃO DE CONSTRUÇÃO DAQUI PARA FRENTE

Preferir:

```text
Row Layout (Kadence)
└── Section (Kadence)
    ├── Text (Adv)
    ├── Image (Adv)
    └── Buttons (Adv)
```

Evitar misturar sem necessidade:
- Grupo nativo;
- Pilha nativa;
- Linha nativa;
- Grade nativa;
- Parágrafo nativo;
- Colunas nativas.

Não é proibição absoluta, mas o padrão preferido é usar o ecossistema Kadence para maior previsibilidade.

## Text (Adv)

Block Default já configurado com:
- margin: 0
- padding: 0

Usar o container para controlar ritmo vertical sempre que possível.

---

# 7. IDENTIDADE VISUAL — RESUMO

Paleta:
- `#B88917` — dourado principal
- `#8F6B16` — dourado escuro / hover
- `#6F5426` — marrom institucional
- `#282120` — contraste forte
- `#2F2F2F` — texto
- `#6B6B6B` — texto secundário
- `#FFF9F2` — creme principal
- `#F8F3E8` — creme secundário
- `#FFFFFF` — branco

Tipografia:
- headings: Familien Grotesk
- body: Source Sans 3

Referências:
- H1 desktop 56 / tablet 46 / mobile 38
- H2 desktop 40 / tablet 34 / mobile 30
- H3 desktop 30 / tablet 27 / mobile 24
- body desktop 18 / tablet 17 / mobile 16

Regra importante:
**só configurar valores responsivos quando o controle realmente mostrar suporte por dispositivo.**

---

# 8. HEADER E FOOTER

## Header

Desktop:
`Logo | Menu | Solicitar proposta`

Menu:
- Início
- Eventos
- O Divina
- Contato
- Solicitar proposta

Mobile:
- logo
- hamburger
- CTA dentro do drawer

Sticky.

## Footer

Fundo:
`#282120`

Conteúdo:
- logo
- “Seu evento nas mãos certas.”
- “Buffet, estrutura e organização para celebrar com tranquilidade.”
- redes sociais, se mantidas
- copyright

Não ajustar o grande espaço anterior ao footer até a Home estar completa.

---

# 9. PRÓXIMA ETAPA DA HOME

## Gastronomia

**É a próxima seção a ser construída.**

Objetivo:
- tratar gastronomia como produto;
- gerar desejo;
- provar qualidade pela comida real;
- mostrar formatos de serviço;
- reforçar cozinha/buffet;
- encaminhar para página Gastronomia.

Não fazer:
- catálogo gigante;
- tabela de preços na Home;
- “alta gastronomia” sem prova;
- frases genéricas;
- excesso de fotos decorativas.

A seção deve ser construída seguindo o padrão obrigatório do projeto:

1. Objetivo da seção
2. Estrutura/wireframe
3. Texto sugerido
4. Configuração desktop/tablet/celular
5. SEO relevante
6. CTA e função comercial
7. O que evitar

---

# 10. COMO CONTINUAR EM NOVA CONVERSA

Na nova conversa, dentro do mesmo Projeto, usar:

> Leia os arquivos `01-documento-norte.md` até `06-handoff-home-09-09-2026.md`.  
> Vamos continuar a Home do Divina Festa exatamente do ponto onde paramos.  
> O problema de espaçamento editor × front-end já foi resolvido e não deve ser reaberto.  
> A próxima seção é Gastronomia.  
> Trabalhe seção por seção, com wireframe, texto final, desktop/tablet/mobile, SEO, CTA e o que evitar.

---

# 11. REGRA FINAL

Não reabrir problemas já encerrados sem evidência concreta.

Não trocar tema.

Não redesenhar seções aprovadas sem motivo.

Continuar a Home a partir de Gastronomia.
