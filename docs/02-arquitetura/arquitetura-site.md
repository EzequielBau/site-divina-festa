# Arquitetura do site

**Versão:** 1.8 — 03/10/2026 (arquitetura técnica: DEC-026 a DEC-030 e DEC-033; formulários: DEC-032)
**Fontes:** NORTE §9–14 · SÍNTESE §18, §23, §29 · HANDOFF §8
**Regra de criação de página:** só existe página quando há **intenção diferente + necessidade diferente + conteúdo diferente + função comercial própria**. Não criar páginas por palavra-chave ou bairro.

## Mapa

```text
Home
│
├── Eventos
│   ├── Festa Infantil
│   ├── Aniversários e Eventos Familiares
│   ├── 15 Anos
│   ├── Corporativo e Confraternizações
│   ├── Mini Wedding
│   └── Almoços, Jantares e Recepções
│
├── Espaço e Estrutura
├── Gastronomia
├── Como Funciona
├── Eventos Reais
├── O Divina
├── FAQ
└── Localização e Contato
```

URLs: a definir na etapa de implementação. Sugestão de padrão: slugs curtos em português, sem acentos, com eventos sob `/eventos/` (ex.: `/eventos/festa-infantil/`). Ainda não aprovado.

## Prioridades

- **P0** = necessária no lançamento
- **P1** = logo após
- **P2/P3** = quando houver acervo/conteúdo que a sustente

Prioridades conforme o NORTE §9 (a SÍNTESE tem pequenas inversões, ver DIV-15).

| Página | Prioridade | Público | Principal objetivo | Função comercial | Função SEO |
|---|---|---|---|---|---|
| **Home** | P0 | todos os públicos; tráfego de marca e genérico local | Responder rápido: o que é, onde fica, para quem, por que considerar e qual o próximo passo | Orientar e encaminhar para a jornada certa ou para a proposta | Entidade principal: "espaço para eventos em Curitiba", Mercês |
| **Festa Infantil** | P0 | pais de crianças | Mostrar diversão infantil + conforto adulto + segurança + gastronomia | Principal jornada de receita atual; proposta infantil | Intenção "festa infantil / buffet infantil em Curitiba" com conteúdo próprio |
| **Aniversários e Eventos Familiares** | P0 | famílias, aniversários adultos, batizados, chás, encontros | Materializar a hospitalidade multigeracional | Ampliar a receita além do infantil | Intenção familiar/adulta e multigeracional |
| **15 Anos** | P1 | debutante e família | Mostrar transformação do espaço, pista, decoração, gastronomia, coordenação e estilo | Jornada própria de ticket maior | Intenção "festa de 15 anos Curitiba", **quando houver prova visual suficiente** |
| **Corporativo e Confraternizações** | P0/P1 | empresas, RH, organizadores | Dar logística, capacidade, Wi-Fi, AV (quando houver), estacionamento, alimentação, montagem, horários, faturamento e interlocutor | Legitimidade B2B; **roteamento para o WhatsApp Royal** | Conteúdo B2B próprio (não é texto social adaptado) |
| **Mini Wedding** | P2 | casais, casamentos menores | Mostrar configuração, recepção, gastronomia, decoração, privacidade e prova real | Nova linha, **só com acervo e oferta sustentados** | Intenção "mini wedding Curitiba" |
| **Almoços, Jantares e Recepções** | P2 | famílias, grupos, empresas | Apresentar formatos gastronômicos e sociais | Ocupação com formatos menores | Intenção por formato de refeição/recepção |
| **Espaço e Estrutura** | P0 | todos, em fase de adequação | Fatos físicos: ~700 m²; capacidade "até 150 pessoas sentadas ou até 190 pessoas, conforme a montagem e o formato do evento", com uso conjunto do salão e da área infantil (DEC-017, DEC-039); estacionamento privativo; climatização, acessibilidade, Wi-Fi, área infantil e integração | Reduzir risco e provar adequação | Atributos físicos pesquisáveis; dados para schema |
| **Gastronomia** | P0 | todos, em fase de desejo | Tratar a gastronomia como produto: formatos, cardápios-amostra, pratos reais, cozinha, serviço, equipe e depoimentos | Gerar desejo e justificar valor | "buffet próprio", "cozinha própria", formatos de serviço |
| **Como Funciona** | P0/P1 | quem está perto de decidir | Transformar organização em previsibilidade: contato → entendimento → proposta/visita → reserva → definições → preparação → evento | Reduzir ansiedade e qualificar o lead | Perguntas de processo e contratação |
| **Eventos Reais** | P1 | todos, em fase de confiança | Mostrar cases (tipo, objetivo, convidados, configuração, gastronomia, necessidade, solução, fotos, depoimento) | Prova + inspiração | Conteúdo long-tail natural; cada case é uma unidade de conteúdo |
| **O Divina** | P2 | quem busca confiança institucional | Contar história (desde 2005), equipe e identidade | Confiança | Entidade, história, E-E-A-T |
| **FAQ** | P2/P3 | todos | Responder dúvidas reais e reduzir risco | Qualificar e remover objeções | Perguntas reais. Schema FAQ só se o conteúdo for visível e útil |
| **Localização e Contato** | P0 | quem vai visitar ou contatar | Endereço normalizado, mapa, chegada, estacionamento, horários e canais | Conversão final: proposta e WhatsApp | SEO local: NAP consistente com o GBP; Mercês, Curitiba |

