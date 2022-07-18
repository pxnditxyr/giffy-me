import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/giffy-me/components/GifGrid';

import { useFetchGifs } from '../../../src/giffy-me/hooks/useFetchGifs';

jest.mock( '../../../src/giffy-me/hooks/useFetchGifs' );

describe( 'tests in GifGrid component', () => {
    const category = 'Naruto';
    test( 'should render GifGrid component', () => {
        ( useFetchGifs as jest.Mock ).mockReturnValue({
            gifs: [],
            isLoading: true
        });
        const { container } = render( <GifGrid category={ category } /> );
        expect( container ).toMatchSnapshot();
    })

    test( 'should show loading', () => {
        ( useFetchGifs as jest.Mock ).mockReturnValue({
            gifs: [],
            isLoading: true
        });
        render( <GifGrid category={ category } /> )
        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( category ) );
    })

    test( 'should show items when images is charged', () => {
        const gifs = [
            {
                id: '1',
                title: 'Naruto vs Pain',
                url: 'https://thumbs.gfycat.com/ComplexSecondhandBandicoot-size_restricted.gif'
            },
            {
                id: '2',
                title: 'Maito Gai vs Madara',
                url: 'https://c.tenor.com/rWciirvM7sgAAAAd/madara-uchiha-might-guy.gif'
            }
        ];
        ( useFetchGifs as jest.Mock ).mockReturnValue({
            gifs,
            isLoading: false
        });
        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );
    })
})
