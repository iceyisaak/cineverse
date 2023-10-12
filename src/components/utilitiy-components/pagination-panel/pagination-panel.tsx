import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs"

import { DataStatus } from "../../../types"
import style from './pagination-panel.module.scss'

type PaginationPanel = DataStatus & {
    currentPage: number,
    firstPageHandler: () => void,
    prevPageHandler: () => void,
    nextPageHandler: () => void,
    lastPageHandler: () => void
}

export const PaginationPanel = ({ currentPage, firstPageHandler, prevPageHandler, nextPageHandler, lastPageHandler, data }: PaginationPanel) => {
    return (
        <article className="flex justify-center items-center w-full mt-32">

            <BsChevronDoubleLeft size={20} onClick={firstPageHandler} className={`${style.indicator}`} />
            <BsChevronLeft size={20} onClick={prevPageHandler} className={`${style.indicator}`} />

            <p className="mx-10">
                Page: {currentPage} of {data && 'total_pages' in data && data?.total_pages}
            </p>

            <BsChevronRight size={20} onClick={nextPageHandler} className={`${style.indicator}`} />
            <BsChevronDoubleRight size={20} onClick={lastPageHandler} className={`${style.indicator}`} />

        </article>
    )
}
