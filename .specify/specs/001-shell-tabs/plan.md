# Plan: App Shell And Tab Framework

1. Move icon references from absolute desktop paths to project-local `assets/icons/`.
2. Keep `shell.html` as the only owner of app shell, global theme, and bottom navigation.
3. Keep tab files as isolated fragments.
4. Use `scripts/build.js` as the only assembly path for `echoland.html`.
5. Add GitHub collaboration files without adding product content.
