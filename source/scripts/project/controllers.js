"use strict";

/* Controllers */

angular.module( "vokal.controllers", [] )


.controller( "Site", [ "$scope",

	function ( $scope )
	{
		$scope.name = "Site";
	}

] )


.controller( "Home", [ "$scope",

	function ( $scope )
	{
		$scope.name = "Home";
	}

] );
