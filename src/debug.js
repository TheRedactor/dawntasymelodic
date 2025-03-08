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
        Path: ${window.location.pathname}<br>
        Hash: ${window.location.hash}<br>
        Full URL: ${window.location.href}<br>
        Referrer: ${document.referrer}<br>
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
    
    console.log('🔧 Debugger initialized! Press D to show debug info');
  }