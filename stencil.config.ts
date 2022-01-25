import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'cookie',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: false, // disable service workers
    },
  ],
};
