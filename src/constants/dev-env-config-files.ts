import inspect from 'object-inspect';
import { defaultConfig } from '@inkline/config';

export const defaultConfigFileContents = `import { defineConfig } from '@inkline/config';

export default defineConfig(${inspect(
    {
        theme: defaultConfig.theme
    },
    {
        indent: 4,
        depth: Infinity
    }
).replace(/(\d+[a-zA-Z]+):/g, "'$1':")});
`;

export const defaultNuxtDevEnvConfigFileContents = `import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({});
`;

export const defaultViteDevEnvConfigFileContents = `import { defineConfig } from 'vite';

export default defineConfig({});
`;

export const defaultWebpackTsDevEnvConfigFileContents = `import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

export default <webpack.Configuration>{
  entry: path.resolve(__dirname, 'src', 'main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
`;

export const defaultWebpackJsDevEnvConfigFileContents = `const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
`;
