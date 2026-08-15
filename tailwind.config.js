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
        duck:    '#E7C78A', // Amarillo Patito — accents / chips / underline (not CTA)
        terra:   '#A35C3D', // Rojo Tierra — headings + all primary CTAs
        moss:    '#818267', // Verde Musgo — meta text
        rosa:    '#EADBDD', // Rosa Polvo — soft section background
        celeste: '#C3CDD2', // Celeste — brand palette only, NOT a section background
        arena:   '#C6BDA0', // Arena — brand palette only, NOT a section background
        beige:   '#DCD4C8', // brand palette only, NOT a section background
        card:    '#FFFDF8', // card surface
        line:    '#E6DFD3', // card / divider border
        muted:   '#5F5A4E', // secondary body text
      },
      fontFamily: {
        // Body text everywhere.
        sans: ['"Assistant"', 'system-ui', '-apple-system', 'sans-serif'],
        hebrew: ['"Assistant"', 'system-ui', 'sans-serif'],
        // Headings. Hebrew counterpart of the brand book's Coustard.
        display: ['"Frank Ruhl Libre"', 'Georgia', 'serif'],
        // Short handwritten kickers ONLY, never paragraphs.
        // Both names kept: machines with the font installed locally resolve the long one.
        script: ['"Gveret Levin"', '"Gveret Levin AlefAlefAlef"', '"Assistant"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
