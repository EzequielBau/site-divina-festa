# Infraestrutura — frontend e ambientes

**Versão:** 2.0 — 03/10/2026 (DEC-033; mantém o que segue válido das DEC-028 a DEC-030)
**Status:** **planejamento. Nada configurado.** Hostinger e DNS não devem ser configurados ou alterados sem autorização da etapa de infraestrutura. Cloudflare não será configurado agora.

> **Histórico:** a v1.0 deste documento descrevia o frontend no Cloudflare Pages (DEC-029 e DEC-030). Esse provedor foi substituído pela Hostinger Web Hosting (DEC-033). O roteiro antigo fica registrado nas DEC-029 e DEC-030, em [`decisoes.md`](../07-decisoes/decisoes.md), e no histórico do Git.

## Visão geral

```text
DESENVOLVIMENTO   PC local → Git → GitHub privado → Astro build (dist/)
FRONTEND          Hostinger Web Hosting ← somente o conteúdo de dist/
                    ├── dev.divinafesta.com.br  (desenvolvimento, fora do índice)
                    └── divinafesta.com.br      (produção futura)
BACKEND           Hostinger VPS → api.divinafesta.com.br (Node.js + TypeScript + Fastify)
CLOUDFLARE        opcional e futuro (CDN / WAF / cache), não é requisito do frontend
```

| Item | Definição | Decisão |
|---|---|---|
| Hospedagem do frontend | Hostinger Web Hosting | DEC-033 |
| O que é publicado | **somente** o conteúdo de `dist/` | DEC-033 |
| Build | `npm run build` → `dist` | DEC-029 (mantido) |
| Código-fonte | PC local + GitHub privado `EzequielBau/site-divina-festa` | DEC-001, DEC-033 |
| Ambiente de desenvolvimento | `dev.divinafesta.com.br` | DEC-028, DEC-033 |
| Produção futura | `divinafesta.com.br` (raiz e `www` a definir, L-22) | DEC-033 |
| DNS de `divinafesta.com.br` | Hostinger. Acesso confirmado pelo gestor | DEC-030 (mantido) |
| Backend e integrações | Hostinger VPS (`api.divinafesta.com.br`, futuro) | DEC-028, DEC-033 |
| Cloudflare | Opcional, futuro. Não configurar agora | DEC-033 |

## Regra de publicação

- A hospedagem recebe **somente o conteúdo de `dist/`**.
- **Nunca** publicar no diretório público: `.git`, `docs/`, `src/`, `node_modules/`, `.env`, arquivos de pacote desnecessários, credenciais, chaves ou documentação interna.
- **Não usar integração que clone o repositório no diretório público** (por exemplo, implantação via Git direto na hospedagem). Isso exporia código-fonte e documentação.
- O diretório do `dev` deve ser **isolado** do diretório da produção. Se o WordPress atual estiver no mesmo plano de hospedagem, nenhuma publicação do `dev` pode tocar a pasta dele.

## Fluxo de publicação (fase atual)

```text
commit → push main (GitHub) ─┐
                             │  publicação é um ato separado, manual e controlado
npm run build (local) → dist/ → envio para a pasta do dev na Hostinger
```

- **Push em `main` não publica nada automaticamente.**
- Cada publicação corresponde a um commit conhecido (**Git como fonte de verdade**), o que permite **rollback por versão**: refazer o build do commit anterior e publicá-lo de novo.
- **Nenhuma edição manual da produção** como processo normal.
- Automação futura, só depois de validado o processo manual: **GitHub → build → validação → deploy Hostinger**. Não automatizar agora.

## Roteiro da etapa de infraestrutura (quando autorizada)

