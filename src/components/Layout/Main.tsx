import React from "react"
import { useParams } from "react-router"
import "../../styles/layout/_Main.scss"
import PageNav from "./PageNav"

import AssetsPage from "../AssetsPage/AssetsPage"

function Main() {
	const { id } = useParams()

	return (
		<>
			<div
				className="page-main"
				s-display="flex"
				s-gap="16px"
				s-position="relative"
				s-justify="space-between"
			>
				<PageNav />
				<main
					s-position="relative"
					s-left="64px"
					s-padding="16px"
					style={{ width: "calc(100% - 64px)" }}
				>
					{/* index 페이지일 경우 */}
					{id === undefined ? (
						<>
							<h1 s-text-align="center">
								환영! CloudStuido Compoenents Design Guide
							</h1>
							<h5 s-text-align="center">
								클라우드 스튜디오에 적용할 컴포넌트 디자인
								가이드에 대해 작성됩니다.
							</h5>
						</>
					) : (
						""
					)}
					<AssetsPage />
				</main>
			</div>
		</>
	)
}

export default Main
