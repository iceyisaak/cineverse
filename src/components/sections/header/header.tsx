import { DataStatus } from "../../../types"

import { MOVIE_BACKDROP_URL } from "../../../api/api-constant"

import style from './header.module.scss'

export const Header = ({ data, isLoading, isError }: DataStatus) => {


    const backdrop_path = `${MOVIE_BACKDROP_URL}${data &&
        'backdrop_path' in data &&
        data?.backdrop_path}`

    const backdrop_path_checked = data &&
        'backdrop_path' in data &&
        data?.backdrop_path && backdrop_path



    return (
        <header className={`${style.header}`}>
            <div className={`${style.header__content}`}>
                <div className={`${style.header__caption}`}>

                    {isLoading && 'Loading...'}
                    {isError && 'Something went wrong.'}

                    <h1 className="text-7xl text-gray-300 mb-5">
                        {
                            data &&
                            'title' in data &&
                            data?.title
                            ||
                            data &&
                            'name' in data &&
                            data?.name
                        }
                    </h1>

                    <span className="text-gray-300">
                        {data &&
                            'release_date' in data &&
                            data?.release_date.slice(0, 4)
                            ||
                            data &&
                            'last_air_date' in data &&
                            data?.last_air_date.slice(0, 4)
                        } | {data &&
                            'original_language' in data &&
                            data?.original_language.toUpperCase()
                        }
                    </span>

                    <p className={`${style.tagline} text-2xl text-gray-300 mt-2`}>
                        {data && 'genres' in data && data?.genres?.map((genre) => (
                            <span key={genre.id} className={`${style.panel__button}`}>
                                {genre.name}
                            </span>
                        ))}
                    </p>
                </div>
            </div>


            <div className={`${style.header__overlay}`} />
            <img
                src={backdrop_path_checked as string}
                className={`${style.header__img}`}
            />

        </header>
    )
}
