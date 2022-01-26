import React from "react"
import { useParams } from "react-router"
import AsstesButton from "./AssetsButton"
import AssetsIcon from "./AssetsIcon"
import AssetsInput from "./AssetsInput"

function AssetsItem() {
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
			{id === "button" ? (
				<AsstesButton lyTypes={lyTypes} lyUses={lyUses} />
			) : id === "icon" ? (
				<AssetsIcon lyTypes={lyTypes} lyUses={lyUses} />
			) : id === "input" ? (
				<AssetsInput />
			) : (
				<section className="main-contents">아무것도 아님</section>
			)}
		</>
	)
}

export default AssetsItem
