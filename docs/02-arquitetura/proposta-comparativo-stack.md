# PROPOSTA — Comparativo técnico de stack

**Status:** ✅ **DECIDIDO em 03/10/2026: Astro static-first, registrado como DEC-026.** Este arquivo é mantido como registro da análise. **Nada foi instalado nem implementado.**
**Data:** 03/10/2026
**Relação:** fundamentou a DEC-026, que resolveu a pendência de stack (DEC-016 / L-19).

> **Diferença entre esta análise e a decisão final:** a recomendação refinada (§6) previa os endpoints dentro do projeto Astro (adapter Node). A DEC-026 adotou um caminho mais desacoplado: frontend **100% estático** e **serviço backend independente na VPS**, para que o site não dependa de um servidor Node permanente e falhas de integração não o afetem. Vale o texto da DEC-026.
>
> **Hospedagem (DEC-028):** esta análise e a DEC-027 previam o site na VPS (Nginx). A DEC-028 substituiu esse ponto: o frontend estático fica em **hospedagem desacoplada da VPS** (serviço estático/CDN, provedor a definir em etapa própria), e a VPS fica só para o backend. As menções a "VPS (Nginx + Node)" para o site, abaixo, são registro histórico da análise.

---

## 0. Contexto que pesa na escolha

Requisitos que vêm dos documentos do projeto:

- **Tamanho:** cerca de 15 páginas na v1, com crescimento contínuo depois (Eventos Reais como cases, FAQ). *(arquitetura)*
- **Prioridades:** mobile-first, velocidade acima de efeitos, Core Web Vitals "bom". *(NORTE §19–20)*
- **Consistência factual crítica:** NAP, capacidade e telefones idênticos em todas as páginas. *(NORTE §21)*
- **Conversão:** formulário curto que abre o WhatsApp com roteamento geral/Royal e alimenta o Kommo. *(NORTE §15; integrações)*
- **Medição:** GTM, GA4, Ads, Meta Pixel + CAPI e webhooks. *(DEC-009)*
- **Operação:** manutenção em grande parte assistida por IA, com tudo versionado em Git (AGENTS.md; DEC-008).
- **Infraestrutura:** Hostinger e possibilidade de VPS.

**Pergunta decisiva ainda sem resposta:** quem vai editar conteúdo no dia a dia, e com que frequência? Se uma pessoa não técnica precisa publicar cases e trocar textos sozinha, toda semana, o WordPress ganha pontos. Se as mudanças passam pelo gestor com apoio de IA, o static-first ganha.

## 1. As três opções

| Opção | Em uma frase |
|---|---|
| **A. WordPress customizado** | CMS em PHP + banco MySQL, com tema leve (próprio ou filho) e um conjunto enxuto de plugins |
| **B. Astro (static-first)** | Gerador de site em Node que produz HTML estático, sem JavaScript por padrão, com componentes reutilizáveis e conteúdo em arquivos versionados |
| **C. HTML/CSS/JS estruturado** | Páginas escritas à mão, sem framework, com organização de pastas e, no máximo, includes em PHP para header/footer |

## 2. Comparativo por critério

Legenda: ✅ forte · ⚠️ atende com ressalvas · ❌ fraco

