import { getTrendingCinema } from "../../api/home-api"
import { getTrendingMovies } from "../../api/movie-api"
// import { getTrendingSeries } from "../../api/series-api"
import { HeroSection } from "../../components/sections"
import { ShowCaseSection } from "../../components/sections/main-section/showcase-section"
import { MovieData, SeriesData } from "../../types"



export const Home = () => {

    const { data: TrendingCinemaData, isLoading: TrendingCinemaLoading, isError: TrendingCinemaError } = getTrendingCinema()
    const { data: TrendingMoviesData, isLoading: TrendingMoviesLoading, isError: TrendingMoviesError } = getTrendingMovies()
    // const { data: TrendingSeriesData, isLoading: TrendingSeriesLoading, isError: TrendingSeriesError } = getTrendingSeries()


    return (
        <>
            <HeroSection
                data={TrendingCinemaData as SeriesData}
                isLoading={TrendingCinemaLoading}
                isError={TrendingCinemaError}
            />
            <ShowCaseSection
                sectionHeading="Trending Cinema"
                data={TrendingMoviesData as MovieData}
                isLoading={TrendingMoviesLoading}
                isError={TrendingMoviesError}
            />
            <div className="mb-72" />
        </>
    )
}
