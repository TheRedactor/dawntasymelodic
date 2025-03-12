export default function setupDebugger() {
  // Add a listener to detect redirects
  let originalPushState = history.pushState;
  let originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    console.log('🔍 pushState called with:', arguments);
    return originalPushState.apply(this, arguments);
  };
  
  history.replaceState = function() {
    console.log('🔍 replaceState called with:', arguments);
    return originalReplaceState.apply(this, arguments);
  };
  
  // Create a visible debug element
  const debugElement = document.createElement('div');
  debugElement.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: lime;
    padding: 10px;
    border-radius: 5px;
    font-family: monospace;
    z-index: 9999;
    max-width: 80%;
    word-break: break-all;
    font-size: 12px;
  `;
  
  // Add debug info
  const updateDebugInfo = () => {
    debugElement.innerHTML = `
      <strong>ROUTING DEBUG:</strong><br>
      Path: ${window.location.pathname}<br>
      Hash: ${window.location.hash}<br>
      Full URL: ${window.location.href}<br>
      Base URL: ${document.baseURI}<br>
      Referrer: ${document.referrer}<br>
      sessionStorage.redirect: ${sessionStorage.redirect || 'none'}<br>
      <button onclick="localStorage.clear(); sessionStorage.clear(); alert('Storage cleared!')">Clear Storage</button>
    `;
  };
  
  // Show on D key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      if (document.body.contains(debugElement)) {
        document.body.removeChild(debugElement);
      } else {
        document.body.appendChild(debugElement);
        updateDebugInfo();
      }
    }
  });
  
  // Log routing information
  console.log('🔧 ROUTING DEBUG:');
  console.log('Base URL:', document.baseURI);
  console.log('Router Base:', '/ai/');
  console.log('Current Path:', window.location.pathname);
  
  console.log('🔧 Debugger initialized! Press D to show debug info');
}