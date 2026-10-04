# Status do projeto

**Atualizado em:** 03/10/2026 — governança, stack e arquitetura de execução decididas (DEC-025 a DEC-030); arquitetura resiliente de formulários registrada (DEC-032); hospedagem do frontend na Hostinger Web Hosting (DEC-033); fundação visual do Design System implementada e aprovada (DEC-034).

## Concluído

- Repositório GitHub criado (`EzequielBau/site-divina-festa`)
- Chave SSH criada
- Deploy Key configurada (alias `github-divina`)
- Remote isolado validado (`git@github-divina:EzequielBau/site-divina-festa.git`, `ssh -T` e `git ls-remote` OK em 03/10/2026)
- Auditoria de documentos ([inventário](../99-referencias/inventario-documentos.md))
- Auditoria de imagens: 43 arquivos, dimensões, SHA256 e 3 duplicatas confirmadas ([inventário](../99-referencias/inventario-imagens.md))
- Estrutura de pastas criada e arquivos movidos com integridade conferida (47/47 hashes idênticos)
- Documentação-base completa e **organização aprovada pelo gestor** (DEC-014)
- Commits documentais enviados ao GitHub: `1ddd9e3` (estrutura), `67381de` (DEC-025/026), `348386d` (DEC-027), `16c3e36` (DEC-028), `79b353a` (DEC-029), `5c3e3d3` (DEC-030) e `948ef08` (DEC-032)
- Decisões canônicas: natureza do projeto (DEC-016), capacidade (DEC-017), telefones (DEC-018), estacionamento privativo (DEC-019), Divina Essência fora da v1 (DEC-020), Familjen Grotesk (DEC-021), contraste do dourado (DEC-022), logo (DEC-023), regras de imagem (DEC-024)
- **Ordem de prevalência documental aprovada** (DEC-025)
- **Stack decidida: Astro static-first + backend independente na VPS** (DEC-026)
- **Arquitetura de execução decidida** (DEC-027): backend Node.js + TypeScript + Fastify na VPS (`api.divinafesta.com.br`, futuro); WordPress atual em produção até a aprovação final; HTTPS; deploy inicial simples, CI/CD no futuro
- **Frontend estático desacoplado da VPS** (DEC-028, substitui parcialmente a DEC-027): build estático em hospedagem estática/CDN (provedor definido depois pela DEC-029); Nginx e VPS não são requisitos do frontend; o site continua no ar se a VPS cair; desenvolvimento em `dev.divinafesta.com.br`, fora da indexação
- ~~Hospedagem do frontend em Cloudflare Pages~~ (DEC-029) e ~~operação do dev no Cloudflare Pages~~ (DEC-030): **substituídas parcialmente pela DEC-033**. Seguem valendo o build `npm run build` → `dist`, o acesso ao DNS na Hostinger e a proteção contra indexação do `dev`
- **Hospedagem do frontend decidida: Hostinger Web Hosting** (DEC-033): só o `dist/` é publicado; `dev.divinafesta.com.br` (noindex, HTTPS) e, no lançamento, `divinafesta.com.br` como ambiente separado; backend na Hostinger VPS; deploy manual e controlado nesta fase; Cloudflare opcional e futuro. Nada configurado ainda. Roteiro em [`infraestrutura.md`](../02-arquitetura/infraestrutura.md)
- **Arquitetura resiliente de formulários decidida** (DEC-032, só documental): formulário no frontend estático; envio por HTTPS a `api.divinafesta.com.br` com revalidação no backend; credenciais só no backend; em falha ou timeout, dados preservados e WhatsApp com mensagem pré-preenchida; integrações secundárias tratadas à parte; CAPTCHA/Turnstile só com evidência de abuso. Nada implementado
- Revisões de consistência interna da documentação
- **Etapa 01: base técnica do projeto Astro** (Astro 7.3.5, Node 24): TypeScript `strictest`; fonte factual em `src/data/site.ts`; tokens em `src/styles/tokens.css`; `BaseLayout.astro` com meta robots `noindex, nofollow` por padrão; página técnica provisória. Build sem erros e sem JavaScript no cliente. **Aprovada pelo gestor**, incluindo as escolhas técnicas: fontes pela API nativa do Astro (baixadas no build e servidas pelo próprio site, arquivo variável 400–700, subset latin, `font-display: swap`), chave `PUBLIC_ALLOW_INDEXING` e `astro check` dentro do `npm run build`. Texto com destaque provisoriamente em `#2F2F2F` até a etapa de Design System. Finais de linha padronizados em LF via `.gitattributes`
- **Etapa 02: fundação visual do Design System** (DEC-034, aprovada pelo gestor): tokens de cor, tipografia fluida, espaçamento, containers e radius; componentes-base Container, Section, Button, TextLink e Eyebrow em src/components/ui/; CSS próprio, zero JavaScript no cliente. CTA em #B88917 com texto #282120; #8F6B16 descartado. src/pages/index.astro é página temporária de validação, não a Home. Detalhes em [design-system.md](../03-design-system/design-system.md) v2.0. Header, Footer, Hero e Home não iniciados como referência: texto do Hero; copy de Prova rápida, Tipos de evento e Crianças + adultos

