import { getAiringTodaySeries, getOnTheAirSeries, getSeriesGenres, getTopRatedSeries } from "../../api/series-api"
import { HeroSection } from "../../components/sections"
import { GenreSection } from "../../components/sections/main-section/genre-section"
import { SearchSection } from "../../components/sections/main-section/search-section"
import { ShowCaseSection } from "../../components/sections/main-section/showcase-section"
import { type GenreData, type SeriesData } from "../../types"

export const SeriesPage = () => {

    const { data: AiringTodaySeriesData, isLoading: AiringTodaySeriesLoading, isError: AiringTodaySeriesError } = getAiringTodaySeries()
    const { data: OnTheAirSeriesData, isLoading: OnTheAirSeriesLoading, isError: OnTheAirSeriesError } = getOnTheAirSeries()
    // const { data: PopularSeriesData, isLoading: PopularSeriesLoading, isError: PopularSeriesError } = getPopularSeries()
    const { data: TopRatedSeriesData, isLoading: TopRatedSeriesLoading, isError: TopRatedSeriesError } = getTopRatedSeries()
    // const { data: DiscoverSeriesData, isLoading: DiscoverSeriesLoading, isError: DiscoverSeriesError } = getDiscoverSeries()
    const { data: SeriesGenresData, isLoading: SeriesGenresLoading, isError: SeriesGenresError } = getSeriesGenres()


    return (
        <>
            <HeroSection
                data={AiringTodaySeriesData as SeriesData}
                isLoading={AiringTodaySeriesLoading}
                isError={AiringTodaySeriesError}
            />

            <SearchSection
                sectionHeading='Search Series'
            />

            <ShowCaseSection
                sectionHeading="Currently On Air"
                data={OnTheAirSeriesData as SeriesData}
                isLoading={OnTheAirSeriesLoading}
                isError={OnTheAirSeriesError}
            />

            {/* <ShowCaseSection
                sectionHeading="Popular Series"
                data={PopularSeriesData as SeriesData}
                isLoading={PopularSeriesLoading}
                isError={PopularSeriesError}
            /> */}

            <ShowCaseSection
                sectionHeading="Top Rated Series"
                data={TopRatedSeriesData as SeriesData}
                isLoading={TopRatedSeriesLoading}
                isError={TopRatedSeriesError}
            />

            {/* <ShowCaseSection
                sectionHeading="Discover Series"
                data={DiscoverSeriesData as SeriesData}
                isLoading={DiscoverSeriesLoading}
                isError={DiscoverSeriesError}
            /> */}

            <GenreSection
                sectionHeading="Series Genres"
                data={SeriesGenresData as GenreData}
                isLoading={SeriesGenresLoading}
                isError={SeriesGenresError}
            />

        </>
    )
}
