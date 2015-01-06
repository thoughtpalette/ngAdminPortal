exports.config = {

    // Protractor defaults to using the local .jar file if no seleniumAddress is given
    // Leave seleniumServerJar commented out to default to the correct version url
    // seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone",

    // The address of a running selenium server.
    seleniumAddress: "http://localhost:4444/wd/hub",

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        "browserName": "chrome"
    },

    // Prevents a full selenium start-up, much quicker, but only works with Chrome and Firefox
    directConnect: true,
    baseUrl: 'http://localhost:3000',
    rootElement: 'html',

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: [
        "tests/login-test.js",
        "tests/list-test.js"
    ],

    onPrepare: function() {
        require( "jasmine-reporters" );
        jasmine.getEnv().addReporter( new jasmine.JUnitXmlReporter( "coverage/net", true, true ) );
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function ()
    {
        require( "jasmine-reporters" );
        jasmine.getEnv().addReporter( new jasmine.JUnitXmlReporter( "coverage/net", true, true ) );
    }
};
