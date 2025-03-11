// src/store/theme.ts
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

type ThemeType = 'light' | 'dark' | 'cosmic' | 'ocean';

export const useThemeStore = defineStore('theme', () => {
  // State
  const currentTheme = ref<ThemeType>(
    (localStorage.getItem('dawntasy-theme') as ThemeType) || 'cosmic'
  );
  
  // Actions
  function setTheme(theme: ThemeType) {
    currentTheme.value = theme;
    localStorage.setItem('dawntasy-theme', theme);
    applyTheme(theme);
  }
  
  // Apply theme to document
  function applyTheme(theme: ThemeType) {
    const html = document.documentElement;
    
    // Remove all theme classes
    html.classList.remove('theme-light', 'theme-dark', 'theme-cosmic', 'theme-ocean');
    
    // Add selected theme class
    html.classList.add(`theme-${theme}`);
    
    // Set dark mode for Tailwind
    if (theme === 'dark' || theme === 'cosmic') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // Set CSS variables based on theme
    switch(theme) {
      case 'light':
        document.documentElement.style.setProperty('--primary-color', '#4f46e5');
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#111827');
        break;
      case 'dark':
        document.documentElement.style.setProperty('--primary-color', '#8b5cf6');
        document.documentElement.style.setProperty('--background-color', '#0f172a');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        break;
      case 'cosmic':
        document.documentElement.style.setProperty('--primary-color', '#8b5cf6');
        document.documentElement.style.setProperty('--background-color', '#0f172a');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        break;
      case 'ocean':
        document.documentElement.style.setProperty('--primary-color', '#0ea5e9');
        document.documentElement.style.setProperty('--background-color', '#082f49');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        break;
    }
  }
  
  // Initialize theme
  function initTheme() {
    applyTheme(currentTheme.value);
  }
  
  // Watch for dark mode preference changes
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme);
  });
  
  return {
    currentTheme,
    setTheme,
    initTheme
  };
});