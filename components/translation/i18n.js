const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["cy", "en"],
  localeSubpaths: {
    cy: "cy",
    en: "en",
  },
});

module.exports = NextI18NextInstance;

/* Optionally, export class methods as named exports */
// export const {
//   appWithTranslation,
//   withTranslation,
// } = NextI18NextInstance
