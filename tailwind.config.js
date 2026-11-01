const config = {
    darkMode: 'class',
    content: ['./index.html', './script.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                serif: ['"Instrument Serif"', 'serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}

if (typeof tailwind !== 'undefined') {
    tailwind.config = config;
}
