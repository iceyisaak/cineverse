import { CardSliderContent } from "./cardslider-content"

import { DataStatus } from "../../../types"

import style from './cardslider-style.module.scss'


export const CardSlider = ({ data, isLoading, isError }: DataStatus) => {

    return (
        <article className={`${style.cardslider}`}>

            {isError && 'Something went wrong.'}

            <CardSliderContent
                data={data}
                isLoading={isLoading}
            />

        </article>
    )
}
