const fs = require('fs');
const path = require('path');

const root = '.'; // adjust if needed
const dirs = fs.readdirSync(root, { withFileTypes: true })
  .filter(d => d.isDirectory());

let listItems = [];

dirs.forEach(d => {
  const subdirPath = path.join(root, d.name);
  const files = fs.readdirSync(subdirPath);

  files.forEach(file => {
    if (file.endsWith('.html')) {
      const relPath = path.join(d.name, file);
      listItems.push(`<li><a href="${relPath}">${d.name} / ${file}</a></li>`);
    }
  });
});

const timestamp = new Date().toLocaleString();

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Exercises</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Available Files</h1>
  <ul>
    ${listItems.join('\n')}
  </ul>
   <footer>
    Last updated: ${timestamp}
  </footer>
</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log("index.html generated!");
