# Turbopack Mode Status - Silk 3.1.0

## Current Issue

Turbopack mode with `turbopack: true` config **cannot transform `css()` calls at runtime**.

### Error
```
Error: @sylphx/silk: css() should be transformed at build-time by @sylphx/babel-plugin-silk
```

### Root Cause
- Turbopack uses SWC, not Babel
- Silk doesn't have an SWC plugin for Turbopack yet
- `turbopack: true` flag tells withSilk() to skip webpack plugin injection
- Without transformation plugin, `css()` calls remain untransformed

## Technical Investigation

### silk-nextjs@3.1.0 withSilk() behavior:
```javascript
// Lines 74-84 in dist/index.js
webpack(config, options) {
    // If user explicitly enabled turbopack mode, skip plugin
    if (enableTurbopack === true) {
        if (debug) {
            console.log('[Silk] Turbopack mode explicitly enabled, skipping webpack plugin');
        }
        return config;  // ← No transformation!
    }
    // Otherwise inject SilkWebpackPlugin
}
```

### With `turbopack: true`:
1. ✅ Next.js uses Turbopack bundler
2. ✅ --turbo flag works
3. ✅ CLI generates silk.generated.css
4. ✅ CSS file imported in layout.tsx
5. ❌ **BUT** `css()` calls in page.tsx not transformed → runtime error

## Attempted Configurations

### ❌ Config 1: turbopack: true + no Babel
```javascript
// next.config.mjs
withSilk({ reactStrictMode: true, turbopack: {} }, { turbopack: true })

// No .babelrc
// predev: "silk generate"
```
**Result**: Server starts, but 500 error on page load - css() not transformed

### ❌ Config 2: turbopack: true + empty turbopack config
```javascript
withSilk({ reactStrictMode: true, turbopack: {} }, { turbopack: true })
```
**Result**: Same error - transformation missing

### ❌ Config 3: No turbopack flag, relying on auto-detect
```javascript
withSilk({ reactStrictMode: true }, { srcDir: './app' })
// next dev (default Turbopack)
```
**Result**: webpack config conflict - withSilk adds webpack() function

### ✅ Config 4: Webpack mode (working)
```javascript
withSilk({ reactStrictMode: true }, { srcDir: './app' })
// .babelrc with babel-plugin-silk
// next dev --webpack
```
**Result**: Works perfectly, but uses webpack not Turbopack

## Conclusion

**Turbopack mode is NOT functional in Silk 3.1.0 for applications using `css()` runtime API.**

Turbopack mode only works if:
1. You use CLI-generated CSS only
2. You **don't** have any `css()` calls in your components
3. All styles are pre-generated and imported as static CSS

For Snapt project (which uses `css()` extensively in page.tsx):
- **Must use webpack mode with Babel plugin**
- Turbopack requires SWC plugin (not yet implemented by Silk team)

## Reported to User
User's "方案 1: Turbopack Mode (推薦 Next.js 16)" configuration doesn't work because page.tsx uses `css()` runtime API.

Need clarification from user whether:
1. Silk has SWC plugin we're missing?
2. Should refactor to avoid `css()` runtime calls?
3. Should stay on webpack mode?
