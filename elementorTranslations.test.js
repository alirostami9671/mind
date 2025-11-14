// elementorTranslations.test.js
const { elementorSetLocale } = require('./elementorTranslations');

describe('elementorSetLocale', () => {
    test('از locale_data.messages به عنوان fallback استفاده می‌کند و setLocaleData را درست صدا می‌زند', () => {
        const translations = {
            'translation-revision-date': '2023-10-13 01:17:57+0000',
            generator: 'GlotPress/4.0.0-alpha.9',
            domain: 'messages',
            locale_data: {
                messages: {
                    '': {
                        domain: 'messages',
                        'plural-forms': 'nplurals=1; plural=0;',
                        lang: 'fa',
                    },
                    'Enable': ['فعال‌سازی'],
                    'Cancel': ['انصراف'],
                },
            },
            comment: {
                reference: 'assets/js/common.js',
            },
        };

        // wp فیک با متد ستLocaleData به صورت mock
        const fakeWp = {
            i18n: {
                setLocaleData: jest.fn(),
            },
        };

        // domain واقعی اسکریپت
        const domain = 'elementor';

        elementorSetLocale(domain, translations, fakeWp);

        // ۱) باید localeData[""].domain برابر domain جدید شود
        const localeDataSent = fakeWp.i18n.setLocaleData.mock.calls[0][0];
        const domainSent = fakeWp.i18n.setLocaleData.mock.calls[0][1];

        expect(localeDataSent[''].domain).toBe(domain);
        expect(domainSent).toBe(domain);

        // ۲) باید از translations.locale_data.messages استفاده شده باشد
        // چون translations.locale_data['elementor'] وجود ندارد
        expect(localeDataSent).toBe(translations.locale_data.messages);

        // ۳) مطمئن شو که خود setLocaleData دقیقاً یک بار صدا شده
        expect(fakeWp.i18n.setLocaleData).toHaveBeenCalledTimes(1);
    });
});