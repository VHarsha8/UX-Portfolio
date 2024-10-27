/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
      ],
  theme: {
    extend: {
      fontFamily: {
        'courier-prime': ['"Courier Prime"', 'monospace'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'space-mono': ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

