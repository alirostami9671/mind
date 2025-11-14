// utils.js
function isValidEmail(email) {
    if (typeof email !== 'string') return false;

    // وجود @
    if (!email.includes('@')) return false;

    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const localPart = parts[0];
    const domainPart = parts[1];

    // قبل از @ خالی نباشه
    if (localPart.length === 0) return false;

    // بعد از @ حداقل یه نقطه داشته باشه (مثل gmail.com)
    if (!domainPart.includes('.')) return false;

    return true;
}

module.exports = { isValidEmail };