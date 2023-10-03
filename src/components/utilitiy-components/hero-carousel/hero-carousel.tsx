import { useEffect, useState } from 'react'
import { HeroCarouselContent } from './herocarousel-content'
import { HeroCarouselControl } from './herocarousel-control'

import { type DataStatus } from '../../../types'

import style from './herocarousel-style.module.scss'

type HeroCarousel = DataStatus & {
    itemLimit: number
}


export const HeroCarousel = ({ data, isLoading, isError, itemLimit }: HeroCarousel) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTouched, setIsTouched] = useState(false)

    const handleClickNext = () => {
        setIsTouched(true)
        handleNextSlide()
    }

    const handleClickPrev = () => {
        setIsTouched(true)
        handlePrevSlide()
    }

    const handleClickJump = (index: number) => {
        setIsTouched(true)
        handleSlideJump(index)
    }

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex + 1 === itemLimit ? 0 : prevIndex + 1
        })
    }

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex - 1 < 0 ? itemLimit - 1 : prevIndex - 1
        })
    }

    const handleSlideJump = (index: number) => {
        setCurrentIndex(index)
    }

    // Autoplay Slide
    useEffect(() => {

        //Stop Autoplay when slide is touched
        if (!isTouched) {
            const slideInterval = setInterval(() => {
                handleNextSlide()
            }, 3000)
            return () => {
                clearInterval(slideInterval)
            }
        }
    }, [isTouched])



    return (
        <article className={`${style.carousel}`}>

            {isError && 'Something went wrong.'}

            <HeroCarouselControl
                data={data}
                handleClickNext={handleClickNext}
                handleClickJump={(index) => handleClickJump(index)}
                handleClickPrev={handleClickPrev}
                itemLimit={itemLimit}
                currentIndex={currentIndex}
            />

            <HeroCarouselContent
                data={data}
                currentIndex={currentIndex}
                isLoading={isLoading}
                itemLimit={itemLimit}
            />

        </article>
    )
}
