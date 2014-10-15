angMod.controller( "Site", [ "$scope", "$rootScope", "$route",
    function ( $scope, $rootScope, $route )
    {
        $scope.$route = $route;
    }
] );