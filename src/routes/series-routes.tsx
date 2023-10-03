import { Route, Routes } from 'react-router-dom'
import { OverviewLayout } from '../layouts'
import { SeriesPage } from '../pages/series-page'


export const SeriesRoutes = () => {

    return (
        <Routes>
            <Route element={<OverviewLayout />}>
                <Route index element={<SeriesPage />} />
                <Route path="/details" element={'SeriesDetail'} />
                <Route path="/genres" element={'SeriesGenres'} />
            </Route>
        </Routes>
    )
}
