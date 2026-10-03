# AGENTS.md — regras para assistentes de IA

Este arquivo vale para qualquer assistente de IA ou agente automatizado que trabalhe neste repositório (Claude, Codex, Astra, Copilot etc.). **Leia antes de agir.**

## Antes de começar

1. Leia [`docs/00-governanca/00-documento-mestre-site.md`](docs/00-governanca/00-documento-mestre-site.md), que é o índice central.
2. Consulte a fonte factual (Documento Norte §5) antes de escrever qualquer dado.
3. Veja [`docs/08-status/status.md`](docs/08-status/status.md) e [`docs/00-governanca/divergencias-e-lacunas.md`](docs/00-governanca/divergencias-e-lacunas.md).

## Regras obrigatórias

1. Operar **somente** em `C:\Projetos\site-divina-festa`.
2. Não acessar outros repositórios.
3. Não acessar credenciais globais (chaves SSH de outras contas, tokens, gerenciadores de senha, OneDrive, documentos pessoais).
4. Único remote autorizado: `git@github-divina:EzequielBau/site-divina-festa.git`.
5. Antes de qualquer push, rodar `git remote -v` e confirmar que só existe o remote acima.
6. Não deletar, mover ou sobrescrever originais (documentos e imagens em `assets/`) sem autorização.
7. Não renomear arquivos em massa sem aprovação.
8. Não fazer push automático de alterações estruturais sem autorização.
9. Trabalhar página por página.
10. Trabalhar seção por seção.
11. Consultar os documentos de governança antes de decisões.
12. Preservar clareza, UX, SEO, SEO local, CRO, mobile e performance.
13. Evitar modismos visuais (parallax, autoplay, animação gratuita, neon, luxo artificial).
14. Não inventar dados.
15. Não criar claims sem prova (afirmação → prova → benefício).
16. Preparar o projeto para futuras integrações.
17. Não implementar integrações sem autorização.
18. Usar Git com commits pequenos e claros.
19. Não colocar credenciais ou tokens no código.
20. Nunca versionar `.env` ou segredos.

## Regras complementares

- **Divergências:** quando duas fontes se contradisserem, registre em `docs/00-governanca/divergencias-e-lacunas.md`. Não resolva em silêncio.
- **Decisões:** decisão nova ou alterada vai para `docs/07-decisoes/decisoes.md`.
- **Status:** ao concluir uma etapa, atualize `docs/08-status/status.md`.
- **Não reabrir** conteúdo ou decisões já aprovados sem evidência concreta (ex.: texto do Hero; decisões em `docs/07-decisoes/decisoes.md`).
- **Fatos canônicos:** na Home, capacidade "até 150 convidados" (o detalhamento até 190 fica só em Espaço e Estrutura); estacionamento privativo; telefones do site: (41) 99247-0605 (geral) e (41) 99262-0604 (Royal/corporativo). Nunca usar o telefone da linha Divina Essência como contato do site principal.
- **Imagens:** originais em `assets/images/source/` são somente leitura. Derivados otimizados vão para `public/images/web/`. Conferir SHA256 antes de tratar arquivos como duplicatas. Atualizar o inventário.
- **Pessoas em fotos:** não publicar imagem com crianças ou convidados identificáveis sem autorização confirmada.
- **Stack (DEC-026):** Astro static-first com TypeScript no frontend; backend independente na VPS para formulários e integrações. Regras:
  - gerar páginas estáticas e usar JavaScript só quando houver necessidade funcional;
  - fatos do negócio em um único arquivo de dados;
  - nenhum segredo no frontend;
  - o site não pode depender do backend para funcionar;
  - não adicionar CMS nem implementar tracking (GTM/GA4/Pixel/Consent Mode) sem etapa autorizada;
  - **não instalar nada nem criar código sem autorização expressa.**

  WordPress/Kadence é a implementação anterior, não a stack deste projeto.
- **Logo:** não vetorizar nem redesenhar sem autorização (DEC-023).
- **Idioma:** documentação e conteúdo em português do Brasil.

## Prevalência das fontes

DEC-025. **Regra prévia:** uma decisão posterior, explicitamente aprovada, registrada com ID e que trate diretamente do ponto em conflito prevalece sobre documentos anteriores.

**Hierarquia:** Documento Mestre / Governança atual > Documento Norte > Síntese Estratégica > decisões registradas > handoffs > referências e materiais anteriores.

O Documento Mestre só pode divergir do Norte citando a decisão aprovada que fundamenta a divergência; caso contrário, prevalece o Norte.
