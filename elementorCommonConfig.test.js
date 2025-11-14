// elementorCommonConfig.test.js
const { elementorCommonConfig } = require('./elementorCommonConfig');

describe('elementorCommonConfig', () => {
    test('کانفیگ به درستی تعریف شده است', () => {
        expect(elementorCommonConfig).toBeDefined();
        expect(typeof elementorCommonConfig).toBe('object');
    });

    test('نسخه المنتور با مقدار انتظار ما یکی است', () => {
        expect(elementorCommonConfig.version).toBe('3.16.5'); // این باید PASS شود
    });


    test('برای امنیت، آپلود فایل‌های فیلترنشده باید غیرفعال باشد (مثال تست Fail)', () => {

        expect(elementorCommonConfig.filesUpload.unfilteredFiles).toBe(true);
    });
});