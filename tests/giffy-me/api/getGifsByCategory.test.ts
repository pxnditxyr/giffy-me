import { getGifsByCategory } from '../../../src/giffy-me/api/getGifsByCategory';;

describe( 'tests in get gifs by category api helper', () => {

    const category = 'Naruto';
    
    test( 'should return an array of gifs', async () => {
        const gifs = await getGifsByCategory( category );
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[ 0 ] ).toEqual( expect.objectContaining({
            title: expect.any( String ),
            url: expect.any( String ),
            id: expect.any( String )
        }));
    });

});
