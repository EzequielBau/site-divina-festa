# Arquitetura do site

**Versão:** 1.3 — 03/10/2026 (arquitetura técnica: DEC-026 e DEC-027)
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
| **Espaço e Estrutura** | P0 | todos, em fase de adequação | Fatos físicos: ~700 m²; capacidade "até 150 pessoas sentadas ou até 190 em configuração predominantemente em pé, conforme layout e formato do evento" (DEC-017); estacionamento privativo; climatização, acessibilidade, Wi-Fi, área infantil e integração | Reduzir risco e provar adequação | Atributos físicos pesquisáveis; dados para schema |
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

## Arquitetura técnica (DEC-026 e DEC-027)

**Status:** decidida e documentada. **Nada instalado, configurado ou programado.**

```text
                         VPS
  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │   Nginx (HTTPS)                                            │
  │   ├── divinafesta.com.br / staging.divinafesta.com.br      │
  │   │      └── arquivos estáticos do build do Astro          │
  │   │          (sem processo Node para servir páginas)       │
  │   │                                                        │
  │   └── api.divinafesta.com.br   [futuro, reverse proxy]     │
  │          └── Node.js + TypeScript + Fastify                │
  │              formulários · Kommo · Meta CAPI ·             │
  │              webhooks · roteamento de WhatsApp ·           │
  │              integrações adicionais                        │
  └────────────────────────────────────────────────────────────┘

  Astro / Nginx   → site público
  Node / Fastify  → lógica de servidor e integrações
```

A falha do backend não afeta as páginas: o site público é servido só pelo Nginx.

### Frontend

- **Astro** com **TypeScript**, gerando **páginas estáticas** sempre que possível.
- **HTML semântico.** JavaScript só quando houver necessidade funcional (ex.: etapas do formulário, menu mobile).
- Prioridades: Core Web Vitals, SEO, acessibilidade e mobile.
- **Fonte factual centralizada:** um único arquivo de dados (NAP, capacidade, telefones, horários, atributos) consumido pelas páginas e pelo schema. É a implementação da tabela do documento mestre §3.
- **Componentes reutilizáveis** para seções e layout. Conteúdo e código versionados no Git.
- **Sem dependência estrutural de WordPress.**
- **Não depende de servidor Node em execução permanente** para servir as páginas.
- **Sem CMS adicional** por enquanto. Pode ser acrescentado depois sem reconstruir o frontend.

### Hospedagem do frontend (DEC-027)

- Produção prevista em **Nginx na VPS**, servindo o build do Astro como **arquivos estáticos**.
- **HTTPS** obrigatório em todo ambiente publicado.

### Backend (DEC-027)

- **Serviço separado**, em **Node.js + TypeScript**, com **Fastify** como framework inicial previsto.
- Subdomínio futuro: **`api.divinafesta.com.br`**, publicado pelo Nginx como **reverse proxy**.
- Responsabilidades futuras: formulários, Kommo, Meta Conversions API, webhooks, roteamento de WhatsApp e integrações adicionais.
- **Não é requisito para o funcionamento normal das páginas institucionais:** o site continua funcionando mesmo se o backend ou uma integração falhar.
- Princípio de degradação: se o envio do formulário falhar, o visitante ainda precisa de um caminho de contato (ex.: link direto para o WhatsApp correto). O mecanismo exato será definido na etapa do backend.
- Segredos (tokens do Kommo e da Meta) só no backend, em variáveis de ambiente. **Nunca no frontend nem no Git.**

### Ambientes (DEC-027)

| Ambiente | Endereço | Situação |
|---|---|---|
| Produção atual | `divinafesta.com.br` (WordPress) | **Continua no ar até a aprovação final do novo site** |
| Staging do novo site | `staging.divinafesta.com.br` (preferencial; ou equivalente aprovado depois) | Antes de substituir o WordPress. Em **noindex** |
| API (backend) | `api.divinafesta.com.br` | Futuro |
| Produção do novo site | `divinafesta.com.br` (Nginx na VPS) | Só após aprovação final. Na virada: 301, Search Console, remoção do noindex |

### Deploy (DEC-027)

- **Agora:** processo simples e controlado (sem automação).
- **Futuro:** CI/CD **GitHub → build → testes → deploy na VPS**.
- **GitHub Actions não será configurado agora.**

### Fora desta etapa (cada item terá etapa própria)

| Item | Situação |
|---|---|
| Procedimento concreto do deploy manual inicial (comandos, usuário e diretórios na VPS) | a definir na etapa de implementação |
| Configuração de DNS, Nginx e certificados HTTPS | a definir na etapa de infraestrutura, com autorização |
| CI/CD (GitHub Actions) | futuro; não configurar agora (DEC-027) |
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
