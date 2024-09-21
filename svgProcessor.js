const fs = require('fs');
const path = require('path');

const iconsDirectory = path.join(__dirname, 'src', 'assets', 'icons');

function processSVG(content) {
  // Remove fill attributes except for "none"
  content = content.replace(/fill="(?!none)[^"]*"/g, '');
  
  // Remove stroke attributes
  content = content.replace(/stroke="[^"]*"/g, '');
  
  // Remove style attributes
  content = content.replace(/style="[^"]*"/g, '');
  
  // Add fill="currentColor" to the main svg tag if it doesn't exist
  if (!content.includes('fill="currentColor"')) {
    content = content.replace('<svg', '<svg fill="currentColor"');
  }
  
  return content;
}

function processDirectory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      if (path.extname(file).toLowerCase() === '.svg') {
        const filePath = path.join(directory, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error(`Error reading file ${file}:`, err);
            return;
          }

          const processedContent = processSVG(data);

          fs.writeFile(filePath, processedContent, 'utf8', (err) => {
            if (err) {
              console.error(`Error writing file ${file}:`, err);
            } else {
              console.log(`Processed ${file}`);
            }
          });
        });
      }
    });
  });
}

processDirectory(iconsDirectory);