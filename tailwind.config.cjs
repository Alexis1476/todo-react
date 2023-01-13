/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            black: '#000',
            white: '#FFF',
            'primary': '#4E69F4'
        },
        extend: {},
    },
    plugins: [],
}
