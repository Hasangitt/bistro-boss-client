import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "description-bg" : "url('../../../assets/home/chef-service.jpg')"
      }
    },
  },
  plugins: [daisyui],
}

