import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

interface GifGridProps {
    category: string;
}

export const GifGrid = ( { category } : GifGridProps ) => {

    const { gifs, isLoading } = useFetchGifs( category );

    return (
        <div
            className="w-full flex flex-col justify-center items-center px-5"
        >
            <h3 
                className="text-center text-4xl font-bold text-amber-400 py-4 md:py-20"
            > { category } </h3>
            {
                isLoading
                    ? ( <p> Loading... </p> )
                    : (
                        <div
                            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
                        >
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
