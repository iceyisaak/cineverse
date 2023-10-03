import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer, Navbar } from "../../components"


export const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
