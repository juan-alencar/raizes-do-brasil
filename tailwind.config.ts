import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // default colors
      "muted-foreground": "#B0AA98",

      background: "#fff",

      primary: "#009B3A",
      "primary-foreground": "#EDFFF3",

      accent: "#E7E5E0",
      "accent-foreground": "#4B483A",

      secondary: "#F8F7F5",
      "secondary-foreground": "#4B483A",
      "secondary-hover": "#D6FFE5",

      // colors
      white: "#FFFFFF",
      "gray-50": "#F8F7F5",
      "gray-100": "#E7E5E0",
      "gray-200": "#CFCAC0",
      "gray-300": "#B0AA98",
      "gray-400": "#8F8872",
      "gray-500": "#746E58",
      "gray-600": "#5C5845",
      "gray-700": "#4B483A",
      "gray-800": "#3E3C31",
      "gray-900": "#35342C",
      "gray-950": "#201F18",
      "green-50": "#EDFFF3",
      "green-100": "#D6FFE5",
      "green-200": "#AFFFCC",
      "green-300": "#71FFA6",
      "green-400": "#2DFB78",
      "green-500": "#02E556",
      "green-600": "#00BF43",
      "green-700": "#009B3A",
      "green-800": "#067530",
      "green-900": "#085F2A",
      "green-950": "#003615",
      "yellow-50": "#FEFFE7",
      "yellow-100": "#FBFFC1",
      "yellow-200": "#FCFF86",
      "yellow-300": "#FFFB41",
      "yellow-400": "#FFEE0D",
      "yellow-500": "#FEDF00",
      "yellow-600": "#D1A500",
      "yellow-700": "#A67702",
      "yellow-800": "#895C0A",
      "yellow-900": "#744B0F",
      "yellow-950": "#442804",
      "blue-50": "#E4F8FF",
      "blue-100": "#CFF0FF",
      "blue-200": "#A8E1FF",
      "blue-300": "#74CBFF",
      "blue-400": "#3EA1FF",
      "blue-500": "#1376FF",
      "blue-600": "#0064FF",
      "blue-700": "#0064FF",
      "blue-800": "#005AE4",
      "blue-900": "#003FB0",
      "blue-950": "#002776",
    },
  },
  plugins: [],
};
export default config;
