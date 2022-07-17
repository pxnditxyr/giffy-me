import { useEffect, useState } from 'react'

import { getGifsByCategory } from '../api/getGifsByCategory';
import { GifInterface } from '../interfaces'

export const useFetchGifs = ( category : string ) => {
    const [ gifs, setGifs ] = useState<Array<GifInterface>>([])
    const [ isLoading, setIsLoading ] = useState( true );

    const getGifs = async () => {
        const gifsByCategory = await getGifsByCategory( category );
        setGifs( gifsByCategory );
        setIsLoading( false );
    };

    useEffect( () => {
        getGifs();
    }, [] );

    return {
        gifs,
        isLoading
    };
};

