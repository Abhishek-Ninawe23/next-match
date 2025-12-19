import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'dark-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
            }
        },
    },
    plugins: [heroui()],
};
