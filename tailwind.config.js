/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mimo palette
        cream:   '#FAF8F4', // page background (light warm off-white)
        ink:     '#3A352E', // body text (deep warm brown)
        duck:    '#E7C78A', // Amarillo Patito — primary accent / buttons
        terra:   '#A35C3D', // Rojo Tierra — strong CTA / heading accent
        moss:    '#818267', // Verde Musgo — secondary / nature accent
        rosa:    '#EADBDD', // Rosa Polvo — soft section background
        celeste: '#C3CDD2', // Celeste — soft section background
        arena:   '#C6BDA0', // Arena — neutral cards / bands
        beige:   '#DCD4C8', // base neutral
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
        hebrew: ['"Heebo"', '"Assistant"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
