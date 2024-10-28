/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
      ],
  theme: {
   
    extend: {
      colors: {
        glass: 'rgba(225, 225, 225, 0.1)', // Adding a glass-like color
        primary: '#1A202C',   // Example custom color
        secondary: '#2D3748', // Another custom color
        accent: '#4A5568',    // Accent color
      },
      animation:{
            "loop-scroll" : "loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll" :{
          from:{transform: "translateX(0)"},
          to:{transform: "translateX(-100%)"},
        }
      },
      fontFamily: {
        'courier-prime': ['"Courier Prime"', 'monospace'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'space-mono': ['"Space Mono"', 'monospace'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

