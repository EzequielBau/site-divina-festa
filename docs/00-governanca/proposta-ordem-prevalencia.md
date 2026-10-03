# PROPOSTA — Ordem de prevalência documental

**Status:** ✅ **APROVADA em 03/10/2026, registrada como DEC-025.** Este arquivo é mantido como registro da proposta e da justificativa. O texto vigente está em `decisoes.md` (DEC-025) e no documento mestre §4.
**Data:** 03/10/2026
**Relação:** substituiu a DEC-015 e resolveu a DIV-04.

---

## 1. Regra proposta

Em caso de conflito entre documentos, prevalece o de nível mais alto:

| Nível | Fonte | Onde fica |
|---|---|---|
| 1 | **Documento Mestre / Governança atual** | `docs/00-governanca/` |
| 2 | **Documento Norte** | `docs/01-estrategia/00_DOCUMENTO_NORTE_…docx` |
| 3 | **Síntese Estratégica** | `docs/01-estrategia/01_SINTESE_…docx` |
| 4 | **Decisões registradas mais recentes** | `docs/07-decisoes/decisoes.md` |
| 5 | **Handoffs** | `docs/07-decisoes/06-handoff-…md` e futuros |
| 6 | **Referências e materiais antigos** | `docs/99-referencias/`, folders, wireframe original, pesquisas |

### Regra adicional (prevalência temporal)

> **Uma decisão mais recente, explicitamente aprovada e registrada, prevalece sobre documento anterior em caso de conflito.**

## 2. Como as duas regras convivem

À primeira vista, as decisões aparecem no nível 4, abaixo do Norte, e a regra adicional diz que elas prevalecem sobre documentos anteriores. A redação proposta abaixo resolve essa aparente contradição:

1. **Primeiro, aplica-se a regra adicional.** Se existe uma decisão que:
   - está em `decisoes.md` com ID (DEC-xxx);
   - tem status **Aprovada**;
   - é **posterior** ao documento com que conflita;
   - trata **expressamente** do ponto em conflito;

   então ela prevalece, qualquer que seja o nível do documento anterior.
2. **Só se não houver uma decisão assim**, vale a hierarquia de 1 a 6.
3. O nível 4 cobre decisões que **não** atendem a todos os critérios do item 1. Por exemplo: decisões com status "Aguardando confirmação", decisões que tratam do tema só indiretamente, ou decisões anteriores ao documento com que conflitam.

**Exemplo atual:** o Norte (27/08) diz "estacionamento: sim", sem qualificação. A DEC-019 (03/10, Aprovada) diz "privativo". Pela regra adicional, vale "privativo".

## 3. Por que o Documento Mestre fica acima do Norte

- O Mestre já incorpora o Norte **e** as decisões aprovadas posteriores (ex.: capacidade da DEC-017, telefones da DEC-018). É o retrato vigente.
- Fica mais fácil para pessoas e IA consultar uma fonte só.

**Risco:** o Mestre é um resumo. Um erro de resumo poderia "vencer" o Norte sem que ninguém percebesse.

**Salvaguardas propostas:**
1. O Mestre só pode **divergir** do Norte quando citar a decisão (DEC-xxx) que justifica a diferença. Divergência sem decisão citada é **erro do Mestre**, e nesse caso vale o Norte.
2. O Mestre não cria estratégia. Só consolida o Norte, a Síntese e as decisões.
3. Toda edição do Mestre atualiza a versão e a data no cabeçalho.

## 4. Requisitos para uma decisão contar como "explicitamente aprovada e registrada"

- [ ] Entrada em `docs/07-decisoes/decisoes.md` com ID sequencial
- [ ] Data
- [ ] Texto da decisão, motivo e impacto
- [ ] Status **Aprovada**, dado pelo gestor (não basta ser sugestão de IA)
- [ ] Indicação de quais documentos ou divergências ela altera ou resolve
- [ ] Commit no repositório

Mudanças de **posicionamento, arquitetura, fonte factual ou regra de conversão** também devem ser anotadas no NORTE §22 na próxima revisão do Documento Norte, como o próprio Norte exige.

## 5. O que muda em relação à regra provisória (DEC-015)

| Antes (DEC-015) | Proposta |
|---|---|
| 1 Norte | 1 **Mestre/Governança** |
| 2 Síntese | 2 Norte |
| 3 Handoffs e decisões recentes | 3 Síntese |
| 4 Arquitetura | 4 Decisões registradas |
| 5 Identidade visual | 5 Handoffs |
| 6 Materiais comerciais | 6 Referências e antigos |
| 7 Pesquisas | — (vão para o 6) |
| 8 Antigos | — (vão para o 6) |
| Sem regra temporal explícita | **Decisão aprovada mais recente prevalece** |

Pontos para considerar:
- Arquitetura, Home, design system, SEO e integrações (`docs/02`–`06`) **não aparecem na lista proposta**. **Sugestão:** tratá-los como parte da "Governança atual" (nível 1), já que derivam do Mestre e das decisões, sem ganhar nível próprio.
- Os **handoffs ficam abaixo das decisões**. Isso é coerente com a DEC-016: o handoff de 09/09 vale como referência de conteúdo e UX, não como obrigação.
- Os **materiais comerciais** (folders) vão para o nível 6. Isso é coerente com a DEC-018 e a DIV-16.

## 6. Texto sugerido para registrar como decisão (se aprovada)

> **DEC-025** — Ordem de prevalência documental: (1) Documento Mestre e documentos de governança atuais; (2) Documento Norte; (3) Síntese Estratégica; (4) decisões registradas; (5) handoffs; (6) referências e materiais antigos. Regra adicional: uma decisão mais recente, explicitamente aprovada e registrada em `decisoes.md`, prevalece sobre documento anterior em caso de conflito. O Documento Mestre só pode divergir do Norte citando a decisão que o justifica. Substitui a DEC-015. Resolve a DIV-04.

## 7. Arquivos que seriam atualizados após a aprovação

`00-documento-mestre-site.md` (§4) · `decisoes.md` (DEC-025; DEC-015 marcada como "Substituída") · `divergencias-e-lacunas.md` (DIV-04 resolvida) · `AGENTS.md` · `README.md` · `status.md`.
