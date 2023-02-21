

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        colors: {
            'primary': 'rgb(24 24 27)',
            'secondary': '#5B5B5B',
            'blue': '#335AA3',
            'green': 'rgb(94 234 212)',
            'white': '#ffffff',
            'grey': '#EBEFF6',
            'red': 'rgb(248 113 113)',
            'yellow': '#FFBF00',

        },
       
        plugins: [],
    }
})
