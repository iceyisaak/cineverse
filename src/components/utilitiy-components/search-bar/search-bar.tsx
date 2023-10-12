import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { searchMovies } from '../../../api/movie-api'

import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { SearchSuggestionMenu } from './search-suggestion-menu'

import { MovieData } from '../../../types'
import style from './search-bar.module.scss'



export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const { data: SearchResultsData } = searchMovies(searchInput)
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const searchParamsString = searchParams.get('query')?.toString()


    useEffect(() => {
        if (searchParamsString) {
            return setSearchInput(searchParamsString)
        }
    }, [])

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        setSearchInput(searchTerm)
    }

    const clearInputHandler = () => {
        setSearchInput('')
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
        if (searchInput === '') return

        return navigate({
            pathname: '/movies/search',
            search: createSearchParams({
                query: searchInput
            }).toString()
        })
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
                    placeholder='e.g. Superman'
                    onChange={searchInputHandler}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    value={searchInput}
                />
                {
                    searchInput !== '' &&
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
                searchInput !== '' &&
                inputFocus &&
                <SearchSuggestionMenu
                    data={SearchResultsData as MovieData}
                    itemClickHandler={itemClickHandler}
                />
            }
        </article >
    )
}
