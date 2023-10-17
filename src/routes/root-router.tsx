import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { RootLayout } from "../layouts/root-layout";
import { Home, Page404 } from "../pages";
import { DetailPage } from "../pages/detail-page";
import { MoviesPage } from "../pages/movies-page";
import { SearchPage } from "../pages/search-page";
import { SeriesPage } from "../pages/series-page";


export const RootRouter = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />

            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<DetailPage />} />
            <Route path="movies/search" element={<SearchPage cinemaSearchType='movies' />} />

            <Route path="series" element={<SeriesPage />} />
            <Route path="series/:seriesId" element={<DetailPage />} />
            <Route path="series/search" element={<SearchPage cinemaSearchType="series" />} />

            <Route path="*" element={<Page404 />} />
        </Route>
    )
)

