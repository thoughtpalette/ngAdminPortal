angMod.controller( "LogoutCtrl", [ "$location", "Session",
    function ( $location, Session )
{
        Session.destroy();
        $location.path( "/login" );
} ] );