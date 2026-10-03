# Inventário de documentos

**Versão:** 1.0 — 03/10/2026 (Etapa 00)

Auditoria de tudo o que existia no repositório antes da reorganização, e para onde cada item foi.

## Situação encontrada (antes)

```text
site-divina-festa/
├── README.md                                   (2 linhas)
├── 06-handoff-home-09-09-2026.md
├── Orientacóes para site.docx
├── Documentos norteadores para montar site/
│   ├── 00_DOCUMENTO_NORTE_NOVO_SITE_DIVINA_FESTA.docx
│   └── 01_SINTESE_ESTRATEGICA_PESQUISA_DIVINA_FESTA.docx
└── Imagens/                                    (43 arquivos, ~50 MB, 7 subpastas)
```

Git: um commit (`7dcd5fb Initial commit`, só com o README). Todo o resto estava fora do controle de versão.

## Classificação e destino

| Documento | Data | Tipo | Prevalência (DEC-025) | Destino |
|---|---|---|---|---|
| 00_DOCUMENTO_NORTE_NOVO_SITE_DIVINA_FESTA.docx | 27/08/2026 | estratégico — **fonte estratégica principal** | 2 | `docs/01-estrategia/` (+ transcrição `.md`) |
| 01_SINTESE_ESTRATEGICA_PESQUISA_DIVINA_FESTA.docx | 27/08/2026 | estratégico — consolidação das Rodadas 1–5 | 3 | `docs/01-estrategia/` (+ transcrição `.md`) |
| 06-handoff-home-09-09-2026.md | 09/09/2026 | handoff da implementação anterior em WordPress. **Referência de conteúdo, UX e decisões aprovadas; não é obrigação tecnológica** (DEC-016) | 5 | `docs/07-decisoes/` |
| Orientacóes para site.docx | 02/09/2026 | conteúdo — wireframe textual da Home (versão anterior) | 6 | `docs/04-conteudo/` (+ transcrição `.md`) |
| Folders (Divina V2, Divina Social, Divina Essência) | 19/08–10/09/2026 | materiais comerciais | 6 | `assets/images/source/Material Publicitário/` (sem mudança de nome) |
| README.md | 03/10/2026 | técnico | — | reescrito na raiz |

Notas:
- O nome do arquivo `Orientacóes para site.docx` tem grafia irregular ("ó" no lugar de "çõ"). **Foi preservado**; uma renomeação pode ser feita depois, com aprovação.
- **Não foram encontrados:** pesquisas completas das Rodadas 1–5 (o NORTE e a SÍNTESE se referem a elas), documentos de identidade visual dedicados, nem os cinco `.md` citados no handoff (ver DIV-05).
- **Arquivos antigos:** `assets/brand/logos/Logo vetor.png` (2022, logo legado) e `Foto espaço kids mais antigo.jpg` (antigo por nome). Os demais arquivos são de jun–out/2026.

## Transcrições Markdown

As três `.docx` ganharam transcrições `.md` ao lado do original, para leitura por humanos e IA sem precisar do Word. Cada transcrição avisa no cabeçalho: **o `.docx` original prevalece em caso de diferença.**

## Arquivos-chave para o site

1. Documento Norte — fonte factual e estratégica.
2. Handoff 09/09 — textos aprovados de Hero, Prova rápida, Tipos de evento e Crianças + adultos; paleta, tipografia, Header/Footer. Ajustes posteriores: capacidade na Home "até 150" (DEC-017); fonte Familjen Grotesk (DEC-021).
3. Logos `Logo Divina Festa H-03.png` (horizontal) e `Logo Divina Festa-01.png` (empilhado).
4. Fotos do salão (#26, #28), adultos + crianças (#11), área infantil (#8, #17), fachada (#27), gastronomia real (#32–#35). Ver [inventário de imagens](inventario-imagens.md).

## Arquivos apenas de referência

- Síntese Estratégica: justificativa e benchmark; não é fonte para copy final.
- Wireframe `Orientacóes para site`: versão anterior, superada pelo handoff.
- Folders e capas Essência: referência de conteúdo comercial e de tom; não são fonte factual (DEC-018, DIV-16). A linha Essência fica fora da v1 (DEC-020).
