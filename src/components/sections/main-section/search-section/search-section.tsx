import { SearchBar } from "../../../utilitiy-components/search-bar"


type SearchSection = {
    sectionHeading: string
}

export const SearchSection = ({ sectionHeading }: SearchSection) => {
    return (
        <section className='flex flex-col items-center pt-40'>
            <h1 className="text-6xl text-center mb-10">
                {sectionHeading}
            </h1>
            <SearchBar />
        </section>
    )
}
