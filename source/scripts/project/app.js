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

angMod.run( [ "$rootScope", "$location", "Session",
    function ( $rootScope, $location, Session )
    {
        $rootScope.$on( "$routeChangeStart", function ( e, next )
        {
            next.resolve = angular.extend( next.resolve || {}, {
                User: Session.routeAuth
            } );
        } );
        $rootScope.$on( "$routeChangeSuccess", function ( e, data )
        {
            // Set body class based on controller
            $rootScope.controller = data.$$route && data.$$route.controller;

            if( Session.get.authToken() && Session.get.user() && $location.path() === "/login" ) {
                $location.path( "/list" );
            }
       } );
    } 
] );

angMod.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",
    function ( $routeProvider, $locationProvider, $sceDelegateProvider )
    {
        $routeProvider
            .when( "/login", {
                templateUrl: STATIC_PATH + "build/templates/login.html",
                controller: "LoginCtrl"
            } )
            .when( "/list", {
                templateUrl: STATIC_PATH + "build/templates/list.html",
                controller: "ListCtrl",
                active: "list"
            } )
            .when( "/infinite-list", {
                templateUrl: STATIC_PATH + "build/templates/infinite-list.html",
                controller: "InfiniteListCtrl",
                active: "infinite-list"
            } )
            .when( "/logout", {
                template: "",
                controller: "LogoutCtrl"
            } )
            .otherwise( { redirectTo: "/login" } );

        $locationProvider.html5Mode( true ).hashPrefix( "!" );

        $sceDelegateProvider.resourceUrlWhitelist(
            [ "self", "http://*.s3.amazonaws.com/**", "https://*.s3.amazonaws.com/**" ]
        );
    }
] );
