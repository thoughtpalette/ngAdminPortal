"use strict";

/* Services */

var svcMod = angular.module( "vokal.services", [] );

svcMod.service( "Session", ["localStorageService", "$rootScope", "$location", "$http",
    function ( localStorageService, $rootScope, $location, $http )
{
    this.create = function ( user )
    {
        // Set Globals for API service
        $rootScope.authToken = user.auth_token;
        $rootScope.user = user;

        // Local Storage Session management
        localStorageService.set( "authToken", user.auth_token );
        localStorageService.set( "user.role_id", user.role_id );
        localStorageService.set( "user.phone_number", user.phone_number );
        localStorageService.set( "user.email", user.email );
        localStorageService.set( "user.role", user.role );

        // Redirect to list on session create
        $location.path( "/list" );
    };

    this.get = {

        authToken: function () {
            return localStorageService.get( "authToken" );
        },

        user: function () {
            return {
                role_id: localStorageService.get( "user.role_id" ),
                phone_number: localStorageService.get( "user.phone_number" ),
                email: localStorageService.get( "user.email" ),
                role: localStorageService.get( "user.role" )
            }
        }

    };

    this.destroy = function ()
    {
        $rootScope.authToken = null;
        $rootScope.user = null;
        localStorageService.clearAll();
    };

    return this;
} ] );


svcMod.service( "UrlHelper", [
    function ()
{
    var urlHelper = {};
    var pathRoot = "/v1";

    urlHelper.clientToken = {
        get: function () { return "/v1/token"; }
    };

    urlHelper.login = function () {
    	return pathRoot + "/v1/user/login";
    };

    urlHelper.customer =  {
        create: function () { return pathRoot + "/v1/customer/register"; },
        getList: function () { return pathRoot + "/v1/customer"; },
        getSingle: function () { return pathRoot + "/v1/customer/"; },
        update: function () { return pathRoot + "/v1/customer/"; },
        updatePassword: function () { return pathRoot + "/v1/user/reset_password"; },
        resetPassword: function () { return pathRoot + "/v1/reset_password"},
        delete: function () { return pathRoot + "/v1/customer/"; },
        refund: function () { return pathRoot + "/v1/customer/refund/"; },
        getHistory: function () { return pathRoot + "/v1/customer/history/" }
    };

    urlHelper.company = {
        create: function () { return pathRoot + "/v1/valet/register"; },
    	getList: function () { return pathRoot + "/v1/valet"; },
        update: function () { return pathRoot + "/v1/valet/"; },
        delete: function () { return pathRoot + "/v1/valet/"; }
    };

    return urlHelper;

} ] );

// Check for and attach token on all API requests
svcMod.factory( "API", [ "$http", "$rootScope", "$location", "$q", "Session",

	function ( $http, $rootScope, $location, $q, Session )
	{
		var apiRequest = function( method, path, requestData )
		{
			var headers = { "AUTHORIZATION": "Token " + Session.get.authToken() };
			var options = { method: method, url: path, headers: headers, data: requestData || {} };

			if( method == "postFile" )
			{
				headers[ "Content-Type" ] = undefined;  // To ensure multipart boundary is added
				options.method            = "post";
				options.headers           = headers;
				options.transformRequest  = angular.identity;
			}

			var callbacks   = {};
			var canceler    = $q.defer();
			options.timeout = canceler.promise;

			$http( options ).success( function ( data, status, headers, config )
			{
				if( callbacks.success ) { callbacks.success( data, status, headers, config ); }

			} ).error( function ( data, status, headers, config )
			{
				if( status == 401 || status == 403 )
				{
					var loginPath = "/login/";

					if( $location.path() != loginPath )
					{
						$location.path( loginPath );
						return;
					}
				}

				if( callbacks.error ) { callbacks.error( data, status, headers, config ); }

			} );

			var methods = {

				$cancel: function ()
				{
					canceler.resolve( "Request canceled" );
				},
				success: function ( callback )
				{
					callbacks.success = callback;
					return methods;
				},
				error: function ( callback )
				{
					callbacks.error = callback;
					return methods;
				}
			};

			return methods;
		};

		return {
			$get:      function( path ) {              return apiRequest( "get", path, {} ); },
			$post:     function( path, requestData ) { return apiRequest( "post", path, requestData ); },
			$postFile: function( path, requestData ) { return apiRequest( "postFile", path, requestData ); },
			$put:      function( path, requestData ) { return apiRequest( "put", path, requestData ); },
			$patch:    function( path, requestData ) { return apiRequest( "patch", path, requestData ); },
			$delete:   function( path ) {              return apiRequest( "delete", path, {} ); }
		};

	}

] );
