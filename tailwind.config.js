module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Bebas Neue','Helvetica','Arial','sans-serif'],
        sans: ['Oswald', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'primary-background': '#e8eddf',
        'secondary-background': '#ebebeb',
        'medium-light-background': '#494e49',
        'medium-background': '#333533',
        'dark-background': '#242423',
        'medium-text': '#333533',
        'light-text': '#356735',
        'reversed-text': '#e8eddf',
        'reversed-text-alt': '#cfdbd5',
        'link-text': '#3792cb',
        'success': '#356735',
        'success-light': '#4ade80',
        'info': '#0284c7',
        'info-light': '#16a0f5',
        'caution': '#ff6700',
        'caution-light': '#fdba74',
        'error': '#BF0000',
        'error-light': '#dc2626',
        'brand-highlight': "#d4af37",
        'strava-highlight': "#FC4C02",
        'fire': "#e25822",
        'earth': "#8A360F",
        'water': "#0f5e9c",
        'air': "#16a0f5",
        'aether': "#FFFFC2",
        'health': "#A30216",
        'armor': "#242130",
        'power': "#303030",
        'recovery': "#356735",
      },
    }
  }
}