## Perguntas que cada página de evento precisa dominar (NORTE §11)

| Página | Perguntas |
|---|---|
| Festa Infantil | atrações, segurança, alimentação, conforto adulto, estacionamento, organização |
| Eventos Familiares | ambiente adulto, crianças bem atendidas, gastronomia, convivência entre gerações |
| 15 Anos | transformação do espaço, pista, decoração, gastronomia, coordenação, estilo |
| Corporativo | capacidade, Wi-Fi, AV quando houver, estacionamento, alimentação, montagem, horários, faturamento, interlocutor |
| Mini Wedding | configuração, recepção, gastronomia, decoração, privacidade, prova real |

## Navegação

- Menu vigente no HANDOFF §8: **Início · Eventos · O Divina · Contato · [Solicitar proposta]**.
- **Ponto aberto (DIV-07):** Espaço e Estrutura, Gastronomia e Como Funciona são P0/P0-P1 e não estão no menu. Revisar quando essas páginas existirem.
- Header desktop: `Logo | Menu | Solicitar proposta` (sticky). Mobile: logo + hamburger, com o CTA dentro do drawer.

## Fora da arquitetura da v1

- **Divina Essência** (buffet no local do cliente): **linha/produto separado, a avaliar no futuro. Não entra na arquitetura principal da primeira versão** (DEC-020). Nada de página, item de menu ou roteamento de WhatsApp para a Essência na v1. O telefone dela, (41) 9 8535-0605, não é contato do site principal (DEC-018).

## Arquitetura técnica (DEC-026, DEC-027, DEC-028 e DEC-033)

**Status:** decidida e documentada. Existe só a base técnica (Etapa 01); **nada configurado na hospedagem.** A DEC-028 substitui parcialmente a DEC-027 nos pontos sobre hospedagem do frontend; a DEC-033 substitui o Cloudflare Pages (DEC-029/030) pela Hostinger Web Hosting.

```text
  PC local → Git → GitHub privado → npm run build → dist/
                                                     │ publicação manual e controlada
                                                     ▼     (somente dist/)
  Hostinger Web Hosting (DEC-033)
  ┌────────────────────────────────────────────────────────────┐
  │  divinafesta.com.br (após o lançamento; ambiente próprio)  │
  │  dev.divinafesta.com.br (fora do índice)                   │
  │     └── arquivos estáticos do build do Astro (dist)        │
  │         HTML · CSS · JS mínimo · imagens                   │
  └────────────────────────────────────────────────────────────┘
                 │  só as funções que precisam de servidor
                 │  (ex.: envio do formulário), via HTTPS
                 ▼
                    Hostinger VPS
  ┌────────────────────────────────────────────────────────────┐
  │  api.divinafesta.com.br   [futuro]                         │
  │     └── Node.js + TypeScript + Fastify                     │
  │         formulários · Kommo · Meta CAPI · webhooks ·       │
  │         roteamento de WhatsApp · integrações futuras       │
  └────────────────────────────────────────────────────────────┘

  Astro (build estático) → Hostinger Web Hosting → site público
  Node / Fastify (VPS)   → lógica de servidor e integrações
  Cloudflare             → opcional e futuro (CDN / WAF / cache), não é requisito
```

**Regra de resiliência (DEC-028):** o site institucional não depende da VPS. Se a VPS ficar indisponível, Home, páginas, imagens, SEO e conteúdo continuam no ar; só as funções que dependem da API podem ficar temporariamente indisponíveis.

### Frontend

- **Astro** com **TypeScript**, gerando **páginas estáticas** sempre que possível.
- **HTML semântico.** JavaScript só quando houver necessidade funcional (ex.: etapas do formulário, menu mobile).
- Prioridades: Core Web Vitals, SEO, acessibilidade e mobile.
- **Fonte factual centralizada:** um único arquivo de dados (NAP, capacidade, telefones, horários, atributos) consumido pelas páginas e pelo schema. É a implementação da tabela do documento mestre §3.
- **Componentes reutilizáveis** para seções e layout. Conteúdo e código versionados no Git.
- **Sem dependência estrutural de WordPress.**
- **Não depende de servidor Node em execução permanente** para servir as páginas.
- **Sem CMS adicional** por enquanto. Pode ser acrescentado depois sem reconstruir o frontend.

