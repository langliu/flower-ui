import { resolve } from 'path';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'a-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: resolve('../a-themes/src/index.css'),
};
