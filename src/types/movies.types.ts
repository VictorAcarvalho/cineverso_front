export interface Movie{
    movieId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    director: string,
    cast: string[],
    averageRating: number,
    movieType: string,
    movieGenres: string,
    studio: string,
    picture: string,
}

export interface MovieSearchParams {
    title?: string;
    director?: string;
    genre?: string;
    actor?: string;
}