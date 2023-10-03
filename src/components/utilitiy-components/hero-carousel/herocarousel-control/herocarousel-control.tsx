import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { GoDot, GoDotFill } from 'react-icons/go'


import { DataStatus } from '../../../../types'

import style from '../herocarousel-style.module.scss'

type CarouselControl = Omit<DataStatus, 'isError' | 'isLoading'> & {
    handleClickPrev: () => void,
    handleClickNext: () => void,
    handleClickJump: (index: number) => void,
    itemLimit: number,
    currentIndex: number
}


export const HeroCarouselControl = ({
    data, handleClickPrev, handleClickNext, handleClickJump, itemLimit, currentIndex
}: CarouselControl) => {
    return (
        <div className={`${style.carousel__control}`}>

            <BsChevronCompactLeft
                onClick={handleClickPrev}
                className={`
                        ${style.carousel__arrow}
                        ${style.carousel__arrow__left}
                `}
            />
            <BsChevronCompactRight
                onClick={handleClickNext}
                className={`
                       ${style.carousel__arrow}
                       ${style.carousel__arrow__right}
                    `}
            />
            <div className={`${style.carousel__indicators}`}>
                {
                    data &&
                    'results' in data &&
                    data?.results?.map((_, index) => {
                        if (index < itemLimit) {
                            return (
                                <div key={index}>
                                    {
                                        currentIndex === index ?
                                            <GoDotFill className={`${style.carousel__indicators__item}`} /> :
                                            <GoDot
                                                className={`${style.carousel__indicators__item}`}
                                                onClick={() => handleClickJump(index)}
                                            />
                                    }
                                </div>

                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
