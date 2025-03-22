#!/bin/bash

echo "Building OnlyDowns.xyz for production..."
# Next.js now outputs static files to the 'out' directory by default when configured for static export
npx next build

echo "Preparing for deployment to onlydowns.xyz..."
# Add CNAME file for GitHub Pages or similar static hosting
echo "onlydowns.xyz" > out/CNAME

echo "Deployment files ready in the 'out' directory"
echo "To deploy:"
echo "1. Upload the 'out' directory to your web hosting"
echo "2. Ensure your DNS is configured to point to onlydowns.xyz"
echo "3. For GitHub Pages: git add out/ && git commit -m 'Deploy to onlydowns.xyz' && git subtree push --prefix out origin gh-pages" 