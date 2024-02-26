// Count time of script execution
console.time('script');

const fs = require('fs');

const INPUT_FILE = 'README.md';

const mdFile = fs.readFileSync(`./${INPUT_FILE}`, 'utf8');

// Split file by '---' to get tasks
const splittedText = mdFile.split('---');

const getJsCode = (string) => {
  const regex = /```javascript([\s\S]*?)```/g;
  const matches = string.match(regex);
  const match = matches?.[0];
  if (match) {
    return match
      .replace('\n', '')
      .replace('```javascript', '')
      .replace('```', '');
  }
  return match;
};

// Map over tasks and create file for each
let counter = 1;
splittedText.forEach((task) => {
  const jsCode = getJsCode(task);

  // Create __tasks__ folder if it doesn't exist
  if (!fs.existsSync('./__tasks__')) {
    fs.mkdirSync('./__tasks__', { recursive: true });
  }

  if (!task || !task.includes('#### Answer')) return;
  // Create folder for each task
  fs.mkdirSync(`./__tasks__/${counter}`, { recursive: true });

  // Create document for each task
  fs.writeFileSync(`./__tasks__/${counter}/index.md`, task, 'utf8');

  if (jsCode) {
    // Create js file for each task
    fs.writeFileSync(`./__tasks__/${counter}/index.js`, jsCode, 'utf8');
  }

  counter++;
});

console.log('✅ Done!');
console.timeEnd('script');
