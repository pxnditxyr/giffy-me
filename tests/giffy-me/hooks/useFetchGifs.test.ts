import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../../src/giffy-me/hooks/useFetchGifs';

describe( 'test in hook useFetchGifs', () => {
    test( 'should return initial value', () => {
        const category = 'Naruto';
        const { result } = renderHook( () => useFetchGifs( category ) );
        const { gifs, isLoading } = result.current;
        expect( gifs ).toEqual( [] );
        expect( isLoading ).toBeTruthy();
    });
    test( 'should return array of images, and isLoading in false', async () => {
        const category = 'Naruto';
        const { result } = renderHook( () => useFetchGifs( category ) );
        await waitFor( () => expect( result.current.gifs.length ).toBeGreaterThan( 0 ) );
        const { gifs, isLoading } = result.current;
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    });
});
