"use strict";

/* App Configuration */

var angMod = angular.module( "ncadmin", [
    "ngRoute",
    "ngTouch",
    "ngSanitize",
    "nc.filters",
    "nc.directives",
    "angular-table",
    "ngDialog",
    "ui.mask",
    "LocalStorageModule"
] );

angMod.run( function ( $rootScope, $location, Session )
{
    $rootScope.$on( "$routeChangeSuccess", function ( ev, data )
    {
        // Set body class based on controller
        if ( data.$$route && data.$$route.controller )
        {
            $rootScope.controller = data.$$route.controller;
        }

        if( Session.get.authToken() && Session.get.user() && $location.path() === "/login" )
        {
            $location.path( "/list" );
        }
    } );

    toastr.options = {
        positionClass: "toast-bottom-right"
    };
} );

angMod.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",

    function ( $routeProvider, $locationProvider, $sceDelegateProvider )
    {

        var requireUser = { User: [ "$location", "$rootScope", "$q", "Session",
            function ( $location, $rootScope, $q, Session )
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

        $routeProvider
            .when( "/login", {
                templateUrl: "/build/templates/views/login.html",
                controller: "LoginCtrl"
            } )
            .when( "/list", {
                templateUrl: "/build/templates/views/list.html",
                controller: "ListCtrl",
                resolve: requireUser,
                active: "list"
            } )
            .when( "/logout", {
                template: " ",
                controller: "LogoutCtrl"
            } )
            .otherwise( { redirectTo: "/login" } );

        $locationProvider.html5Mode( true ).hashPrefix( "!" );

        $sceDelegateProvider.resourceUrlWhitelist(
            [ "self" ]
        );

    }

] );