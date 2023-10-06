// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../../components/utilitiy-components/search-bar";

export function SearchPage() {

    // const { movieSearchTerm } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    console.log('searchParams: ', searchParams.get('query'))

    return (
        // <GenreSection />
        <section>
            <p>Search: {searchParams.get('query')}</p>
            <SearchBar />
            {/* {movieSearchTerm} */}
        </section>
    )
}
