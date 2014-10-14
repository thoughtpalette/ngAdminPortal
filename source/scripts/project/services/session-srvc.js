angMod.service( "Session", ["localStorageService", "$rootScope", "$location", "$http",
    function ( localStorageService, $rootScope, $location, $http )
    {

        this.create = function ( user )
        {
            // Set Globals for API service
            $rootScope.authToken = user.auth_token;
            $rootScope.user = user;

            // Local Storage Session management
            localStorageService.set( "authToken", user.auth_token );
            localStorageService.set( "user.role_id", user.role_id );
            localStorageService.set( "user.phone_number", user.phone_number );
            localStorageService.set( "user.email", user.email );
            localStorageService.set( "user.role", user.role );

            // Redirect to list on session create
            $location.path( "/list" );
        };

        this.get = {

            authToken: function () {
                return localStorageService.get( "authToken" );
            },

            user: function () {
                return {
                    role_id: localStorageService.get( "user.role_id" ),
                    phone_number: localStorageService.get( "user.phone_number" ),
                    email: localStorageService.get( "user.email" ),
                    role: localStorageService.get( "user.role" )
                }
            }

        };

        this.destroy = function ()
        {
            $rootScope.authToken = null;
            $rootScope.user = null;
            localStorageService.clearAll();
        };

        return this;
    }

] );
