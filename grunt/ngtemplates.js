"use strict";

module.exports = {
    options: {
        module: "ncadmin",
        prefix: "/<%= pkg.buildPath %>",
        htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: false,
            removeAttributeQuotes: false,
            removeComments: true, // Only if you don't use comment directives!
            removeEmptyAttributes: false,
            removeRedundantAttributes: false,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    },
    build: {
        src: [ "templates/views/*.html", "templates/partials/*.html" ],
        dest: "<%= pkg.buildPath %>/templates.js",
        cwd: "<%= pkg.appPath %>"
    }
};