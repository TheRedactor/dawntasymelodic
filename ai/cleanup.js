// cleanup.js - ES Modules version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// ES Modules don't have __dirname, so we create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧹 Starting cleanup process...');

// Define directories to clean
const dirsToClean = [
  'dist',
  'dist-ai',
  path.join('ai', 'dist-ai'),
  path.join('ai', 'ai', 'dist-ai'),
  '.netlify'
];

// Clean directories
for (const dir of dirsToClean) {
  try {
    const fullPath = path.resolve(__dirname, dir);
    if (fs.existsSync(fullPath)) {
      console.log(`Removing directory: ${fullPath}`);
      fs.rmSync(fullPath, { recursive: true, force: true });
    }
  } catch (err) {
    console.error(`Error cleaning directory ${dir}:`, err);
  }
}

// Create _redirects file for SPA routing on the subdomain
try {
  console.log('Creating _redirects file...');
  const redirectsContent = '/* /index.html 200';
  fs.writeFileSync(path.join(__dirname, '_redirects'), redirectsContent);
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