angMod.controller( "LogoutCtrl", [ "$scope", "$rootScope", "$location", "Session",
    function ( $scope, $rootScope, $location, Session )
{
        Session.destroy();
        $location.path( "/login" );
} ] );