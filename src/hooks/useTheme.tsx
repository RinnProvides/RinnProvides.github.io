/**
 * THEME HOOK
 * 
 * React hook for managing theme state
 */

import { useState, useEffect } from 'react';
import { getTheme, setTheme, toggleTheme as toggleThemeUtil, initializeTheme, Theme } from '@/lib/theme';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(getTheme());

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = toggleThemeUtil();
    setThemeState(newTheme);
  };

  // Change theme
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  return {
    theme,
    toggleTheme,
    changeTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
};
