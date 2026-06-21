const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const shellPath = path.join(root, 'shell.html');
const outputPath = path.join(root, 'index.html');

const tabs = [
  ['tab-home', 'tabs/tab-home.html'],
  ['tab-event-detail', 'tabs/tab-event-detail.html'],
  ['tab-route', 'tabs/tab-route.html'],
  ['tab-community', 'tabs/tab-community.html'],
  ['tab-mine', 'tabs/tab-mine.html']
];

let html = fs.readFileSync(shellPath, 'utf8');

for (const [id, file] of tabs) {
  const fragment = fs.readFileSync(path.join(root, file), 'utf8');
  const activeClass = id === 'tab-home' ? ' active' : '';
  const marker = `<div id="${id}" class="tab-panel${activeClass}"></div>`;
  const replacement = `<div id="${id}" class="tab-panel${activeClass}">\n${fragment}\n      </div>`;

  if (!html.includes(marker)) {
    throw new Error(`Missing tab mount point: ${marker}`);
  }

  html = html.replace(marker, replacement);
}

fs.writeFileSync(outputPath, html);
console.log(`Built ${path.relative(root, outputPath)}`);
