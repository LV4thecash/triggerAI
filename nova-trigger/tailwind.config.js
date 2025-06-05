export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F1B',
        primary: '#8A2BE2',
        secondary: '#00FFFF',
        tertiary: '#FF0080',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 15px rgba(138, 43, 226, 0.7)',
        depth: '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
      letterSpacing: {
        wider2: '0.05em',
      },
    },
  },
  plugins: [],
};
