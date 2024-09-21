const fs = require('fs');
const path = require('path');

const svgDirectory = path.join(__dirname, 'src', 'assets', 'icons'); // Adjust this path as needed

function processSVG(content) {
  // Remove fill attributes
  content = content.replace(/fill="[^"]*"/g, '');
  
  // Remove stroke attributes
  content = content.replace(/stroke="[^"]*"/g, '');
  
  // Remove color attributes
  content = content.replace(/color="[^"]*"/g, '');
  
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

processDirectory(svgDirectory);