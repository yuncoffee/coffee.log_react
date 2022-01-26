import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import Icon from "../Element/Icon"

function PageNav() {
    const { id } = useParams()
    return (
        <>
            <article
                className="page-nav"
                s-position="fixed"
                s-top="40px"
                s-padding="4px"
            >
                <ul
                    className="page-nav__list"
                    s-display="flex"
                    s-direction="column"
                    s-gap="4px"
                >
                    <li className="page-nav__item">
                        <Link
                            to={"/assets/button"}
                            className={id === "button" ? "show" : ""}
                        >
                            <Icon
                                size="mid"
                                type="text"
                                iconName="ri-alarm-warning-fill"
                                onClick={undefined}
                            />
                            button
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to={"/assets/icon"}
                            className={id === "icon" ? "show" : ""}
                        >
                            <Icon
                                size="mid"
                                type="text"
                                iconName="ri-radio-button-fill"
                                onClick={undefined}
                            />
                            icon
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to={"/assets/input"}
                            className={id === "input" ? "show" : ""}
                        >
                            <Icon
                                size="mid"
                                type="text"
                                iconName="ri-star-fill"
                                onClick={undefined}
                            />
                            input
                        </Link>
                    </li>
                </ul>
            </article>
        </>
    )
}

export default PageNav
