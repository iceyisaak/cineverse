import { Link, useSearchParams } from "react-router-dom";
import { MOVIE_POSTER_URL } from "../../api/api-constant";
import { searchMovies } from "../../api/movie-api";
import { SearchSection } from "../../components/sections/main-section/search-section";
import { Breadcrumbs } from "../../components/utilitiy-components/breadcrumbs/breadcrumbs";
import { MovieData } from "../../types";

import { useEffect, useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import style from './search-page.module.scss';

export function SearchPage() {

    // const { movieSearchTerm } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()
    // const location = useLocation()
    // console.log('currentPage: ', currentPage)
    // console.log('searchParamsString: ', searchParamsString)

    const { data: SearchMoviesData } = searchMovies(searchParamsString, currentPage)


    const nextPageHandler = () => {
        if (currentPage === SearchMoviesData?.total_pages) return
        setCurrentPage(currentPage + 1)
    }

    const lastPageHandler = () => {
        setCurrentPage(SearchMoviesData?.total_pages!)
    }

    const firstPageHandler = () => {
        setCurrentPage(1)
    }

    const prevPageHandler = () => {
        if (currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }


    useEffect(() => {
        updateResultPageQuery()
    }, [currentPage])


    const updateResultPageQuery = () => {
        searchParams.set("page", currentPage.toString())
        setSearchParams(searchParams)
    }



    return (
        // <GenreSection />
        <>
            <SearchSection />
            {/* {movieSearchTerm} */}
            <Breadcrumbs
                data={SearchMoviesData as MovieData}
            />
            <section className={`${style.search__page} mt-32 mb-40 px-4 flex flex-wrap justify-center`}>

                {
                    SearchMoviesData?.total_results === 0 ?
                        <p className="text-6xl">
                            - No Movies Found -
                        </p> :

                        <div className={`${style.result__container} flex flex-col justify-center self-center w-10/12`}>
                            <p className="text-2xl mb-6">
                                Total Results: {SearchMoviesData?.total_results} Item(s)
                            </p>
                            <article className={`inline-flex flex-wrap gap-8`}>
                                {
                                    SearchMoviesData?.results.map((movie) => (
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
                                                    src={`${movie.poster_path ?
                                                        `${MOVIE_POSTER_URL}${movie.poster_path}` :
                                                        'https://placehold.co/200x300?text=No Poster Available'
                                                        }`}
                                                    className={`${style.tile__img}`}
                                                />
                                            </div>
                                            <div className="flex flex-wrap flex-col">
                                                <p className="break-words text-2xl ">
                                                    {movie.title}
                                                </p>
                                                <p>
                                                    {movie?.release_date.slice(0, 4) || '-'}
                                                </p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </article>


                            <article className="flex justify-center items-center w-full mt-32">

                                <BsChevronDoubleLeft size={20} onClick={firstPageHandler} className={`${style.indicator}`} />
                                <BsChevronLeft size={20} onClick={prevPageHandler} className={`${style.indicator}`} />

                                <p className="mx-10">
                                    Page: {currentPage} of {SearchMoviesData?.total_pages}
                                </p>

                                <BsChevronRight size={20} onClick={nextPageHandler} className={`${style.indicator}`} />
                                <BsChevronDoubleRight size={20} onClick={lastPageHandler} className={`${style.indicator}`} />

                            </article>

                        </div>
                }

            </section >
        </>
    )
}
