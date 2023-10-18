import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { APIKEY, BASEURL } from './api-constant'

import { type CinemaType, type GenreData, type SeriesData, type SeriesDetailData } from '../types'


const CINEMA_TYPE: CinemaType = 'tv'

export const getAiringTodaySeries = () => {

    const APINAME = 'airing_today'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        }
    })
}

export const getOnTheAirSeries = () => {

    const APINAME = 'on_the_air'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        }
    })
}


export const getDiscoverSeries = () => {
    const APINAME = 'discover'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        }
    })
}


export const getPopularSeries = () => {
    const APINAME = 'popular'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        }
    })
}



export const getTopRatedSeries = () => {

    const APINAME = 'top_rated'
    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${APINAME}${APIKEY}&with_network=123&language=en-US`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        }
    })

}


export const getSeriesGenres = () => {

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


export const getSeriesDetail = (SERIES_ID?: number | undefined) => {

    const APIURL = `${BASEURL}/${CINEMA_TYPE}/${SERIES_ID}${APIKEY}`

    return useQuery({
        queryKey: [SERIES_ID],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesDetailData
        },
        enabled: SERIES_ID !== undefined
    })
}

export const searchSeries = (QUERY?: string | undefined, RESULT_PAGE?: number | undefined) => {

    const APINAME = 'search'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}${APIKEY}&query=${QUERY}${RESULT_PAGE !== undefined ? `&page=${RESULT_PAGE}` : ''}`

    return useQuery({
        queryKey: [QUERY, RESULT_PAGE],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        },
        enabled: QUERY !== undefined && QUERY !== ''
    })
}


// https://api.themoviedb.org/3/trending/tv/day?APIKEY

export const getTrendingSeries = () => {

    const APINAME = 'trending'
    const APIURL = `${BASEURL}/${APINAME}/${CINEMA_TYPE}/day${APIKEY}`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SeriesData
        }
    })
}
