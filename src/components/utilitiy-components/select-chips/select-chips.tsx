import { DataStatus } from "../../../types"

import style from './select-chips.module.scss'


export const SelectChips = ({ data, isLoading, isError }: DataStatus) => {

    return (
        <article className={`${style.selectchips}`}>
            {isLoading && 'Loading...'}
            {isError && 'Something went wrong.'}
            {
                data &&
                'genres' in data &&
                data?.genres?.map((genre, id) => (
                    <button
                        key={id}
                        className={`${style.chip} text-2xl`}
                    >
                        {genre.name}
                    </button>
                ))
            }
        </article>
    )
}
