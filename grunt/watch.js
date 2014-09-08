module.exports = {
	jshint:
	{
		files: "<%= jshint.all.src %>",
		tasks: [ "jshint" ]
	},
	scripts:
	{
		files: [
			"source/scripts/project/*"
		],
		tasks: [ "concat:scripts" ]
	},
	styles:
	{
		files: [
			"source/styles/project/*"
		],
		tasks: [ "less:dev" ]
	}
};