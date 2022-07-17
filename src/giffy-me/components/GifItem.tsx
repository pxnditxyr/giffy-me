
interface GifItemProps {
    // id: string;
    title: string;
    url: string;
}

export const GifItem = ( { title, url } : GifItemProps ) => {

    return (
        <article>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </article>
    );
};
