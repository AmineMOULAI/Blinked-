import type { Config } from "tailwindcss";

const config: Config = {
  // --- C'EST ICI QUE TOUT SE JOUE ---
  // On indique à Tailwind de scanner TOUS tes fichiers dans 'src/app' et 'src/components'
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Nouveau dossier Next.js
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Dossier de tes composants
    // Si tu as un dossier 'src/ui', ajoute-le aussi :
    // './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Tu pourras ajouter tes personnalisations (couleurs, polices) ici plus tard
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;