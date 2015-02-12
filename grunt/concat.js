module.exports = {
    index:
    {
        src: [
            "source/templates/index.html"
        ],
        dest: "build/index.html"
    },
    scripts:
    {
        src: [
            "source/scripts/project/**/*"
        ],
        dest: "build/project.js"
    },
    jquery:
    {
        src: [
            "source/components/jquery/dist/jquery.min.js",
            "source/scripts/library/jquery.cookie.js"
        ],
        dest: "build/jquery.js"
    },
    angular:
    {
        src: [
            "source/components/angular/angular.min.js",
            "source/components/angular-route/angular-route.min.js",
            "source/components/angular-touch/angular-touch.min.js",
            "source/components/angular-sanitize/angular-sanitize.min.js",
            "source/components/angular-animate/angular-animate.min.js"
        ],
        dest: "build/angular.js"
    },
    components:
    {
        src: [
            "source/components/at-table/dist/angular-table.js",
            "source/components/ngDialog/js/ngDialog.min.js",
            "source/components/angular-ui-utils/mask.min.js",
            "source/components/angular-local-storage/dist/angular-local-storage.min.js",
            "source/components/ngInfiniteScroll/build/ng-infinite-scroll.min.js",
            "source/components/toastr/toastr.min.js",
            "source/components/humps/humps.js",
            "source/components/vokal-ng-api/services_humps.js",
            "source/components/vokal-ng-api/services_API.js",
            "source/components/vokal-ng-lib/directives/*.js",
            "source/components/vokal-ng-lib/services/*.js"
        ],
        dest: "build/components.js"
    },
    styles:
    {
        src: [
            "source/styles/library/reset.css",
            "source/styles/library/vokal.css",
            "source/components/ngDialog/css/ngDialog.min.css",
            "source/components/ngDialog/css/ngDialog-theme-default.css",
            "source/components/toastr/toastr.min.css"
        ],
        dest: "build/base.css"
    }
};