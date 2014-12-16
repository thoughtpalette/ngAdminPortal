angMod.service( "infiniteScroll", [ "API", "UrlHelper",
    function ( API, UrlHelper )
    {
        var infiniteScroll = function( type, reload )
        {
            this.items = [];
            this.busy = false;
            this.after = 1;
            this.type = type;
            this.reload = reload;

            if ( this.reload )
            {
                this.nextPage = 1;
                this.reload = false;
                this.getNextPage();
            }

            this.getNextPage = function ()
            {
                if ( this.busy || this.nextPage === null )
                {
                    return;
                }

                this.busy = true;

                // Can use a switch/if statement to change url based
                // on this.type passed in from controller/initialization
                var url = "/users";

                API.$get( url + "?p=" + this.after )
                    .then( function ( data )
                    {
                        var items = data.results;

                        if ( items && items.length )
                        {
                            for ( var i = 0; i < items.length; i++ )
                            {
                                this.items.push( items[ i ] );
                            }
                        }

                        // May be just data.next if using old API
                        this.nextPage = data.nextPage || null;
                        this.after++;
                        this.busy = false;

                        if ( this.nextPage === null )
                        {
                            toastr.info( "All results loaded." );
                        }

                    }.bind( this ),
                    function()
                    {
                        toastr.error( "Error", "There was an Error" );
                    } );
            };
        };

        return infiniteScroll;
    }
] );