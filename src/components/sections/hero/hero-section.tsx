import { DataStatus } from "../../../types"
import { HeroCarousel } from "../../utilitiy-components/hero-carousel"



export const HeroSection = ({ data, isLoading, isError }: DataStatus) => {


    return (
        <header className="bg-gray-600">
            <HeroCarousel
                data={data}
                isLoading={isLoading}
                isError={isError}
                itemLimit={6}
            />
        </header >
    )
}

