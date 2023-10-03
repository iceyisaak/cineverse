import { z } from 'zod'

export type MovieData = {
    page: number,
    results: [{
        backdrop_path: string,
        genre_ids: number[],
        id: number,
        original_language: string,
        release_date: string,
        title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        vote_average: number,
        vote_count: number
    }],
    total_pages: number,
    total_results: number
}


export const MovieDataSchema = z.object({

})

export const MoviesDataSchema = z.array(MovieDataSchema)

// export type MoviesDataFetched = z.infer(<typeof )