## Em andamento

- Nada em execução. **Aguardando autorização** para a próxima etapa.

## Próximo (cada item depende de autorização)

1. ~~Inicialização do projeto Astro~~ (feita na Etapa 01)
2. ~~Design system: validar tokens e o contraste final do dourado escuro (DEC-022)~~ (feito na Etapa 02, DEC-034)
3. Header
4. Footer
5. Hero (conteúdo já aprovado; implementação nova)
6. Home seção por seção, começando por **Gastronomia** no conteúdo
7. Infraestrutura de desenvolvimento (DEC-033): criar `dev.divinafesta.com.br` na Hostinger com pasta própria e HTTPS → configurar o `X-Robots-Tag` (a meta robots já está no código) → primeira publicação manual só do `dist/` → conferir cabeçalhos e que nada fora do `dist/` está acessível
8. Etapas próprias e posteriores: formulário (UX/CRO, com o fallback da DEC-032), backend Fastify (formulários, Kommo, Meta CAPI, webhooks, WhatsApp), tracking (GTM, GA4, Pixel, Consent Mode), monitoramento e CI/CD

## Pendências

- Confirmar os dados da fonte factual: eventos realizados, avaliações e metragem da área infantil (L-01 a L-03)
- Autorizações de imagem (crianças, convidados) e licença ou arquivos sem marca d'água do fotógrafo `@lucylimafotografia` (L-08)
- Origem das fotos Bistrô, café colonial, capas Essência e 15 anos (L-09)
- Logo em SVG: não há arquivo confirmado. Não vetorizar agora (L-10, DEC-023)
- Fotos faltantes: equipe, cozinha, estacionamento, corporativo, salão ocupado, adultos + crianças (L-07)
- Criar e configurar `dev.divinafesta.com.br` na Hostinger (L-11); domínio principal e configuração própria da produção no lançamento (L-22); GBP, CNPJ, política de privacidade, contas de marketing (L-11 a L-15)
- Texto do fallback no WhatsApp, timeout da API e eventual armazenamento temporário no navegador (L-23, DEC-032)
- Remover manualmente as pastas vazias `Imagens\` e `Documentos norteadores para montar site\` (o Windows negou a exclusão; o Git ignora pastas vazias)
- Decidir sobre as duplicatas (3 pares). Nada foi apagado

## Dependências e segurança

- **Advisory em `http-cache-semantics`** (severidade alta, [GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp)), registrado em 03/10/2026 pelo `npm audit`.
  - É **dependência transitiva** do ecossistema de build (vem pelo `astro`). Roda na máquina que gera o site, não no site publicado.
  - **Não há correção direta** a aplicar: o `npm audit fix --force` rebaixaria o Astro para a 2.x, o que alteraria a stack de forma inadequada. **Não executar.**
  - **Não é tratado como vulnerabilidade comprovadamente explorável** no frontend estático publicado, que é só HTML, CSS e fontes, sem servidor nem cache HTTP próprios.
  - **Estratégia:** manter o Astro e as dependências atualizados e revisar o advisory periodicamente (a cada atualização de dependências ou antes de cada etapa técnica).
  - Nenhuma versão foi alterada por causa desse alerta.

## Bloqueios

- **Nenhum bloqueio técnico.** Stack, hospedagem e arquitetura de execução resolvidas (DEC-026 a DEC-030, DEC-032 e DEC-033). A L-23 (detalhes do fallback do formulário) não bloqueia o desenvolvimento.
- A implementação aguarda **autorização expressa do gestor**. Isso é uma regra de processo, não um impedimento técnico.
- Pontos que, se não forem resolvidos, vão travar etapas específicas mais adiante:
  - **publicação** de fotos com pessoas ou marca d'água, sem L-08 resolvida;
  - **publicação** de números como eventos realizados e avaliações, sem L-02/L-03 confirmadas;
  - **seção Corporativo / Como Funciona** sem fotos de equipe e corporativo (L-07).

## Decisões aguardando aprovação

| ID | Assunto |
|---|---|
| DIV-06 | Sequência da Home em 12 itens |
| DIV-07 | Menu do Header × páginas P0 |
| DIV-12 | Nome "Divina Festa" × "Divina Festa Buffet" (NAP/GBP) |
| L-22 | Domínio principal (raiz e `www`) na Hostinger e checklist de produção, no lançamento |
| — | Tratamento das duplicatas de imagem |
