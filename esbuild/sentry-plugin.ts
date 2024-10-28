import { sentryEsbuildPlugin } from '@sentry/esbuild-plugin';
import type { Plugin } from 'esbuild';

const sentryPlugin: Plugin = sentryEsbuildPlugin({
  applicationKey: 'my-app',
});

export default sentryPlugin;
