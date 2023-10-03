import { z } from 'zod'
import { GenreData, MovieData, MovieDetailData, SeriesData, SeriesDetailData } from '.'


export const SearchInputSchema = z.object({
    text: z.string().trim().max(25)
})



export type CinemaType = 'movie' | 'series' | 'tv'


export type DataStatus = {
    data: MovieData | MovieDetailData | SeriesData | SeriesDetailData | GenreData,
    isLoading?: boolean,
    isError?: boolean
}