// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
// import { SearchBar } from "../../components/utilitiy-components/search-bar";
import { MOVIE_POSTER_URL } from "../../api/api-constant";
import { searchMovies } from "../../api/movie-api";
import { SearchSection } from "../../components/sections/main-section/search-section";
import { Breadcrumbs } from "../../components/utilitiy-components/breadcrumbs/breadcrumbs";
import { MovieData } from "../../types";

export function SearchPage() {

    // const { movieSearchTerm } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()
    // const location = useLocation()
    const { data: SearchMoviesData } = searchMovies(searchParamsString)

    console.log('SearchMoviesData: ', SearchMoviesData)


    return (
        // <GenreSection />
        <>
            <SearchSection />
            {/* {movieSearchTerm} */}
            <Breadcrumbs
                data={SearchMoviesData as MovieData}
            />
            <section className="mt-32 flex flex-wrap bg-red-100">
                {
                    SearchMoviesData?.results.map((movie) => (
                        <div key={movie.id} className="bg-green-200 w-80">
                            <img
                                src={`${movie.poster_path ?
                                    `${MOVIE_POSTER_URL}${movie.poster_path}` :
                                    'https://placehold.co/200x300?text=No Poster Available'
                                    }`}
                                className=""
                            />
                            <p className="break-words">
                                {movie.title}
                            </p>
                            <p>
                                {movie?.release_date.slice(0, 4) || '-'}
                            </p>
                        </div>
                    ))
                }


            </section>
        </>
    )
}
