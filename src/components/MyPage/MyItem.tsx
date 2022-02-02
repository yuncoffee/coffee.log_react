import React from "react"
import { useParams } from "react-router"
import PageProfile from "./PageProfile"
import PageContents from "./PageContents"

function MyItem() {
	const { id } = useParams()

	const lyTypes: string[] = [
		"block",
		"block-line",
		"box",
		"box-line",
		"round",
		"round-line",
		"box-ghost",
		"block-ghost",
		"round-ghost",
		"text",
	]
	const lyUses: string[] = ["cancel", "warning", "csp"]

	return (
		<>
			{id === "PageProfile" ? (
				<PageProfile />
			) : id === "PageContents" ? (
				<PageContents />
			) : (
				<section className="main-contents">아무것도 아님</section>
			)}
		</>
	)
}

export default MyItem
