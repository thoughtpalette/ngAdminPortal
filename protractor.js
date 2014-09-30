// Protractor config file

exports.config = {

	// The address of a running selenium server.
	seleniumAddress: "http://localhost:4444/wd/hub",

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		"browserName": "phantomjs"
	},

	baseUrl: 'http://localhost:3000',

	rootElement: 'html',

	onPrepare: function () {
		browser.driver.manage().window().setSize(1600, 800);
	},

	files: [
		"build/angular.js"
	],

	// Spec patterns are relative to the current working directly when protractor is called.
	specs: [
		"tests/login-test.js",
		"tests/list-test.js"
	],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}

};
