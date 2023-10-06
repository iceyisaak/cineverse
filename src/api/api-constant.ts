export const BASEURL = 'https://api.themoviedb.org/3'
export const APIKEY = `?api_key=${import.meta.env.VITE_TMDB_APIKEY}`

export const MOVIE_BACKDROP_URL = 'https://images.tmdb.org/t/p/original'
export const MOVIE_POSTER_URL = 'https://images.tmdb.org/t/p/w500'

export const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/'
export const SERIES_DETAIL_URL = 'https://api.themoviedb.org/3/tv/'


export const HEADER_CONFIG = {
    headers: {
        header: `Authorization: Bearer ${import.meta.env.VIT_TMDB_APIKEY}`
    }
}
