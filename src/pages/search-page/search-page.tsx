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
            <section className={`${style.search__page} mt-32 mb-40 px-4 flex flex-wrap`}>

                <p className="text-2xl">
                    Total Results: {SearchMoviesData?.total_results} Item(s)
                </p>

                <article className="flex flex-wrap">
                    {
                        SearchMoviesData?.results.map((movie) => (
                            <Link
                                key={movie.id}
                                className={`
                                  ${style.result__card}
                                  flex flex-wrap flex-col py-8
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
                                    <p className="break-words">
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


                <article className="flex justify-center items-center w-full">

                    <BsChevronDoubleLeft size={20} onClick={firstPageHandler} />
                    <BsChevronLeft size={20} onClick={prevPageHandler} />

                    <p>
                        Page: {currentPage} of {SearchMoviesData?.total_pages}
                    </p>

                    <BsChevronRight size={20} onClick={nextPageHandler} />
                    <BsChevronDoubleRight size={20} onClick={lastPageHandler} />

                </article>

            </section >
        </>
    )
}
