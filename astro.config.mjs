// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';

// Site estático (DEC-026). Hospedagem e domínios: docs/02-arquitetura/infraestrutura.md.
// `site` ainda não é definido: o domínio de produção só é ligado no lançamento (L-22).
export default defineConfig({
  output: 'static',

  env: {
    schema: {
      // Indexação desligada por padrão (DEC-030). Só o ambiente de produção,
      // no lançamento, deve definir PUBLIC_ALLOW_INDEXING=true.
      PUBLIC_ALLOW_INDEXING: envField.boolean({
        context: 'client',
        access: 'public',
        default: false,
      }),
    },
  },

  // Fontes baixadas no build e servidas pelo próprio site (sem requisição ao
  // Google no navegador do visitante). Arquivos variáveis, só o subset latin.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Familjen Grotesk',
      cssVariable: '--font-heading',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-body',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
  ],
});
