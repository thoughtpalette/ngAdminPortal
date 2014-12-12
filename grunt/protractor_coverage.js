module.exports = {
    options: {
        keepAlive: true,
        noColor: false,
        coverageDir: "coverage/protractor",
        args: {
            baseUrl: "http://localhost:3000"
        }
    },
    targets: {
        options: {
            configFile: "protractor-config.js"
        }
    }
};