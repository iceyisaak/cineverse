import { type DataStatus, type GenreData } from "../../../../types"
import { SelectChips } from "../../../utilitiy-components/select-chips"


type GenreSection = DataStatus & {
    sectionHeading: string
}


export const GenreSection = ({ data, isLoading, isError, sectionHeading }: GenreSection) => {

    return (
        <section className="genre__section pt-80 pb-96">
            <h1 className="text-5xl pl-4 pb-10">
                {sectionHeading}
            </h1>
            <SelectChips
                data={data as GenreData}
                isLoading={isLoading}
                isError={isError}
            />

        </section>
    )
}
