#!/bin/bash
set -e

echo "📦 Bundling app to single HTML artifact..."

# Check if index.html exists
if [ ! -f "index.html" ]; then
  echo "❌ Error: No index.html found in project root."
  echo "   This script requires an index.html entry point."
  exit 1
fi

# This project is a plain static app (no package.json / bundler toolchain):
# index.html already carries its JS and CSS inline, so instead of the
# Parcel + html-inline pipeline used for scaffolded React projects, we run a
# zero-dependency Node script that inlines any remaining external assets
# (local file references and Google Fonts) into a single HTML file.
if ! command -v node > /dev/null 2>&1; then
  echo "❌ Error: Node.js is required (used to inline assets)."
  exit 1
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -f bundle.html

# Inline everything into single HTML
echo "🎯 Inlining all assets into single HTML file..."
node bundle.mjs

# Get file size
FILE_SIZE=$(du -h bundle.html | cut -f1)

echo ""
echo "✅ Bundle complete!"
echo "📄 Output: bundle.html ($FILE_SIZE)"
echo ""
echo "You can now use this single HTML file as an artifact in Claude conversations."
echo "To test locally: open bundle.html in your browser"
