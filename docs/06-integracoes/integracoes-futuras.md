# Integrações futuras

**Versão:** 1.6 — 03/10/2026 (alinhada às DEC-026 a DEC-028, DEC-032 e DEC-033)
**Status:** **arquitetura conceitual. Nada implementado.** Nenhuma integração deve ser feita sem autorização registrada em [`decisoes.md`](../07-decisoes/decisoes.md).

**Arquitetura (DEC-026 a DEC-028, DEC-033):**
- O frontend Astro é estático, hospedado na **Hostinger Web Hosting** (só o `dist/`), desacoplado da VPS (DEC-033). As integrações client-side (ex.: tags de tracking) entram no build estático e não podem depender de recursos exclusivos de um provedor.
- Formulários, Kommo, Meta CAPI, webhooks, roteamento de WhatsApp e integrações adicionais ficam em um **backend separado em Node.js + TypeScript + Fastify, na VPS**, previsto em **`api.divinafesta.com.br`** (HTTPS).
- O site **não depende da VPS** para funcionar. Se a VPS ou o backend ficarem indisponíveis, só as funções que dependem da API param temporariamente; o formulário preserva os dados e oferece o WhatsApp com a mensagem já preenchida (DEC-032, ver abaixo).
- As ferramentas de tracking client-side (GTM, GA4, Meta Pixel, Consent Mode) serão definidas e implementadas em **etapa própria**.

## Objetivo

Preparar o site para medir o funil comercial de ponta a ponta, da visita ao lead, à proposta e ao contrato, sem acoplar ferramentas antes da hora e sem prejudicar a performance ou a privacidade.

## Visão geral do fluxo

```text
Visitante (UTM / orgânico / direto)
   │
   ▼
Site estático (Hostinger)    ──► dataLayer ──► GTM ──┬─► GA4
   │                            [etapa própria]       ├─► Google Ads (conversões)
   │                                                  └─► Meta Pixel ───────────┐
   │                                                                            │ deduplicação
   ▼                                                                            │ por event_id
Formulário curto (tipo → data → convidados → nome → WhatsApp)                   │
   │  HTTPS                                                                     │
   ▼                                                                            │
Backend Fastify — api.divinafesta.com.br                                        │
   ├─► Kommo CRM (lead + origem/UTM)                                            │
   ├─► Meta Conversions API (server-side) ◄─────────────────────────────────────┘
   ├─► webhooks / integrações adicionais
   └─► WhatsApp (número conforme roteamento, com mensagem pré-preenchida)

Se o backend falhar ou exceder o timeout: o site continua no ar, o formulário mantém os dados
e oferece o WhatsApp correto com a mensagem já preenchida (DEC-032).
Se só uma integração secundária falhar (ex.: Meta CAPI): o lead já capturado não vira erro
para o cliente; a integração tem log e reprocessamento próprios.

Dashboards ◄── GA4 + Kommo + Ads + Meta + Search Console
```

## Componentes

| Integração | Papel | Pré-requisitos | Observações |
|---|---|---|---|
| **Google Tag Manager** | Contêiner único de tags. Evita código espalhado | Conta/contêiner (L-14) | Toda tag de marketing entra via GTM, nunca hardcoded |
| **GA4** | Análise de comportamento e funil | Propriedade GA4 | Eventos conforme a [taxonomia](eventos-tracking.md). Marcar `form_submit` e `click_whatsapp` como eventos-chave |
| **Google Search Console** | Indexação, consultas, Core Web Vitals | Verificação por DNS | Ver SEO |
| **Google Ads** | Conversões para campanhas | Conta Ads vinculada ao GA4 | Importar conversões do GA4 ou usar tag própria via GTM. Considerar conversões otimizadas |
| **Meta Pixel** | Conversões e públicos no Meta | Business Manager / Pixel | Via GTM, só após consentimento |
| **Meta Conversions API** | Envio server-side de leads (resiliente a bloqueadores) | Pixel + token (no servidor, nunca no front-end) | Deduplicar com o Pixel via `event_id` |
| **Bing Webmaster Tools** | Indexação no Bing | Verificação | Ver SEO |
| **Formulários** | Captura do lead com o fluxo curto do NORTE §15 | Componente leve no frontend + endpoint no backend da VPS | Validação no frontend (experiência) e no backend (a que vale); antiabuso no backend sem atrito (rate limit, limites de campo, rejeição de campos inesperados, CORS restrito). CAPTCHA/Turnstile só com evidência real de abuso (DEC-032). Mensagem de sucesso contextual e fallback para WhatsApp |
| **Kommo CRM** | Gestão comercial do lead | Conta e plano Kommo **a confirmar** (L-14) | Receber nome, WhatsApp, tipo, data, convidados, página de origem, UTMs e `gclid`/`fbclid` |
| **Webhooks** | Ponte formulário → CRM/CAPI | Endpoint seguro | Com retentativa e log de falhas. Segredos só em variáveis de ambiente. Cada integração tratada separadamente (DEC-032) |
| **WhatsApp** | Canal principal de conversa | Telefones oficiais (DEC-018) | Links `wa.me` com texto pré-preenchido contendo o contexto. Roteamento: geral (41) 99247-0605 · Royal/corporativo (41) 99262-0604 |
| **APIs** | Extensões futuras (ex.: avaliações do Google, disponibilidade) | Caso a caso | Só com função comercial clara |
| **UTMs** | Atribuição de origem | Padrão de nomenclatura | Ver abaixo |
| **Dashboards** | Visão do funil | Fontes acima | Ex.: Looker Studio. Métricas: sessões → cliques de contato → leads → propostas → contratos, por origem e por tipo de evento |

