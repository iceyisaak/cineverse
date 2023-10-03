import { NavLink } from "react-router-dom"

import style from '../../navbar.module.scss'

type NavMenu = {
    handleNavLinkClicked: () => void,
    isNavbarOpen: boolean
}

export const NavMenu = ({ handleNavLinkClicked, isNavbarOpen }: NavMenu) => {
    return (
        <aside className={`${style.menu__aside} ${isNavbarOpen ? style.active : ''}`}>
            <ul className="flex items-center flex-col
                md:flex-row md:w-auto
            ">
                <li className="my-14 md:my-5 mx-8">
                    <NavLink to="/movies" className="text-4xl md:text-2xl" onClick={handleNavLinkClicked}>
                        Movies
                    </NavLink>
                </li>
                <li className="my-14 md:my-5 mx-8">
                    <NavLink to="/series" className="text-4xl md:text-2xl" onClick={handleNavLinkClicked}>
                        Series
                    </NavLink>
                </li>

            </ul>
        </aside>
    )
}
