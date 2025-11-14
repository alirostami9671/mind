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

    // 🔴 تستی که عمداً قرار است FAIL شود:
    test('برای امنیت، آپلود فایل‌های فیلترنشده باید غیرفعال باشد (مثال تست Fail)', () => {
        // در اسکریپت اصلی unfilteredFiles = true است
        // اما ما اینجا انتظار false داریم، پس این تست Fail می‌شود
        expect(elementorCommonConfig.filesUpload.unfilteredFiles).toBe(true);
    });
});