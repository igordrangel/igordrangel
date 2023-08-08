/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      stroke: {
        primary: '#00ACC1',
      },
      fill: {
        primary: '#00ACC1',
      },
      textColor: {
        primary: '#00ACC1',
      },
      height: {
        'home-content': 'calc(100vh - 80px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circular-light':
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #e5e7eb 5px, #e5e7eb 100px);',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
