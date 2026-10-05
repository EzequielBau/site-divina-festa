# AGENTS.md — regras para assistentes de IA

Este arquivo vale para qualquer assistente de IA ou agente automatizado que trabalhe neste repositório (Claude, Codex, Astra, Copilot etc.). **Leia antes de agir.**

## Antes de começar

0. Leia [`docs/00-governanca/01-CONTEXTO-ATUAL.md`](docs/00-governanca/01-CONTEXTO-ATUAL.md) (ver "Memória operacional obrigatória").
1. Leia [`docs/00-governanca/00-documento-mestre-site.md`](docs/00-governanca/00-documento-mestre-site.md), que é o índice central.
2. Consulte a fonte factual (Documento Norte §5) antes de escrever qualquer dado.
3. Veja [`docs/08-status/status.md`](docs/08-status/status.md) e [`docs/00-governanca/divergencias-e-lacunas.md`](docs/00-governanca/divergencias-e-lacunas.md).

## Memória operacional obrigatória

[`docs/00-governanca/01-CONTEXTO-ATUAL.md`](docs/00-governanca/01-CONTEXTO-ATUAL.md) é a memória operacional viva e o ponto de entrada do projeto.

**Leitura:** todo agente, antes de começar uma tarefa relevante, deve ler esse arquivo e depois os documentos canônicos que ele indicar.

- Não pedir ao gestor informações que já estão registradas.
- Não reabrir decisões aprovadas sem evidência ou contradição real.
- Consultar decisões e documentos antes de assumir qualquer coisa.
- O CONTEXTO-ATUAL é síntese operacional, **não** autoridade superior às DECs e aos documentos canônicos (vale a hierarquia da seção "Prevalência das fontes"). Se divergir, corrija-o.

**Atualização após aprovação:** sempre que o gestor aprovar explicitamente uma seção, página, componente, decisão, imagem definitiva, arquitetura ou alteração relevante, o fechamento da tarefa **deve** incluir a atualização da memória operacional. Fluxo obrigatório:

1. atualizar o documento canônico afetado;
2. atualizar `docs/00-governanca/01-CONTEXTO-ATUAL.md`;
3. atualizar `docs/08-status/status.md`;
4. atualizar `docs/04-conteudo/home-estrutura.md`, se a Home mudou;
5. atualizar `docs/07-decisoes/decisoes.md` somente se houver decisão global nova;
6. atualizar `docs/99-referencias/inventario-imagens.md` quando houver imagem selecionada, derivada, substituída ou descartada;
7. rodar os testes;
8. apresentar o diff/status;
9. fazer commit quando a tarefa tiver autorização para commit.

A atualização documental não é opcional nem etapa futura: faz parte da definição de "concluído".

**Síntese:** o CONTEXTO-ATUAL mostra o presente, não o histórico. Ao mudar o estado de uma etapa, troque o estado (ex.: "em validação" → "concluída"); não acrescente versões anteriores. O Git guarda o histórico.

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
- **Stack (DEC-026, DEC-028, DEC-033):** Astro static-first com TypeScript no frontend (build `npm run build`, saída `dist`), hospedado na **Hostinger Web Hosting**, desacoplado da VPS; backend independente na Hostinger VPS para formulários e integrações. Ambiente de desenvolvimento: `dev.divinafesta.com.br`, fora da indexação; produção é ambiente separado. Não configurar Hostinger, DNS ou Cloudflare sem etapa autorizada; Cloudflare é opcional e futuro. Roteiro em [`infraestrutura.md`](docs/02-arquitetura/infraestrutura.md). Regras:
  - publicar **somente o conteúdo de `dist/`**; nunca `.git`, `docs`, `src`, `node_modules`, `.env`, credenciais ou documentação interna;
  - deploy manual e controlado nesta fase; push em `main` não publica nada; não automatizar o deploy sem autorização;
  - gerar páginas estáticas e usar JavaScript só quando houver necessidade funcional;
  - fatos do negócio em um único arquivo de dados;
  - nenhum segredo no frontend;
  - o site não pode depender do backend para funcionar;
  - formulários (DEC-032): validação também no backend; o navegador nunca fala direto com Kommo, Meta CAPI ou outro serviço autenticado; se a API falhar ou exceder o timeout, preservar os dados e oferecer o WhatsApp com a mensagem pré-preenchida. Nenhuma falha do backend pode eliminar o caminho de contato;
  - não adicionar CMS nem implementar tracking (GTM/GA4/Pixel/Consent Mode) sem etapa autorizada;
  - **não instalar nada nem criar código sem autorização expressa.**

  WordPress/Kadence é a implementação anterior, não a stack deste projeto.
- **Logo:** não vetorizar nem redesenhar sem autorização (DEC-023).
- **Idioma:** documentação e conteúdo em português do Brasil.

## Prevalência das fontes

DEC-025. **Regra prévia:** uma decisão posterior, explicitamente aprovada, registrada com ID e que trate diretamente do ponto em conflito prevalece sobre documentos anteriores.

**Hierarquia:** Documento Mestre / Governança atual > Documento Norte > Síntese Estratégica > decisões registradas > handoffs > referências e materiais anteriores.

O Documento Mestre só pode divergir do Norte citando a decisão aprovada que fundamenta a divergência; caso contrário, prevalece o Norte.
