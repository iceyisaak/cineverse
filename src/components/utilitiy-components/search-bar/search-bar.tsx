import { ChangeEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { MOVIE_POSTER_URL } from '../../../api/api-constant'
import { searchMovies } from '../../../api/movie-api'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from './search-bar.module.scss'


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
                <article className={`${style.suggestion__menu}`}>
                    {
                        SearchResultsData &&
                            SearchResultsData?.results.length > 0 ?
                            SearchResultsData.results
                                .map((searchResult) => (
                                    <Link
                                        to={`/movies/${searchResult.id.toString()}/`}
                                        className={`${style.suggestion__list}`}
                                        key={searchResult.id}
                                    >
                                        <div className={`${style.suggestion__thumbnail}`}>
                                            <img
                                                src={`${searchResult.poster_path ?
                                                    `${MOVIE_POSTER_URL}${searchResult.poster_path}` :
                                                    `https://placehold.co/70x100?text=N/A`
                                                    }`}
                                                alt={`${searchResult.title}`}
                                                className={`${style.suggestion__thumbnail__image}`}
                                            />
                                        </div>
                                        <div className={`${style.suggestion__info}`}>
                                            <h3 className='text-3xl w-full whitespace-nowrap overflow-hidden text-ellipsis'>
                                                {searchResult?.title}
                                            </h3>
                                            <p className='text-3xl'>
                                                {searchResult?.release_date.slice(0, 4)}
                                            </p>
                                        </div>
                                    </Link>
                                )) :
                            <p className='text-3xl absolute top-2/4 right-2/4'>
                                No Movie Found
                            </p>
                    }
                </article>
            }
        </article >
    )
}
