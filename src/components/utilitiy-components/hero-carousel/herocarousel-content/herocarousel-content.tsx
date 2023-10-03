// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MOVIE_BACKDROP_URL } from '../../../../api/api-constant'
import { getMovieGenres } from '../../../../api/movie-api'
import { type DataStatus } from '../../../../types'
// import { getSeriesGenres } from '../../../../api/series-api'

import style from '../herocarousel-style.module.scss'

type CarouselContent = Omit<DataStatus, 'isError'> & {
    currentIndex: number,
    itemLimit: number
}

export const HeroCarouselContent = ({ currentIndex, isLoading, data, itemLimit }: CarouselContent) => {

    const { data: MovieGenres } = getMovieGenres()
    // const { data: SeriesGenres } = getSeriesGenres()

    return (
        <div
            className={`${style.carousel__content}`}
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
        >
            {isLoading && 'Loading...'}
            {
                data &&
                'results' in data &&
                data?.results?.map((movie, index) => {
                    if (index < itemLimit) {
                        return (
                            <div
                                className={`${style.carousel__item}`}
                                key={index}
                            >
                                <div className={`${style.carousel__caption}`}>
                                    <h1 className={`
                                    ${style.carousel__heading}

                                `}>
                                        {'title' in movie ?
                                            <Link
                                                to={`/movies/${movie.id.toString()}/`}
                                                className={`${style.carousel__link__heading} text-6xl`}
                                            >
                                                {movie?.title}
                                            </Link>
                                            :
                                            <Link
                                                to={`/series/${movie.id.toString()}/`}
                                                className={`${style.carousel__link__heading} text-6xl`}
                                            >
                                                {movie?.name}
                                            </Link>
                                        }
                                    </h1>
                                    <span className={`${style.carousel__subheading}`}>
                                        {'release_date' in movie ?
                                            <Link
                                                to={`/movies/${movie.id.toString()}/`}
                                                className={`${style.carousel__link__text}`}
                                            >
                                                {movie?.release_date?.slice(0, 4)} | {movie.original_language.toLocaleUpperCase()}
                                            </Link>
                                            :
                                            <Link
                                                to={`/series/${movie.id.toString()}`}
                                                className={`${style.carousel__link__text}`}
                                            >
                                                {movie?.first_air_date?.slice(0, 4)} | {movie.original_language.toLocaleUpperCase()}
                                            </Link>
                                        }
                                    </span>
                                    <p className={`
                                    ${style.carousel__subheading}
                                    mt-5
                                `}>
                                        {'title' in movie &&
                                            <Link
                                                to={`/movies/${movie.id.toString()}/`}
                                                className={`
                                                ${style.carousel__subheading}
                                                text-2xl mt-5
                                                `}
                                            >
                                                {movie?.genre_ids.map(genre => (
                                                    <span key={genre} className={`${style.label}`}>
                                                        {
                                                            MovieGenres?.genres.map(movie_genre => (
                                                                genre === movie_genre.id &&
                                                                movie_genre.name
                                                            ))
                                                        }
                                                    </span>
                                                ))}
                                            </Link>
                                        }
                                        {
                                            'name' in movie &&
                                            <Link
                                                to={`/series/${movie.id.toString()}/`}
                                                className={`${style.carousel__subheading}
                                                text-2xl mt-5
                                                `}
                                            >
                                                {/* {movie?.genre_ids.map(genre => (
                                                    <span key={genre} className={`${style.label}`}>
                                                        {SeriesGenres?.genres.map(movie_genre => (
                                                            movie_genre.name &&
                                                            genre === movie_genre.id
                                                            &&
                                                            movie_genre.name
                                                        ))
                                                        }
                                                    </span>
                                                ))} */}
                                                {movie.overview}
                                            </Link>
                                        }

                                    </p>
                                </div>

                                <div className={`${style.carousel__overlay}`} />

                                <img
                                    src={`${MOVIE_BACKDROP_URL}${movie.backdrop_path}`}
                                    className={`${style.carousel__slide}`}
                                />

                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
