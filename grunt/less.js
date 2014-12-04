module.exports = {
    build:
    {
        options: {
            rootpath: "<%= pkg.staticPath %>"
        },
        files: {
            "build/project.css": "source/styles/project/main.less"
        }
    }
};