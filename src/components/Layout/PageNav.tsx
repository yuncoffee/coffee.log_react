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
							to={"/myPage/PageContents"}
							className={id === "PageContents" ? "show" : ""}
						>
							<Icon
								size="mid"
								type="text"
								iconName="ri-alarm-warning-fill"
								onClick={undefined}
							/>
							contents
						</Link>
					</li>
					<li className="page-nav__item">
						<Link
							to={"/myPage/PageProfile"}
							className={id === "PageProfile" ? "show" : ""}
						>
							<Icon
								size="mid"
								type="text"
								iconName="ri-radio-button-fill"
								onClick={undefined}
							/>
							profile
						</Link>
					</li>
				</ul>
			</article>
		</>
	)
}

export default PageNav
