GitHub Pages deploy bundle for cysloop/CV

1. Extract this archive into the local cysloop/CV repository folder.
2. Merge/overwrite index.html, merge the assets/ files, and add .nojekyll and manus-routes.json at repository root. Do not delete unrelated repository files.
3. Commit and push to main. The repository's existing Pages workflow deploys the repository root.

This package contains the compiled static website, not raw TypeScript/React source. The browser can load the relative ./assets/ paths beneath https://cysloop.github.io/CV/.
