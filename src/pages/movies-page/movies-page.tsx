import {
    getDiscoverMovies,
    getMovieGenres,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies,
    getUpcomingMovies,
    searchMovies
} from '../../api/movie-api'
import { HeroSection } from '../../components/sections'
import { GenreSection } from '../../components/sections/main-section/genre-section'
import { SearchBarSection } from '../../components/sections/main-section/searchbar-section'
import { ShowCaseSection } from '../../components/sections/main-section/showcase-section'
import { type GenreData, type MovieData } from '../../types'



export const MoviesPage = () => {

    const { data: NowPlayingMoviesData, isLoading: NowPlayingMoviesLoading, isError: NowPlayingMoviesError } = getNowPlayingMovies()
    const { data: PopularMoviesData, isLoading: PopularMoviesLoading, isError: PopularMoviesError } = getPopularMovies()
    const { data: TopRatedMoviesData, isLoading: TopRatedMoviesLoading, isError: TopRatedMoviesError } = getTopRatedMovies()
    const { data: TrendingMoviesData, isLoading: TrendingMoviesLoading, isError: TrendingMoviesError } = getTrendingMovies()
    const { data: UpcomingMoviesData, isLoading: UpcomingMoviesLoading, isError: UpcomingMoviesError } = getUpcomingMovies()
    const { data: DiscoverMoviesData, isLoading: DiscoverMoviesLoading, isError: DiscoverMoviesError } = getDiscoverMovies()
    const { data: GenreData, isLoading: GenreLoading, isError: GenreError } = getMovieGenres()
    // const { data: SearchResultsData } = searchMovies(searchInput)



    return (
        <>
            <HeroSection
                data={NowPlayingMoviesData as MovieData}
                isLoading={NowPlayingMoviesLoading}
                isError={NowPlayingMoviesError}
            />
            <SearchBarSection
                sectionHeading='Search Movies'
            // data={SearchResultsData as MovieData}
            // searchInput={searchInput}
            />
            <ShowCaseSection
                sectionHeading='Popular Movies'
                data={PopularMoviesData as MovieData}
                isLoading={PopularMoviesLoading}
                isError={PopularMoviesError}
            />
            <ShowCaseSection
                sectionHeading='Top Rated Movies'
                data={TopRatedMoviesData as MovieData}
                isLoading={TopRatedMoviesLoading}
                isError={TopRatedMoviesError}
            />
            <ShowCaseSection
                sectionHeading='Trending Movies'
                data={TrendingMoviesData as MovieData}
                isLoading={TrendingMoviesLoading}
                isError={TrendingMoviesError}
            />
            <ShowCaseSection
                sectionHeading='Upcoming Movies'
                data={UpcomingMoviesData as MovieData}
                isLoading={UpcomingMoviesLoading}
                isError={UpcomingMoviesError}
            />

            <ShowCaseSection
                sectionHeading='Discover Movies'
                data={DiscoverMoviesData as MovieData}
                isLoading={DiscoverMoviesLoading}
                isError={DiscoverMoviesError}
            />
            <GenreSection
                sectionHeading='Movie Genres'
                data={GenreData as GenreData}
                isLoading={GenreLoading}
                isError={GenreError}
            />
        </>
    )
}
