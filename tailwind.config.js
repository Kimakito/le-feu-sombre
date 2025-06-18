module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./includes/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./assets/js/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales (Bleu Roi)
        'roi': {
          primary: '#1a202c', // Un bleu très profond pour le roi (peut être blue-900 ou blue-800)
          light: '#2a4365',  // Une nuance plus claire pour les accents (peut être blue-700 ou blue-600)
        },
        // Couleurs secondaires (Touches de Feu)
        'feu': {
          primary: '#dd6b20', // Un orange profond (orange-600)
          dark: '#c53030',   // Un rouge sombre (red-700)
          light: '#f6e05e',  // Un jaune ambré (yellow-400)
        },
        // Couleurs neutres (pour le texte et les arrière-plans clairs)
        'neutre': {
          light: '#f7fafc', // Gris très clair (gray-50 ou gray-100)
          dark: '#2d3748',  // Gris foncé pour le texte (gray-800)
        },
      },
      fontFamily: {
        fell: ['"IM Fell English SC"', 'serif'],
      }
    },
  },
  plugins: [],
}