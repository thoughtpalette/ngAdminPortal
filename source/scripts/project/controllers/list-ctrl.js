angMod.controller( "ListCtrl", [ "$scope", "$rootScope", "$filter", "ngDialog", "UrlHelper", "API",
    function ( $scope, $rootScope, $filter, ngDialog, UrlHelper, API )
    {
        // angular-table config
        $scope.config = {
            itemsPerPage: 8,
            fillLastPage: true
        };

        $scope.list = [];

        $scope.getList = function () {
            API.$get( UrlHelper.company.getList(), { } )
            .success( function ( data )
                // Set Table data here
                $scope.list = data.results;
                $scope.updateFilteredList();
            })
            .error( function ( data ) {
                console.warn( "Oops, there was an issue retrieving list" );
            });
        };

        // Mock Object
        $scope.list = [{id: "1", name: "John Smith", email: "jsmith@gmail.com", phoneNumber: "1234567890", address: {street: "123 S. Michigan", city: "Chicago", state: "IL", postalCode: "60654"} }, {id: "2", name: "Maggie Knight", email: "mknight@gmail.com", phoneNumber: "1234567890", address: {street: "1 Dearborn", city: "Chicago", state: "IL", postalCode: "60654"} }, {id: "3", name: "Drew Gold", email: "dgold@gmail.com", phoneNumber: "1234567890", address: {street: "5050 Winona Apt 1", city: "Chicago", state: "IL", postalCode: "60654"} }, {id: "4", name: "Kim Jones", email: "wings@gmail.com", phoneNumber: "1234567890", address: {street: "45th S. Broadway", city: "Chicago", state: "IL", postalCode: "60654"} }, {id: "5", name: "David Gorecki", email: "dg@gmail.com", phoneNumber: "1234567890", address: {street: "435 W. Erie", city: "Chicago", state: "IL", postalCode: "60654"} } ];

        $scope.originalList = $scope.list;

        $scope.filteredList = $scope.originalList;

        $scope.updateFilteredList = function() {
            $scope.filteredList = $filter( "filter" )( $scope.list, $scope.query );
        };

        $scope.openEditForm = function ( item ) {
            $scope.item = item;

            ngDialog.open(
                {
                    template: "templates/partials/list-view-detail.html",
                    className: "ngdialog-theme-default item-form",
                    scope: $scope
                }
            );
        };

        $scope.updateItem = function ( item ) {

                API.$put( UrlHelper.company.update() + item.id,
                    {
                        // Fields unknown for now
                    }
                )
                .success( function ( data ) {
                    $scope.getList();
                })
                .error( function ( data ) {
                    console.warn( "Oops, there was a problem updating the item" );
                });
        };

        $scope.addNewItem = function ( item ) {
            API.$post( UrlHelper.company.create(),
                {
                    // Fields unknown for now
                }
            )
            .success( function ( data ) {
                $scope.getList();
            })
            .error( function ( data ) {
                console.warn( "Oops, there was an issue creating the item" );
            });
        };

        $scope.addNewItemForm = function () {
            ngDialog.open(
                {
                    template: "templates/partials/new-list-item.html",
                    className: "ngdialog-theme-default item-form",
                    scope: $scope
                }
            );
        };

        $scope.openDeleteModal = function ( item ) {
            $scope.item = item;

            var dialog = ngDialog.open({
                template: "templates/partials/confirm-delete.html",
                scope: $scope
            });
        };

        $scope.deleteItem = function ( item ) {
            API.$delete( UrlHelper.company.delete() + item.id )
            .success( function ( data ) {
                $scope.getList();
            })
            .error( function ( data ) {
                console.warn( "Oops, There was an issue deleting the item" );
            });
        };

        // Run on Load
        $scope.getList();
    }

] );