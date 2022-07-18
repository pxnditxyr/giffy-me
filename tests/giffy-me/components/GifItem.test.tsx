import { render, screen } from '@testing-library/react';

import { GifItem } from '../../../src/giffy-me/components/GifItem';

describe( 'Tests in GifItem Component', () => {
    const title = 'Naruto';
    const url = 'https://www.imdb.com/title/tt0988824/';

    test( 'should render GifItem component', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    });

    test( 'should show image with url and alt provided', () =>{
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        const { src, alt } : HTMLImageElement = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test( 'should show title provided', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });

});
