"use strict";

/* App Configuration */

angular.module( "vokal", [
	"ngRoute",
	"ngTouch",
	"ngSanitize",
	"ngAnimate",
	"vokal.filters",
	"vokal.services",
	"vokal.directives",
	"vokal.controllers"
] )

.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",

	function ( $routeProvider, $locationProvider, $sceDelegateProvider )
	{
		$routeProvider.when( "/", { templateUrl: STATIC_PATH + "templates/home.html", controller: "Home" } );
		$routeProvider.otherwise( { redirectTo: "/" } );
	
		$locationProvider.html5Mode( true ).hashPrefix( "!" );
	
		$sceDelegateProvider.resourceUrlWhitelist(
			[ "self", "http://*.s3.amazonaws.com/**", "https://*.s3.amazonaws.com/**" ]
		);
	
	}

] );
