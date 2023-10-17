import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
// import { searchMovies } from '../../../api/movie-api'

import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { SearchSuggestionMenu } from './search-suggestion-menu'

import { searchMovies } from '../../../api/movie-api'
import { DataStatus, MovieData } from '../../../types'
import style from './search-bar.module.scss'


type SearchBar = DataStatus


export const SearchBar = () => {

    // const [searchInput, setSearchInput] = useState('')
    const [movieSearchInput, setMovieSearchInput] = useState('')
    const [seriesSearchInput, setSeriesSearchInput] = useState('')
    const [searchingMovies, setSearchingMovies] = useState(false)
    const [searchingSeries, setSearchingSeries] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const location = useLocation()
    const navigate = useNavigate()
    // const [searchParams] = useSearchParams()
    // const searchParamsString = searchParams.get('query')?.toString()

    const { data: SearchResultsData } = searchMovies(movieSearchInput)

    console.log('location.pathname: ', location.pathname)


    useEffect(() => {
        if (location.pathname.includes('/movies')) {
            setSearchingMovies(true)
            setSearchingSeries(false)
        }
        else if (location.pathname.includes('/series')) {
            setSearchingSeries(true)
            setSearchingMovies(false)
        }
    }, [])




    // useEffect(() => {
    //     if (searchParamsString) {
    //         return setSearchInput(searchParamsString)
    //     }
    // }, [])

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        // setSearchInput(searchTerm)
        if (searchingMovies) {
            setMovieSearchInput(searchTerm)
        } else if (searchingSeries) {
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

        if (searchingMovies) {
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
        } else if (searchingSeries) {
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
                    movieSearchInput !== '' &&
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
                movieSearchInput !== '' &&
                inputFocus &&
                <SearchSuggestionMenu
                    data={SearchResultsData as MovieData}
                    itemClickHandler={itemClickHandler}
                />
            }
        </article >
    )
}
