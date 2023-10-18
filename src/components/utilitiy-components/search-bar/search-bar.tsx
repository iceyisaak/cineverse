import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { SearchSuggestionMenu } from './search-suggestion-menu'

import { searchMovies } from '../../../api/movie-api'
import { searchSeries } from '../../../api/series-api'
import { DataStatus, MovieData, SeriesData } from '../../../types'
import style from './search-bar.module.scss'


type SearchBar = DataStatus


type CinemaSearchType = 'movies' | 'series' | undefined


export const SearchBar = () => {

    const [movieSearchInput, setMovieSearchInput] = useState('')
    const [seriesSearchInput, setSeriesSearchInput] = useState('')
    const [cinemaSearchType, setCinemaSearchType] = useState<CinemaSearchType>(undefined)
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()

    const { data: MovieSearchResult } = searchMovies(movieSearchInput)
    const { data: SeriesSearchResult } = searchSeries(seriesSearchInput)



    useEffect(() => {
        if (location.pathname.includes('/movies')) {
            setCinemaSearchType('movies')
        }
        else if (location.pathname.includes('/series')) {
            setCinemaSearchType('series')
        }
    }, [])



    useEffect(() => {
        if (cinemaSearchType === 'movies') {
            if (searchParamsString) {
                return setMovieSearchInput(searchParamsString)
            }
        } else if (cinemaSearchType === 'series') {
            if (searchParamsString) {
                return setSeriesSearchInput(searchParamsString)
            }
        }
    }, [])


    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        if (cinemaSearchType === 'movies') {
            setMovieSearchInput(searchTerm)
        } else if (cinemaSearchType === 'series') {
            setSeriesSearchInput(searchTerm)
        }
    }

    const clearInputHandler = () => {
        setMovieSearchInput('')
        setSeriesSearchInput('')
    }

    const inputFocusHandler = () => {
        setInputFocus(true)
        showSuggestionMenuHandler()
    }

    const inputBlurHandler = () => {
        setInputFocus(false)
        showSuggestionMenuHandler()
    }

    const showSuggestionMenuHandler = () => {
        setShowSuggestionMenu(!showSuggestionMenu)
    }

    const itemClickHandler = (urlPath: string) => () => {
        navigate(urlPath)
    }

    const runSearchHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        inputRef.current?.blur()

        if (cinemaSearchType === 'movies') {
            if (movieSearchInput === '') {
                return
            } else {
                return navigate({
                    pathname: '/movies/search',
                    search: createSearchParams({
                        query: movieSearchInput
                    }).toString()
                })
            }
        } else if (cinemaSearchType === 'series') {
            if (seriesSearchInput === '') {
                return
            } else {
                return navigate({
                    pathname: '/series/search',
                    search: createSearchParams({
                        query: seriesSearchInput
                    }).toString()
                })
            }
        }

    }



    return (
        <article className={`${style.searchbar} w-7/12`}>
            <form onSubmit={runSearchHandler} className={`${style.search__box} `}>
                <input
                    ref={inputRef}
                    type="text"
                    name='search'
                    className={`
                        w-full
                        h-20
                        text-4xl
                        p-4
                        bg-transparent
                    `}
                    placeholder={`e.g. Superman'`}
                    onChange={searchInputHandler}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    value={movieSearchInput || seriesSearchInput}
                />
                {
                    movieSearchInput !== '' || seriesSearchInput !== ''
                    &&
                    <GrClose
                        className={`
                        w-12 h-12
                        ${style.btn__clearInput}
                        `}
                        onClick={clearInputHandler}
                    />
                }

                <button type='submit' className={`${style.btn__runSearch}`}>
                    <BsSearch
                        className={`w-12 h-12`}
                        onClick={runSearchHandler}
                    />
                </button>
            </form>
            {
                cinemaSearchType === 'movies' ?
                    movieSearchInput !== '' &&
                    inputFocus &&
                    <SearchSuggestionMenu
                        data={MovieSearchResult as MovieData}
                        itemClickHandler={itemClickHandler}
                    // sea={searchingMovies}
                    />
                    :
                    cinemaSearchType === 'series' ?
                        seriesSearchInput !== '' &&
                        inputFocus &&
                        <SearchSuggestionMenu
                            data={SeriesSearchResult as SeriesData}
                            itemClickHandler={itemClickHandler}
                        // searching={searchingSeries}
                        />
                        : null
            }
        </article >
    )
}
