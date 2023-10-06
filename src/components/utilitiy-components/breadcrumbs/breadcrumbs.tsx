import { Link, useLocation, useSearchParams } from "react-router-dom";
import { DataStatus } from "../../../types";

import style from './breadcrumbs.module.scss';

export function Breadcrumbs({ data }: DataStatus) {

    const location = useLocation()
    const [searchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()

    const splited_path = location.pathname.trim().split('/')
    const crumb_1 = splited_path[1]
    const crumb_2 = splited_path[2]

    const crumb_identifier = data && 'title' in data && data?.title || data && 'name' in data && data?.name
    const crumb_identifier_checked =
        crumb_identifier !== undefined &&
        crumb_identifier !== false &&
        crumb_identifier || crumb_2


    return (
        <article className={`${style.breadcrumbs} pt-16 pb-20`}>
            <div className="pl-6 text-5xl">
                <Link to={`/${crumb_1}`} className={`${style.crumb}`}>
                    {crumb_1}
                </Link>
                {!searchParamsString ?
                    <>
                        <span> / </span>
                        <Link to={`/${crumb_1}/${crumb_2}`} className={`${style.crumb} underline`}>
                            {crumb_identifier_checked}
                        </Link>
                    </>
                    :
                    <>
                        <span> / </span>
                        <span className={`${style.crumb}`}>
                            {crumb_identifier_checked} results
                        </span>
                        <span>: </span>
                        <span>"{searchParamsString}"</span>
                    </>
                }
            </div>
        </article>
    )
}
