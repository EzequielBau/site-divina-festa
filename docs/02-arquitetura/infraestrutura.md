# Infraestrutura — frontend e ambiente de desenvolvimento

**Versão:** 1.0 — 03/10/2026 (DEC-029 e DEC-030)
**Status:** **planejamento. Nada configurado.** O Cloudflare não deve ser configurado nem o DNS alterado sem autorização da etapa de infraestrutura. O Astro ainda não foi instalado.

## Visão geral

| Item | Definição | Decisão |
|---|---|---|
| Hospedagem do frontend | Cloudflare Pages | DEC-029 |
| Repositório conectado | **somente** GitHub `EzequielBau/site-divina-festa` | DEC-029, DEC-030 |
| Production branch (Cloudflare Pages) | `main` | DEC-030 |
| Build command previsto | `npm run build` | DEC-029 |
| Build output directory previsto | `dist` | DEC-029 |
| Domínio temporário oficial | `dev.divinafesta.com.br` | DEC-028, DEC-030 |
| DNS de `divinafesta.com.br` | Hostinger. Acesso confirmado pelo gestor | DEC-030 |
| Backend e integrações | VPS (`api.divinafesta.com.br`, futuro) | DEC-028 |

## Fluxo de publicação na fase de desenvolvimento (DEC-030)

```text
commit → push main → Cloudflare Pages (build) → dev.divinafesta.com.br
```

- Durante o desenvolvimento, `main` é a branch que publica o ambiente `dev`.
- Esse fluxo **pode ser alterado antes do lançamento** da produção, mediante nova decisão (por exemplo: outra branch para o `dev`, ou separação entre dev e produção).
- Consequência prática: **todo push em `main` vai ao ar no `dev`**. Os pushes continuam exigindo a conferência do `git remote -v` (AGENTS.md).

## Roteiro da etapa de infraestrutura (quando autorizada)

A ordem importa. **Não criar o CNAME antes do passo 4.**

1. **Criar o projeto no Cloudflare Pages**, conectando **somente** o repositório `EzequielBau/site-divina-festa`.
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
2. **Fazer o primeiro deploy** e conferir o site no endereço `<nome-do-projeto>.pages.dev`.
3. Conferir a **proteção contra indexação** (seção abaixo) já no primeiro deploy.
4. No projeto, em **Custom domains**, associar `dev.divinafesta.com.br`.
5. **Só então**, no DNS da Hostinger, criar o registro que o Cloudflare indicar. Normalmente:

   ```text
   Tipo: CNAME
   Nome: dev
   Destino: <nome-do-projeto>.pages.dev
   ```

   Usar exatamente o destino fornecido pelo Cloudflare, não o exemplo acima.
6. Aguardar a validação do domínio e do certificado HTTPS no Cloudflare e testar `https://dev.divinafesta.com.br`.

O nome do projeto no Cloudflare Pages ainda não foi definido.

## Proteção contra indexação do ambiente dev (DEC-030)

O ambiente `dev` deve ficar fora dos mecanismos de busca até o lançamento. Quando implementada, a proteção usa **no mínimo**:

| Camada | Valor |
|---|---|
| Meta tag em todas as páginas | `<meta name="robots" content="noindex, nofollow">` |
| Cabeçalho HTTP em todas as respostas | `X-Robots-Tag: noindex, nofollow` |

Regras:
- **Não depender só do `robots.txt`.** Ele não impede a indexação de uma URL já descoberta. Além disso, se o `robots.txt` bloquear o rastreamento, o buscador não chega a ler o `noindex` das páginas.
- A proteção deve valer também para o endereço `<nome-do-projeto>.pages.dev`, que serve o mesmo conteúdo.
- **Restrição de acesso humano (opcional, futura):** se for decidido restringir o acesso ao `dev`, pode ser usado o Cloudflare Access ou mecanismo equivalente. Depende de nova decisão.

### Cuidado na virada para produção

Como `main` publica o `dev`, o `noindex` estará no mesmo build que um dia irá para produção. Antes do lançamento é preciso definir como ele sai da produção sem sair do `dev` (por exemplo, condicionado ao ambiente ou ao domínio, ou com a separação das branches). Remover o `noindex` em produção é o item nº 1 do checklist de lançamento ([SEO §10](../05-seo/seo-site.md#10-robots)). Fica registrado na L-22.

## Fora deste documento

- Ligação do domínio principal `divinafesta.com.br` ao Cloudflare Pages no lançamento: L-22.
- Infraestrutura da VPS (backend, reverse proxy, HTTPS da API): etapa do backend.
- CI/CD com testes (GitHub Actions): futuro, não configurar agora (DEC-027).
