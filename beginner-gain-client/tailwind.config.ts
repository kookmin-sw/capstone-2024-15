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
    colors: {
      'blue100': 'C5C9DE',
      'blue200': '1D349F',
      'blue300': '060B21',
      'purple100': 'F4F3F9',
      'purple200': 'D0CFE0',
      'purple300': 'D0B8EE',
      'purple400': '3D3A7F',
      'gray100': 'EBEBEB',
      'gray200': 'D9D9D9',
      'gray300': '868686',
      'gray400': '505050',
      'gray500': '2D2D2D',
    },
    extend: {
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
