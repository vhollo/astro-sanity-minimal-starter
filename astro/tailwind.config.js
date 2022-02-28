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
    themes: ["light", "dark"],
  },
};