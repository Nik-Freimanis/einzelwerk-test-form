/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'var(--inter)',
      },
      colors: {
        'transparent-white': 'rgba(255, 255, 255, 0.4)',

        'red-500': '#FF2525',
        'blue-600': '#4F46E5',
        'grey-100': '#F3F4F6',
        'grey-200': '#E5E7EB',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'grey-700': '#374151',
        'grey-950': '#030712',
      }
    },
    screens: {
      'mob': {min: '0px', max: '767px'},
      'pc': {min: '768px'},
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}