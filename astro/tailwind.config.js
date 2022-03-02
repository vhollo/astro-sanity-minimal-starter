// tailwind.config.cjs
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  // more options here
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    //require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#52b2d6",
          "primary-content": "#ffffff",
          //neutral: "#0b3b54",
          "neutral-content": "#dfeef6",
          "base-100": "#072c3f",
          "base-content": "#dfeef6",
          "--rounded-btn": "1.75rem",
        },
      },
    ],
  },
};