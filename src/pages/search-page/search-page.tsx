// import { useParams } from "react-router-dom";
import { useLocation, useSearchParams } from "react-router-dom";
// import { SearchBar } from "../../components/utilitiy-components/search-bar";
import { SearchSection } from "../../components/sections/main-section/search-section";
import { searchMovies } from "../../api/movie-api";
import { Breadcrumbs } from "../../components/utilitiy-components/breadcrumbs/breadcrumbs";
import { MovieData } from "../../types";

export function SearchPage() {

    // const { movieSearchTerm } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()
    // const location = useLocation()
    const { data: SearchMoviesData } = searchMovies(searchParamsString)

    console.log('searchParams: ', SearchMoviesData)

    return (
        // <GenreSection />
        <>
            <SearchSection />
            {/* {movieSearchTerm} */}
            <Breadcrumbs
                data={SearchMoviesData as MovieData}
            />
            <section className="mt-32">
                <p>Search Results for: {searchParams.get('query')}</p>
            </section>
        </>
    )
}
