// elementorCommonConfig.js
const elementorCommonConfig = {
    version: '3.16.5',
    isRTL: true,
    isDebug: false,
    isElementorDebug: false,
    activeModules: ['ajax', 'finder', 'connect', 'event-tracker'],
    experimentalFeatures: {
        e_dom_optimization: true,
        e_optimized_assets_loading: true,
        e_optimized_css_loading: true,
        container: true,
        e_swiper_latest: true,
        theme_builder_v2: true,
        'hello-theme-header-footer': true,
        'landing-pages': true,
        'nested-elements': true,
        e_global_styleguide: true,
        'page-transitions': true,
        notes: true,
        loop: true,
        'form-submissions': true,
        e_scroll_snap: true,
        'mega-menu': true,
    },
    urls: {
        assets: 'https://mindsaz.com/wp-content/plugins/elementor/assets/',
        rest: 'https://mindsaz.com/wp-json/',
    },
    filesUpload: {
        // دقت کن: این طبق اسکریپت اصلی true است
        unfilteredFiles: true,
    },
    ajax: {
        url: 'https://mindsaz.com/wp-admin/admin-ajax.php',
        nonce: 'deb1bf6562',
    },
};

module.exports = { elementorCommonConfig };