| Critério | A. WordPress customizado | B. Astro static-first | C. HTML/CSS/JS estruturado |
|---|---|---|---|
| **SEO** | ✅ Maduro: Rank Math/Yoast cuidam de titles, canonical, sitemap e schema. Risco de páginas-lixo (tags, anexos, autor) se não forem configuradas | ✅ Controle total do HTML. Sitemap por integração oficial; schema JSON-LD por componente. Nada indesejado é gerado | ⚠️ Controle total, mas tudo manual (sitemap, canonical, schema em cada página), com risco de esquecimento |
| **SEO local** | ✅ Plugins de schema local; NAP em opções globais | ✅ NAP em **um único arquivo de dados**, reutilizado em todas as páginas e no schema, o que garante a consistência factual por construção | ❌ NAP repetido em cada página (ou em includes PHP). Uma inconsistência é fácil de acontecer, e esse é justamente um item da blacklist |
| **Velocidade** | ⚠️ Boa com LiteSpeed Cache e tema leve, mas há PHP + banco por trás e cada plugin adiciona CSS/JS | ✅ HTML pré-gerado, servido como arquivo, com JS zero por padrão | ✅ Igual ao Astro, se bem feito. Sem otimização automática de imagens |
| **Core Web Vitals** | ⚠️ Atingível, mas exige disciplina constante: plugins, page builders e scripts de terceiros degradam LCP e INP | ✅ Mais fácil de atingir e manter. Otimização de imagens nativa (`<Image>`: WebP/AVIF, dimensões, lazy) evita CLS | ✅ Atingível, mas responsivo, srcset e conversão de imagens ficam todos manuais |
| **Facilidade de manutenção** | ⚠️ Atualizações frequentes de core, tema e plugins, com risco de quebra a cada update. Configuração espalhada pelo banco (fora do Git) | ✅ Tudo em Git, com componentes e tipagem. Atualizações de dependências pontuais (majors do Astro cerca de 1×/ano) | ⚠️ Simples no início; piora a cada página (duplicação). Sem dependências para atualizar |
| **Facilidade de edição de conteúdo** | ✅ **Melhor das três.** Editor visual (Gutenberg), mídia e rascunhos para não técnicos | ⚠️ Conteúdo em Markdown/arquivos. Edição por IA/dev é fácil; para leigos exige um CMS adicional (Keystatic, Decap, Tina ou WordPress headless) | ❌ Só editando código |
| **Formulários** | ✅ Plugins prontos (Fluent Forms etc.) com etapas, validação, anti-spam e envio para webhook | ⚠️ O site é estático; o envio precisa de um endpoint: rota de servidor do Astro (adapter Node na VPS), script PHP na Hostinger ou função serverless. O formulário progressivo é um componente leve | ⚠️ Mesmo caso do Astro: endpoint PHP ou externo. A lógica de etapas é feita à mão |
| **GA4** | ✅ Via GTM (recomendado) ou plugin | ✅ Via GTM. Eventos por `dataLayer` em componentes | ✅ Via GTM |
| **Google Tag Manager** | ✅ Plugin ou snippet no tema | ✅ Snippet no layout base (um lugar só) | ⚠️ Snippet em cada página ou include |
| **Search Console** | ✅ Verificação por DNS; sitemap pelo plugin de SEO | ✅ Verificação por DNS; sitemap gerado no build | ✅ Verificação por DNS; sitemap manual |
| **Meta Pixel** | ✅ Via GTM ou plugin oficial | ✅ Via GTM | ✅ Via GTM |
| **Meta Conversions API** | ✅ Plugins (oficial da Meta, PixelYourSite) fazem o envio server-side. Menos controle sobre deduplicação | ⚠️ Exige endpoint de servidor próprio (o mesmo do formulário), com controle total de `event_id`, dados e consentimento | ⚠️ Mesmo caso do Astro, em PHP |
| **Kommo** | ✅ Formulário com webhook ou integração Kommo para WordPress | ✅ Endpoint chama a API ou o webhook do Kommo com UTMs/gclid, sob controle total | ⚠️ Possível via PHP, mas com código próprio sem estrutura |
| **Webhooks** | ✅ Plugins de formulário enviam webhooks; lógica customizada exige PHP no tema/plugin | ✅ Endpoint único e versionado (formulário → Kommo + CAPI + WhatsApp) | ⚠️ PHP avulso |
| **Integração com VPS** | ✅ Roda em qualquer VPS (LAMP/LEMP), mas exige administrar PHP, MySQL e cache | ✅ Estático em Nginx, ou Node para os endpoints. Deploy por Git/GitHub Actions | ✅ Qualquer servidor web |
| **Hospedagem Hostinger** | ✅ **Encaixe nativo**: planos WordPress, LiteSpeed, instalação em 1 clique | ✅ A saída estática sobe para hospedagem compartilhada (public_html) por Git, FTP ou Actions; endpoints em PHP rodam lá. Rotas em Node exigem VPS ou um plano com suporte a Node (**verificar o plano contratado**) | ✅ Hospedagem compartilhada comum |
| **Segurança** | ❌ **Maior superfície de ataque**: painel `/wp-admin`, login, banco, plugins de terceiros (a maioria das invasões em WordPress vem de plugins desatualizados). Exige atualizações, WAF e backups | ✅ Superfície mínima: arquivos estáticos. Só o endpoint de formulário precisa de cuidado (validação, rate limit, segredos em `.env`) | ✅ Superfície mínima, mas o PHP feito à mão tende a ser menos revisado |
| **Custo** | ⚠️ Hospedagem barata, mas há licenças anuais de plugins premium (se usados) e mais horas de manutenção e atualização | ✅ Software gratuito; hospedagem compartilhada ou VPS já existente; CMS Git opcional gratuito. O custo é o desenvolvimento inicial | ✅ Software gratuito. Custo de desenvolvimento cresce com cada página |
| **Dependência de plugins** | ❌ Alta: SEO, formulários, cache, segurança, Pixel/CAPI, tracking | ✅ Baixa: poucas integrações oficiais (sitemap, imagens); dependências npm sob controle | ✅ Nenhuma |
| **Facilidade para IA manter** | ⚠️ A IA edita bem tema e PHP, mas **conteúdo e configurações ficam no banco** (fora do Git): ela não enxerga nem versiona o estado real do site, e mudanças pelo painel não deixam rastro | ✅ **Melhor das três.** Tudo em texto no Git, estrutura previsível, componentes pequenos e documentação madura. Cada mudança é um diff revisável | ⚠️ Leitura fácil, mas a duplicação leva a IA a corrigir em um lugar e esquecer outro |
| **Escalabilidade futura** | ✅ Escala em conteúdo (centenas de cases) e em funcionalidades via plugins, com custo crescente de manutenção | ✅ Coleções de conteúdo tipadas para cases e FAQ; dá para adicionar CMS, i18n e páginas dinâmicas (modo híbrido) depois | ❌ Não escala bem além de algumas páginas |