### Hospedagem do frontend (DEC-028, DEC-033)

- **Desacoplada da VPS.** O build do Astro é publicado como **arquivos estáticos**.
- **Provedor: Hostinger Web Hosting** (DEC-033; substitui o Cloudflare Pages da DEC-029).
  - Código-fonte: PC local + GitHub privado `EzequielBau/site-divina-festa`.
  - Comando de build: `npm run build`. Diretório de saída: `dist`.
  - **Só o conteúdo de `dist/` vai para a hospedagem.** Nunca `.git`, `docs`, `src`, `node_modules`, `.env`, credenciais ou documentação interna.
- **Portabilidade:** o site deve poder migrar entre provedores sem ser refeito. Recursos exclusivos de qualquer provedor não podem virar requisito do frontend sem nova decisão.
- **Cloudflare:** opcional no futuro, na frente da Hostinger (CDN, WAF, cache). Não configurar agora.
- **Nginx e VPS não são requisitos do frontend.**
- **HTTPS** obrigatório em todo ambiente publicado.

### Backend (DEC-027, DEC-028)

- **Serviço separado**, em **Node.js + TypeScript**, com **Fastify** como framework inicial previsto.
- Roda na **VPS**, que fica reservada ao que exige processamento de servidor.
- Subdomínio futuro: **`api.divinafesta.com.br`**. O Nginx pode atuar como reverse proxy na VPS; a configuração fica para a etapa de infraestrutura.
- Responsabilidades futuras: formulários, Kommo, Meta Conversions API, webhooks, roteamento de WhatsApp e integrações adicionais.
- **Não é requisito para o funcionamento normal das páginas institucionais:** o site continua funcionando mesmo se o backend ou uma integração falhar.
- Princípio de degradação: se o envio do formulário falhar, o visitante ainda precisa de um caminho de contato. Mecanismo definido pela **DEC-032** (abaixo).
- Segredos (tokens do Kommo e da Meta) só no backend, em variáveis de ambiente. **Nunca no frontend nem no Git.**

### Formulários resilientes e fallback de contato (DEC-032)

**Divisão de responsabilidades**

| Camada | Responsável por |
|---|---|
| Frontend (Astro, estático) | Campos, labels, validação de interface, estados de carregamento, mensagens, preservação temporária dos dados, timeout da chamada e fallback para WhatsApp. Não depende da VPS para aparecer nem para funcionar visualmente |
| Backend (Fastify, `api.divinafesta.com.br`) | Revalidação de todos os campos, normalização, antiabuso e rate limit, origem/UTMs, lead no Kommo, eventos server-side futuros (Meta CAPI, com autorização), logs técnicos e resposta clara de sucesso ou falha |

**Fluxo**

```text
usuário envia o formulário
   │  HTTPS, com timeout controlado
   ▼
API responde com sucesso? ── SIM ──► confirmação ao usuário (só agora o formulário pode ser limpo)
   │
   NÃO (erro, timeout, indisponível)
   ▼
dados preservados → aviso simples de que o envio não foi concluído
   → WhatsApp oferecido na hora, com os dados já na mensagem
     (geral ou Royal, conforme o tipo de evento — DEC-018)
```

**Requisitos**
- **Segurança:** nenhuma credencial no frontend. O navegador nunca fala com Kommo, Meta CAPI ou outro serviço que exija segredo.
- **Validação em duas camadas:** a do frontend melhora a experiência; a do backend é a que vale.
- **Preservação dos dados:** em memória enquanto o usuário está na página; não limpar antes da confirmação real; armazenamento no navegador só se necessário e por pouco tempo; sem persistência permanente.
- **Timeout:** o frontend não fica carregando indefinidamente. Valor exato definido na implementação (L-23).
- **Antiabuso no backend:** rate limit por origem/IP, limites de tamanho e tipo, rejeição de payloads inválidos e de campos inesperados, logs de tentativas anormais, CORS restrito aos domínios autorizados, timeout nas chamadas externas. CAPTCHA/Turnstile **só com evidência real de abuso**.
- **Falha parcial:** as integrações não formam uma operação única. Recebido o lead, a falha de uma integração secundária (ex.: Meta CAPI) não vira necessariamente erro para o cliente; ela tem tratamento, log e possibilidade de reprocessamento próprios. **Capturar o contato vem primeiro.**
- **Logs:** horário, rota, resultado, erro técnico, integração que falhou e ID técnico da operação. Nunca tokens, senhas, segredos, credenciais completas ou payloads sensíveis sem necessidade; dados pessoais no mínimo.
- **Monitoramento (operação futura):** site público, saúde da API, falhas recorrentes do formulário, erros com o Kommo, expiração de SSL e indisponibilidade do backend, com verificações independentes.

