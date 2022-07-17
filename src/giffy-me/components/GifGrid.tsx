import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

interface GifGridProps {
    category: string;
}

export const GifGrid = ( { category } : GifGridProps ) => {

    const { gifs, isLoading } = useFetchGifs( category );

    return (
        <div>
            <h3> { category } </h3>
            {
                isLoading
                    ? ( <p> Loading... </p> )
                    : (
                        <div>
                            {
                                gifs.map( ( gif ) => (
                                    <GifItem 
                                        key={ gif.id }
                                        { ...gif }
                                    />
                                ))
                            }
                        </div>
                    )
        }

        </div>
    );
};
