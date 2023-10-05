import { ChangeEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { searchMovies } from '../../../api/movie-api'

import { useNavigate } from 'react-router-dom'
import { MovieData } from '../../../types'
import style from './search-bar.module.scss'
import { SearchSuggestionMenu } from './search-suggestion-menu'


export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')
    const { data: SearchResultsData } = searchMovies(searchInput)
    const navigate = useNavigate()


    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)
    }

    const clearInputHandler = () => {
        setSearchInput('')
    }

    const runSearchHandler = () => {
        if (searchInput === '') return

        alert('runSearchHandler()')
        console.log('/movies/search')
        return navigate('/movies/search')
    }


    return (
        <article className={`${style.searchbar}`}>
            <div className={`${style.search__box}`}>
                <input
                    type="text"
                    name='search'
                    className={`${style.search__input} text-4xl`}
                    placeholder='e.g. Superman'
                    onChange={searchInputHandler}
                    value={searchInput}
                />
                {
                    searchInput !== '' &&
                    <GrClose
                        className={`${style.btn} ${style.btn__clearInput}`}
                        onClick={clearInputHandler}
                    />
                }
                <BsSearch
                    className={`${style.btn} ${style.btn__runSearch}`}
                    onClick={runSearchHandler}
                />
            </div>
            {searchInput !== '' &&
                <SearchSuggestionMenu
                    data={SearchResultsData as MovieData}
                />
            }
        </article >
    )
}
