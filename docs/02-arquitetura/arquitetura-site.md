# Arquitetura do site

**Versão:** 1.1 — 03/10/2026 (Etapa 00, revisada após aprovação)
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

URLs: a definir junto com a stack. Sugestão de padrão: slugs curtos em português, sem acentos, com eventos sob `/eventos/` (ex.: `/eventos/festa-infantil/`). Ainda não aprovado.

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

## Ordem de implementação sugerida (SÍNTESE §29)

1. Fonte factual e governança ← *esta etapa*
2. Home
3. Festa Infantil + Eventos Familiares
4. Espaço e Estrutura · Gastronomia
5. Como Funciona · Corporativo/Royal
6. Eventos Reais · 15 Anos
7. Mini Wedding e recepções (só com acervo)
8. SEO local, FAQ, schema e conteúdo
