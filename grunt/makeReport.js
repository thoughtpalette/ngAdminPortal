module.exports = {
    src: "coverage/**/*.json",
    options: {
        type: [ "cobertura", "html" ],
        dir: "coverage/net",
        print: "detail"
    }
};