// ES Module এর জন্য CommonJS এর পরিবর্তে Export ব্যবহার করো:
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       'inter': ["Inter", 'serif'],
        'ranacho': ["Rancho", 'serif']
      },
    },
  },
  plugins: [daisyui],
};
