const THEMES = {
    win95: {
        termBg: '#000080',
        termFg: '#ffffff',
        termHighlight: '#ffff00',
        termSelect: '#c0c0c0',
        termAccent: '#00ffff'
    },
    ubuntu: {
        termBg: '#2d0922',
        termFg: '#ffffff',
        termHighlight: '#ff7f00',
        termSelect: '#ff4400',
        termAccent: '#cc00ff'
    },
    rainbow: {
        termBg: '#1a1a1a',
        termFg: '#ffffff',
        termHighlight: '#00ff00',
        termSelect: '#ff00ff',
        termAccent: '#ff0000'
    },
    darkMode: {
        termBg: '#121212',
        termFg: '#e0e0e0',
        termHighlight: '#00bcd4',
        termSelect: '#333333',
        termAccent: '#bb86fc'
    },
    lightMode: {
        termBg: '#ffffff',
        termFg: '#000000',
        termHighlight: '#ff4081',
        termSelect: '#eeeeee',
        termAccent: '#6200ee'
    },
    retro: {
        termBg: '#4b0082',
        termFg: '#ffeb3b',
        termHighlight: '#ff5722',
        termSelect: '#00bcd4',
        termAccent: '#8bc34a'
    },
    solarizedDark: {
        termBg: '#002b36',
        termFg: '#839496',
        termHighlight: '#d33682',
        termSelect: '#586e75',
        termAccent: '#268bd2'
    },
    solarizedLight: {
        termBg: '#fdf6e3',
        termFg: '#657b83',
        termHighlight: '#2aa198',
        termSelect: '#eee8d5',
        termAccent: '#b58900'
    },
    cyberpunk: {
        termBg: '#1a1a1a',
        termFg: '#00ff99',
        termHighlight: '#ff00cc',
        termSelect: '#ff5733',
        termAccent: '#ff00ff'
    },
    ocean: {
        termBg: '#002f3f',
        termFg: '#e0f7fa',
        termHighlight: '#00796b',
        termSelect: '#004d40',
        termAccent: '#0097a7'
    },
    forest: {
        termBg: '#2e8b57',
        termFg: '#f5fffa',
        termHighlight: '#ff6347',
        termSelect: '#228b22',
        termAccent: '#adff2f'
    },
    vaporwave: {
        termBg: '#ff6f61',
        termFg: '#ffffff',
        termHighlight: '#ad00ff',
        termSelect: '#7b00ff',
        termAccent: '#ff0000'
    },
    midnight: {
        termBg: '#2c3e50',
        termFg: '#ecf0f1',
        termHighlight: '#f39c12',
        termSelect: '#34495e',
        termAccent: '#1abc9c'
    },
    pastel: {
        termBg: '#f6e3e7',
        termFg: '#3b3a3a',
        termHighlight: '#ffb3ba',
        termSelect: '#b0e0e6',
        termAccent: '#ffb347'
    },
    lava: {
        termBg: '#ff4500',
        termFg: '#ffffff',
        termHighlight: '#ff6347',
        termSelect: '#c0c0c0',
        termAccent: '#ff0000'
    },
    mint: {
        termBg: '#98ff98',
        termFg: '#000000',
        termHighlight: '#4caf50',
        termSelect: '#388e3c',
        termAccent: '#81c784'
    },
    sky: {
        termBg: '#87ceeb',
        termFg: '#ffffff',
        termHighlight: '#ffb6c1',
        termSelect: '#add8e6',
        termAccent: '#4682b4'
    },
    neon: {
        termBg: '#0a0a0a',
        termFg: '#39ff14',
        termHighlight: '#ff00ff',
        termSelect: '#ff007f',
        termAccent: '#00bfff'
    },
    acid: {
        termBg: '#000000',
        termFg: '#39ff14',
        termHighlight: '#ff00ff',
        termSelect: '#ff00b3',
        termAccent: '#00bfff'
    },
    autumn: {
        termBg: '#ff8c00',
        termFg: '#ffffff',
        termHighlight: '#a52a2a',
        termSelect: '#d2691e',
        termAccent: '#ff4500'
    },
    grayscale: {
        termBg: '#212121',
        termFg: '#e0e0e0',
        termHighlight: '#757575',
        termSelect: '#424242',
        termAccent: '#bdbdbd'
    },
    mintyFresh: {
        termBg: '#d8f3dc',
        termFg: '#2f4f4f',
        termHighlight: '#98c5e7',
        termSelect: '#accbe1',
        termAccent: '#5f6368'
    },
    roseGold: {
        termBg: '#b76e79',
        termFg: '#f4d6cc',
        termHighlight: '#ffb6b9',
        termSelect: '#8b1e3f',
        termAccent: '#d295a5'
    },
    retroFuture: {
        termBg: '#001f3d',
        termFg: '#ff8c42',
        termHighlight: '#d81b60',
        termSelect: '#4a148c',
        termAccent: '#00bcd4'
    },
    techno: {
        termBg: '#121212',
        termFg: '#0f0f0f',
        termHighlight: '#00ff00',
        termSelect: '#3e3e3e',
        termAccent: '#ff00ff'
    },
    joker: {
        termBg: '#000000',
        termFg: '#7f00ff',
        termHighlight: '#ffbf00',
        termSelect: '#800000',
        termAccent: '#00ff00'
    },
    twilight: {
        termBg: '#0c2340',
        termFg: '#aab7b8',
        termHighlight: '#ff3366',
        termSelect: '#212f3d',
        termAccent: '#f39c12'
    },
    desert: {
        termBg: '#e2c58f',
        termFg: '#2f3b3d',
        termHighlight: '#d4a5a5',
        termSelect: '#f1c27d',
        termAccent: '#9c735b'
    },
    seafoam: {
        termBg: '#2d4f3f',
        termFg: '#e3f6f5',
        termHighlight: '#3b9e9d',
        termSelect: '#c3d8c5',
        termAccent: '#f1d8a5'
    },
    bubblegum: {
        termBg: '#ff69b4',
        termFg: '#ffffff',
        termHighlight: '#e0c4e7',
        termSelect: '#c0c0c0',
        termAccent: '#d0a1e8'
    },
    snowstorm: {
        termBg: '#d3f0f8',
        termFg: '#000000',
        termHighlight: '#00bcd4',
        termSelect: '#c8e6c9',
        termAccent: '#f44336'
    },
    charcoal: {
        termBg: '#424242',
        termFg: '#b0bec5',
        termHighlight: '#f4511e',
        termSelect: '#1c313a',
        termAccent: '#039be5'
    },
    fiery: {
        termBg: '#ff3b30',
        termFg: '#ffffff',
        termHighlight: '#ff9500',
        termSelect: '#c7c7c7',
        termAccent: '#ffcc00'
    },
    jungle: {
        termBg: '#00574b',
        termFg: '#e6f2f0',
        termHighlight: '#fbb917',
        termSelect: '#00695c',
        termAccent: '#ffddc1'
    },
    lime: {
        termBg: '#b2ff59',
        termFg: '#424242',
        termHighlight: '#ff8f00',
        termSelect: '#9e9e9e',
        termAccent: '#00bcd4'
    },
    ultraviolet: {
        termBg: '#5c4d7d',
        termFg: '#ffb6c1',
        termHighlight: '#c2185b',
        termSelect: '#9c27b0',
        termAccent: '#8e24aa'
    },
    amethyst: {
        termBg: '#9b59b6',
        termFg: '#ecf0f1',
        termHighlight: '#f1c40f',
        termSelect: '#8e44ad',
        termAccent: '#2ecc71'
    },
    mintChoco: {
        termBg: '#d1e8e2',
        termFg: '#3d3d3d',
        termHighlight: '#ffed66',
        termSelect: '#56b3a9',
        termAccent: '#7d8d8f'
    },
    aurora: {
        termBg: '#e63946',
        termFg: '#ffffff',
        termHighlight: '#f1faee',
        termSelect: '#a8dadc',
        termAccent: '#1d3557'
    },
    pumpkinSpice: {
        termBg: '#e27d60',
        termFg: '#3b3a36',
        termHighlight: '#f9c74f',
        termSelect: '#e8f5e9',
        termAccent: '#264653'
    }
};
