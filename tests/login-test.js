"use strict";

/* Tests */

describe( "Login", function ()
{

      it( "Start Login Process", function ()
      {
            browser.get( "/" );

        var inputUserName = element( by.id( "user-name" ) ),
            inputPassword = element( by.id( "user-password" ) ),
            loginButton = element( by.id ( "login-btn" ) );

            inputUserName.sendKeys( "admin" );
            loginButton.click();
            expect(inputUserName.getAttribute( "class" )).toMatch( "ng-invalid" );

            inputUserName.sendKeys( "@admin.com" );
            loginButton.click();
            expect(inputUserName.getAttribute( "class" )).toMatch( "ng-valid" );

            inputPassword.sendKeys( "admin" );
            expect(inputPassword.getAttribute( "class" )).toMatch( "ng-valid" );

            loginButton.click();

      } );

} );