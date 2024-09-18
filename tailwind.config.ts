import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["var(--font-poppins)"],
                mono: ["var(--font-roboto-mono)"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
    important: true,
};
export default config;
