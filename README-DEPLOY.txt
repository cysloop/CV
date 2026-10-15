FIX FOR cysloop/CV GitHub Pages

This package contains:
- .github/workflows/static.yml: a Pages deployment workflow that publishes only the built site/ folder. It does not require package.json, pnpm-lock.yaml, or a build step.
- site/: the compiled static website, with index.html and the assets/ folder preserved.

Apply it to the local cysloop/CV repository root (keep the folder structure intact and overwrite .github/workflows/static.yml), commit, and push to main. Do not upload the files inside site/ directly to the repository root, and do not flatten the assets/ folder.

After the push, open the Actions tab and confirm “Deploy static CV to GitHub Pages” succeeds. The Pages artifact will contain only site/.