## 3. Análise por opção

### A. WordPress customizado — **nota 7,0 / 10**

**Vantagens**
- Edição de conteúdo autônoma para não técnicos: o maior trunfo.
- Ecossistema pronto para SEO, formulários, CAPI e Kommo; encaixe nativo na Hostinger.
- A equipe já conhece (houve implementação anterior com Kadence), e há conteúdo aprovado que pode ser reaproveitado.

**Desvantagens**
- Estado do site dividido entre Git (tema) e banco (conteúdo e configuração). Rastreabilidade fraca, o que contraria o modelo de governança deste repositório.
- Performance depende de disciplina contínua; cada plugin é um custo.
- A manutenção nunca termina (atualizações de segurança).

**Riscos**
- Segurança (plugins desatualizados, força bruta no login).
- Volta do problema já vivido: divergência editor × front-end por CSS de tema e page builder.
- Acúmulo de plugins ao longo do tempo, com CWV degradando sem ninguém perceber.

**Complexidade:** baixa para começar; **média a alta para manter bem**.

**Adequação ao Divina Festa:** boa, **se** houver alguém não técnico publicando conteúdo com frequência. Média, se as mudanças passarem por IA ou dev.

### B. Astro static-first — **nota 8,5 / 10**

**Vantagens**
- Melhor desempenho e CWV com menos esforço, alinhado ao NORTE ("velocidade prevalece sobre efeitos").
- **Fonte factual única no código:** NAP, capacidade e telefones em um arquivo de dados, usados em todas as páginas e no schema. A inconsistência deixa de ser possível por descuido.
- Tudo versionado em Git, revisável e reversível: casa com AGENTS.md, decisões e commits pequenos.
- Mínima superfície de ataque e quase nenhuma dependência de plugins.
- Um único endpoint de servidor concentra formulário → Kommo + Meta CAPI + roteamento de WhatsApp, com controle total de dados, consentimento e deduplicação.
- Coleções de conteúdo encaixam naturalmente em Eventos Reais (cases) e FAQ.

**Desvantagens**
- Edição por leigos exige um CMS adicional; sem ele, mudanças de texto passam por quem mexe no código (ou pela IA).
- Formulários e CAPI exigem escrever e hospedar um endpoint (pequeno, mas é código próprio).
- Exige um processo de build e deploy (Node local ou GitHub Actions).

**Riscos**
- Dependência de uma pessoa ou IA para qualquer mudança de conteúdo, se não houver CMS.
- Endpoint de formulário mal protegido (spam, abuso). Mitigação: validação, honeypot/Turnstile e rate limit.
- Restrições do plano de hospedagem para rodar Node. Mitigação: endpoint em PHP na Hostinger, ou VPS.

**Complexidade:** média no início (estrutura, deploy, endpoint); **baixa para manter**.

**Adequação ao Divina Festa:** **alta.** Atende diretamente às prioridades do NORTE (velocidade, clareza, consistência factual, mobile) e ao modelo de trabalho página por página, versionado e assistido por IA.

### C. HTML/CSS/JS estruturado — **nota 6,0 / 10**

**Vantagens**
- Zero dependências, zero build, desempenho máximo possível.
- Qualquer hospedagem serve; nada para atualizar.
- Código totalmente transparente.

**Desvantagens**
- Header, footer, NAP, schema e metatags repetidos em cerca de 15 páginas. Includes em PHP reduzem isso, mas ainda sem componentes nem dados centralizados.
- Imagens responsivas (WebP/AVIF, srcset), sitemap e schema ficam todos manuais.
- Cases e FAQ crescendo tornam a manutenção cada vez mais cara.

**Riscos**
- **Inconsistência factual entre páginas**, exatamente o risco que o NORTE coloca na blacklist.
- Dívida técnica crescente; uma migração futura para framework seria provável.

