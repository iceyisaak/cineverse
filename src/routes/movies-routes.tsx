import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { OverviewLayout } from "../layouts/overview-layout"
import { MoviesPage } from "../pages/movies-page"


export const MoviesRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<OverviewLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="/details" element={'MoviesDetail'} />
            <Route path="/genres" element={'MoviesGenres'} />
        </Route>
    )
)
