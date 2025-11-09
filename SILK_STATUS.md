# Silk + Next.js 16 + Turbopack 測試總結

## ✅ WORKING: Webpack Mode

**Configuration:**
```json
// package.json
"dev": "next dev --webpack"
```

```javascript
// next.config.mjs
import { withSilk } from '@sylphx/silk-nextjs';

export default withSilk({
  reactStrictMode: true,
}, {
  srcDir: './app',
  debug: true,
});
```

```json
// .babelrc
{
  "presets": ["next/babel"],
  "plugins": ["@sylphx/babel-plugin-silk"]
}
```

**Versions:**
- `@sylphx/silk@2.1.0`
- `@sylphx/babel-plugin-silk@2.0.3`
- `@sylphx/silk-nextjs@3.1.0`

**Result:**
- ✅ css() transformation works
- ✅ CSS generated: 5122 bytes
- ✅ Homepage: 200 OK
- ⚠️  Requires --webpack flag explicitly

## ❌ BROKEN: Turbopack Mode  

**Error 1 - Without Silk plugin:**
```
Error: @sylphx/silk: css() should be transformed at build-time
```
→ Turbopack 需要 css() transformation 但冇 Babel support

**Error 2 - With Silk plugin:**
```
ERROR: This build is using Turbopack, with a `webpack` config
```
→ withSilk() 加咗 webpack config，同 Turbopack 衝突

## 結論

暫時 **MUST use webpack mode** with `--webpack` flag.

Turbopack support 需要：
1. Silk SWC plugin (取代 Babel)
2. withSilk() 要檢測 Turbopack 唔加 webpack config
3. 或者用 CLI 生成 CSS (predev script)
