// @ts-check
/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'hi', 'ja', 'pt', 'bn', 'de'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
  localePath: 'i18n',
};
