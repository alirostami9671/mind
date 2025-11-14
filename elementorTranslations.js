// elementorTranslations.js

/**
 * مشابه اسکریپت وردپرسی:
 * (function(domain, translations) { ... })("elementor", {...});
 */
function elementorSetLocale(domain, translations, wp) {
    // همان منطق داخل اسکریپت
    const localeData =
        translations.locale_data[domain] || translations.locale_data.messages;

    localeData[''].domain = domain;

    wp.i18n.setLocaleData(localeData, domain);
}

module.exports = { elementorSetLocale };