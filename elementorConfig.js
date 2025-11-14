// elementorConfig.js
const elementorAppProConfig = {
    baseUrl: 'https://mindsaz.com/wp-content/plugins/elementor-pro/',
    'site-editor': {
        urls: {
            legacy_view: 'https://mindsaz.com/wp-admin/edit.php?post_type=elementor_library&tabs_group=theme',
        },
        utms: {
            utm_source: 'theme-builder',
            utm_medium: 'wp-dash',
        },
    },
    'kit-library': [],
    onboarding: [],
    'import-export': [],
};

module.exports = { elementorAppProConfig };