# Spec: App Shell And Tab Framework

## Goal

Prepare a clean, GitHub-friendly Echoland frontend skeleton that only contains the app shell, project-local assets, empty tab fragments, and a reproducible build step.

## Scope

- Mobile app container.
- Dark theme variables matching the provided p1 direction.
- Bottom four-tab navigation.
- Default and active icon states.
- Home logo and city label.
- Empty fragment files for later team work.
- Build script to generate `echoland.html`.
- README and PR template for collaboration.

## Out Of Scope

- Activity discovery content.
- Map UI.
- Search UI.
- AI route UI.
- Community feed content.
- Mine page records.
- Invite components.
- Backend or external services.

## Acceptance

- `node scripts/build.js` generates `echoland.html`.
- Bottom tab switching works.
- Icons load from `assets/icons/`.
- `tabs/tab-route.html`, `tabs/tab-community.html`, and `tabs/tab-mine.html` remain empty.
- No absolute `/Users/...` paths remain in HTML.
