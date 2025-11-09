import { withSilk } from '@sylphx/silk-nextjs';

export default withSilk({
  reactStrictMode: true,
  turbopack: {},
}, {
  turbopack: true,
  srcDir: './app',
  debug: true,
});
