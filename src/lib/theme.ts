/**
 * THEME SYSTEM - Dark/Light Mode Management
 * 
 * Store and retrieve user's theme preference
 */

const THEME_KEY = 'rinnxus_theme';

export type Theme = 'dark' | 'light';

// Get current theme
export const getTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    // Default to dark theme
    return 'dark';
  } catch (error) {
    console.error('Error reading theme:', error);
    return 'dark';
  }
};

// Set theme
export const setTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  } catch (error) {
    console.error('Error saving theme:', error);
  }
};

// Apply theme to document
export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  
  if (theme === 'light') {
    root.classList.add('light-mode');
  } else {
    root.classList.remove('light-mode');
  }
};

// Toggle theme
export const toggleTheme = (): Theme => {
  const currentTheme = getTheme();
  const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
};

// Initialize theme on app load
export const initializeTheme = (): void => {
  const theme = getTheme();
  applyTheme(theme);
};
