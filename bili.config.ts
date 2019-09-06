import { Config } from 'bili';
import path from 'path';

const config: Config = {
  plugins: {
    typescript2: {
      cacheRoot: path.join(__dirname, '.rpt2_cache'),
      useTsconfigDeclarationDir: true,
    },
  },
  input: {
    service: 'packages/service/lib/service.ts',
  },
  output: {
    format: ['cjs-min', 'esm-min'],
  },
};

export default config;
