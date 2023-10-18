// https://api.themoviedb.org/3/trending/all/day?api_key=fb9dcac7af6cea1a69f943d822f3ba36

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { APIKEY, BASEURL } from "./api-constant"
// import { MovieData } from "../types"
import { DataStatus, type CinemaType, MovieData, SeriesData } from '../types'

const CINEMA_TYPE: CinemaType = 'all'

export const getTrendingCinema = () => {

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
