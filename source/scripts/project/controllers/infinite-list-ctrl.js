angMod.controller( "InfiniteListCtrl", [ "$scope", "$rootScope", "infiniteScroll",
    function ( $scope, $rootScope, infiniteScroll )
{
    $scope.list = [];

    $scope.getListItems = function ( reload )
    {
        if( $scope.list && reload )
        {
        	$scope.list.reload();
        }
        else
        {
	        $scope.list = new infiniteScroll( "/users?p={page}" );
	    }
    };

    // Run on Load
    $scope.getListItems();

} ] );