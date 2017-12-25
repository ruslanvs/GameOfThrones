$( document ).ready( function () {
    var firsttime = 0;

    $( "img ").click( function () {

        theUrl = "https://anapioficeandfire.com/api/houses/" + $( this ).attr( 'id' );
        $.get( theUrl, function ( theHouse ) {
            console.log ( theHouse );

            if ( firsttime ==0 ) {
                $( '#details' ).css( 'visibility', 'visible');
                $( '#details' ).hide();
                $( '#details' ).slideDown();
                firsttime = 1;
            }
            $( '#name' ).text( "Name: " + theHouse.name );
            $( '#words' ).text( "Words: " + theHouse.words );
            $( '#titles' ).text( "Titles: " + theHouse.titles );
            
        }, 'json' );

    })
})