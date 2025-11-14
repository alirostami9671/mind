// utils.test.js
const { isValidEmail } = require('./utils');

test('Email is TRUE', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
});

test('Email not containt @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
});

test('Email field is EMPTY', () => {
    expect(isValidEmail('')).toBe(false);
});

test('Email Domin not contain . (dot)', () => {
    expect(isValidEmail('test@example')).toBe(false);
});