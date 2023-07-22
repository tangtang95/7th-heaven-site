/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            /* color-theme: https://realtimecolors.com/?colors=f8fbfb-090f10-364463-100a09-4392A4 */
            colors: {
                white: '#F8FBFB',
                black: '#090F10',
                primary: '#364463',
                secondary: '#100A09',
                accent: '#4392A4'
            }
        }
    },
    plugins: []
};
