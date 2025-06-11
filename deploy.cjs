const fs = require('fs');
const { execSync } = require('child_process');

// Function to modify the index.html file
function modifyIndexHtml() {
  const indexPath = './dist/index.html';
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Replace absolute paths with correct GitHub Pages paths
  content = content.replace(/src="\/assets\//g, 'src="./assets/');
  content = content.replace(/href="\/assets\//g, 'href="./assets/');
  content = content.replace(/href="\/vite.svg/g, 'href="./vite.svg');
  content = content.replace(/src="\/suman\.JPG"/g, 'src="./suman.JPG"');
  content = content.replace(/"\/suman\.JPG"/g, '"./suman.JPG"');
  
  fs.writeFileSync(indexPath, content);

  // Also check and modify the main JS bundle
  const distFiles = fs.readdirSync('./dist/assets');
  const jsBundle = distFiles.find(file => file.endsWith('.js'));
  if (jsBundle) {
    const jsBundlePath = `./dist/assets/${jsBundle}`;
    let jsContent = fs.readFileSync(jsBundlePath, 'utf8');
    jsContent = jsContent.replace(/"\/suman\.JPG"/g, '"./suman.JPG"');
    fs.writeFileSync(jsBundlePath, jsContent);
  }
}

// Main deployment process
function deploy() {
  try {
    // Build the project
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    // Copy profile picture to dist root if it exists in public
    if (fs.existsSync('./public/suman.JPG')) {
      fs.copyFileSync('./public/suman.JPG', './dist/suman.JPG');
    }

    // Modify the index.html file
    console.log('Modifying paths...');
    modifyIndexHtml();

    // Deploy to GitHub Pages
    console.log('Deploying to GitHub Pages...');
    execSync('npx gh-pages -d dist --dotfiles', { stdio: 'inherit' });

    console.log('Deployment complete!');
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

deploy(); 