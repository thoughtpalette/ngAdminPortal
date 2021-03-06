angMod.controller( "LoginCtrl", [ "$scope", "$rootScope", "$location", "UrlHelper", "Session",
    function ( $scope, $rootScope, $location, UrlHelper, Session )
{
    $scope.userResetPassword = false;
    $scope.resetPasswordVisible = false;
    $scope.emailSent = false;

    $scope.credentials = {
        email: "",
        password: ""
    };

    $scope.login = function ( credentials )
    {
        // $http.post(UrlHelper.login(),
        //     {
        //         email: $scope.credentials.email,
        //         password: $scope.credentials.password
        //     }
        // )
        // .success( function ( data ) {
        //     Session.create( data );
        // })
        // .error( function ( data ) {
        //     console.log ( data );
        // });

        // Flow Placeholder, remove for above
        var user = {
            auth_token: "kjlwkejwdcWEwelkj",
            role_id: "14",
            phone_number: "1234567890",
            email: "test@test.com",
            role: "Admin"
        };

        Session.create( user );
    };

    $scope.showResetPasswordForm = function ()
    {
        $scope.userResetPassword = true;
        $scope.resetPasswordVisible = true;
    };

    $scope.sendResetPasswordEmail = function ( user )
    {
        $http.post( UrlHelper.customer.resetPassword(),
            {
                email: user.email
            }
        )
        .success( function ()
        {
            // TODO: Show messaging: "Please check your email" or something.
            $scope.resetPasswordVisible = false;
            $scope.emailSent = true;
        })
        .error( function ()
        {
            toastr.error( "Oops, Something went wrong, please try again.", "Error" );
        });
    };

} ] );