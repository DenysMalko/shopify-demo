/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./theme/sections/product-list.liquid'],
  important: '[data-product-list]',
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '1' }],
      '6xl': ['60px', { lineHeight: '1' }],
      '7xl': ['72px', { lineHeight: '1' }],
      '8xl': ['96px', { lineHeight: '1' }],
      '9xl': ['128px', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        primary: '#0A4874',
        borders: '#e8e8e8',
        sale: '#FF0000',
        title: '#111111',
      },
      fontFamily: {
        sans: ['var(--font-body-family)', 'Arial', 'sans-serif'],
        franklin: ['Franklin Gothic ATF', 'Arial', 'sans-serif'],
      },
    },
  },
};
