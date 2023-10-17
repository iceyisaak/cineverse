import { GenreData, MovieData, MovieDetailData, SeriesData, SeriesDetailData } from '.'



export type CinemaType = 'movie' | 'tv' | undefined


export type DataStatus = {
    data: MovieData | MovieDetailData | SeriesData | SeriesDetailData | GenreData,
    isLoading?: boolean,
    isError?: boolean
}