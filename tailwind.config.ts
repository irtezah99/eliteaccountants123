import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pak: {
          green: "#0f5132",
          "green-dark": "#0a3d25",
          "green-light": "#1c7a4f",
          cream: "#faf7f0",
          sand: "#f0ead9",
          gold: "#c9932e",
          charcoal: "#242220",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(15, 81, 50, 0.08)",
        cardHover: "0 8px 24px rgba(15, 81, 50, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
