import { withSilk } from '@sylphx/silk-nextjs';

export default withSilk({
  reactStrictMode: true,
}, {
  srcDir: './app',
  debug: true,
});
