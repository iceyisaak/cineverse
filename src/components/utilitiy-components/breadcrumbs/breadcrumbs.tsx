import { Link, useLocation } from "react-router-dom";
import { DataStatus } from "../../../types";

import style from './breadcrumbs.module.scss';

export function Breadcrumbs({ data }: DataStatus) {

    const location = useLocation()

    const cinema_identifier = data && 'title' in data && data?.title || data && 'name' in data && data?.name
    const cinema_identifier_checked =
        cinema_identifier !== undefined &&
        cinema_identifier !== false &&
        cinema_identifier

    const splited_path = location.pathname.trim().split('/')
    const cinema_path = splited_path[1]
    const cinema_link = splited_path[2]


    return (
        <article className={`${style.breadcrumbs} pt-16 pb-20`}>
            <div className="pl-6 text-5xl">
                <Link to={`/${cinema_path}`} className={`${style.crumb}`}>
                    {cinema_path}
                </Link>
                <span> / </span>
                <Link to={`/${cinema_path}/${cinema_link}`} className={`${style.crumb} underline`}>
                    {cinema_identifier_checked}
                </Link>
            </div>
        </article>
    )
}
