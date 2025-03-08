// src/debug.js
export function initializeDebugTools() {
    // Create debug overlay
    const debugDiv = document.createElement('div');
    debugDiv.id = 'route-debug';
    debugDiv.style.cssText = `
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: rgba(0,0,0,0.8);
      color: #00ff00;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
      font-size: 12px;
      z-index: 9999;
      max-width: 400px;
      max-height: 200px;
      overflow: auto;
    `;
    document.body.appendChild(debugDiv);
    
    // Log key information
    const updateDebug = () => {
      debugDiv.innerHTML = `
        <strong>ROUTE DEBUG:</strong><br>
        Path: ${window.location.pathname}<br>
        Hash: ${window.location.hash}<br>
        Full URL: ${window.location.href}<br>
        Base URL: ${document.baseURI || 'None'}<br>
        Script Path: ${document.currentScript?.src || 'Unknown'}<br>
        <strong>PRESS ESC TO TOGGLE</strong>
      `;
    };
    
    // Update on navigation
    window.addEventListener('popstate', updateDebug);
    document.addEventListener('DOMContentLoaded', updateDebug);
    
    // Toggle with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        debugDiv.style.display = debugDiv.style.display === 'none' ? 'block' : 'none';
      }
    });
    
    // Track all script loads
    const originalCreateElement = document.createElement;
    document.createElement = function(tag) {
      const element = originalCreateElement.call(document, tag);
      if (tag.toLowerCase() === 'script') {
        element.addEventListener('load', () => {
          console.log('✅ Script loaded:', element.src);
        });
        element.addEventListener('error', () => {
          console.error('❌ Script failed to load:', element.src);
        });
      }
      return element;
    };
    
    console.log('🔍 Debug tools initialized!');
    return updateDebug;
  }