import { ChangeEvent, useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { searchMovies } from '../../../api/movie-api'

import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { SearchSuggestionMenu } from './search-suggestion-menu'

import { MovieData } from '../../../types'
import style from './search-bar.module.scss'


// type SearchBar = {
//     searchParams?: string
// }

export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)

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
        const searchTerm = e.target.value
        setSearchInput(searchTerm)
        // setSearchParams(searchTerm)
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


    const runSearchHandler = () => {
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
            <div className={`${style.search__box} `}>
                <input
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
                <BsSearch
                    className={`
                    w-12 h-12
                    ${style.btn__runSearch}
                    `}
                    onClick={runSearchHandler}
                />
            </div>
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
