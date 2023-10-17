import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/movie-api";
import { SearchBarSection } from "../../components/sections/main-section/searchbar-section";
import { Breadcrumbs } from "../../components/utilitiy-components/breadcrumbs";
import { PaginationPanel } from "../../components/utilitiy-components/pagination-panel";

import { searchSeries } from "../../api/series-api";
import SearchSection from "../../components/sections/main-section/search-section/search-section";
import { CinemaType, MovieData, SeriesData } from "../../types";


type SearchPage = {
    cinemaSearchType?: 'movies' | 'series'
}

export function SearchPage({ cinemaSearchType }: SearchPage) {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()

    let movieSearchParam: string | undefined;
    let seriesSearchParam: string | undefined;


    if (cinemaSearchType === 'movies') {
        movieSearchParam = searchParamsString
    } else if (cinemaSearchType === 'series') {
        seriesSearchParam = searchParamsString
    }

    const { data: SearchMoviesData } = searchMovies(movieSearchParam, currentPage)
    const { data: SearchSeriesData } = searchSeries(seriesSearchParam, currentPage)


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


    useEffect(() => {
        if (currentPage > SearchMoviesData?.total_pages!) {
            setCurrentPage(1)
        }
    }, [SearchMoviesData?.total_pages!])



    return (

        cinemaSearchType === 'movies' ?
            <>
                <SearchBarSection />
                <Breadcrumbs
                    data={SearchMoviesData as MovieData}
                />
                <SearchSection
                    data={SearchMoviesData as MovieData}
                />
                <PaginationPanel
                    currentPage={currentPage}
                    firstPageHandler={firstPageHandler}
                    prevPageHandler={prevPageHandler}
                    nextPageHandler={nextPageHandler}
                    lastPageHandler={lastPageHandler}
                    data={SearchMoviesData as MovieData}
                />
            </>
            :
            cinemaSearchType === 'series' &&
            <>
                <SearchBarSection />
                <Breadcrumbs
                    data={SearchSeriesData as SeriesData}
                />
                <SearchSection
                    data={SearchSeriesData as SeriesData}
                />
                <PaginationPanel
                    currentPage={currentPage}
                    firstPageHandler={firstPageHandler}
                    prevPageHandler={prevPageHandler}
                    nextPageHandler={nextPageHandler}
                    lastPageHandler={lastPageHandler}
                    data={SearchSeriesData as SeriesData}
                />
            </>

    )
}
