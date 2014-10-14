angMod.service( "infiniteScroll", [ "API", "UrlHelper",
    function ( API, UrlHelper )
    {
        var infiniteScroll = function( type, reload )
        {
            this.items = [];
            this.busy = false;
            this.after = 1;
            this.type = type;
            this.next_page;
            this.reload = reload;

            if ( this.reload )
            {
                this.next_page = 1;
                this.reload = false;

                this.nextPage();
            }
        };

        infiniteScroll.prototype.nextPage = function()
        {
            if ( this.busy )
            {
                return;
            }

            this.busy = true;

            // Can use a switch/if statement to change url based
            // on this.type passed in from controller/initialization
            var url = "/users";

            API.$get( url + "?p=" + this.after )
                .success( function ( data )
                {
                    var items = data.results;

                    for ( var i = 0; i < items.length; i++ )
                    {
                        this.items.push( items[ i ] );
                    }

                    // May be just data.next if using old API
                    this.next_page = data.next_page;
                    this.after++;
                    this.busy = false;

                    if ( this.next_page === null )
                    {
                        toastr.info( "All results loaded." );
                    }

                }.bind( this ) )
                .error( function()
                {
                    toastr.error( "Error", "There was an Error" );
                } );
        };

        return infiniteScroll;
    }
] );