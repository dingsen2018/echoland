# Echoland 回声地 Constitution

## Highest Priority

This project is a course-showcase high-fidelity frontend demo. Visual consistency, interaction clarity, and a stable presentation path are more important than real backend completeness.

## Current Stage

The current repository stage is app shell setup only.

Allowed in this stage:

- Mobile app shell.
- Bottom four-tab navigation.
- Project-local icon assets.
- Home top logo and city label.
- Empty tab fragment files for later team work.
- Build script that assembles `echoland.html`.

Not allowed in this stage:

- Activity cards.
- Map blocks.
- Community posts.
- Route results.
- Invite flows.
- Fake business data.
- Backend, database, login, payment, real AI API, or real POI search.

## Final Artifact

`echoland.html` is the browser-openable preview file. It is generated from:

- `shell.html`
- `tabs/tab-home.html`
- `tabs/tab-route.html`
- `tabs/tab-community.html`
- `tabs/tab-mine.html`

Run:

```bash
node scripts/build.js
```

## Tab Ownership

- Home: `tabs/tab-home.html`
- AI route: `tabs/tab-route.html`
- Community: `tabs/tab-community.html`
- Mine: `tabs/tab-mine.html`

Each teammate should keep edits scoped to their owned tab unless a shared shell change is agreed.

## Styling Rules

- Use the project CSS variables from `shell.html`.
- Keep the current dark theme and fluorescent green brand accent.
- Do not reference absolute local asset paths in HTML.
- Put shared images/icons under `assets/`.
- Tab fragments must not include `<html>`, `<head>`, `<body>`, or bottom navigation.
