import { type DataStatus, type MovieData } from '../../../../types'
import { CardSlider } from '../../../utilitiy-components/card-slider'


type ShowCaseSection = DataStatus & {
    sectionHeading: string
}


export const ShowCaseSection = ({ data, isLoading, isError, sectionHeading }: ShowCaseSection) => {


    return (
        <section className='pt-80'>
            <h1 className='text-5xl pb-8 pl-4'>
                {sectionHeading}
            </h1>
            <CardSlider
                data={data as MovieData}
                isLoading={isLoading}
                isError={isError}
            />
        </section>
    )
}
