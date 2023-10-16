import { Link } from "react-router-dom"
import { DataStatus } from "../../../../types"


import { MOVIE_POSTER_URL } from "../../../../api/api-constant"
import style from './search-section.module.scss'


type SearchSection = DataStatus


const SearchSection = ({ data }: SearchSection) => {



    return (
        <section className={`${style.search__page} mt-32 mb-40 px-4 flex flex-wrap justify-center`}>

            {
                data && 'total_results' in data && data?.total_results === 0 ?
                    <p className="text-6xl">
                        - No Movies Found -
                    </p> :

                    <div className={`${style.result__container} flex flex-col justify-center self-center w-10/12`}>
                        <p className="text-2xl mb-6">
                            Total Results: {data && 'total_results' in data && data?.total_results} Item(s)
                        </p>
                        <article className={`inline-flex flex-wrap gap-8`}>
                            {
                                data && 'results' in data && data?.results.map((movie) => (
                                    <Link
                                        key={movie.id}
                                        className={`
                                        ${style.result__card}
                                        flex flex-wrap flex-col
                                    `}
                                        to={`/movies/${movie.id.toString()}`}
                                    >
                                        <div className="inline-flex">
                                            <img
                                                src={`${movie?.poster_path ?
                                                    `${MOVIE_POSTER_URL}${movie.poster_path}` :
                                                    'https://placehold.co/200x300?text=No Poster Available'
                                                    }`}
                                                className={`${style.tile__img}`}
                                            />
                                        </div>
                                        <div className="flex flex-wrap flex-col">
                                            <p className="break-words text-2xl ">
                                                {'title' in movie && movie?.title}
                                            </p>
                                            <p>
                                                {'release_date' in movie && movie?.release_date.slice(0, 4) || '-'}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </article>
                    </div>
            }

        </section >

    )
}

export default SearchSection