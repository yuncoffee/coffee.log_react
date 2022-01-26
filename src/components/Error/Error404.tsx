import exp from "constants"
import React from "react"
import { Link } from "react-router-dom"
import Button from "../Element/Button"

function Error404() {
	return (
		<>
			<Link to={"/"}>
				<Button name={"홈으로 버튼"} size={"sm"} type={"block"} />
			</Link>
		</>
	)
}

export default Error404
