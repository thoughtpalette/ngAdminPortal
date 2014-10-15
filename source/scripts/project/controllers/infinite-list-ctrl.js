angMod.controller( "InfiniteListCtrl", [ "$scope", "$rootScope", "infiniteScroll",
    function ( $scope, $rootScope, infiniteScroll )
{
    $scope.items = [];

    $scope.getListItems = function ( reload )
    {
        // Pass true as reload argument to update list
        $scope.items = new infiniteScroll( "list", reload );
    };

    // Run on Load
    $scope.getListItems();

} ] );