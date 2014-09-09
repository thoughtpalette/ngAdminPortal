"use strict";

var ptor = protractor.getInstance();

describe( "List View", function ()
{
    it( "Test Redirect", function ()
    {
        // Check Redirect
        expect(ptor.getCurrentUrl()).toContain( "list" );

    } );

    it( "Open Edit Modal", function ()
    {
        var editButton = element( by.css( ".row-1 .glyphicon-edit" ) ),
            modalWindow = element( by.css( ".ngdialog" ) );

            editButton.click();

            expect( modalWindow.isPresent()).toBe( true );
    } );

    it( "Edit Company Form Validation", function ()
    {
        var editForm = element( by.id( "edit-item" ) ),
            submitBtn = element( by.id ( "edit-item-submit" ) ),
            name = element( by.id ( "name" ) ),
            email = element( by.id ( "email" ) ),
            phone = element( by.id ( "phone" ) ),
            addressStreet = element ( by.id ( "address-street" ) ),
            addressCity = element ( by.id ( "address-city" ) ),
            addressState = element ( by.id ( "address-state" ) ),
            addressPostalCode = element ( by.id ( "address-postal-code" ) );

            expect(editForm.getAttribute( "class" )).toMatch( "ng-valid" );

            // Name
            name.clear();
            expect(name.getAttribute( "class" )).toMatch( "ng-invalid" );
            name.sendKeys( "John Smith" );
            expect(name.getAttribute( "class" )).toMatch( "ng-valid" );

            // Email
            email.clear();
            expect(email.getAttribute( "class" )).toMatch( "ng-invalid" );
            email.sendKeys( "John" );
            submitBtn.click();
            expect(email.getAttribute( "class" )).toMatch( "ng-invalid" );
            email.sendKeys( "@aol.com" );
            expect(email.getAttribute( "class" )).toMatch( "ng-valid" );

            // Phone
            phone.clear();
            expect(phone.getAttribute( "class" )).toMatch( "ng-invalid" );
            phone.sendKeys( "1234567890" );
            expect(phone.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address Street
            addressStreet.clear();
            expect(addressStreet.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressStreet.sendKeys( "1st Michigan" );
            expect(addressStreet.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address City
            addressCity.clear();
            expect(addressCity.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressCity.sendKeys( "Chicago" );
            expect(addressCity.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address State
            addressState.clear();
            expect(addressState.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressState.sendKeys( "IL" );
            expect(addressState.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address Postal Code
            addressPostalCode.clear();
            expect(addressPostalCode.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressPostalCode.sendKeys( "60654" );
            expect(addressPostalCode.getAttribute( "class" )).toMatch( "ng-valid" );


            submitBtn.click();

    } );

    it( "Open Add Item Modal", function ()
    {
        ptor.sleep(2000);

        var addItemBtn = element( by.id( "add-item-btn" ) ),
            modalWindow = element( by.css( ".ngdialog" ) );

            addItemBtn.click();

            expect( modalWindow.isPresent()).toBe( true );
    } );

    it( "New Item Validation", function ()
    {
        var submitBtn = element( by.id ( "add-item-submit" ) ),
            name = element( by.id ( "name" ) ),
            email = element( by.id ( "email" ) ),
            phone = element( by.id ( "phone" ) ),
            addressStreet = element ( by.id ( "address-street" ) ),
            addressCity = element ( by.id ( "address-city" ) ),
            addressState = element ( by.id ( "address-state" ) ),
            addressPostalCode = element ( by.id ( "address-postal-code" ) );

            // Name
            expect(name.getAttribute( "class" )).toMatch( "ng-invalid" );
            name.sendKeys( "John Smith" );
            expect(name.getAttribute( "class" )).toMatch( "ng-valid" );

            // Email
            expect(email.getAttribute( "class" )).toMatch( "ng-invalid" );
            email.sendKeys( "John" );
            submitBtn.click();
            expect(email.getAttribute( "class" )).toMatch( "ng-invalid" );
            email.sendKeys( "@aol.com" );
            expect(email.getAttribute( "class" )).toMatch( "ng-valid" );

            // Phone
            expect(phone.getAttribute( "class" )).toMatch( "ng-invalid" );
            phone.sendKeys( "1234567890" );
            expect(phone.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address Street
            expect(addressStreet.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressStreet.sendKeys( "1st Michigan" );
            expect(addressStreet.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address City
            expect(addressCity.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressCity.sendKeys( "Chicago" );
            expect(addressCity.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address State
            expect(addressState.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressState.sendKeys( "IL" );
            expect(addressState.getAttribute( "class" )).toMatch( "ng-valid" );

            // Address Postal Code
            expect(addressPostalCode.getAttribute( "class" )).toMatch( "ng-invalid" );
            addressPostalCode.sendKeys( "60654" );
            expect(addressPostalCode.getAttribute( "class" )).toMatch( "ng-valid" );

            submitBtn.click();

    } );

    it( "Open Delete Item Modal", function ()
    {
        ptor.sleep(2000);

        var deleteButton = element( by.css( ".row-1 .glyphicon-remove" ) ),
            modalWindow = element( by.css( ".ngdialog" ) );

            deleteButton.click();

            expect( modalWindow.isPresent()).toBe( true );
    } );

    it( "Delete Item", function ()
    {
        var deleteButton = element( by.id( "delete-btn" ) ),
            companyRow = element( by.css( ".row-1" ) ),
            companyId = companyRow.getAttribute( "id" ),
            deletedCompany = element( by.id ( companyId ) );

            deleteButton.click();

            ptor.sleep(2000);

            expect( deletedCompany.isPresent()).toBe( false );
    } );

} );