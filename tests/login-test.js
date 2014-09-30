"use strict";

/* Tests */

var ptor = protractor.getInstance();

ptor.waitForAngular();

describe( "Login", function ()
{

      it( "Start Login Process", function ()
      {
            ptor.driver.get( "/" );

            ptor.sleep( 10000 );

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