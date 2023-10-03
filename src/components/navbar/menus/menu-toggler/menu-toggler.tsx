import style from '../../navbar.module.scss'


type MenuToggler = {
    handleOpenNavbar?: () => void,
    isNavbarOpen: boolean
}

export const MenuToggler = ({ handleOpenNavbar, isNavbarOpen }: MenuToggler) => {


    return (
        <label className={`${style.menu__button} sm:flex`}>
            <input
                type="checkbox"
                className={`${style.menu__toggler}`}
                onClick={handleOpenNavbar}
                checked={isNavbarOpen}
                readOnly
            />
        </label>
    )
}
