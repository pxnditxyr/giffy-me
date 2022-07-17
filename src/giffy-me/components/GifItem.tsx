
interface GifItemProps {
    // id: string;
    title: string;
    url: string;
}

export const GifItem = ( { title, url } : GifItemProps ) => {

    return (
        <article
            className="flex flex-col justify-center items-center"
        >
            <img
                src={ url }
                alt={ title }
                className="w-full h-auto object-cover rounded-lg"
                />
            <p
                className="text-center text-xl font-bold text-gray-300 py-4"
            > { title } </p>
        </article>
    );
};
