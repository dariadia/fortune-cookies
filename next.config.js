/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public/favicon',
    register: true,
  },
  reactStrictMode: true,
})
