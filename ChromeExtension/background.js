// Unbreakable Password Generator - Background Service Worker
// This file is intentionally minimal to maintain security

'use strict';

// Install event
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('🔒 Unbreakable Password Generator installed');
    console.log('Privacy promise: Zero network requests. Zero data collection.');
    
    // Optional: Open options page on first install
    // chrome.runtime.openOptionsPage();
  } else if (details.reason === 'update') {
    console.log('🔒 Unbreakable Password Generator updated to version', chrome.runtime.getManifest().version);
  }
});

// Log startup (for debugging)
console.log('%c🔒 UNBREAKABLE BACKGROUND SERVICE WORKER', 
  'background: #1e3a5f; color: white; font-size: 12px; padding: 6px; font-weight: bold;');
console.log('%cNo network requests • No storage • No tracking', 
  'font-size: 10px; color: #666;');

// NO network requests
// NO storage access
// NO permissions beyond clipboard
// This is a privacy-first extension