## Roteamento de WhatsApp (conceito)

| Tipo de evento escolhido | Destino |
|---|---|
| Corporativo / confraternização empresarial | Royal (41) 99262-0604 |
| Demais | Comercial geral (41) 99247-0605 |

Estes são os **únicos** destinos do site principal (DEC-018). O número (41) 9 8535-0605 pertence só à linha Divina Essência, que está fora da v1 (DEC-020), e **não** entra no roteamento.

## Formulário resiliente e fallback de contato (DEC-032)

Requisitos completos em [`decisoes.md`](../07-decisoes/decisoes.md#dec-032) e em [`arquitetura-site.md`](../02-arquitetura/arquitetura-site.md#formulários-resilientes-e-fallback-de-contato-dec-032). Resumo para as integrações:

- **Fluxo:** frontend Astro → HTTPS → `api.divinafesta.com.br` (Fastify) → Kommo → integrações secundárias (Meta CAPI etc., quando autorizadas).
- **O navegador nunca fala direto** com Kommo, Meta CAPI ou outro serviço autenticado. Credenciais só no backend.
- **Prioridade:** capturar o contato primeiro. Kommo e integrações secundárias são tratadas separadamente, com logs e possibilidade de reprocessamento.
- **Falha da API ou timeout:** dados preservados e WhatsApp oferecido na hora, com tipo de evento, data e convidados na mensagem. Texto definitivo na etapa de UX/CRO (L-23). Destino conforme o roteamento abaixo.
- **Logs:** sem tokens, segredos, credenciais ou payloads sensíveis desnecessários; dados pessoais no mínimo.
- **Tracking:** `form_submit` só conta envio confirmado pelo backend. Como medir o uso do fallback fica para a etapa de tracking.
- **Não implementado:** formulário definitivo, Fastify, Kommo, Meta CAPI, CAPTCHA/Turnstile, banco, filas, analytics e webhooks.

## Padrão de UTMs [proposta]

- Tudo em minúsculas, sem acentos e com hífen: `utm_source=instagram&utm_medium=social&utm_campaign=15-anos-2026-11`.
- `utm_source`: google, meta, instagram, facebook, gbp, email, qrcode, folder…
- `utm_medium`: cpc, social, organic-social, referral, print, email.
- **Google Business Profile:** link do site com `utm_source=gbp&utm_medium=organic` para separar do orgânico comum.
- **QR codes dos materiais impressos:** UTMs próprias por material (ex.: `utm_source=folder-essencia&utm_medium=print`).
- Manter planilha/registro de campanhas.

## Privacidade e consentimento (LGPD)

- Banner de consentimento antes de disparar tags de marketing (Meta, Ads). Analytics conforme a base legal definida.
- **Google Consent Mode v2** configurado no GTM.
- Política de privacidade publicada e linkada no footer e no formulário (L-12).
- Coletar só o necessário no formulário. Não enviar dados pessoais em texto aberto ao GA4.

## Princípios

1. Nenhum token, chave ou segredo no código ou no repositório. Usar `.env` (ignorado pelo Git) e variáveis do servidor.
2. Scripts de terceiros carregados de forma assíncrona e só via GTM, monitorando o impacto em Core Web Vitals.
3. Cada integração precisa de dono, propósito e métrica definidos antes de entrar.
4. Stack definida (DEC-026). Mesmo assim, cada integração só é implementada em etapa própria e com autorização.
5. O backend é desacoplado: nenhuma página do site pode depender dele para carregar ou funcionar.
