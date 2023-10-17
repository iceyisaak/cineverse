import { useParams } from "react-router-dom"

import { getMovieDetail } from "../../api/movie-api"
import { Header } from "../../components/sections/header"

import { getSeriesDetail } from "../../api/series-api"
import { DetailSection } from "../../components/sections/main-section/detail-section"
import { Breadcrumbs } from "../../components/utilitiy-components/breadcrumbs/breadcrumbs"
import { MovieDetailData, SeriesDetailData } from "../../types"


export const DetailPage = () => {

  const { movieId, seriesId } = useParams()

  let movie_id_number: number | undefined
  let series_id_number: number | undefined


  if (movieId) {
    movie_id_number = parseInt(movieId)
  } else if (seriesId) {
    series_id_number = parseInt(seriesId)
  }

  const { data: GetMovieDetailData, isLoading: GetMovieDetailLoading, isError: GetMovieDetailError } = getMovieDetail(movie_id_number)
  const { data: GetSeriesDetailData, isLoading: GetSeriesDetailLoading, isError: GetSeriesDetailError } = getSeriesDetail(series_id_number)


  return (
    <>
      {
        movieId !== undefined ?
          <>
            <Header
              data={GetMovieDetailData as MovieDetailData}
              isLoading={GetMovieDetailLoading}
              isError={GetMovieDetailError}
            />
            <Breadcrumbs
              data={GetMovieDetailData as MovieDetailData}
            />
            <DetailSection
              data={GetMovieDetailData as MovieDetailData}
              isLoading={GetMovieDetailLoading}
              isError={GetMovieDetailError}
            />
          </>
          :
          seriesId !== undefined &&
          <>
            <Header
              data={GetSeriesDetailData as SeriesDetailData}
              isLoading={GetSeriesDetailLoading}
              isError={GetSeriesDetailError}
            />
            <Breadcrumbs
              data={GetSeriesDetailData as SeriesDetailData}
            />
            <DetailSection
              data={GetSeriesDetailData as SeriesDetailData}
              isLoading={GetSeriesDetailLoading}
              isError={GetSeriesDetailError}
            />
          </>
      }

    </>
  )
}
