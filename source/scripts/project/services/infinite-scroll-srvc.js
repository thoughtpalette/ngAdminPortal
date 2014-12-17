// Paging helper for ngInfiniteScroll
angular.module( "vokal.infiniteScroll", [] )
.service( "infiniteScroll", [ "API",
    function ( API )
    {
        var infiniteScroll = function( url )
        {
            var scope = this;

            scope.url = url; // example: /users?p={page}

            scope.reload = function ()
            {
                scope.items = [];
                scope.page = 1;
                scope.busy = false;
                scope.hasMore = true;
                scope.getNextPage();
            };

            scope.getNextPage = function ()
            {
                if ( !scope.url || scope.busy || scope.hasMore === false )
                {
                    return;
                }

                scope.busy = true;

                API.$get( url.replace( "{page}", scope.page ) )
                    .then( function ( data )
                    {
                        var newItems = data.results;

                        if ( newItems && newItems.length )
                        {
                            for ( var i = 0; i < newItems.length; i++ )
                            {
                                scope.items.push( newItems[ i ] );
                            }
                        }

                        scope.hasMore = !!data.nextPage || !!data.next || false;
                        scope.page++;
                        scope.busy = false;

                        if ( !scope.hasMore )
                        {
                            toastr.info( "All results loaded." );
                        }

                    },
                    function()
                    {
                        toastr.error( "Error", "There was an Error" );
                    } );
            };

            scope.reload();
        };

        return infiniteScroll;
    }
] );