import { withSilk } from '@sylphx/silk-nextjs';

const nextConfig = {
  turbopack: {},
};

export default withSilk(nextConfig, {
  inject: true, // 必須自動注入
  babelOptions: {
    production: true,
    classPrefix: 'silk',
  },
  compression: {
    brotli: true,
    gzip: true,
  },
});
