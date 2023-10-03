import { GoLinkExternal } from 'react-icons/go'
import { Link } from "react-router-dom"
import { MOVIE_POSTER_URL } from "../../../../api/api-constant"
import { DataStatus } from "../../../../types"


export const DetailSection = ({ data, isLoading, isError }: DataStatus) => {
    return (
        <section className="px-6 pb-32">


            {isLoading && 'Loading....'}
            {isError && 'Something went wrong.'}

            <h3 className="text-8xl mb-3">
                {data && 'original_title' in data && data?.original_title}
            </h3>

            <div className="flex justify-between">
                <div className="basis-1/3">

                    {data && 'imdb_id' in data &&
                        <p className="mb-20 text-xl">
                            <span className="font-bold text-xl">IMDB ID: </span>
                            {data?.imdb_id}
                        </p>
                    }

                    <h2 className="text-xl font-bold mb-2">Overview:</h2>
                    <div className="mb-20">
                        <p className="text-xl">
                            {data && 'overview' in data && data?.overview}
                        </p>
                    </div>


                    {data && 'genres' in data &&
                        <div className="mb-16">
                            <h3 className="text-xl font-bold mb-3">
                                Genres:
                            </h3>
                            <ul className="flex flex-wrap">
                                {data?.genres?.map((genre) => (
                                    <li key={genre.id} className="px-8 py-1 rounded-md bg-gray-100 mr-4 mb-2 text-xl">
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                    {data && 'release_date' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Release Date: </span>
                            {data?.release_date}
                        </p>
                    }

                    {data && 'first_air_date' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">First Air Date: </span>
                            {data?.first_air_date}
                        </p>
                    }

                    {data && 'last_air_date' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Last Air Date: </span>
                            {data?.last_air_date}
                        </p>
                    }


                    {data && 'number_of_episodes' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">No. of Episodes: </span>
                            {data?.number_of_episodes}
                        </p>
                    }

                    {data && 'number_of_seasons' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">No. of Seasons: </span>
                            {data?.number_of_seasons}
                        </p>
                    }


                    {data && 'runtime' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Runtime: </span>
                            {data?.runtime} min
                        </p>
                    }

                    {data && 'episode_run_time' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Episode Runtime: </span>
                            {data?.episode_run_time} min
                        </p>
                    }

                    <p className="mb-6 text-xl">
                        <span className="font-bold text-xl">Original Language: </span>
                        {data && 'original_language' in data && data?.original_language.toUpperCase()}
                    </p>

                    <div className="mb-10">
                        <h3 className="text-xl font-bold mb-3">Spoken Language: </h3>
                        <ul className="flex">
                            {data && 'spoken_languages' in data && data?.spoken_languages.map((language) => (
                                <li key={language.iso_639_1} className="px-8 py-1 rounded-md bg-gray-100 mr-4 text-xl">
                                    {language.english_name}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {data && 'homepage' in data && data?.homepage !== '' &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Website: </span>
                            <Link to={data?.homepage} target="_blank" className="text-xl">
                                {data?.homepage} <GoLinkExternal size={10} className='inline' />
                            </Link>
                        </p>
                    }

                    <p className="mb-6 text-xl">
                        <span className="font-bold text-xl">Popularity: </span>
                        {data && 'popularity' in data && data?.popularity}
                    </p>


                    {data && 'original_title' in data && data?.original_title !== '' &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Original Title: </span>
                            {data?.original_title}
                        </p>
                    }



                    {data && 'tagline' in data && data?.tagline !== '' &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Tagline: </span>
                            {data?.tagline}
                        </p>
                    }

                    {data && 'budget' in data && data?.budget !== 0 &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Budget: </span>
                            {data?.budget} USD
                        </p>
                    }


                    {data && 'revenue' in data && data?.revenue !== 0 &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Revenue: </span>
                            {data?.revenue} USD
                        </p>
                    }

                    {data && 'vote_average' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Vote Average: </span>
                            {data?.vote_average}
                        </p>
                    }

                    {data && 'vote_count' in data &&
                        <p className="mb-6 text-xl">
                            <span className="font-bold text-xl">Vote Count: </span>
                            {data?.vote_count}
                        </p>
                    }

                    {data && 'production_countries' in data && data?.production_countries.length > 0 &&
                        <div className="mb-16">
                            <h3 className="text-xl font-bold mb-2">Production Countries: </h3>
                            <ul className="flex flex-wrap">
                                {data?.production_countries.map((country) => (
                                    <li key={country.iso_3166_1} className="px-8 py-1 rounded-md bg-gray-100 mr-2 mb-2 text-xl">
                                        {country.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                    {data && 'production_companies' in data && data?.production_companies.length > 0 &&
                        < div className="mb-16">
                            <h3 className="text-xl font-bold mb-2">Production Companies:</h3>
                            <ul className="flex flex-wrap">
                                {data && 'production_companies' in data && data?.production_companies.map((company) => (
                                    <li key={company.id} className="px-8 py-1 rounded-md bg-gray-100 mr-2 mb-2 text-xl">
                                        {company.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                </div>


                <div className="basis-1/2">
                    <img
                        src={`${MOVIE_POSTER_URL}${data && 'poster_path' in data && data.poster_path}`}
                        alt={`${data && 'title' in data && data.title}`}
                        title={`${data && 'title' in data && data.title}`}
                    />
                </div>

            </div>
        </section >
    )
}