1. Criar o subdomínio `dev.divinafesta.com.br` na Hostinger, com **pasta própria**, separada da produção.
2. Ativar **HTTPS** (certificado SSL) para o subdomínio.
3. Configurar o cabeçalho `X-Robots-Tag: noindex, nofollow` para todas as respostas do `dev` (seção abaixo).
4. Fazer a primeira publicação manual do `dist/` e conferir:
   - `https://dev.divinafesta.com.br` responde com HTTPS;
   - `curl -I https://dev.divinafesta.com.br` mostra o `X-Robots-Tag`;
   - o HTML traz `<meta name="robots" content="noindex, nofollow">`;
   - nenhum arquivo fora do `dist/` está acessível (ex.: `/.git/`, `/docs/`, `/src/`, `/.env`).
5. O registro DNS do subdomínio é o que a própria Hostinger indicar. Não criar registros antecipados nem apontar para provedores que não estejam em uso.

## Proteção contra indexação do ambiente dev

O `dev` deve ficar fora dos mecanismos de busca até o lançamento, com **no mínimo**:

| Camada | Valor | Situação |
|---|---|---|
| Meta tag em todas as páginas | `<meta name="robots" content="noindex, nofollow">` | **Implementada** em `src/layouts/BaseLayout.astro`. Padrão `noindex, nofollow`; só vira `index, follow` com `PUBLIC_ALLOW_INDEXING=true` no build (definida em `astro.config.mjs`, padrão `false`) |
| Cabeçalho HTTP em todas as respostas | `X-Robots-Tag: noindex, nofollow` | **Não implementado no frontend, de propósito.** É configuração da hospedagem. O mecanismo na Hostinger (ex.: arquivo de configuração do servidor na pasta do `dev`) será escolhido na etapa de infraestrutura |

Regras:
- **Não depender só do `robots.txt`.** Ele não impede a indexação de uma URL já descoberta e, se bloquear o rastreamento, o buscador não chega a ler o `noindex`.
- **O `dev` nunca é canonical.** Canonicals apontam para o domínio de produção, nunca para `dev.divinafesta.com.br`.
- **O `dev` não compartilha configuração de indexação com a produção.** O build do `dev` não define `PUBLIC_ALLOW_INDEXING`; o `X-Robots-Tag` fica só na pasta do `dev`.
- **Restrição de acesso humano (opcional, futura):** se for decidido restringir o acesso ao `dev`, o mecanismo será escolhido por nova decisão.

## Produção (lançamento)

`divinafesta.com.br` é um **ambiente separado**. Não reutiliza cegamente a configuração do `dev`. Antes da virada, revisar:

- indexação (`PUBLIC_ALLOW_INDEXING=true` só no build de produção; sem `X-Robots-Tag` de bloqueio);
- canonical;
- sitemap;
- robots;
- redirects 301 do WordPress atual;
- analytics;
- Search Console;
- headers;
- cache;
- domínio raiz e `www` (L-22).

## Segurança operacional (DEC-033)

- HTTPS obrigatório em todo ambiente.
- Nenhuma credencial no frontend.
- Publicação somente do `dist`.
- **Menor privilégio** para a futura credencial de deploy (acesso só à pasta do site, nunca à conta inteira).
- Nenhuma edição manual da produção como processo normal; Git como fonte de verdade; rollback por versão.
- Atualização controlada de dependências.
- Monitoramento futuro do site e da API (DEC-032).
- **Headers de segurança** na hospedagem.
- **CSP definitiva** só quando todas as origens realmente necessárias forem conhecidas (fontes, tracking, API).
- **Cache:** longo para assets versionados (nomes com hash gerados pelo build) e política apropriada (curta ou com revalidação) para o HTML.

## Cloudflare (futuro, opcional)

Não configurar agora. Poderá ser colocado na frente da Hostinger (CDN, WAF, proteção, cache) sem reconstruir o site. Recursos exclusivos de qualquer provedor não podem virar requisito do frontend sem nova decisão.

## Fora deste documento

- Domínio principal no lançamento: L-22.
- Infraestrutura da VPS (backend, reverse proxy, HTTPS da API): etapa do backend.
- CI/CD com testes (GitHub Actions): futuro, não configurar agora (DEC-027, DEC-033).
