import { GifInterface, GifFetchInterface } from '../interfaces';

export const getGifsByCategory = async ( category : string ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZiBe4feoUIuuzVCHAfjjiPA1UfRLgfO8&q=${ category }&limit=20`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs : Array<GifInterface> = data.map( ( gif : GifFetchInterface ) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
};
