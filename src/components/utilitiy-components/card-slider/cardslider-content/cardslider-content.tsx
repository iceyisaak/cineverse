import { Link } from "react-router-dom"
import { MOVIE_POSTER_URL } from "../../../../api/api-constant"

import { type DataStatus } from "../../../../types"

import style from '../cardslider-style.module.scss'

type CardCarouselContent = Omit<DataStatus, 'isError'>


export const CardSliderContent = ({ data, isLoading }: CardCarouselContent) => {
    return (
        <article className={`${style.cardslider__content}`}>
            {
                isLoading ? "Loading..." :
                    <>
                        {
                            'results' in data && data?.results?.map((movie, index) => (
                                <Link
                                    key={index}
                                    className={`${style.cardslider__card}`}
                                    to={'title' in movie ?
                                        `/movies/${movie.id.toString()}/` :
                                        `/series/${movie.id.toString()}/`
                                    }
                                >
                                    <img
                                        src={`${MOVIE_POSTER_URL}${movie.poster_path}`}
                                        alt={'title' in movie ?
                                            movie.title :
                                            movie.name
                                        }
                                        title={'title' in movie ?
                                            movie.title :
                                            movie.name
                                        }
                                        className={`${style.cardslider__image}`}
                                    />
                                </Link>
                            ))
                        }
                    </>
            }
        </article>
    )
}
