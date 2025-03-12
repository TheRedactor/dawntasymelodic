// cleanup.js - Run with "node cleanup.js" before deploying
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting cleanup process...');

// Define directories to clean
const dirsToClean = [
  'dist',
  'dist-ai',
  'ai/dist-ai',
  'ai/ai/dist-ai',
  '.netlify'
];

// Clean directories
dirsToClean.forEach(dir => {
  try {
    if (fs.existsSync(dir)) {
      console.log(`Removing directory: ${dir}`);
      fs.rmSync(dir, { recursive: true, force: true });
    }
  } catch (err) {
    console.error(`Error cleaning directory ${dir}:`, err);
  }
});

// Create _redirects file
try {
  console.log('Creating _redirects file...');
  const redirectsContent = '/*    /index.html   200';
  fs.writeFileSync('_redirects', redirectsContent);
  console.log('Created _redirects file in project root');
} catch (err) {
  console.error('Error creating _redirects file:', err);
}

console.log('✅ Cleanup completed successfully.');
console.log('');
console.log('Next steps:');
console.log('1. Run "npm run build"');
console.log('2. Check that dist-ai folder is created');
console.log('3. Run "netlify deploy --prod" to deploy to Netlify');