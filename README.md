# Site Divina Festa

Novo site institucional e comercial do **Divina Festa**, espaço de eventos e buffet no Mercês, em Curitiba, com foco em UX, SEO, SEO local, conversão, mobile, performance e integrações.

## Objetivo

O site é parte do **funil comercial**, não só uma apresentação institucional. Cada página e cada seção devem levar o visitante da descoberta ao contato e à proposta, reduzindo dúvidas, aumentando a confiança e mostrando valor com fatos e provas reais.

Posicionamento: *um espaço completo e acolhedor para celebrações em Curitiba, capaz de receber bem diferentes gerações no mesmo evento.* Os detalhes estão no Documento Norte.

## Estrutura

```text
site-divina-festa/
├── docs/
│   ├── 00-governanca/      documento mestre (índice central) · divergências e lacunas
│   ├── 01-estrategia/      Documento Norte · Síntese Estratégica (.docx + transcrição .md)
│   ├── 02-arquitetura/     mapa do site, prioridades, função de cada página · infraestrutura
│   ├── 03-design-system/   paleta, tipografia, grid, componentes, regras de imagem
│   ├── 04-conteudo/        estrutura da Home · wireframe original
│   ├── 05-seo/             SEO on-page, local, schema, sitemap, robots
│   ├── 06-integracoes/     integrações futuras · taxonomia de tracking
│   ├── 07-decisoes/        registro de decisões · handoffs
│   ├── 08-status/          status do projeto
│   └── 99-referencias/     inventário de imagens · inventário de documentos
├── assets/
│   ├── brand/logos/        logos originais
│   └── images/source/      fotos e materiais originais (somente leitura)
├── public/images/web/      versões otimizadas para o site (futuro)
├── src/                    código do frontend Astro (futuro; ainda sem código)
├── AGENTS.md               regras para assistentes de IA
└── README.md
```

## Como navegar na documentação

1. **Comece por** [`docs/00-governanca/00-documento-mestre-site.md`](docs/00-governanca/00-documento-mestre-site.md). Ele resume tudo e aponta para os demais documentos.
2. **Estratégia:** [`docs/01-estrategia/`](docs/01-estrategia/) (Documento Norte e Síntese).
3. **O que está em aberto:** [`divergencias-e-lacunas.md`](docs/00-governanca/divergencias-e-lacunas.md) e [`status.md`](docs/08-status/status.md).
4. **O que já foi decidido:** [`decisoes.md`](docs/07-decisoes/decisoes.md).

Ordem de prevalência (DEC-025): primeiro vale a decisão posterior aprovada, registrada com ID e que trate diretamente do ponto. Depois, a hierarquia: Documento Mestre / Governança atual > Documento Norte > Síntese Estratégica > decisões registradas > handoffs > referências e materiais anteriores.

## Regras principais

- Não inventar dados. Todo fato vem da fonte factual vigente (documento mestre §3).
- Nenhum claim sem prova: afirmação → prova → benefício.
- Construção página por página e seção por seção.
- Originais (documentos e imagens) não são apagados, movidos, renomeados ou sobrescritos sem autorização.
- Divergências são registradas, nunca resolvidas em silêncio.
- Nenhum segredo, token ou `.env` no repositório.
- Regras completas para IA: [`AGENTS.md`](AGENTS.md).

## Status

**Etapa 00: organização e governança** (03/10/2026), aprovada. Ainda não há código do site neste repositório. Detalhes em [`docs/08-status/status.md`](docs/08-status/status.md).

> Este repositório é o **projeto paralelo programado** do novo site (DEC-016). **Stack (DEC-026):** Astro em arquitetura static-first, com TypeScript, componentes reutilizáveis e fonte factual centralizada. Formulários e integrações (Kommo, Meta CAPI, webhooks, WhatsApp) ficam em um serviço backend independente na VPS, desacoplado do site. **Execução (DEC-027, refinada pelas DEC-028 a DEC-030):**
> - build estático hospedado em **Cloudflare Pages**, com deploy a partir deste repositório no GitHub (`npm run build` → `dist`), desacoplado da VPS. Nginx e VPS não são requisitos do frontend, e o site pode mudar de provedor sem ser refeito;
> - o site institucional continua no ar mesmo com a VPS indisponível; só as funções da API podem parar;
> - backend em Node.js + TypeScript + Fastify, na VPS, no futuro em `api.divinafesta.com.br`;
> - desenvolvimento em `dev.divinafesta.com.br`, publicado a partir da branch `main` (commit → push `main` → Cloudflare Pages → dev) e fora da indexação até o lançamento (DEC-030). **Todo push em `main` vai ao ar no `dev`** depois que a infraestrutura for configurada. Roteiro em [`infraestrutura.md`](docs/02-arquitetura/infraestrutura.md);
> - o WordPress atual segue em produção até a aprovação final;
> - HTTPS em todo ambiente publicado.
>
> A implementação anterior em WordPress/Kadence serve só como referência de conteúdo, UX e decisões aprovadas. **Ainda não há código**; a implementação aguarda autorização.

## Repositório

- GitHub (privado): `EzequielBau/site-divina-festa`
- Remote único autorizado: `git@github-divina:EzequielBau/site-divina-festa.git`
- Acesso por Deploy Key exclusiva (alias SSH `github-divina`)

## Ambiente local

- Pasta: `C:\Projetos\site-divina-festa`
- Requisitos atuais: só Git e um editor. Nenhuma dependência instalada; Node e Astro entram só na etapa de implementação, após autorização.
- Para testar o acesso: `ssh -T git@github-divina` (a resposta esperada cita o repositório; o código de saída 1 é normal).

## Fluxo de desenvolvimento

1. Ler o documento mestre e o status.
2. Trabalhar uma página ou seção por vez, seguindo o padrão: objetivo → wireframe → texto → desktop/tablet/celular → SEO → CTA → o que evitar.
3. Registrar decisões em `docs/07-decisoes/decisoes.md` e divergências em `docs/00-governanca/divergencias-e-lacunas.md`.
4. Fazer commits pequenos e com mensagem clara.
5. Antes de qualquer push: `git remote -v` e conferir o remote único.
6. Push só com autorização.
7. Atualizar `docs/08-status/status.md` ao fechar cada etapa.
