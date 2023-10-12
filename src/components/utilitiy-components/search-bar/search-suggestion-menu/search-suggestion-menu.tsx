import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { MOVIE_POSTER_URL } from '../../../../api/api-constant'

import { DataStatus } from '../../../../types'
import style from '../search-bar.module.scss'


type SearchSuggestionMenu = DataStatus & {
    itemClickHandler: (urlPath: string) => MouseEventHandler<HTMLAnchorElement> | undefined
}

export const SearchSuggestionMenu = ({ data: SearchResultsData, itemClickHandler }: SearchSuggestionMenu) => {
    return (
        <article className={`
        ${style.suggestion__menu}
            bg-gray-200
            w-full h-96
        `}>
            {
                SearchResultsData &&
                    'results' in SearchResultsData &&
                    SearchResultsData?.results.length > 0 ?
                    SearchResultsData?.results
                        .map((searchResult) => (
                            <Link
                                to={`/movies/${searchResult.id.toString()}/`}
                                onMouseDown={itemClickHandler(`/movies/${searchResult?.id.toString()}/`)}
                                className={`${style.suggestion__list} m-2`}
                                key={searchResult.id}
                            >
                                <div className={`${style.suggestion__thumbnail}`}>
                                    <img
                                        src={`${searchResult.poster_path ?
                                            `${MOVIE_POSTER_URL}${searchResult.poster_path}` :
                                            `https://placehold.co/70x100?text=N/A`
                                            }`}
                                        alt={`${searchResult &&
                                            'title' in searchResult &&
                                            searchResult.title
                                            }`}
                                        className={`${style.suggestion__thumbnail__image} w-full h-48`}
                                    />
                                </div>
                                <div className={`${style.suggestion__info} w-full px-4 py-10`}>
                                    <h3 className='text-3xl w-full whitespace-nowrap overflow-hidden text-ellipsis'>
                                        {
                                            searchResult &&
                                            'title' in searchResult &&
                                            searchResult?.title
                                        }
                                    </h3>
                                    <p className='text-3xl'>
                                        {
                                            searchResult &&
                                            'release_date' in searchResult &&
                                            searchResult?.release_date.slice(0, 4)
                                        }
                                    </p>
                                </div>
                            </Link>
                        )) :
                    <div className='flex justify-center items-center h-full'>
                        <p className='text-5xl'>
                            No Movie Found
                        </p>
                    </div>
            }
        </article>

    )
}
