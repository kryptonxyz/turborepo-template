// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindConfig = require('config/tailwind.config')

module.exports = {
  ...tailwindConfig,
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/forms')],
}