**Princípio:** nenhuma falha técnica do backend pode eliminar o caminho de contato do cliente.

### Ambientes (DEC-027, DEC-028, DEC-030 e DEC-033)

| Ambiente | Endereço | Situação |
|---|---|---|
| Produção atual | `divinafesta.com.br` (WordPress) | **Continua no ar até a aprovação final do novo site** |
| Desenvolvimento do novo site | `dev.divinafesta.com.br` (Hostinger Web Hosting, pasta própria, só `dist/`) | Ambiente oficial de desenvolvimento e validação. HTTPS. **Fora da indexação** até o lançamento: meta robots + `X-Robots-Tag` `noindex, nofollow`. Nunca usado como canonical; configuração de indexação separada da produção |
| API (backend) | `api.divinafesta.com.br` (Hostinger VPS) | Futuro |
| Produção do novo site | `divinafesta.com.br` (Hostinger Web Hosting) | Ambiente separado, só após aprovação final. **Não reutiliza cegamente a configuração do dev.** Antes da virada: indexação, canonical, sitemap, robots, redirects 301, analytics, Search Console, headers, cache e domínio raiz/`www` (L-22) |

### Deploy (DEC-027 e DEC-033)

- **Frontend:** build local (`npm run build` → `dist`) e **publicação manual e controlada** só do `dist/` na Hostinger. **Push em `main` não publica nada automaticamente.** Git é a fonte de verdade; rollback por versão. Roteiro em [`infraestrutura.md`](infraestrutura.md).
- **Backend:** no início, processo simples e controlado na VPS.
- **Futuro:** depois de validado o processo manual, automatizar **GitHub → build → validação → deploy Hostinger** (frontend) e o pipeline do backend (GitHub → build → testes → deploy na VPS), independentes entre si.
- **Não automatizar agora. GitHub Actions não será configurado agora.**
- Segurança operacional (DEC-033): menor privilégio para a credencial de deploy, sem edição manual da produção, headers de segurança, CSP definitiva só com as origens conhecidas, cache longo para assets versionados e política apropriada para HTML.

### Fora desta etapa (cada item terá etapa própria)

| Item | Situação |
|---|---|
| Criação de `dev.divinafesta.com.br` na Hostinger (pasta própria, HTTPS, `X-Robots-Tag`) e primeira publicação manual do `dist/` (L-11) | etapa de infraestrutura, com autorização (DEC-033) |
| Configuração do domínio principal `divinafesta.com.br` na Hostinger no lançamento (L-22) | etapa de lançamento |
| Cloudflare na frente da Hostinger (CDN, WAF, cache) | opcional e futuro; não configurar agora (DEC-033) |
| Procedimento do deploy inicial do backend na VPS | a definir na etapa do backend |
| Formulário definitivo, endpoint Fastify, Kommo, Meta CAPI, webhook, banco de dados e filas (requisitos já fixados pela DEC-032) | etapas do formulário e do backend, com autorização |
| Texto final da mensagem de fallback no WhatsApp e valor do timeout (L-23) | etapa de UX/CRO do formulário / implementação |
| Monitoramento (site, saúde da API, formulário, Kommo, SSL) | etapa de operação (DEC-032) |
| Certificados HTTPS e, na VPS, reverse proxy do backend | a definir na etapa de infraestrutura, com autorização |
| `X-Robots-Tag` `noindex, nofollow` do `dev` na Hostinger (a meta robots já está no código; não depender só do `robots.txt`). Restrição de acesso humano só com nova decisão | etapa de infraestrutura (DEC-030, DEC-033) |
| Headers de segurança, CSP e política de cache na hospedagem | etapa de infraestrutura; CSP definitiva só com as origens conhecidas (DEC-033) |
| CI/CD (GitHub Actions; deploy automatizado para a Hostinger) | futuro; não configurar agora (DEC-027, DEC-033) |
| GTM, GA4, Meta Pixel, Consent Mode e demais ferramentas | etapa própria (DEC-026) |
| Local das imagens otimizadas no projeto Astro (o processamento de imagens do Astro trabalha a partir de `src/`; `public/images/web/` pode ser revisto) | a definir na implementação |
| CMS para edição por equipe não técnica | não agora; avaliar se surgir a necessidade |

## Ordem de implementação sugerida (SÍNTESE §29)

1. Fonte factual e governança ← *esta etapa*
2. Home
3. Festa Infantil + Eventos Familiares
4. Espaço e Estrutura · Gastronomia
5. Como Funciona · Corporativo/Royal
6. Eventos Reais · 15 Anos
7. Mini Wedding e recepções (só com acervo)
8. SEO local, FAQ, schema e conteúdo
