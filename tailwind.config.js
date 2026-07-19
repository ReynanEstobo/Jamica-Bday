/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-soft': '#e8cd7a',
        crimson: '#7A0019',
        'crimson-deep': '#4a0010',
        ink: '#121212',
        beige: '#F3ECDA',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
        vibes: ['Great Vibes', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-115vh) translateX(20px) scale(0.4)', opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        eqBounce: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '14px' },
        },
        zoomAway: {
          to: { transform: 'scale(6)', opacity: '0' },
        },
      },
      animation: {
        rise: 'rise 14s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        eqBounce: 'eqBounce 1s ease-in-out infinite',
        zoomAway: 'zoomAway 1.4s cubic-bezier(0.6,0.05,0.2,1) forwards',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.2,0.6,0.2,1)',
        envelope: 'cubic-bezier(0.6,0.05,0.2,1)',
      },
      boxShadow: {
        glass: '0 10px 40px rgba(0,0,0,.35)',
        gold: '0 10px 30px rgba(212,175,55,.3)',
        'gold-lg': '0 16px 40px rgba(212,175,55,.5)',
        seal: '0 4px 10px rgba(0,0,0,.5), inset 0 0 12px rgba(0,0,0,.4)',
        envelope: '0 30px 60px rgba(0,0,0,.6), 0 0 60px rgba(212,175,55,.15)',
        item: '0 20px 50px rgba(212,175,55,.18)',
      },
    },
  },
  plugins: [],
}
