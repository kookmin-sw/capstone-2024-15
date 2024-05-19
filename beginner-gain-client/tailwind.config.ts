import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: '1rem',
      xs: '1.25rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
    },
    extend: {
      colors: {
        gray: {
          '100': '#EBEBEB',
          '200': '#D9D9D9',
          '300': '#868686',
          '400': '#505050',
          '500': '#2D2D2D',
        },
        blue: {
          '100': '#C5C9DE',
          '200': '#1D349F',
          '300': '#060B21',
        },
        purple: {
          '100': '#F4F3F9',
          '200': '#D0CFE0',
          '300': '#D0B8EE',
          '400': '#3D3A7F',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
