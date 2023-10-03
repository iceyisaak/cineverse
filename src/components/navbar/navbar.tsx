import { useState } from "react"
import { MenuToggler, NavMenu } from "./menus"
// import { SearchBar } from "./searchbar"

import { Link } from "react-router-dom"
import style from './navbar.module.scss'


export const Navbar = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const handleOpenNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    const handleNavLinkClicked = () => {
        setIsNavbarOpen(false)
    }


    return (
        <nav className={`${style.navbar}`}>
            <article>
                <Link to='/' className={`${style.navbar__logo} text-4xl p-5`}>
                    CineVerse
                </Link>
            </article>
            <div className="flex">
                {/* <SearchBar /> */}
                <MenuToggler
                    handleOpenNavbar={handleOpenNavbar}
                    isNavbarOpen={isNavbarOpen}
                />
                <NavMenu
                    handleNavLinkClicked={handleNavLinkClicked}
                    isNavbarOpen={isNavbarOpen}
                />
            </div>
        </nav>
    )
}

