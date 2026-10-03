# Eventos de tracking — taxonomia inicial

**Versão:** 1.0 — 03/10/2026 (Etapa 00)
**Status:** **taxonomia futura. Não implementada.** Revisar quando a stack e as integrações forem aprovadas.

## Convenções

- Nomes em `snake_case`, em minúsculas, sem acentos, com até 40 caracteres (limite do GA4).
- Disparo via `dataLayer.push({ event: '<nome>', ...params })`, lido pelo GTM.
- Parâmetros comuns em todos os eventos de interação: `page_type` (home, evento, espaco, gastronomia, contato…), `section` (hero, prova_rapida, tipos_evento…), `event_type` (infantil, familiar, 15_anos, corporativo, mini_wedding, recepcoes, nao_informado) quando aplicável.
- **Nunca** enviar nome, telefone ou e-mail como parâmetro (LGPD e políticas do GA4).

## Taxonomia

| Evento | Quando dispara | Parâmetros específicos | Evento-chave GA4 | Observação |
|---|---|---|---|---|
| `page_view` | carregamento de página | `page_type` | não | Nativo do GA4. Garantir `page_type` |
| `click_whatsapp` | clique em qualquer link de WhatsApp | `section`, `whatsapp_line` (geral / royal), `event_type` | **sim** | Principal conversão de contato |
| `click_solicitar_proposta` | clique em CTA "Solicitar proposta" | `section`, `cta_text` | não | Mede intenção, não conversão |
| `form_start` | primeira interação com o formulário | `form_id` | não | Disparar uma vez por sessão/formulário |
| `form_step` | avanço de etapa no formulário progressivo | `form_id`, `step_number`, `step_name` (tipo, data, convidados, nome, whatsapp) | não | Mostra onde há abandono |
| `form_submit` | envio bem-sucedido (após validação/resposta) | `form_id`, `event_type`, `guests_range`, `whatsapp_line` | **sim** | Gerar `event_id` para deduplicação com a Meta CAPI |
| `click_phone` | clique em link `tel:` | `section` | sim (secundário) | |
| `click_instagram` | clique no link do Instagram | `section` | não | |
| `view_gastronomia` | seção/página Gastronomia visível (≥ 50% na tela por ≥ 1 s) ou page_view da página | `page_type`, `section` | não | Sinal de interesse por produto |
| `view_espaco` | idem para Espaço e Estrutura | `page_type`, `section` | não | |
| `view_eventos` | idem para Tipos de evento / páginas de evento | `page_type`, `section`, `event_type` | não | |
| `view_localizacao` | idem para Localização | `page_type`, `section` | não | |
| `scroll_50` | 50% da página rolada | `page_type` | não | Desativar o scroll nativo do Enhanced Measurement (90%) para não duplicar |
| `scroll_90` | 90% da página rolada | `page_type` | não | |

## Faixas de convidados (`guests_range`) [proposta]

`ate_50` · `51_100` · `101_150` · `151_190` · `acima_190` (faixa útil para detectar pedidos acima da capacidade)

## Mapeamento para plataformas [proposta]

| Evento do site | GA4 | Google Ads | Meta |
|---|---|---|---|
| `form_submit` | evento-chave | conversão primária | `Lead` (Pixel + CAPI, mesmo `event_id`) |
| `click_whatsapp` | evento-chave | conversão secundária | `Contact` |
| `click_phone` | evento-chave secundário | conversão secundária | `Contact` |
| `view_gastronomia` / `view_espaco` | — | — | `ViewContent` (opcional, para públicos) |

## Pendências

- Definir os IDs de formulário e a nomenclatura de seções quando a Home estiver implementada.
- Confirmar se o WhatsApp abre por link direto ou só após o formulário (afeta `click_whatsapp` × `form_submit`).
- Validar a taxonomia com quem vai operar Ads/Meta e o CRM.
