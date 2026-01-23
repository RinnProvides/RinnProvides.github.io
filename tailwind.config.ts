import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors (Discord/Steam inspired)
        'game-bg': '#0a0e1a',
        'game-surface': '#1a1f2e',
        'game-surface-hover': '#252b3d',
        'game-primary': '#5865f2',
        'game-primary-hover': '#4752c4',
        'game-border': '#2c3345',
        'game-text': '#ffffff',
        'game-text-muted': '#b3b9c9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
