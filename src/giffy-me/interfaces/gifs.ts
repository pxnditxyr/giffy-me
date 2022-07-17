export interface GifInterface {
    id: string;
    title: string;
    url: string;
};

export interface GifFetchInterface {
    id: string;
    title: string;
    images: {
        downsized_medium: {
            url: string;
        }
    }
}
