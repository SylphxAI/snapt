#!/bin/bash

echo "=== Checking @sylphx/silk runtime imports ==="
echo ""

echo "1. Check dist/index.js imports:"
grep -n "require.*lightningcss" node_modules/@sylphx/silk/dist/index.js || echo "   No lightningcss imports found"
echo ""

echo "2. Check dist/runtime.js imports:"
grep -n "require.*lightningcss" node_modules/@sylphx/silk/dist/runtime.js || echo "   No lightningcss imports found"
echo ""

echo "3. Check dist/production.js imports:"
grep -n "require.*lightningcss" node_modules/@sylphx/silk/dist/production.js || echo "   No lightningcss imports found"
echo ""

echo "4. Check package.json exports:"
cat node_modules/@sylphx/silk/package.json | grep -A 10 '"exports"'
echo ""

echo "=== Full import trace from error ==="
echo "Browser is trying to load:"
echo "  ./app/page.tsx"
echo "  ↓ imports"
echo "  ./node_modules/@sylphx/silk/dist/index.js"
echo "  ↓ imports"  
echo "  ./node_modules/@sylphx/silk/dist/runtime.js"
echo "  ↓ imports"
echo "  ./node_modules/@sylphx/silk/dist/production.js"
echo "  ↓ imports"
echo "  ./node_modules/lightningcss/node/index.mjs"
echo "  ↓ imports"
echo "  ./node_modules/lightningcss/node/index.js"
echo "  ⨯ ERROR: Can't resolve '../lightningcss.' <dynamic> '.node'"
