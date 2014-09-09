module.exports = {
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
	angularTable:
	{
		src: [
			"source/components/at-table/dist/angular-table.js"
		],
		dest: "build/angular-table.js"
	},
	angularDialog:
	{
		src: [
			"source/components/ngDialog/js/ngDialog.min.js"
		],
		dest: "build/ng-dialog.min.js"
	},
    angularMask:
    {
        src: [
            "source/components/angular-ui-utils/mask.min.js"
        ],
        dest: "build/angular-mask.js"
    },
    ngLocalStorage: {
        src: [
            "source/components/angular-local-storage/angular-local-storage.js"
        ],
        dest: "build/angular-local-storage.js"
    },
	styles:
	{
		src: [
			"source/styles/library/reset.css",
			"source/styles/library/vokal.css",
			"source/components/ngDialog/css/ngDialog.min.css",
			"source/components/ngDialog/css/ngDialog-theme-default.css"
		],
		dest: "build/base.css"
	}
};