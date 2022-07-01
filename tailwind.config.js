/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,tx,tsx}"],
    daisyui: {
        themes: [
            {
                minerva: {
                    "primary": "#2F3378",
                    "secondary": "#4C54C4",
                    "accent": "#37CDBE",
                    "neutral": "#17183B",
                    "base-100": "#FFFFFF",
                    "info": "#4B8FB8",
                    "success": "#5ACEB4",
                    "warning": "#FBC337",
                    "error": "#FF4747",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