**Complexidade:** baixa no início; **cresce linearmente** com o número de páginas.

**Adequação ao Divina Festa:** média-baixa. Serviria para uma landing page; não serve bem a uma arquitetura de 15+ páginas com cases e jornadas por evento.

## 4. Resumo das notas

| Opção | Nota | Melhor quando… |
|---|---|---|
| **B. Astro static-first** | **8,5** | Prioridade em performance, consistência, rastreabilidade e manutenção com IA |
| A. WordPress customizado | 7,0 | Conteúdo editado com frequência por pessoa não técnica, sem apoio técnico |
| C. HTML/CSS/JS estruturado | 6,0 | Site muito pequeno e estável (não é o caso) |

## 5. Recomendação técnica

**Recomendo a opção B: Astro static-first**, nesta configuração:

1. **Site:** Astro gerando HTML estático, com componentes para seções e layout, e um **arquivo central de dados factuais** (NAP, capacidade, telefones, horários) usado em todas as páginas e no schema.
2. **Conteúdo:** páginas e seções em componentes; Eventos Reais e FAQ em **coleções de conteúdo** (Markdown) versionadas.
3. **Formulário + integrações:** **um endpoint de servidor** que recebe o formulário progressivo, envia o lead ao Kommo (com UTMs/gclid/fbclid), dispara a Meta CAPI com `event_id` compartilhado com o Pixel e devolve o link de WhatsApp correto (geral ou Royal). Hospedagem do endpoint: VPS (Node) ou PHP na Hostinger, conforme o plano.
4. **Tags:** GTM no layout base, com Consent Mode v2; GA4, Ads e Pixel configurados dentro do GTM.
5. **Deploy:** GitHub → build → publicação estática (Hostinger ou VPS); a branch `main` reflete o site publicado.
6. **Edição por não técnicos (opcional, fase 2):** se necessário, adicionar um CMS baseado em Git (ex.: Keystatic ou Decap). As edições continuam virando commits rastreáveis.

**Por quê:** é a opção que mais diretamente serve à regra-mãe do NORTE ("explica melhor, prova melhor… torna mais fácil decidir"), com velocidade, consistência factual garantida pela estrutura, segurança e um modelo de manutenção auditável, que é exatamente o que a governança deste repositório pressupõe.

**Quando eu mudaria a recomendação para WordPress:** se ficar definido que uma pessoa não técnica precisa publicar e editar conteúdo sozinha, com frequência, sem passar por quem mantém o código, e um CMS Git não atender. Nesse caso: WordPress com tema próprio leve, o mínimo de plugins, e conteúdo e configurações exportados e documentados.

## 6. Informações necessárias para fechar a decisão

1. Quem vai editar conteúdo, e com que frequência?
2. Qual é o plano Hostinger atual (compartilhado, Cloud ou VPS)? Ele permite Node? Há acesso SSH?
3. Existe VPS disponível hoje, ou ela é só uma possibilidade?
4. O ambiente WordPress anterior continuará no ar até o lançamento do novo site? (Afeta redirecionamentos 301 e o Search Console.)
5. Há preferência ou contrato com algum CMS, plugin ou serviço?

### Respostas do gestor (03/10/2026)

| Pergunta | Resposta | Efeito na análise |
|---|---|---|
| Quem edita o conteúdo | O próprio gestor, a princípio | Elimina a principal vantagem do WordPress. Um CMS adicional fica desnecessário na v1 |
| Plano Hostinger: Node e SSH | Permite | Endpoints em Node viáveis, sem precisar de PHP |
| VPS | Existe e está operacional | Permite hospedar site + endpoint juntos, com controle total |
| WordPress anterior | Fica no ar até o lançamento; sem impacto por ora | Redirecionamentos e Search Console só no checklist de lançamento |
| Preferência | "Robusto, inteiro, bem feito, rápido para abrir, que eu possa escalar" | Reforça a opção B |

**Recomendação refinada:** **Astro**, com páginas pré-renderizadas (estáticas) e os endpoints de formulário/integrações no mesmo projeto (adapter Node), hospedado na **VPS** (Nginx + Node como serviço, HTTPS via Let's Encrypt e deploy pelo GitHub). A Hostinger fica como alternativa. Conteúdo em arquivos versionados, editados pelo gestor com apoio de IA. CMS só se, no futuro, outra pessoa precisar editar.

## 7. Próximo passo (após a decisão)

Registrar a escolha como decisão (DEC-0xx, substituindo a pendência da DEC-016 / L-19), atualizar o documento mestre, o design system (breakpoints e carregamento de fontes) e o status, e só então planejar a estrutura de `src/`. **Nada será instalado antes disso.**
