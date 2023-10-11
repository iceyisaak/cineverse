import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { APIKEY, BASEURL } from './api-constant'

import { type CinemaType, type GenreData, type MovieData, type MovieDetailData } from '../types'
// import { type GenreData } from "../types/genredata-schema"
// import { type CinemaType } from "../types/movie-schema"



const CINEMA_TYPE: CinemaType = 'movie'

export const getNowPlayingMovies = () => {

    const APINAME = 'now_playing'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        }
    })
}

export const getPopularMovies = () => {

    const APINAME = 'popular'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        }
    })
}


export const getDiscoverMovies = () => {
    const APINAME = 'discover'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        }
    })
}


//getPopularMovies


export const getUpcomingMovies = () => {

    const APINAME = 'upcoming'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        }
    })
}


export const getTrendingMovies = () => {

    const APINAME = 'trending'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}/day${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        }
    })

}


export const getTopRatedMovies = () => {

    const APINAME = 'top_rated'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        }
    })

}


export const getMovieGenres = () => {

    const APINAME = 'genre'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}/list${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as GenreData
        }
    })

}


export const getMovieDetail = (MOVIE_ID?: number | undefined) => {


    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${MOVIE_ID}${APIKEY}`

    return useQuery({
        queryKey: [MOVIE_ID],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieDetailData
        },
        enabled: MOVIE_ID !== undefined
    })

}

export const searchMovies = (QUERY?: string | undefined, RESULT_PAGE?: number | undefined) => {

    console.log('QUERY: ', QUERY)
    console.log('RESULT_PAGE: ', RESULT_PAGE)

    const APINAME = 'search'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}${APIKEY}&query=${QUERY}${RESULT_PAGE !== undefined ? `&page=${RESULT_PAGE}` : ''}`

    return useQuery({
        queryKey: [QUERY, RESULT_PAGE],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as MovieData
        },
        enabled: QUERY !== undefined && QUERY !== ''
    })
}

