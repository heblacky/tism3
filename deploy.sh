#!/bin/bash

echo "Building OnlyTism.com for production..."
# Next.js now outputs static files to the 'out' directory by default when configured for static export
npx next build

echo "Preparing for deployment to onlytism.com..."
# Add CNAME file for GitHub Pages or similar static hosting
echo "onlytism.com" > out/CNAME

echo "Deployment files ready in the 'out' directory"
echo "To deploy:"
echo "1. Upload the 'out' directory to your web hosting"
echo "2. Ensure your DNS is configured to point to onlytism.com"
echo "3. For GitHub Pages: git add out/ && git commit -m 'Deploy to onlytism.com' && git subtree push --prefix out origin gh-pages" 