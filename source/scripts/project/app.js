"use strict";

/* App Configuration */

var angMod = angular.module( "vokal", [
	"ngRoute",
	"ngTouch",
	"ngSanitize",
	"vokal.filters",
	"vokal.directives",
	"angular-table",
	"ngDialog",
	"ui.mask",
	"LocalStorageModule",
	"infinite-scroll"
] );

angMod.run( function ( $rootScope, $location, Session, $http )
{

   $rootScope.$on( "$routeChangeSuccess", function ( ev, data )
   {
   		// Set body class based on controller
		if ( data.$$route && data.$$route.controller )
		{
			$rootScope.controller = data.$$route.controller;
		}

		if( Session.get.authToken() && Session.get.user() && $location.path() === "/login" ) {
			$location.path( "/list" );
		}
   });

});

angMod.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",

	function ( $routeProvider, $locationProvider, $sceDelegateProvider )
	{

		var requireUser = { User: [ "$location", "$rootScope", "$q", "API", "Session",
			function ( $location, $rootScope, $q, API, Session )
			{
				var deferred = $q.defer();

					if( Session.get.authToken() )
					{
						if( Session.get.user() )
						{
							deferred.resolve( $rootScope.user );
						}
						else
						{
							$location.path( "/login" );
						}
					}
					else
					{
						deferred.reject( "No user token" );
						$location.path( "/login" );
					}

				return deferred.promise;

			} ] };

		$routeProvider.when( "/login", { templateUrl: STATIC_PATH + "templates/login.html", controller: "LoginCtrl" } )
			.when( "/list", { templateUrl: STATIC_PATH + "templates/list.html", controller: "ListCtrl", resolve: requireUser, active: "list" } )
			.when( "/infinite-list", { templateUrl: STATIC_PATH + "templates/infinite-list.html", controller: "ListCtrl", resolve: requireUser, active: "infinite-list" } )
			.when( "/logout", { template: " ", controller: "LogoutCtrl"})
			.otherwise( { redirectTo: "/login" } );

		$locationProvider.html5Mode( true ).hashPrefix( "!" );

		$sceDelegateProvider.resourceUrlWhitelist(
			[ "self", "http://*.s3.amazonaws.com/**", "https://*.s3.amazonaws.com/**" ]
		);

	}

] );
