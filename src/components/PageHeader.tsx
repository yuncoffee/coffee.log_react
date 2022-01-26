// eslint-disable
import { type } from "@testing-library/user-event/dist/type"
import React from "react"
import { Link } from "react-router-dom"
import "../styles/scss/_PageHeader.scss"

function PageHeader() {
	return (
		<>
			<header
				className={"page-header"}
				s-display="flex"
				s-align="center"
				s-justify="space-between"
				s-position="fixed"
				s-padding-x="16px"
				style={{ width: "calc(100% - 32px)", height: "40px" }}
			>
				<div>
					<Link to={"/"}>
						<figure>
							<img src="" alt="header의 이미지입니다" />
						</figure>
					</Link>
				</div>
				<ul s-display="flex" s-gap="16px">
					<li>ㅎㅇ</li>
					<li>ㅎㅇ2</li>
					<li>ㅎㅇ3</li>
				</ul>
			</header>
		</>
	)
}

export default PageHeader
