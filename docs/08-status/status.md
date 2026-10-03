# Status do projeto

**Atualizado em:** 03/10/2026 — governança, stack e arquitetura de execução decididas (DEC-025 a DEC-029). Implementação ainda não autorizada.

## Concluído

- Repositório GitHub criado (`EzequielBau/site-divina-festa`)
- Chave SSH criada
- Deploy Key configurada (alias `github-divina`)
- Remote isolado validado (`git@github-divina:EzequielBau/site-divina-festa.git`, `ssh -T` e `git ls-remote` OK em 03/10/2026)
- Auditoria de documentos ([inventário](../99-referencias/inventario-documentos.md))
- Auditoria de imagens: 43 arquivos, dimensões, SHA256 e 3 duplicatas confirmadas ([inventário](../99-referencias/inventario-imagens.md))
- Estrutura de pastas criada e arquivos movidos com integridade conferida (47/47 hashes idênticos)
- Documentação-base completa e **organização aprovada pelo gestor** (DEC-014)
- Commits documentais enviados ao GitHub: `1ddd9e3` (estrutura), `67381de` (DEC-025/026), `348386d` (DEC-027) e `16c3e36` (DEC-028)
- Decisões canônicas: natureza do projeto (DEC-016), capacidade (DEC-017), telefones (DEC-018), estacionamento privativo (DEC-019), Divina Essência fora da v1 (DEC-020), Familjen Grotesk (DEC-021), contraste do dourado (DEC-022), logo (DEC-023), regras de imagem (DEC-024)
- **Ordem de prevalência documental aprovada** (DEC-025)
- **Stack decidida: Astro static-first + backend independente na VPS** (DEC-026)
- **Arquitetura de execução decidida** (DEC-027): backend Node.js + TypeScript + Fastify na VPS (`api.divinafesta.com.br`, futuro); WordPress atual em produção até a aprovação final; HTTPS; deploy inicial simples, CI/CD no futuro
- **Frontend estático desacoplado da VPS** (DEC-028, substitui parcialmente a DEC-027): build estático em hospedagem estática/CDN (provedor definido depois pela DEC-029); Nginx e VPS não são requisitos do frontend; o site continua no ar se a VPS cair; desenvolvimento em `dev.divinafesta.com.br`, fora da indexação
- **Hospedagem do frontend decidida: Cloudflare Pages** (DEC-029): deploy a partir do GitHub, build `npm run build`, saída `dist`, `dev.divinafesta.com.br` por CNAME. Nada configurado ainda
- Revisões de consistência interna da documentação
- Conteúdo já aprovado na implementação anterior, aproveitado como referência: texto do Hero; copy de Prova rápida, Tipos de evento e Crianças + adultos

## Em andamento

- Nada em execução. **Aguardando autorização** para a próxima etapa.

## Próximo (cada item depende de autorização)

1. Inicialização do projeto Astro (estrutura de pastas, TypeScript, fonte factual centralizada)
2. Design system: validar tokens e o contraste final do dourado escuro (DEC-022)
3. Header
4. Footer
5. Hero (conteúdo já aprovado; implementação nova)
6. Home seção por seção, começando por **Gastronomia** no conteúdo
7. Infraestrutura de desenvolvimento: projeto no Cloudflare Pages conectado ao GitHub, CNAME de `dev.divinafesta.com.br` e bloqueio de indexação (DEC-029)
8. Etapas próprias e posteriores: backend Fastify (formulários, Kommo, Meta CAPI, webhooks, WhatsApp), tracking (GTM, GA4, Pixel, Consent Mode) e CI/CD

## Pendências

- Confirmar os dados da fonte factual: eventos realizados, avaliações e metragem da área infantil (L-01 a L-03)
- Autorizações de imagem (crianças, convidados) e licença ou arquivos sem marca d'água do fotógrafo `@lucylimafotografia` (L-08)
- Origem das fotos Bistrô, café colonial, capas Essência e 15 anos (L-09)
- Logo em SVG: não há arquivo confirmado. Não vetorizar agora (L-10, DEC-023)
- Fotos faltantes: equipe, cozinha, estacionamento, corporativo, salão ocupado, adultos + crianças (L-07)
- Acesso ao DNS de `divinafesta.com.br` para o CNAME do `dev` (L-11); configuração do domínio principal no Cloudflare Pages no lançamento (L-22); GBP, CNPJ, política de privacidade, contas de marketing (L-11 a L-15)
- Remover manualmente as pastas vazias `Imagens\` e `Documentos norteadores para montar site\` (o Windows negou a exclusão; o Git ignora pastas vazias)
- Decidir sobre as duplicatas (3 pares). Nada foi apagado

## Bloqueios

- **Nenhum bloqueio técnico.** Stack e arquitetura de execução resolvidas (DEC-026 a DEC-029).
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
| L-22 | Configuração do domínio principal no Cloudflare Pages no lançamento |
| — | Tratamento das duplicatas de imagem |
