module.exports = function ( grunt )
{
	"use strict";

	grunt.registerTask( "envDev", "Set environment variables for production", function()
	{
		grunt.config( "APIRoot", "/path/to/api" );

	} );
};
