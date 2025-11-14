// elementorConfig.test.js
const { elementorAppProConfig } = require('./elementorConfig');

describe('elementorAppProConfig', () => {
    test('آبجکت کانفیگ تعریف شده است', () => {
        expect(elementorAppProConfig).toBeDefined();
        expect(typeof elementorAppProConfig).toBe('object');
    });

    test('آدرس baseUrl درست تنظیم شده است', () => {
        expect(elementorAppProConfig.baseUrl).toBe(
            'https://mindsaz.com/wp-content/plugins/elementor-pro/'
        );
    });

    test('لینک legacy_view در site-editor درست است', () => {
        expect(elementorAppProConfig['site-editor'].urls.legacy_view).toBe(
            'https://mindsaz.com/wp-admin/edit.php?post_type=elementor_library&tabs_group=theme'
        );
    });

    test('مقادیر kit-library، onboarding و import-export آرایه خالی هستند', () => {
        expect(Array.isArray(elementorAppProConfig['kit-library'])).toBe(true);
        expect(Array.isArray(elementorAppProConfig.onboarding)).toBe(true);
        expect(Array.isArray(elementorAppProConfig['import-export'])).toBe(true);

        expect(elementorAppProConfig['kit-library'].length).toBe(0);
        expect(elementorAppProConfig.onboarding.length).toBe(0);
        expect(elementorAppProConfig['import-export'].length).toBe(0);
    });

    test('utm ها مقدار درست دارند', () => {
        const utms = elementorAppProConfig['site-editor'].utms;
        expect(utms.utm_source).toBe('theme-builder');
        expect(utms.utm_medium).toBe('wp-dash');
    });
});