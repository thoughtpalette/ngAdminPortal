var replacements = [
        {
            from: "{{ VERSION }}",
            to: "<%= version %>"
        },
        {
            from: "{{ API_PATH }}",
            to: "<%= api %>"
        }
    ];

module.exports = {
    js: {
        src: [ "build/*.css", "build/*.js", "build/**/*.html" ],
        overwrite: true,
        replacements: replacements
    }
};